// 机械幻想：序列组装
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // #c:dusts/obsidian → 替用型异彩化合物
  // 配方：create_fantasizing:sequenced_assembly/alternative_chromatic_compound
  event.json("create_fantasizing:recipe/sequenced_assembly/alternative_chromatic_compound.json", {
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "c:dusts/obsidian"
    },
    "loops": 2,
    "results": [
      {
        "id": "create_fantasizing:alternative_chromatic_compound"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:incomplete_alternative_chromatic_compound"
          },
          {
            "tag": "c:dusts/glowstone"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:incomplete_alternative_chromatic_compound"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:incomplete_alternative_chromatic_compound"
          },
          {
            "item": "minecraft:prismarine_shard"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:incomplete_alternative_chromatic_compound"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:incomplete_alternative_chromatic_compound"
          },
          {
            "item": "minecraft:popped_chorus_fruit"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:incomplete_alternative_chromatic_compound"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "create_fantasizing:incomplete_alternative_chromatic_compound"
          },
          {
            "type": "neoforge:single",
            "amount": 500,
            "fluid": "minecraft:lava"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:incomplete_alternative_chromatic_compound"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:incomplete_alternative_chromatic_compound"
          },
          {
            "tag": "c:dusts/obsidian"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:incomplete_alternative_chromatic_compound"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "create_fantasizing:incomplete_alternative_chromatic_compound"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:incomplete_alternative_chromatic_compound"
          }
        ]
      }
    ],
    "transitional_item": {
      "id": "create_fantasizing:incomplete_alternative_chromatic_compound"
    }
  })

  // 坚固潮涌核心 → 紧缩型水力引擎
  // 配方：create_fantasizing:sequenced_assembly/compact_hydraulic_engine
  event.json("create_fantasizing:recipe/sequenced_assembly/compact_hydraulic_engine.json", {
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "create_fantasizing:sturdy_conduit"
    },
    "loops": 32,
    "results": [
      {
        "id": "create_fantasizing:compact_hydraulic_engine"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:incomplete_compact_hydraulic_engine"
          },
          [
            {
              "item": "create_fantasizing:prismarine_fan_blades"
            }
          ]
        ],
        "results": [
          {
            "id": "create_fantasizing:incomplete_compact_hydraulic_engine"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "create_fantasizing:incomplete_compact_hydraulic_engine"
          },
          {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "minecraft:water"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:incomplete_compact_hydraulic_engine"
          }
        ]
      }
    ],
    "transitional_item": {
      "id": "create_fantasizing:incomplete_compact_hydraulic_engine"
    }
  })

  // minecraft:heart_of_the_sea → 2个 minecraft:heart_of_the_sea（7500.0%） + minecraft:heart_of_the_sea（2500.0%）
  // 配方：create_fantasizing:sequenced_assembly/heart_of_the_sea_copy
  event.json("create_fantasizing:recipe/sequenced_assembly/heart_of_the_sea_copy.json", {
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "minecraft:heart_of_the_sea"
    },
    "loops": 3,
    "results": [
      {
        "chance": 75.0,
        "count": 2,
        "id": "minecraft:heart_of_the_sea"
      },
      {
        "chance": 25.0,
        "id": "minecraft:heart_of_the_sea"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:unprocessed_heart_of_the_sea"
          },
          {
            "item": "minecraft:prismarine_shard"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:unprocessed_heart_of_the_sea"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:unprocessed_heart_of_the_sea"
          },
          {
            "tag": "c:gems/prismarine"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:unprocessed_heart_of_the_sea"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:unprocessed_heart_of_the_sea"
          },
          {
            "item": "create:refined_radiance"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:unprocessed_heart_of_the_sea"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "create_fantasizing:unprocessed_heart_of_the_sea"
          },
          {
            "item": "minecraft:prismarine_shard"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:unprocessed_heart_of_the_sea"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "create_fantasizing:unprocessed_heart_of_the_sea"
          },
          {
            "type": "neoforge:single",
            "amount": 1000,
            "fluid": "minecraft:water"
          }
        ],
        "results": [
          {
            "id": "create_fantasizing:unprocessed_heart_of_the_sea"
          }
        ]
      }
    ],
    "transitional_item": {
      "id": "create_fantasizing:unprocessed_heart_of_the_sea"
    }
  })
})
