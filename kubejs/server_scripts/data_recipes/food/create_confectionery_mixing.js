// 糖果工艺：搅拌
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:sugar + create_confectionery:cocoa_butter + minecraft:cocoa_beans + minecraft:cocoa_beans + #c:milk → 250mB create_confectionery:black_chocolate
  // 配方：create_confectionery:black_chocolate_recipe
  event.json("create_confectionery:recipe/black_chocolate_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "create_confectionery:cocoa_butter"
      },
      {
        "item": "minecraft:cocoa_beans"
      },
      {
        "item": "minecraft:cocoa_beans"
      },
      {
        "type": "neoforge:tag",
        "tag": "c:milk",
        "amount": 250
      }
    ],
    "results": [
      {
        "amount": 250,
        "id": "create_confectionery:black_chocolate"
      }
    ]
  })

  // minecraft:sugar + minecraft:sugar + minecraft:slime_ball + 250mB create:potion → 4个 create_confectionery:candy_cane
  // 配方：create_confectionery:candy_cane_recipe
  event.json("create_confectionery:recipe/candy_cane_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:potion",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:candy_cane",
        "count": 4
      }
    ]
  })

  // minecraft:sugar + minecraft:sugar + 250mB minecraft:water → 250mB create_confectionery:caramel
  // 配方：create_confectionery:caramel_recipe
  event.json("create_confectionery:recipe/caramel_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:sugar"
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
        "id": "create_confectionery:caramel"
      }
    ]
  })

  // minecraft:sugar + 余烬面粉 + 小麦面粉 + #c:honey → create_confectionery:gingerdough
  // 配方：create_confectionery:gingerdough_recipe
  event.json("create_confectionery:recipe/gingerdough_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "create:cinder_flour"
      },
      {
        "item": "create:wheat_flour"
      },
      {
        "type": "neoforge:tag",
        "tag": "c:honey",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:gingerdough"
      }
    ]
  })

  // minecraft:sugar + minecraft:sugar + 小麦面粉 + #c:honey → 4个 create_confectionery:honey_candy
  // 配方：create_confectionery:honey_candy_recipe
  event.json("create_confectionery:recipe/honey_candy_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "create:wheat_flour"
      },
      {
        "type": "neoforge:tag",
        "tag": "c:honey",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:honey_candy",
        "count": 4
      }
    ]
  })

  // minecraft:sugar + create_confectionery:cocoa_powder + create_confectionery:cocoa_powder + #c:milk → 250mB create_confectionery:hot_chocolate
  // 配方：create_confectionery:hot_chocolate_recipe
  event.json("create_confectionery:recipe/hot_chocolate_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "create_confectionery:cocoa_powder"
      },
      {
        "item": "create_confectionery:cocoa_powder"
      },
      {
        "type": "neoforge:tag",
        "tag": "c:milk",
        "amount": 250
      }
    ],
    "results": [
      {
        "amount": 250,
        "id": "create_confectionery:hot_chocolate"
      }
    ]
  })

  // minecraft:sugar + minecraft:sugar + minecraft:slime_ball + 250mB minecraft:water → 8个 create_confectionery:marshmallow
  // 配方：create_confectionery:marshmallow_recipe
  event.json("create_confectionery:recipe/marshmallow_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:marshmallow",
        "count": 8
      }
    ]
  })

  // minecraft:sugar + minecraft:dragon_breath + minecraft:cocoa_beans + #c:milk → 250mB create_confectionery:ruby_chocolate
  // 配方：create_confectionery:ruby_chocolate_recipe
  event.json("create_confectionery:recipe/ruby_chocolate_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:dragon_breath"
      },
      {
        "item": "minecraft:cocoa_beans"
      },
      {
        "type": "neoforge:tag",
        "tag": "c:milk",
        "amount": 250
      }
    ],
    "results": [
      {
        "amount": 250,
        "id": "create_confectionery:ruby_chocolate"
      }
    ]
  })

  // minecraft:sugar + create_confectionery:cocoa_butter + #c:milk → 250mB create_confectionery:white_chocolate
  // 配方：create_confectionery:white_chocolate_recipe
  event.json("create_confectionery:recipe/white_chocolate_recipe.json", {
    "group": "create_confectionery",
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "create_confectionery:cocoa_butter"
      },
      {
        "type": "neoforge:tag",
        "tag": "c:milk",
        "amount": 250
      }
    ],
    "results": [
      {
        "amount": 250,
        "id": "create_confectionery:white_chocolate"
      }
    ]
  })
})
