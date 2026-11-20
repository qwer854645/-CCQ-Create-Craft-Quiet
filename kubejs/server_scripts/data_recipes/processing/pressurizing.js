// 整合包：加压
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:dirt + minecraft:clay → 2个 页岩
  // 配方：ccq_core:pressurizing/dirt_and_clay_to_shale
  event.json("ccq_core:recipe/pressurizing/dirt_and_clay_to_shale.json", {
    "type": "vintageimprovements:pressurizing",
    "secondary_fluid_input": {
      "id": "minecraft:lava",
      "amount": 500
    },
    "ingredients": [
      {
        "count": 1,
        "item": "minecraft:dirt"
      },
      {
        "count": 1,
        "item": "minecraft:clay"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "quark:shale"
      }
    ],
    "processing_time": 1000
  })
})
