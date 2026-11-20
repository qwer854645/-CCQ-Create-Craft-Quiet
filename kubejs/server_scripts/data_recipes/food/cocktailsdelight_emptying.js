// 鸡尾酒乐事：分液
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 蓝色库拉索 → minecraft:glass_bottle + 250mB 蓝色库拉索
  // 配方：cocktailsdelight:emptying/blue_curacao
  event.json("cocktailsdelight:recipe/emptying/blue_curacao.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:blue_curacao"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:blue_curacao",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:bock → minecraft:glass_bottle + 250mB cocktailsdelight:bock
  // 配方：cocktailsdelight:emptying/bock
  event.json("cocktailsdelight:recipe/emptying/bock.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:bock"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:bock",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:cream_ale → minecraft:glass_bottle + 250mB cocktailsdelight:cream_ale
  // 配方：cocktailsdelight:emptying/cream_ale
  event.json("cocktailsdelight:recipe/emptying/cream_ale.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:cream_ale"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:cream_ale",
        "amount": 250
      }
    ]
  })

  // 金酒 → minecraft:glass_bottle + 250mB 金酒
  // 配方：cocktailsdelight:emptying/gin
  event.json("cocktailsdelight:recipe/emptying/gin.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:gin"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:gin",
        "amount": 250
      }
    ]
  })

  // 硬苹果酒 → minecraft:glass_bottle + 250mB 硬苹果酒
  // 配方：cocktailsdelight:emptying/hard_cider
  event.json("cocktailsdelight:recipe/emptying/hard_cider.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:hard_cider"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:hard_cider",
        "amount": 250
      }
    ]
  })

  // 硬柠檬水 → minecraft:glass_bottle + 250mB 硬柠檬水
  // 配方：cocktailsdelight:emptying/hard_lemonade
  event.json("cocktailsdelight:recipe/emptying/hard_lemonade.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:hard_lemonade"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:hard_lemonade",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:ipa → minecraft:glass_bottle + 250mB cocktailsdelight:ipa
  // 配方：cocktailsdelight:emptying/ipa
  event.json("cocktailsdelight:recipe/emptying/ipa.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:ipa"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:ipa",
        "amount": 250
      }
    ]
  })

  // 海妖朗姆 → 酒杯 + 250mB 海妖朗姆
  // 配方：cocktailsdelight:emptying/kraken_rum
  event.json("cocktailsdelight:recipe/emptying/kraken_rum.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:kraken_rum"
      }
    ],
    "results": [
      {
        "id": "brewinandchewin:tankard"
      },
      {
        "id": "cocktailsdelight:kraken_rum",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:milk_stout → minecraft:glass_bottle + 250mB cocktailsdelight:milk_stout
  // 配方：cocktailsdelight:emptying/milk_stout
  event.json("cocktailsdelight:recipe/emptying/milk_stout.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:milk_stout"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:milk_stout",
        "amount": 250
      }
    ]
  })

  // 月光 → minecraft:glass_bottle + 250mB 月光
  // 配方：cocktailsdelight:emptying/moonshine
  event.json("cocktailsdelight:recipe/emptying/moonshine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:moonshine"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:moonshine",
        "amount": 250
      }
    ]
  })

  // 热红酒 → minecraft:glass_bottle + 250mB 热红酒
  // 配方：cocktailsdelight:emptying/mulled_wine
  event.json("cocktailsdelight:recipe/emptying/mulled_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:mulled_wine"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:mulled_wine",
        "amount": 250
      }
    ]
  })

  // 果仁棕艾 → 酒杯 + 250mB 果仁棕艾
  // 配方：cocktailsdelight:emptying/nut_brown_ale
  event.json("cocktailsdelight:recipe/emptying/nut_brown_ale.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:nut_brown_ale"
      }
    ],
    "results": [
      {
        "id": "brewinandchewin:tankard"
      },
      {
        "id": "cocktailsdelight:nut_brown_ale",
        "amount": 250
      }
    ]
  })

  // 桃子酒 → minecraft:glass_bottle + 250mB 桃子酒
  // 配方：cocktailsdelight:emptying/peach_wine
  event.json("cocktailsdelight:recipe/emptying/peach_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:peach_wine"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:peach_wine",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:pilsner → minecraft:glass_bottle + 250mB cocktailsdelight:pilsner
  // 配方：cocktailsdelight:emptying/pilsner
  event.json("cocktailsdelight:recipe/emptying/pilsner.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:pilsner"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:pilsner",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:plum_wine → minecraft:glass_bottle + 250mB cocktailsdelight:plum_wine
  // 配方：cocktailsdelight:emptying/plum_wine
  event.json("cocktailsdelight:recipe/emptying/plum_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:plum_wine"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:plum_wine",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:porter → minecraft:glass_bottle + 250mB cocktailsdelight:porter
  // 配方：cocktailsdelight:emptying/porter
  event.json("cocktailsdelight:recipe/emptying/porter.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:porter"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:porter",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:red_ale → minecraft:glass_bottle + 250mB cocktailsdelight:red_ale
  // 配方：cocktailsdelight:emptying/red_ale
  event.json("cocktailsdelight:recipe/emptying/red_ale.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:red_ale"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:red_ale",
        "amount": 250
      }
    ]
  })

  // 红葡萄酒 → minecraft:glass_bottle + 250mB 红葡萄酒
  // 配方：cocktailsdelight:emptying/red_wine
  event.json("cocktailsdelight:recipe/emptying/red_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:red_wine"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:red_wine",
        "amount": 250
      }
    ]
  })

  // 白色朗姆 → 酒杯 + 250mB 白色朗姆
  // 配方：cocktailsdelight:emptying/rum
  event.json("cocktailsdelight:recipe/emptying/rum.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:rum"
      }
    ],
    "results": [
      {
        "id": "brewinandchewin:tankard"
      },
      {
        "id": "cocktailsdelight:rum",
        "amount": 250
      }
    ]
  })

  // cocktailsdelight:stout → minecraft:glass_bottle + 250mB cocktailsdelight:stout
  // 配方：cocktailsdelight:emptying/stout
  event.json("cocktailsdelight:recipe/emptying/stout.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:stout"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:stout",
        "amount": 250
      }
    ]
  })

  // 甜红酒 → minecraft:glass_bottle + 250mB 甜红酒
  // 配方：cocktailsdelight:emptying/sweet_red_wine
  event.json("cocktailsdelight:recipe/emptying/sweet_red_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:sweet_red_wine"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:sweet_red_wine",
        "amount": 250
      }
    ]
  })

  // 龙舌兰 → minecraft:glass_bottle + 250mB 龙舌兰
  // 配方：cocktailsdelight:emptying/tequila
  event.json("cocktailsdelight:recipe/emptying/tequila.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:tequila"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:tequila",
        "amount": 250
      }
    ]
  })

  // 威士忌酒 → minecraft:glass_bottle + 250mB 威士忌酒
  // 配方：cocktailsdelight:emptying/whiskey
  event.json("cocktailsdelight:recipe/emptying/whiskey.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:whiskey"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:whiskey",
        "amount": 250
      }
    ]
  })

  // 白葡萄酒 → minecraft:glass_bottle + 250mB 白葡萄酒
  // 配方：cocktailsdelight:emptying/white_wine
  event.json("cocktailsdelight:recipe/emptying/white_wine.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "cocktailsdelight:white_wine"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "id": "cocktailsdelight:white_wine",
        "amount": 250
      }
    ]
  })
})
