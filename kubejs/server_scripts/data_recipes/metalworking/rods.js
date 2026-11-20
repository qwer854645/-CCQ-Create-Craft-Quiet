// 金属杆轧制
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // #c:ingots/aluminum → 2个 铝杆
  // 配方：vintageimprovements:rolling/aluminum_ingot
  event.json("vintageimprovements:recipe/rolling/aluminum_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/aluminum"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:aluminum_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/aluminum"
        }
      }
    ]
  })

  // #c:ingots/amethyst_bronze → 2个 紫水晶青铜杆
  // 配方：vintageimprovements:rolling/amethyst_bronze_ingot
  event.json("vintageimprovements:recipe/rolling/amethyst_bronze_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/amethyst_bronze"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:amethyst_bronze_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/amethyst_bronze"
        }
      }
    ]
  })

  // 安山合金 → 2个 安山合金杆
  // 配方：vintageimprovements:rolling/andesite_alloy
  event.json("vintageimprovements:recipe/rolling/andesite_alloy.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "item": "create:andesite_alloy"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:andesite_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:ingots/bronze → 2个 青铜杆
  // 配方：vintageimprovements:rolling/bronze_ingot
  event.json("vintageimprovements:recipe/rolling/bronze_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/bronze"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:bronze_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/bronze"
        }
      }
    ]
  })

  // #c:ingots/calorite → 2个 耐热金属杆
  // 配方：vintageimprovements:rolling/calorite_ingot
  event.json("vintageimprovements:recipe/rolling/calorite_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/calorite"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:calorite_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "ad_astra"
      }
    ]
  })

  // #c:ingots/cast_iron → 2个 铸铁杆
  // 配方：vintageimprovements:rolling/cast_iron_ingot
  event.json("vintageimprovements:recipe/rolling/cast_iron_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/cast_iron"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:cast_iron_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/cast_iron"
        }
      }
    ]
  })

  // #c:ingots/cobalt → 2个 钴杆
  // 配方：vintageimprovements:rolling/cobalt_ingot
  event.json("vintageimprovements:recipe/rolling/cobalt_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/cobalt"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:cobalt_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/cobalt"
        }
      }
    ]
  })

  // #c:ingots/constantan → 2个 康铜杆
  // 配方：vintageimprovements:rolling/constantan_ingot
  event.json("vintageimprovements:recipe/rolling/constantan_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/constantan"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:constantan_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/constantan"
        }
      }
    ]
  })

  // #c:ingots/desh → 2个 戴斯杆
  // 配方：vintageimprovements:rolling/desh_ingot
  event.json("vintageimprovements:recipe/rolling/desh_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/desh"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:desh_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "ad_astra"
      }
    ]
  })

  // #c:ingots/enderium → 2个 末影合金杆
  // 配方：vintageimprovements:rolling/enderium_ingot
  event.json("vintageimprovements:recipe/rolling/enderium_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/enderium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:enderium_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/enderium"
        }
      }
    ]
  })

  // #c:ingots/fiery → 2个 minecraft:blaze_rod
  // 配方：vintageimprovements:rolling/fiery_ingot
  event.json("vintageimprovements:recipe/rolling/fiery_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/fiery"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "minecraft:blaze_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "twilightforest"
      }
    ]
  })

  // #c:ingots/hepatizon → 2个 海帕铜合金杆
  // 配方：vintageimprovements:rolling/hepatizon_ingot
  event.json("vintageimprovements:recipe/rolling/hepatizon_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/hepatizon"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:hepatizon_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/hepatizon"
        }
      }
    ]
  })

  // #c:ingots/invar → 2个 殷钢杆
  // 配方：vintageimprovements:rolling/invar_ingot
  event.json("vintageimprovements:recipe/rolling/invar_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/invar"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:invar_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/invar"
        }
      }
    ]
  })

  // #c:ingots/ironwood → 2个 铁木杆
  // 配方：vintageimprovements:rolling/ironwood_ingot
  event.json("vintageimprovements:recipe/rolling/ironwood_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/ironwood"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:ironwood_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "twilightforest"
      }
    ]
  })

  // #c:ingots/knightmetal → 2个 骑士金属杆
  // 配方：vintageimprovements:rolling/knightmetal_ingot
  event.json("vintageimprovements:recipe/rolling/knightmetal_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/knightmetal"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:knightmetal_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "twilightforest"
      }
    ]
  })

  // #c:ingots/lead → 2个 铅杆
  // 配方：vintageimprovements:rolling/lead_ingot
  event.json("vintageimprovements:recipe/rolling/lead_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/lead"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:lead_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/lead"
        }
      }
    ]
  })

  // #c:ingots/lumium → 2个 光辉金属杆
  // 配方：vintageimprovements:rolling/lumium_ingot
  event.json("vintageimprovements:recipe/rolling/lumium_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/lumium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:lumium_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/lumium"
        }
      }
    ]
  })

  // #c:ingots/manyullyn → 2个 玛玉灵杆
  // 配方：vintageimprovements:rolling/manyullyn_ingot
  event.json("vintageimprovements:recipe/rolling/manyullyn_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/manyullyn"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:manyullyn_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/manyullyn"
        }
      }
    ]
  })

  // #c:plates/netherite → 2个 下界合金杆
  // 配方：vintageimprovements:rolling/netherite_plate
  event.json("vintageimprovements:recipe/rolling/netherite_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/netherite"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:netherite_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // 下界钢板 → 2个 下界钢杆
  // 配方：vintageimprovements:rolling/nethersteel_plate
  event.json("vintageimprovements:recipe/rolling/nethersteel_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "item": "vintageimprovements:nethersteel_sheet"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:nethersteel_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "createbigcannons"
      }
    ]
  })

  // #c:ingots/nickel → 2个 镍杆
  // 配方：vintageimprovements:rolling/nickel_ingot
  event.json("vintageimprovements:recipe/rolling/nickel_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/nickel"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:nickel_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/nickel"
        }
      }
    ]
  })

  // #c:ingots/osmium → 2个 锇杆
  // 配方：vintageimprovements:rolling/osmium_ingot
  event.json("vintageimprovements:recipe/rolling/osmium_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/osmium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:osmium_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/osmium"
        }
      }
    ]
  })

  // #c:ingots/ostrum → 2个 紫金杆
  // 配方：vintageimprovements:rolling/ostrum_ingot
  event.json("vintageimprovements:recipe/rolling/ostrum_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/ostrum"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:ostrum_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "ad_astra"
      }
    ]
  })

  // #c:ingots/palladium → 2个 钯杆
  // 配方：vintageimprovements:rolling/palladium_ingot
  event.json("vintageimprovements:recipe/rolling/palladium_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/palladium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:palladium_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/palladium"
        }
      }
    ]
  })

  // #c:ingots/pig_iron → 2个 生铁杆
  // 配方：vintageimprovements:rolling/pig_iron_ingot
  event.json("vintageimprovements:recipe/rolling/pig_iron_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/pig_iron"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:pig_iron_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/pig_iron"
        }
      }
    ]
  })

  // #c:ingots/platinum → 2个 铂杆
  // 配方：vintageimprovements:rolling/platinum_ingot
  event.json("vintageimprovements:recipe/rolling/platinum_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/platinum"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:platinum_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/platinum"
        }
      }
    ]
  })

  // #c:ingots/pure_gold → 2个 纯金杆
  // 配方：vintageimprovements:rolling/pure_gold_ingot
  event.json("vintageimprovements:recipe/rolling/pure_gold_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/pure_gold"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:pure_gold_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/pure_gold"
        }
      }
    ]
  })

  // #c:ingots/queens_slime → 2个 皇后史莱姆杆
  // 配方：vintageimprovements:rolling/queens_slime_ingot
  event.json("vintageimprovements:recipe/rolling/queens_slime_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/queens_slime"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:queens_slime_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "tconstruct"
      }
    ]
  })

  // #c:ingots/refined_glowstone → 2个 强化荧石杆
  // 配方：vintageimprovements:rolling/refined_glowstone_ingot
  event.json("vintageimprovements:recipe/rolling/refined_glowstone_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/refined_glowstone"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:refined_glowstone_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/refined_glowstone"
        }
      }
    ]
  })

  // #c:ingots/refined_obsidian → 2个 强化黑曜石杆
  // 配方：vintageimprovements:rolling/refined_obsidian_ingot
  event.json("vintageimprovements:recipe/rolling/refined_obsidian_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/refined_obsidian"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:refined_obsidian_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/refined_obsidian"
        }
      }
    ]
  })

  // #c:ingots/refined_radiance → 2个 精炼光辉石杆
  // 配方：vintageimprovements:rolling/refined_radiance
  event.json("vintageimprovements:recipe/rolling/refined_radiance.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/refined_radiance"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:refined_radiance_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:ingots/rhodium → 2个 铑杆
  // 配方：vintageimprovements:rolling/rhodium_ingot
  event.json("vintageimprovements:recipe/rolling/rhodium_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/rhodium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:rhodium_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/rhodium"
        }
      }
    ]
  })

  // #c:ingots/rose_gold → 2个 玫瑰金杆
  // 配方：vintageimprovements:rolling/rose_gold_ingot
  event.json("vintageimprovements:recipe/rolling/rose_gold_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/rose_gold"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:rose_gold_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/rose_gold"
        }
      }
    ]
  })

  // #c:ingots/shadow_steel → 2个 暗影钢杆
  // 配方：vintageimprovements:rolling/shadow_steel
  event.json("vintageimprovements:recipe/rolling/shadow_steel.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/shadow_steel"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:shadow_steel_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:ingots/signalum → 2个 信素杆
  // 配方：vintageimprovements:rolling/signalum_ingot
  event.json("vintageimprovements:recipe/rolling/signalum_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/signalum"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:signalum_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/signalum"
        }
      }
    ]
  })

  // #c:ingots/silver → 2个 银杆
  // 配方：vintageimprovements:rolling/silver_ingot
  event.json("vintageimprovements:recipe/rolling/silver_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/silver"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:silver_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/silver"
        }
      }
    ]
  })

  // #c:ingots/slimesteel → 2个 黏钢杆
  // 配方：vintageimprovements:rolling/slimesteel_ingot
  event.json("vintageimprovements:recipe/rolling/slimesteel_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/slimesteel"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:slimesteel_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:mod_loaded",
        "modid": "tconstruct"
      }
    ]
  })

  // #c:ingots/steel → 2个 钢杆
  // 配方：vintageimprovements:rolling/steel_ingot
  event.json("vintageimprovements:recipe/rolling/steel_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/steel"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:steel_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/steel"
        }
      }
    ]
  })

  // #c:ingots/tin → 2个 锡杆
  // 配方：vintageimprovements:rolling/tin_ingot
  event.json("vintageimprovements:recipe/rolling/tin_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/tin"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:tin_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/tin"
        }
      }
    ]
  })

  // #c:ingots/uranium → 2个 铀杆
  // 配方：vintageimprovements:rolling/uranium_ingot
  event.json("vintageimprovements:recipe/rolling/uranium_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/uranium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:uranium_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      },
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:ingots/uranium"
        }
      }
    ]
  })

  // #c:ingots/vanadium → 2个 钒杆
  // 配方：vintageimprovements:rolling/vanadium_ingot
  event.json("vintageimprovements:recipe/rolling/vanadium_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/vanadium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:vanadium_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:ingots/zinc → 2个 锌杆
  // 配方：vintageimprovements:rolling/zinc_ingot
  event.json("vintageimprovements:recipe/rolling/zinc_ingot.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:ingots/zinc"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:zinc_rod"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })
})
