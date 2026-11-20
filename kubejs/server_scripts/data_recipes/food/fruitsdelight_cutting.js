// 水果乐事：切割
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 哈密瓜 → 9个 哈密瓜片
  // 配方：fruitsdelight:cutting/hamimelon_slice
  event.json("fruitsdelight:recipe/cutting/hamimelon_slice.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:cutting",
    "ingredients": [
      {
        "item": "fruitsdelight:hamimelon"
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hamimelon_slice",
        "count": 9
      }
    ]
  })

  // 黄柠檬 → 4个 黄柠檬片
  // 配方：fruitsdelight:cutting/lemon_slice
  event.json("fruitsdelight:recipe/cutting/lemon_slice.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:cutting",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon"
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lemon_slice",
        "count": 4
      }
    ]
  })

  // 橘子 → 4个 橘子片
  // 配方：fruitsdelight:cutting/orange_slice
  event.json("fruitsdelight:recipe/cutting/orange_slice.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:cutting",
    "ingredients": [
      {
        "item": "fruitsdelight:orange"
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:orange_slice",
        "count": 4
      }
    ]
  })

  // 菠萝 → 8个 菠萝切片
  // 配方：fruitsdelight:cutting/pineapple_slice
  event.json("fruitsdelight:recipe/cutting/pineapple_slice.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:cutting",
    "ingredients": [
      {
        "item": "fruitsdelight:pineapple"
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pineapple_slice",
        "count": 8
      }
    ]
  })
})
