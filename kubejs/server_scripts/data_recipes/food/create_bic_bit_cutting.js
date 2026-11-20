// 荷兰美食：切割
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:nether_wart → 碾碎的下界疣
  // 配方：create_bic_bit:compat/farmersdelight/crushed_nether_wart
  event.json("create_bic_bit:recipe/compat/farmersdelight/crushed_nether_wart.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "farmersdelight"
      }
    ],
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "minecraft:nether_wart"
      }
    ],
    "result": [
      {
        "item": {
          "id": "create_bic_bit:crushed_nether_wart",
          "count": 1
        }
      }
    ],
    "tool": {
      "tag": "c:tools/knife"
    }
  })
})
