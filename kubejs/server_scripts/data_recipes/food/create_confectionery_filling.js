// 糖果工艺：注液
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 巧克力棒 + 250mB create_confectionery:black_chocolate → create_confectionery:black_chocolate_candy_1
  // 配方：create_confectionery:black_chocolate_candy_1_recipe
  event.json("create_confectionery:recipe/black_chocolate_candy_1_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create:bar_of_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:black_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:black_chocolate_candy_1"
      }
    ]
  })

  // create_confectionery:bar_of_white_chocolate + 250mB create_confectionery:black_chocolate → create_confectionery:black_chocolate_candy_2
  // 配方：create_confectionery:black_chocolate_candy_2_recipe
  event.json("create_confectionery:recipe/black_chocolate_candy_2_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_white_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:black_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:black_chocolate_candy_2"
      }
    ]
  })

  // create_confectionery:bar_of_ruby_chocolate + 250mB create_confectionery:black_chocolate → create_confectionery:black_chocolate_candy_3
  // 配方：create_confectionery:black_chocolate_candy_3_recipe
  event.json("create_confectionery:recipe/black_chocolate_candy_3_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_ruby_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:black_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:black_chocolate_candy_3"
      }
    ]
  })

  // create_confectionery:bar_of_caramel + 250mB create_confectionery:black_chocolate → create_confectionery:black_chocolate_candy
  // 配方：create_confectionery:black_chocolate_candy_recipe
  event.json("create_confectionery:recipe/black_chocolate_candy_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_caramel"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:black_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:black_chocolate_candy"
      }
    ]
  })

  // minecraft:sweet_berries + 250mB create_confectionery:black_chocolate → create_confectionery:black_chocolate_glazed_berries
  // 配方：create_confectionery:black_chocolate_glazed_berries_recipe
  event.json("create_confectionery:recipe/black_chocolate_glazed_berries_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:sweet_berries"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:black_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:black_chocolate_glazed_berries"
      }
    ]
  })

  // create_confectionery:marshmallow + 250mB create_confectionery:black_chocolate → create_confectionery:black_chocolate_glazed_marshmallow
  // 配方：create_confectionery:black_chocolate_glazed_marshmallow_recipe
  event.json("create_confectionery:recipe/black_chocolate_glazed_marshmallow_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:marshmallow"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:black_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:black_chocolate_glazed_marshmallow"
      }
    ]
  })

  // minecraft:sweet_berries + 250mB create_confectionery:caramel → create_confectionery:caramel_glazed_berries
  // 配方：create_confectionery:caramel_glazed_berries_recipe
  event.json("create_confectionery:recipe/caramel_glazed_berries_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:sweet_berries"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:caramel",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:caramel_glazed_berries"
      }
    ]
  })

  // create_confectionery:bar_of_white_chocolate + 250mB 巧克力 → create_confectionery:chocolate_candy_1
  // 配方：create_confectionery:chocolate_candy_1_recipe
  event.json("create_confectionery:recipe/chocolate_candy_1_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_white_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:chocolate_candy_1"
      }
    ]
  })

  // create_confectionery:bar_of_black_chocolate + 250mB 巧克力 → create_confectionery:chocolate_candy_2
  // 配方：create_confectionery:chocolate_candy_2_recipe
  event.json("create_confectionery:recipe/chocolate_candy_2_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_black_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:chocolate_candy_2"
      }
    ]
  })

  // create_confectionery:bar_of_ruby_chocolate + 250mB 巧克力 → create_confectionery:chocolate_candy_3
  // 配方：create_confectionery:chocolate_candy_3_recipe
  event.json("create_confectionery:recipe/chocolate_candy_3_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_ruby_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:chocolate_candy_3"
      }
    ]
  })

  // create_confectionery:bar_of_caramel + 250mB 巧克力 → create_confectionery:chocolate_candy
  // 配方：create_confectionery:chocolate_candy_recipe
  event.json("create_confectionery:recipe/chocolate_candy_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_caramel"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:chocolate_candy"
      }
    ]
  })

  // create_confectionery:marshmallow + 250mB 巧克力 → create_confectionery:chocolate_glazed_marshmallow
  // 配方：create_confectionery:chocolate_glazed_marshmallow_recipe
  event.json("create_confectionery:recipe/chocolate_glazed_marshmallow_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:marshmallow"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:chocolate_glazed_marshmallow"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB create_confectionery:hot_chocolate → create_confectionery:hot_chocolate_bottle
  // 配方：create_confectionery:hot_chocolate_bottle_recipe
  event.json("create_confectionery:recipe/hot_chocolate_bottle_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:hot_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:hot_chocolate_bottle"
      }
    ]
  })

  // 巧克力棒 + 250mB create_confectionery:ruby_chocolate → create_confectionery:ruby_chocolate_candy_1
  // 配方：create_confectionery:ruby_chocolate_candy_1_recipe
  event.json("create_confectionery:recipe/ruby_chocolate_candy_1_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create:bar_of_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:ruby_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:ruby_chocolate_candy_1"
      }
    ]
  })

  // create_confectionery:bar_of_white_chocolate + 250mB create_confectionery:ruby_chocolate → create_confectionery:ruby_chocolate_candy_2
  // 配方：create_confectionery:ruby_chocolate_candy_2_recipe
  event.json("create_confectionery:recipe/ruby_chocolate_candy_2_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_white_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:ruby_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:ruby_chocolate_candy_2"
      }
    ]
  })

  // create_confectionery:bar_of_black_chocolate + 250mB create_confectionery:ruby_chocolate → create_confectionery:ruby_chocolate_candy_3
  // 配方：create_confectionery:ruby_chocolate_candy_3_recipe
  event.json("create_confectionery:recipe/ruby_chocolate_candy_3_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_black_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:ruby_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:ruby_chocolate_candy_3"
      }
    ]
  })

  // create_confectionery:bar_of_caramel + 250mB create_confectionery:ruby_chocolate → create_confectionery:ruby_chocolate_candy
  // 配方：create_confectionery:ruby_chocolate_candy_recipe
  event.json("create_confectionery:recipe/ruby_chocolate_candy_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_caramel"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:ruby_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:ruby_chocolate_candy"
      }
    ]
  })

  // minecraft:sweet_berries + 250mB create_confectionery:ruby_chocolate → create_confectionery:ruby_chocolate_glazed_berries
  // 配方：create_confectionery:ruby_chocolate_glazed_berries_recipe
  event.json("create_confectionery:recipe/ruby_chocolate_glazed_berries_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:sweet_berries"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:ruby_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:ruby_chocolate_glazed_berries"
      }
    ]
  })

  // create_confectionery:marshmallow + 250mB create_confectionery:ruby_chocolate → create_confectionery:ruby_chocolate_glazed_marshmallow
  // 配方：create_confectionery:ruby_chocolate_glazed_marshmallow_recipe
  event.json("create_confectionery:recipe/ruby_chocolate_glazed_marshmallow_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:marshmallow"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:ruby_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:ruby_chocolate_glazed_marshmallow"
      }
    ]
  })

  // 巧克力棒 + 250mB create_confectionery:white_chocolate → create_confectionery:white_chocolate_candy_1
  // 配方：create_confectionery:white_chocolate_candy_1_recipe
  event.json("create_confectionery:recipe/white_chocolate_candy_1_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create:bar_of_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:white_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:white_chocolate_candy_1"
      }
    ]
  })

  // create_confectionery:bar_of_black_chocolate + 250mB create_confectionery:white_chocolate → create_confectionery:white_chocolate_candy_2
  // 配方：create_confectionery:white_chocolate_candy_2_recipe
  event.json("create_confectionery:recipe/white_chocolate_candy_2_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_black_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:white_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:white_chocolate_candy_2"
      }
    ]
  })

  // create_confectionery:bar_of_ruby_chocolate + 250mB create_confectionery:white_chocolate → create_confectionery:white_chocolate_candy_3
  // 配方：create_confectionery:white_chocolate_candy_3_recipe
  event.json("create_confectionery:recipe/white_chocolate_candy_3_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_ruby_chocolate"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:white_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:white_chocolate_candy_3"
      }
    ]
  })

  // create_confectionery:bar_of_caramel + 250mB create_confectionery:white_chocolate → create_confectionery:white_chocolate_candy
  // 配方：create_confectionery:white_chocolate_candy_recipe
  event.json("create_confectionery:recipe/white_chocolate_candy_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:bar_of_caramel"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:white_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:white_chocolate_candy"
      }
    ]
  })

  // minecraft:sweet_berries + 250mB create_confectionery:white_chocolate → create_confectionery:white_chocolate_glazed_berries
  // 配方：create_confectionery:white_chocolate_glazed_berries_recipe
  event.json("create_confectionery:recipe/white_chocolate_glazed_berries_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:sweet_berries"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:white_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:white_chocolate_glazed_berries"
      }
    ]
  })

  // create_confectionery:marshmallow + 250mB create_confectionery:white_chocolate → create_confectionery:white_chocolate_glazed_marshmallow
  // 配方：create_confectionery:white_chocolate_glazed_marshmallow_recipe
  event.json("create_confectionery:recipe/white_chocolate_glazed_marshmallow_recipe.json", {
    "group": "create_confectionery",
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_confectionery:marshmallow"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:white_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:white_chocolate_glazed_marshmallow"
      }
    ]
  })
})
