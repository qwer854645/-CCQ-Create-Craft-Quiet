/**
 * 迷迭香信物：物品任务配了 name=yushu_ouo。
 */
const YUSHU_NAME = 'yushu_ouo'

function profileName(stack) {
  try {
    const p = stack.get('minecraft:profile')
    if (!p) return null
    if (typeof p.name === 'function') {
      const opt = p.name()
      if (opt == null) return null
      if (typeof opt === 'string') return opt
      if (typeof opt.orElse === 'function') return opt.orElse(null)
      if (typeof opt.isPresent === 'function' && opt.isPresent()) return opt.get()
    }
    if (typeof p.name === 'string') return p.name
    if (p.name != null) return String(p.name)
  } catch (e) {}
  return null
}

function isPlayerHead(stack) {
  if (!stack || stack.isEmpty()) return false
  const id = stack.id || (stack.getId && stack.getId())
  return String(id) === 'minecraft:player_head'
}

function normalizeYushuHead(stack) {
  if (!isPlayerHead(stack)) return false
  const name = profileName(stack)
  if (!name || String(name).toLowerCase() !== YUSHU_NAME) return false
  try {
    stack.set('minecraft:profile', { name: YUSHU_NAME })
    return true
  } catch (e) {
    return false
  }
}

function normalizeInventory(player) {
  const inv = player.inventory
  if (!inv) return
  const slots = inv.slots != null ? inv.slots : inv.getSlots()
  let changed = false
  for (let i = 0; i < slots; i++) {
    if (normalizeYushuHead(inv.getStackInSlot(i))) changed = true
  }
  if (changed && typeof inv.setChanged === 'function') inv.setChanged()
}

PlayerEvents.inventoryChanged((event) => {
  normalizeYushuHead(event.item)
})

PlayerEvents.tick((event) => {
  const player = event.player
  if (!player || (player.tickCount % 20) !== 0) return
  normalizeInventory(player)
})
