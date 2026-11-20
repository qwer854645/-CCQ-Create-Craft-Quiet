// 整合包：真空处理
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // ccq_core:crushing_raw_nether_ore → minecraft:ancient_debris
  // 配方：ccq_core:vacuumizing/ancient_debris
  event.json("ccq_core:recipe/vacuumizing/ancient_debris.json", {
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      {
        "item": "ccq_core:crushing_raw_nether_ore"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "minecraft:ancient_debris"
      }
    ],
    "processing_time": 600
  })

  // 石灰岩 → 石灰石
  // 配方：ccq_core:vacuumizing/limestone
  event.json("ccq_core:recipe/vacuumizing/limestone.json", {
    "type": "vintageimprovements:vacuumizing",
    "ingredients": [
      {
        "item": "create:limestone"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "quark:limestone"
      }
    ],
    "processing_time": 600
  })
})
