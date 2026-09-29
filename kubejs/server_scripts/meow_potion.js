/**
 * 喵喵喵效果：走路 / 跳跃 / 放方块 / 挖方块播猫叫；聊天（非指令）末尾加「喵~」
 */
const MEOW_EFFECT = 'ccq_core:meow'
const MEOW_SOUND = 'minecraft:entity.cat.ambient'

function playMeow(player) {
  if (!player || !player.isAlive || !player.isAlive()) return
  const pitch = 0.9 + Math.random() * 0.3
  player.server.runCommandSilent(
    `execute as ${player.username} at @s run playsound ${MEOW_SOUND} player @a ~ ~ ~ 0.7 ${pitch.toFixed(2)}`
  )
}

function hasMeow(player) {
  return !!(player && player.hasEffect && player.hasEffect(MEOW_EFFECT))
}

function isOnGround(player) {
  try {
    return typeof player.onGround === 'function' ? !!player.onGround() : !!player.onGround
  } catch (e) {
    return true
  }
}

// 走路：每 8 tick 对比水平位移；跳跃：离地且 Y 上升
const lastPos = {}
const lastGround = {}

PlayerEvents.tick((event) => {
  const player = event.player
  if (!hasMeow(player)) return

  const id = String(player.uuid)
  const x = player.x
  const y = player.y
  const z = player.z
  const grounded = isOnGround(player)
  const wasGrounded = lastGround[id]
  lastGround[id] = grounded

  // 跳跃：上一 tick 在地面，这一 tick 离地且向上
  if (wasGrounded === true && !grounded) {
    const prev = lastPos[id]
    if (prev && y - prev.y > 0.05) {
      playMeow(player)
    }
  }

  const tick = player.tickCount ?? player.age ?? 0
  if (tick % 8 === 0) {
    const prev = lastPos[id]
    if (prev && grounded) {
      const dx = x - prev.x
      const dz = z - prev.z
      if (dx * dx + dz * dz >= 0.04) {
        playMeow(player)
      }
    }
    lastPos[id] = { x: x, y: y, z: z }
  } else if (!lastPos[id]) {
    lastPos[id] = { x: x, y: y, z: z }
  } else {
    // 每 tick 更新 Y，方便跳跃判定；水平坐标仍按 8 tick 窗口比
    lastPos[id].y = y
  }
})

PlayerEvents.loggedOut((event) => {
  try {
    const id = String(event.player.uuid)
    delete lastPos[id]
    delete lastGround[id]
  } catch (e) {}
})

BlockEvents.placed((event) => {
  const player = event.player || event.entity
  if (!hasMeow(player)) return
  playMeow(player)
})

BlockEvents.broken((event) => {
  const player = event.player || event.entity
  if (!hasMeow(player)) return
  playMeow(player)
})

PlayerEvents.chat((event) => {
  if (!hasMeow(event.player)) return

  const raw = String(event.message || '')
  if (!raw || raw.startsWith('/')) return
  if (raw.endsWith('喵~')) return

  event.setComponent(Text.of(raw + '喵~'))
})
