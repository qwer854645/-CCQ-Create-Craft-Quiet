/**
 * TACZ creative tabs hardcode icons from the default gunpack (glock_17, ak47, ...).
 * CCQ replaces that pack, so icons break - force a vanilla icon on every TACZ tab.
 * IDs match ModCreativeTabs.register(...) in tacz 1.1.8-hotfix-r4.
 */
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
