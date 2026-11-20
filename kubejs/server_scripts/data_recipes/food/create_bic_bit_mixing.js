// 荷兰美食：搅拌
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 碾碎的下界疣 + 250mB minecraft:milk → 250mB 凝乳
  // 配方：create_bic_bit:mixing/curdled_milk
  event.json("create_bic_bit:recipe/mixing/curdled_milk.json", {
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "create_bic_bit:crushed_nether_wart"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:milk",
        "amount": 250
      }
    ],
    "results": [
      {
        "amount": 250,
        "id": "create_bic_bit:curdled_milk"
      }
    ]
  })

  // 碾碎的葵花籽 + 250mB minecraft:water → 250mB 炸油
  // 配方：create_bic_bit:mixing/frying_oil
  event.json("create_bic_bit:recipe/mixing/frying_oil.json", {
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "create_bic_bit:crushed_sunflower_seeds"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 250
      }
    ],
    "results": [
      {
        "amount": 250,
        "id": "create_bic_bit:frying_oil"
      }
    ]
  })

  // minecraft:sugar + 碾碎的下界疣 + #create_bic_bit:ketchup_ingredient + #create_bic_bit:ketchup_ingredient + 250mB minecraft:water → 250mB 番茄酱
  // 配方：create_bic_bit:mixing/ketchup
  event.json("create_bic_bit:recipe/mixing/ketchup.json", {
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "create_bic_bit:crushed_nether_wart"
      },
      {
        "tag": "create_bic_bit:ketchup_ingredient"
      },
      {
        "tag": "create_bic_bit:ketchup_ingredient"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 250
      }
    ],
    "results": [
      {
        "amount": 250,
        "id": "create_bic_bit:ketchup"
      }
    ]
  })

  // minecraft:egg + minecraft:egg + minecraft:egg + 250mB minecraft:milk → 250mB 蛋黄酱
  // 配方：create_bic_bit:mixing/mayonnaise
  event.json("create_bic_bit:recipe/mixing/mayonnaise.json", {
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "minecraft:egg"
      },
      {
        "item": "minecraft:egg"
      },
      {
        "item": "minecraft:egg"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:milk",
        "amount": 250
      }
    ],
    "results": [
      {
        "amount": 250,
        "id": "create_bic_bit:mayonnaise"
      }
    ]
  })

  // #create_bic_bit:raw_meat_delight + 小麦面粉 + 125mB minecraft:milk → 生荷兰小炸球
  // 配方：create_bic_bit:mixing/raw_bitterballen
  event.json("create_bic_bit:recipe/mixing/raw_bitterballen.json", {
    "type": "create:mixing",
    "ingredients": [
      [
        {
          "tag": "create_bic_bit:raw_meat_delight"
        }
      ],
      {
        "item": "create:wheat_flour"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:milk",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:raw_bitterballen"
      }
    ]
  })

  // #create_bic_bit:raw_meat_delight + 小麦面粉 + 小麦面粉 + 250mB minecraft:milk → 生荷兰炸肉卷
  // 配方：create_bic_bit:mixing/raw_kroket
  event.json("create_bic_bit:recipe/mixing/raw_kroket.json", {
    "type": "create:mixing",
    "ingredients": [
      {
        "tag": "create_bic_bit:raw_meat_delight"
      },
      {
        "item": "create:wheat_flour"
      },
      {
        "item": "create:wheat_flour"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:milk",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:raw_kroket"
      }
    ]
  })
})
