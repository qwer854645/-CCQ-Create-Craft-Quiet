// 鸡尾酒乐事：注液
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:glass_bottle + 250mB 蓝色库拉索 → 蓝色库拉索
  // 配方：cocktailsdelight:filling/blue_curacao
  event.json("cocktailsdelight:recipe/filling/blue_curacao.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:blue_curacao",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:blue_curacao"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:bock → cocktailsdelight:bock
  // 配方：cocktailsdelight:filling/bock
  event.json("cocktailsdelight:recipe/filling/bock.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:bock",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:bock"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:cream_ale → cocktailsdelight:cream_ale
  // 配方：cocktailsdelight:filling/cream_ale
  event.json("cocktailsdelight:recipe/filling/cream_ale.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:cream_ale",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:cream_ale"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 金酒 → 金酒
  // 配方：cocktailsdelight:filling/gin
  event.json("cocktailsdelight:recipe/filling/gin.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:gin",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:gin"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 硬苹果酒 → 硬苹果酒
  // 配方：cocktailsdelight:filling/hard_cider
  event.json("cocktailsdelight:recipe/filling/hard_cider.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:hard_cider",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:hard_cider"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 硬柠檬水 → 硬柠檬水
  // 配方：cocktailsdelight:filling/hard_lemonade
  event.json("cocktailsdelight:recipe/filling/hard_lemonade.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:hard_lemonade",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:hard_lemonade"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:ipa → cocktailsdelight:ipa
  // 配方：cocktailsdelight:filling/ipa
  event.json("cocktailsdelight:recipe/filling/ipa.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:ipa",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:ipa"
      }
    ]
  })

  // 酒杯 + 250mB 海妖朗姆 → 海妖朗姆
  // 配方：cocktailsdelight:filling/kraken_rum
  event.json("cocktailsdelight:recipe/filling/kraken_rum.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "brewinandchewin:tankard"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:kraken_rum",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:kraken_rum"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:milk_stout → cocktailsdelight:milk_stout
  // 配方：cocktailsdelight:filling/milk_stout
  event.json("cocktailsdelight:recipe/filling/milk_stout.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:milk_stout",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:milk_stout"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 月光 → 月光
  // 配方：cocktailsdelight:filling/moonshine
  event.json("cocktailsdelight:recipe/filling/moonshine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:moonshine",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:moonshine"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 热红酒 → 热红酒
  // 配方：cocktailsdelight:filling/mulled_wine
  event.json("cocktailsdelight:recipe/filling/mulled_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:mulled_wine",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:mulled_wine"
      }
    ]
  })

  // 酒杯 + 250mB 果仁棕艾 → 果仁棕艾
  // 配方：cocktailsdelight:filling/nut_brown_ale
  event.json("cocktailsdelight:recipe/filling/nut_brown_ale.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "brewinandchewin:tankard"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:nut_brown_ale",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:nut_brown_ale"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 桃子酒 → 桃子酒
  // 配方：cocktailsdelight:filling/peach_wine
  event.json("cocktailsdelight:recipe/filling/peach_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:peach_wine",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:peach_wine"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:pilsner → cocktailsdelight:pilsner
  // 配方：cocktailsdelight:filling/pilsner
  event.json("cocktailsdelight:recipe/filling/pilsner.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:pilsner",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:pilsner"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:plum_wine → cocktailsdelight:plum_wine
  // 配方：cocktailsdelight:filling/plum_wine
  event.json("cocktailsdelight:recipe/filling/plum_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:plum_wine",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:plum_wine"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:porter → cocktailsdelight:porter
  // 配方：cocktailsdelight:filling/porter
  event.json("cocktailsdelight:recipe/filling/porter.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:porter",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:porter"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:red_ale → cocktailsdelight:red_ale
  // 配方：cocktailsdelight:filling/red_ale
  event.json("cocktailsdelight:recipe/filling/red_ale.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:red_ale",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:red_ale"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 红葡萄酒 → 红葡萄酒
  // 配方：cocktailsdelight:filling/red_wine
  event.json("cocktailsdelight:recipe/filling/red_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:red_wine",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:red_wine"
      }
    ]
  })

  // 酒杯 + 250mB 白色朗姆 → 白色朗姆
  // 配方：cocktailsdelight:filling/rum
  event.json("cocktailsdelight:recipe/filling/rum.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "brewinandchewin:tankard"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:rum",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:rum"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB cocktailsdelight:stout → cocktailsdelight:stout
  // 配方：cocktailsdelight:filling/stout
  event.json("cocktailsdelight:recipe/filling/stout.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:stout",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:stout"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 甜红酒 → 甜红酒
  // 配方：cocktailsdelight:filling/sweet_red_wine
  event.json("cocktailsdelight:recipe/filling/sweet_red_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:sweet_red_wine",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:sweet_red_wine"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 龙舌兰 → 龙舌兰
  // 配方：cocktailsdelight:filling/tequila
  event.json("cocktailsdelight:recipe/filling/tequila.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:tequila",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:tequila"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 威士忌酒 → 威士忌酒
  // 配方：cocktailsdelight:filling/whiskey
  event.json("cocktailsdelight:recipe/filling/whiskey.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:whiskey",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:whiskey"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 白葡萄酒 → 白葡萄酒
  // 配方：cocktailsdelight:filling/white_wine
  event.json("cocktailsdelight:recipe/filling/white_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "fluid": "cocktailsdelight:white_wine",
        "type": "fluid_stack"
      }
    ],
    "results": [
      {
        "id": "cocktailsdelight:white_wine"
      }
    ]
  })
})
