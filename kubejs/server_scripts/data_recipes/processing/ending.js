// 整合包：末地处理
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:glass_bottle → minecraft:dragon_breath
  // 配方：ccq_core:ending/dragon_breath
  event.json("ccq_core:recipe/ending/dragon_breath.json", {
    "type": "create_dragons_plus:ending",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      }
    ],
    "results": [
      {
        "id": "minecraft:dragon_breath"
      }
    ]
  })

  // 捆装纸板块 → ccq_core:elytra_unable
  // 配方：ccq_core:ending/elytra_un
  event.json("ccq_core:recipe/ending/elytra_un.json", {
    "type": "create_dragons_plus:ending",
    "ingredients": [
      {
        "item": "create:bound_cardboard_block"
      }
    ],
    "results": [
      {
        "id": "ccq_core:elytra_unable"
      }
    ]
  })

  // minecraft:netherrack → netherexp:pyroclast
  // 配方：ccq_core:ending/pyroclast
  event.json("ccq_core:recipe/ending/pyroclast.json", {
    "type": "create_dragons_plus:ending",
    "ingredients": [
      {
        "item": "minecraft:netherrack"
      }
    ],
    "results": [
      {
        "id": "netherexp:pyroclast"
      }
    ]
  })

  // minecraft:sand → netherexp:silt
  // 配方：ccq_core:ending/silt
  event.json("ccq_core:recipe/ending/silt.json", {
    "type": "create_dragons_plus:ending",
    "ingredients": [
      {
        "item": "minecraft:sand"
      }
    ],
    "results": [
      {
        "id": "netherexp:silt"
      }
    ]
  })
})
