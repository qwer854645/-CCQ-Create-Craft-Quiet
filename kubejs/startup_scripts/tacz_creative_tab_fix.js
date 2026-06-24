/** @type {string[]} */
const TACZ_CREATIVE_TABS = [
  'tacz:other',
  'tacz:ammo',
  'tacz:scope',
  'tacz:muzzle',
  'tacz:stock',
  'tacz:grip',
  'tacz:extended_mag',
  'tacz:laser',
  'tacz:pistol',
  'tacz:sniper',
  'tacz:rifle',
  'tacz:shotgun',
  'tacz:smg',
  'tacz:rpg',
  'tacz:mg',
]

TACZ_CREATIVE_TABS.forEach((tabId) => {
  StartupEvents.modifyCreativeTab(tabId, (event) => {
    event.icon = 'minecraft:iron_ingot'
  })
})
