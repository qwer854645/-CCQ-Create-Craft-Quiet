/**
 * Player heads + matching Touhou Little Maid garage kits (手办).
 * Player skin: CustomName "=>PlayerName" (SpecialMaidRenderEvent).
 * Note: TLM clears CustomName in garage-kit render; pack patches that away.
 * Tab: kubejs:ccq_player_heads
 */
const CCQ_PLAYER_NAMES = [
  null,
  'xiao_su_ban',
  'Eva0V0',
  'yushu_ouo',
  'Aztira',
  'baiyao_ovo',
  'Heinrich6941',
  'Yeffie__xnn',
  'YueNan_purple',
  'MiroxZ',
]

function ccqPlayerHead(name) {
  return name ? Item.playerHead(name) : Item.of('minecraft:player_head')
}

function ccqMaidGarageKit(name) {
  const player = name || 'Steve'
  const item = Item.of('touhou_little_maid:garage_kit')
  item.set('touhou_little_maid:maid_info', {
    id: 'touhou_little_maid:maid',
    model_id: 'touhou_little_maid:hakurei_reimu',
    CustomName: JSON.stringify({ text: `=>${player}` }),
    IsYsmModel: false,
  })
  return item
}

StartupEvents.registry('creative_mode_tab', (event) => {
  event
    .create('ccq_player_heads')
    .icon(() => Item.playerHead('xiao_su_ban'))
    .displayName(Text.translate('itemGroup.kubejs.ccq_player_heads'))
    .content(() => {
      const items = []
      for (const name of CCQ_PLAYER_NAMES) {
        items.push(ccqPlayerHead(name))
        if (Platform.isLoaded('touhou_little_maid')) {
          items.push(ccqMaidGarageKit(name))
        }
      }
      return items
    })
})
