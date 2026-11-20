// 糖果工艺：分液
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // create_confectionery:black_chocolate_bucket → minecraft:bucket + 1000mB create_confectionery:black_chocolate
  // 配方：create_confectionery:black_chocolate_emptying
  event.json("create_confectionery:recipe/black_chocolate_emptying.json", {
    "group": "create_confectionery",
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "create_confectionery:black_chocolate_bucket"
      }
    ],
    "results": [
      {
        "id": "minecraft:bucket"
      },
      {
        "amount": 1000,
        "id": "create_confectionery:black_chocolate"
      }
    ]
  })

  // create_confectionery:caramel_bucket → minecraft:bucket + 1000mB create_confectionery:caramel
  // 配方：create_confectionery:caramel_emptying
  event.json("create_confectionery:recipe/caramel_emptying.json", {
    "group": "create_confectionery",
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "create_confectionery:caramel_bucket"
      }
    ],
    "results": [
      {
        "id": "minecraft:bucket"
      },
      {
        "amount": 1000,
        "id": "create_confectionery:caramel"
      }
    ]
  })

  // create_confectionery:hot_chocolate_bottle → minecraft:glass_bottle + 250mB create_confectionery:hot_chocolate
  // 配方：create_confectionery:hot_chocolate_drain
  event.json("create_confectionery:recipe/hot_chocolate_drain.json", {
    "group": "create_confectionery",
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "create_confectionery:hot_chocolate_bottle"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "create_confectionery:hot_chocolate"
      }
    ]
  })

  // create_confectionery:ruby_chocolate_bucket → minecraft:bucket + 1000mB create_confectionery:ruby_chocolate
  // 配方：create_confectionery:ruby_chocolate_emptying
  event.json("create_confectionery:recipe/ruby_chocolate_emptying.json", {
    "group": "create_confectionery",
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "create_confectionery:ruby_chocolate_bucket"
      }
    ],
    "results": [
      {
        "id": "minecraft:bucket"
      },
      {
        "amount": 1000,
        "id": "create_confectionery:ruby_chocolate"
      }
    ]
  })

  // create_confectionery:white_chocolate_bucket → minecraft:bucket + 1000mB create_confectionery:white_chocolate
  // 配方：create_confectionery:white_chocolate_emptying
  event.json("create_confectionery:recipe/white_chocolate_emptying.json", {
    "group": "create_confectionery",
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "create_confectionery:white_chocolate_bucket"
      }
    ],
    "results": [
      {
        "id": "minecraft:bucket"
      },
      {
        "amount": 1000,
        "id": "create_confectionery:white_chocolate"
      }
    ]
  })
})
