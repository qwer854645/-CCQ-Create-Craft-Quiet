// 整合包：雕刻
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 琥珀金板 → ccq_core:totem_unable
  // 配方：ccq_core:engraving/totem
  event.json("ccq_core:recipe/engraving/totem.json", {
    "type": "northstar:engraving",
    "ingredients": [
      {
        "item": "createaddition:electrum_sheet"
      }
    ],
    "processing_time": 200,
    "results": [
      {
        "id": "ccq_core:totem_unable"
      }
    ]
  })

  // ccq_core:crushing_raw_nether_ore → 钒锭
  // 配方：ccq_core:engraving/vanadium
  event.json("ccq_core:recipe/engraving/vanadium.json", {
    "type": "northstar:engraving",
    "ingredients": [
      {
        "item": "ccq_core:crushing_raw_nether_ore"
      }
    ],
    "processing_time": 100,
    "results": [
      {
        "id": "vintageimprovements:vanadium_ingot"
      }
    ]
  })
})
