/**
 * Yeffie__xnn：海洋群系溺亡 20 次。
 */
const OCEAN_DROWN_TASK = '093E2550C1AD44DC'
const DamageTypes = Java.loadClass('net.minecraft.world.damagesource.DamageTypes')

FTBQuestsEvents.customTask(OCEAN_DROWN_TASK, (event) => {
  event.setMaxProgress(20)
})

function oqIsPlayer(entity) {
  if (!entity) return false
  try {
    if (entity.isPlayer && entity.isPlayer()) return true
  } catch (e) {}
  try {
    return String(entity.type) === 'minecraft:player'
  } catch (e) {}
  return false
}

function oqIsDrown(source) {
  if (!source) return false
  try {
    if (source.is(DamageTypes.DROWN)) return true
  } catch (e) {}
  try {
    return String(source.type || source.getMsgId() || source)
      .toLowerCase()
      .includes('drown')
  } catch (e) {}
  return false
}

function oqBiomeId(entity) {
  try {
    const holder = entity.level.getBiome(entity.blockPosition())
    const key = holder.unwrapKey()
    if (key && key.isPresent && key.isPresent()) {
      return String(key.get().location())
    }
  } catch (e) {}
  try {
    if (entity.block && entity.block.biomeId != null) {
      return String(entity.block.biomeId)
    }
  } catch (e) {}
  return ''
}

function oqIsOcean(id) {
  return !!(id && String(id).toLowerCase().includes('ocean'))
}

function oqAddProgress(player) {
  const ftbData = player.data.ftbquests.getData()
  const questFile = ftbData.getFile()
  const numericId = questFile.getID(OCEAN_DROWN_TASK)
  const taskObj = questFile.getTask(numericId)
  if (!taskObj) return
  ftbData.addProgress(taskObj, 1)
}

EntityEvents.death((event) => {
  const dead = event.entity
  if (!oqIsPlayer(dead)) return
  if (!oqIsDrown(event.source)) return
  if (!oqIsOcean(oqBiomeId(dead))) return
  try {
    oqAddProgress(dead)
  } catch (err) {
    console.error('[ocean_drown_quest] ' + err)
  }
})
