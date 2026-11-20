// 整合包：搅拌
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:lapis_lazuli + 100mB minecraft:water → 100mB ccq_core:cooling_liquid
  // 配方：ccq_core:mixing/cooling_liquid
  event.json("ccq_core:recipe/mixing/cooling_liquid.json", {
    "type": "create:mixing",
    "heat_requirement": "frozen",
    "ingredients": [
      {
        "item": "minecraft:lapis_lazuli"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 100,
        "id": "ccq_core:cooling_liquid"
      }
    ]
  })

  // 火星石 + 100mB minecraft:water → 火星石 + 火星石
  // 配方：ccq_core:mixing/mars_stone_r
  event.json("ccq_core:recipe/mixing/mars_stone_r.json", {
    "type": "create:mixing",
    "heat_requirement": "frozen",
    "ingredients": [
      {
        "item": "northstar:mars_stone"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "id": "northstar:mars_stone"
      },
      {
        "id": "northstar:mars_stone"
      }
    ]
  })

  // 水星石 + 100mB minecraft:water → 水星石 + 水星石
  // 配方：ccq_core:mixing/mercury_stone_r
  event.json("ccq_core:recipe/mixing/mercury_stone_r.json", {
    "type": "create:mixing",
    "heat_requirement": "frozen",
    "ingredients": [
      {
        "item": "northstar:mercury_stone"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "id": "northstar:mercury_stone"
      },
      {
        "id": "northstar:mercury_stone"
      }
    ]
  })

  // 月岩 + 100mB minecraft:water → 月岩 + 月岩
  // 配方：ccq_core:mixing/moon_stone_r
  event.json("ccq_core:recipe/mixing/moon_stone_r.json", {
    "type": "create:mixing",
    "heat_requirement": "frozen",
    "ingredients": [
      {
        "item": "northstar:moon_stone"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "id": "northstar:moon_stone"
      },
      {
        "id": "northstar:moon_stone"
      }
    ]
  })

  // 金星石 + 100mB minecraft:water → 金星石 + 金星石
  // 配方：ccq_core:mixing/venus_stone_r
  event.json("ccq_core:recipe/mixing/venus_stone_r.json", {
    "type": "create:mixing",
    "heat_requirement": "frozen",
    "ingredients": [
      {
        "item": "northstar:venus_stone"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "id": "northstar:venus_stone"
      },
      {
        "id": "northstar:venus_stone"
      }
    ]
  })
})
