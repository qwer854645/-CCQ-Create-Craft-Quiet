// Kianakaslana_MC 冠名任务：成功打开宝库、获得村庄英雄。
const KQ_VAULT_TASK = '3B473AC454FAC7F4'
const KQ_HERO_TASK = '3C29635E1C82C16E'
const KQItems = Java.loadClass('net.minecraft.world.item.Items')
const KQEffects = Java.loadClass('net.minecraft.world.effect.MobEffects')

FTBQuestsEvents.customTask(KQ_VAULT_TASK, event => event.setMaxProgress(1))
FTBQuestsEvents.customTask(KQ_HERO_TASK, event => event.setMaxProgress(1))

function kqComplete(player, id) {
  const data = player.data.ftbquests.getData()
  if (!data) return
  const file = data.getFile()
  const task = file.getTask(file.getID(id))
  if (task && data.getProgress(task) < 1) data.addProgress(task, 1)
}

function kqVaultUses(player) {
  const stats = player.getStats()
  return stats.getItemsUsed(KQItems.TRIAL_KEY) +
    stats.getItemsUsed(KQItems.OMINOUS_TRIAL_KEY)
}

// 该任务可以重复领取，登录时建立基线，避免历史统计自动完成下一轮。
PlayerEvents.loggedIn(event => {
  event.player.persistentData.putInt('ccq_kiana_vault_uses', kqVaultUses(event.player))
})

// 每秒检查一次。原版只有成功解锁宝库才增加钥匙使用统计，
// 普通和不祥宝库均计入；失败的交互、仅持有钥匙均不算。
// 只在统计增加时提交一次，不用历史记录反复完成任务。
PlayerEvents.tick(event => {
  const player = event.player
  if (player.tickCount % 20 !== 0) return
  const uses = kqVaultUses(player)
  const data = player.persistentData
  if (!data.contains('ccq_kiana_vault_uses')) {
    data.putInt('ccq_kiana_vault_uses', uses)
    return
  }
  const previous = data.getInt('ccq_kiana_vault_uses')
  data.putInt('ccq_kiana_vault_uses', uses)
  if (uses > previous) kqComplete(player, KQ_VAULT_TASK)
})

// 实际获得村庄英雄效果时触发，后续再次赢得袭击也能完成下一轮。
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.MobEffectEvent$Added', event => {
  const player = event.entity
  if (!player.isPlayer() || player.level.isClientSide()) return
  if (event.effectInstance.getEffect().equals(KQEffects.HERO_OF_THE_VILLAGE)) {
    kqComplete(player, KQ_HERO_TASK)
  }
})
