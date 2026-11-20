// 金属线轧制
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // #c:plates/aluminum → 2个 铝线
  // 配方：vintageimprovements:rolling/aluminum_plate
  event.json("vintageimprovements:recipe/rolling/aluminum_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/aluminum"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:aluminum_wire"
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
          "tag": "c:plates/aluminum"
        }
      }
    ]
  })

  // #c:plates/amethyst_bronze → 2个 紫水晶青铜线
  // 配方：vintageimprovements:rolling/amethyst_bronze_plate
  event.json("vintageimprovements:recipe/rolling/amethyst_bronze_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/amethyst_bronze"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:amethyst_bronze_wire"
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
          "tag": "c:plates/amethyst_bronze"
        }
      }
    ]
  })

  // #c:plates/andesite → 2个 安山岩线
  // 配方：vintageimprovements:rolling/andesite_plate
  event.json("vintageimprovements:recipe/rolling/andesite_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/andesite"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:andesite_wire"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:plates/brass → 2个 黄铜线
  // 配方：vintageimprovements:rolling/brass_plate
  event.json("vintageimprovements:recipe/rolling/brass_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/brass"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:brass_wire"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:plates/bronze → 2个 青铜线
  // 配方：vintageimprovements:rolling/bronze_plate
  event.json("vintageimprovements:recipe/rolling/bronze_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/bronze"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:bronze_wire"
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
          "tag": "c:plates/bronze"
        }
      }
    ]
  })

  // #c:plates/calorite → 2个 耐热金属线
  // 配方：vintageimprovements:rolling/calorite_plate
  event.json("vintageimprovements:recipe/rolling/calorite_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/calorite"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:calorite_wire"
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

  // #c:plates/cast_iron → 2个 铸铁线
  // 配方：vintageimprovements:rolling/cast_iron_plate
  event.json("vintageimprovements:recipe/rolling/cast_iron_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/cast_iron"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:cast_iron_wire"
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
          "tag": "c:plates/cast_iron"
        }
      }
    ]
  })

  // #c:plates/cobalt → 2个 钴线
  // 配方：vintageimprovements:rolling/cobalt_plate
  event.json("vintageimprovements:recipe/rolling/cobalt_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/cobalt"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:cobalt_wire"
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
          "tag": "c:plates/cobalt"
        }
      }
    ]
  })

  // #c:plates/constantan → 2个 康铜线
  // 配方：vintageimprovements:rolling/constantan_plate
  event.json("vintageimprovements:recipe/rolling/constantan_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/constantan"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:constantan_wire"
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
          "tag": "c:plates/constantan"
        }
      }
    ]
  })

  // #c:plates/desh → 2个 戴斯线
  // 配方：vintageimprovements:rolling/desh_plate
  event.json("vintageimprovements:recipe/rolling/desh_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/desh"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:desh_wire"
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

  // #c:plates/enderium → 2个 末影合金线
  // 配方：vintageimprovements:rolling/enderium_plate
  event.json("vintageimprovements:recipe/rolling/enderium_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/enderium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:enderium_wire"
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
          "tag": "c:plates/enderium"
        }
      }
    ]
  })

  // #c:plates/fiery → 2个 炽热金属线
  // 配方：vintageimprovements:rolling/fiery_plate
  event.json("vintageimprovements:recipe/rolling/fiery_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/fiery"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:fiery_wire"
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

  // #c:plates/hepatizon → 2个 海帕铜合金线
  // 配方：vintageimprovements:rolling/hepatizon_plate
  event.json("vintageimprovements:recipe/rolling/hepatizon_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/hepatizon"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:hepatizon_wire"
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
          "tag": "c:plates/hepatizon"
        }
      }
    ]
  })

  // #c:plates/invar → 2个 殷钢线
  // 配方：vintageimprovements:rolling/invar_plate
  event.json("vintageimprovements:recipe/rolling/invar_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/invar"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:invar_wire"
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
          "tag": "c:plates/invar"
        }
      }
    ]
  })

  // #c:plates/ironwood → 2个 铁木线
  // 配方：vintageimprovements:rolling/ironwood_plate
  event.json("vintageimprovements:recipe/rolling/ironwood_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/ironwood"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:ironwood_wire"
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

  // #c:plates/knightmetal → 2个 骑士金属线
  // 配方：vintageimprovements:rolling/knightmetal_plate
  event.json("vintageimprovements:recipe/rolling/knightmetal_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/knightmetal"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:knightmetal_wire"
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

  // #c:plates/lead → 2个 铅线
  // 配方：vintageimprovements:rolling/lead_plate
  event.json("vintageimprovements:recipe/rolling/lead_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/lead"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:lead_wire"
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
          "tag": "c:plates/lead"
        }
      }
    ]
  })

  // #c:plates/lumium → 2个 流明线
  // 配方：vintageimprovements:rolling/lumium_plate
  event.json("vintageimprovements:recipe/rolling/lumium_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/lumium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:lumium_wire"
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
          "tag": "c:plates/lumium"
        }
      }
    ]
  })

  // #c:plates/manyullyn → 2个 玛玉灵线
  // 配方：vintageimprovements:rolling/manyullyn_plate
  event.json("vintageimprovements:recipe/rolling/manyullyn_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/manyullyn"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:manyullyn_wire"
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
          "tag": "c:plates/manyullyn"
        }
      }
    ]
  })

  // #c:rods/netherite → 2个 下界合金线
  // 配方：vintageimprovements:rolling/netherite_rod
  event.json("vintageimprovements:recipe/rolling/netherite_rod.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:rods/netherite"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:netherite_wire"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // 下界钢杆 → 2个 下界钢线
  // 配方：vintageimprovements:rolling/nethersteel_rod
  event.json("vintageimprovements:recipe/rolling/nethersteel_rod.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "item": "vintageimprovements:nethersteel_rod"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:nethersteel_wire"
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

  // #c:plates/nickel → 2个 镍线
  // 配方：vintageimprovements:rolling/nickel_plate
  event.json("vintageimprovements:recipe/rolling/nickel_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/nickel"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:nickel_wire"
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
          "tag": "c:plates/nickel"
        }
      }
    ]
  })

  // #c:plates/osmium → 2个 锇线
  // 配方：vintageimprovements:rolling/osmium_plate
  event.json("vintageimprovements:recipe/rolling/osmium_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/osmium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:osmium_wire"
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
          "tag": "c:plates/osmium"
        }
      }
    ]
  })

  // #c:plates/ostrum → 2个 紫金线
  // 配方：vintageimprovements:rolling/ostrum_plate
  event.json("vintageimprovements:recipe/rolling/ostrum_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/ostrum"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:ostrum_wire"
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

  // #c:plates/palladium → 2个 钯线
  // 配方：vintageimprovements:rolling/palladium_plate
  event.json("vintageimprovements:recipe/rolling/palladium_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/palladium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:palladium_wire"
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
          "tag": "c:plates/palladium"
        }
      }
    ]
  })

  // #c:plates/pig_iron → 2个 生铁线
  // 配方：vintageimprovements:rolling/pig_iron_plate
  event.json("vintageimprovements:recipe/rolling/pig_iron_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/pig_iron"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:pig_iron_wire"
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
          "tag": "c:plates/pig_iron"
        }
      }
    ]
  })

  // #c:plates/platinum → 2个 铂线
  // 配方：vintageimprovements:rolling/platinum_plate
  event.json("vintageimprovements:recipe/rolling/platinum_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/platinum"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:platinum_wire"
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
          "tag": "c:plates/platinum"
        }
      }
    ]
  })

  // #c:plates/pure_gold → 2个 纯金线
  // 配方：vintageimprovements:rolling/pure_gold_plate
  event.json("vintageimprovements:recipe/rolling/pure_gold_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/pure_gold"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:pure_gold_wire"
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
          "tag": "c:plates/pure_gold"
        }
      }
    ]
  })

  // #c:plates/queens_slime → 2个 皇后史莱姆线
  // 配方：vintageimprovements:rolling/queens_slime_plate
  event.json("vintageimprovements:recipe/rolling/queens_slime_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/queens_slime"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:queens_slime_wire"
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

  // #c:plates/refined_glowstone → 2个 强化荧石线
  // 配方：vintageimprovements:rolling/refined_glowstone_plate
  event.json("vintageimprovements:recipe/rolling/refined_glowstone_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/refined_glowstone"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:refined_glowstone_wire"
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
          "tag": "c:plates/refined_glowstone"
        }
      }
    ]
  })

  // #c:plates/refined_obsidian → 2个 强化黑曜石线
  // 配方：vintageimprovements:rolling/refined_obsidian_plate
  event.json("vintageimprovements:recipe/rolling/refined_obsidian_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/refined_obsidian"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:refined_obsidian_wire"
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
          "tag": "c:plates/refined_obsidian"
        }
      }
    ]
  })

  // #c:plates/refined_radiance → 2个 精炼光辉石线
  // 配方：vintageimprovements:rolling/refined_radiance_plate
  event.json("vintageimprovements:recipe/rolling/refined_radiance_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/refined_radiance"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:refined_radiance_wire"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:plates/rhodium → 2个 铑线
  // 配方：vintageimprovements:rolling/rhodium_plate
  event.json("vintageimprovements:recipe/rolling/rhodium_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/rhodium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:rhodium_wire"
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
          "tag": "c:plates/rhodium"
        }
      }
    ]
  })

  // #c:plates/rose_gold → 2个 玫瑰合金线
  // 配方：vintageimprovements:rolling/rose_gold_plate
  event.json("vintageimprovements:recipe/rolling/rose_gold_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/rose_gold"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:rose_gold_wire"
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
          "tag": "c:plates/rose_gold"
        }
      }
    ]
  })

  // #c:plates/shadow_steel → 2个 暗影钢线
  // 配方：vintageimprovements:rolling/shadow_steel_plate
  event.json("vintageimprovements:recipe/rolling/shadow_steel_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/shadow_steel"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:shadow_steel_wire"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:plates/signalum → 2个 信素线
  // 配方：vintageimprovements:rolling/signalum_plate
  event.json("vintageimprovements:recipe/rolling/signalum_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/signalum"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:signalum_wire"
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
          "tag": "c:plates/signalum"
        }
      }
    ]
  })

  // #c:plates/silver → 2个 银线
  // 配方：vintageimprovements:rolling/silver_plate
  event.json("vintageimprovements:recipe/rolling/silver_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/silver"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:silver_wire"
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
          "tag": "c:plates/silver"
        }
      }
    ]
  })

  // #c:plates/slimesteel → 2个 黏钢线
  // 配方：vintageimprovements:rolling/slimesteel_plate
  event.json("vintageimprovements:recipe/rolling/slimesteel_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/slimesteel"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:slimesteel_wire"
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

  // #c:plates/steel → 2个 钢线
  // 配方：vintageimprovements:rolling/steel_plate
  event.json("vintageimprovements:recipe/rolling/steel_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/steel"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:steel_wire"
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
          "tag": "c:plates/steel"
        }
      }
    ]
  })

  // #c:plates/tin → 2个 锡线
  // 配方：vintageimprovements:rolling/tin_plate
  event.json("vintageimprovements:recipe/rolling/tin_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/tin"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:tin_wire"
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
          "tag": "c:plates/tin"
        }
      }
    ]
  })

  // #c:plates/uranium → 2个 铀线
  // 配方：vintageimprovements:rolling/uranium_plate
  event.json("vintageimprovements:recipe/rolling/uranium_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/uranium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:uranium_wire"
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
          "tag": "c:plates/uranium"
        }
      }
    ]
  })

  // #c:plates/vanadium → 2个 钒线
  // 配方：vintageimprovements:rolling/vanadium_plate
  event.json("vintageimprovements:recipe/rolling/vanadium_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/vanadium"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:vanadium_wire"
      }
    ],
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "createaddition"
      }
    ]
  })

  // #c:plates/zinc → 2个 锌线
  // 配方：vintageimprovements:rolling/zinc_plate
  event.json("vintageimprovements:recipe/rolling/zinc_plate.json", {
    "type": "createaddition:rolling",
    "ingredients": [
      {
        "tag": "c:plates/zinc"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "vintageimprovements:zinc_wire"
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
