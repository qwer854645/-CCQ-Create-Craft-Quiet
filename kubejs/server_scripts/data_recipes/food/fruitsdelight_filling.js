// 水果乐事：注液
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:glass_bottle + 125mB 苹果果酱 → 苹果果酱
  // 配方：fruitsdelight:filling/apple_jam
  event.json("fruitsdelight:recipe/filling/apple_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:apple_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:apple_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 苹果果酱 → 果酱面包
  // 配方：fruitsdelight:filling/apple_jam_bread
  event.json("fruitsdelight:recipe/filling/apple_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:apple_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 苹果果酱 → 果丹卷
  // 配方：fruitsdelight:filling/apple_jam_roll
  event.json("fruitsdelight:recipe/filling/apple_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:apple_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 苹果果冻 → 苹果果冻
  // 配方：fruitsdelight:filling/apple_jello
  event.json("fruitsdelight:recipe/filling/apple_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:apple_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:apple_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 杨梅果酱 → 杨梅果酱
  // 配方：fruitsdelight:filling/bayberry_jam
  event.json("fruitsdelight:recipe/filling/bayberry_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bayberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:bayberry_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 杨梅果酱 → 果酱面包
  // 配方：fruitsdelight:filling/bayberry_jam_bread
  event.json("fruitsdelight:recipe/filling/bayberry_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bayberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 杨梅果酱 → 果丹卷
  // 配方：fruitsdelight:filling/bayberry_jam_roll
  event.json("fruitsdelight:recipe/filling/bayberry_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bayberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 杨梅果冻 → 杨梅果冻
  // 配方：fruitsdelight:filling/bayberry_jello
  event.json("fruitsdelight:recipe/filling/bayberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bayberry_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:bayberry_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 杨梅汁 → 杨梅汁
  // 配方：fruitsdelight:filling/bayberry_soup
  event.json("fruitsdelight:recipe/filling/bayberry_soup.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bayberry_soup",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:bayberry_soup"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 贝里尼鸡尾酒 → 贝里尼鸡尾酒
  // 配方：fruitsdelight:filling/bellini_cocktail
  event.json("fruitsdelight:recipe/filling/bellini_cocktail.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bellini_cocktail",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:bellini_cocktail"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 蓝莓果酱 → 蓝莓果酱
  // 配方：fruitsdelight:filling/blueberry_jam
  event.json("fruitsdelight:recipe/filling/blueberry_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:blueberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:blueberry_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 蓝莓果酱 → 果酱面包
  // 配方：fruitsdelight:filling/blueberry_jam_bread
  event.json("fruitsdelight:recipe/filling/blueberry_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:blueberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 蓝莓果酱 → 果丹卷
  // 配方：fruitsdelight:filling/blueberry_jam_roll
  event.json("fruitsdelight:recipe/filling/blueberry_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:blueberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 蓝莓果冻 → 蓝莓果冻
  // 配方：fruitsdelight:filling/blueberry_jello
  event.json("fruitsdelight:recipe/filling/blueberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:blueberry_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:blueberry_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 紫颂果果酱 → 紫颂果果酱
  // 配方：fruitsdelight:filling/chorus_jam
  event.json("fruitsdelight:recipe/filling/chorus_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:chorus_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:chorus_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 紫颂果果酱 → 果酱面包
  // 配方：fruitsdelight:filling/chorus_jam_bread
  event.json("fruitsdelight:recipe/filling/chorus_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:chorus_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 紫颂果果酱 → 果丹卷
  // 配方：fruitsdelight:filling/chorus_jam_roll
  event.json("fruitsdelight:recipe/filling/chorus_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:chorus_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 紫颂果果冻 → 紫颂果果冻
  // 配方：fruitsdelight:filling/chorus_jello
  event.json("fruitsdelight:recipe/filling/chorus_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:chorus_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:chorus_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 蔓越莓果酱 → 蔓越莓果酱
  // 配方：fruitsdelight:filling/cranberry_jam
  event.json("fruitsdelight:recipe/filling/cranberry_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:cranberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:cranberry_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 蔓越莓果酱 → 果酱面包
  // 配方：fruitsdelight:filling/cranberry_jam_bread
  event.json("fruitsdelight:recipe/filling/cranberry_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:cranberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 蔓越莓果酱 → 果丹卷
  // 配方：fruitsdelight:filling/cranberry_jam_roll
  event.json("fruitsdelight:recipe/filling/cranberry_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:cranberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 蔓越莓果冻 → 蔓越莓果冻
  // 配方：fruitsdelight:filling/cranberry_jello
  event.json("fruitsdelight:recipe/filling/cranberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:cranberry_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:cranberry_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 榴莲果酱 → 榴莲果酱
  // 配方：fruitsdelight:filling/durian_jam
  event.json("fruitsdelight:recipe/filling/durian_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:durian_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:durian_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 榴莲果酱 → 果酱面包
  // 配方：fruitsdelight:filling/durian_jam_bread
  event.json("fruitsdelight:recipe/filling/durian_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:durian_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 榴莲果酱 → 果丹卷
  // 配方：fruitsdelight:filling/durian_jam_roll
  event.json("fruitsdelight:recipe/filling/durian_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:durian_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 榴莲果冻 → 榴莲果冻
  // 配方：fruitsdelight:filling/durian_jello
  event.json("fruitsdelight:recipe/filling/durian_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:durian_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:durian_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 无花果果酱 → 无花果果酱
  // 配方：fruitsdelight:filling/fig_jam
  event.json("fruitsdelight:recipe/filling/fig_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:fig_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:fig_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 无花果果酱 → 果酱面包
  // 配方：fruitsdelight:filling/fig_jam_bread
  event.json("fruitsdelight:recipe/filling/fig_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:fig_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 无花果果酱 → 果丹卷
  // 配方：fruitsdelight:filling/fig_jam_roll
  event.json("fruitsdelight:recipe/filling/fig_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:fig_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 无花果果冻 → 无花果果冻
  // 配方：fruitsdelight:filling/fig_jello
  event.json("fruitsdelight:recipe/filling/fig_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:fig_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:fig_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 发光浆果果酱 → 发光浆果果酱
  // 配方：fruitsdelight:filling/glowberry_jam
  event.json("fruitsdelight:recipe/filling/glowberry_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:glowberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:glowberry_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 发光浆果果酱 → 果酱面包
  // 配方：fruitsdelight:filling/glowberry_jam_bread
  event.json("fruitsdelight:recipe/filling/glowberry_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:glowberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 发光浆果果酱 → 果丹卷
  // 配方：fruitsdelight:filling/glowberry_jam_roll
  event.json("fruitsdelight:recipe/filling/glowberry_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:glowberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 发光浆果果冻 → 发光浆果果冻
  // 配方：fruitsdelight:filling/glowberry_jello
  event.json("fruitsdelight:recipe/filling/glowberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:glowberry_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:glowberry_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 哈密瓜果酱 → 哈密瓜果酱
  // 配方：fruitsdelight:filling/hamimelon_jam
  event.json("fruitsdelight:recipe/filling/hamimelon_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hamimelon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hamimelon_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 哈密瓜果酱 → 果酱面包
  // 配方：fruitsdelight:filling/hamimelon_jam_bread
  event.json("fruitsdelight:recipe/filling/hamimelon_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hamimelon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 哈密瓜果酱 → 果丹卷
  // 配方：fruitsdelight:filling/hamimelon_jam_roll
  event.json("fruitsdelight:recipe/filling/hamimelon_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hamimelon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 哈密瓜果冻 → 哈密瓜果冻
  // 配方：fruitsdelight:filling/hamimelon_jello
  event.json("fruitsdelight:recipe/filling/hamimelon_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hamimelon_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hamimelon_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 哈密瓜汁 → 哈密瓜汁
  // 配方：fruitsdelight:filling/hamimelon_juice
  event.json("fruitsdelight:recipe/filling/hamimelon_juice.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hamimelon_juice",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hamimelon_juice"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 山楂果酱 → 山楂果酱
  // 配方：fruitsdelight:filling/hawberry_jam
  event.json("fruitsdelight:recipe/filling/hawberry_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hawberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 山楂果酱 → 果酱面包
  // 配方：fruitsdelight:filling/hawberry_jam_bread
  event.json("fruitsdelight:recipe/filling/hawberry_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hawberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 山楂果酱 → 果丹卷
  // 配方：fruitsdelight:filling/hawberry_jam_roll
  event.json("fruitsdelight:recipe/filling/hawberry_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hawberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 山楂果冻 → 山楂果冻
  // 配方：fruitsdelight:filling/hawberry_jello
  event.json("fruitsdelight:recipe/filling/hawberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hawberry_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 山楂茶 → 山楂茶
  // 配方：fruitsdelight:filling/hawberry_tea
  event.json("fruitsdelight:recipe/filling/hawberry_tea.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hawberry_tea",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_tea"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 猕猴桃果酱 → 猕猴桃果酱
  // 配方：fruitsdelight:filling/kiwi_jam
  event.json("fruitsdelight:recipe/filling/kiwi_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:kiwi_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:kiwi_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 猕猴桃果酱 → 果酱面包
  // 配方：fruitsdelight:filling/kiwi_jam_bread
  event.json("fruitsdelight:recipe/filling/kiwi_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:kiwi_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 猕猴桃果酱 → 果丹卷
  // 配方：fruitsdelight:filling/kiwi_jam_roll
  event.json("fruitsdelight:recipe/filling/kiwi_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:kiwi_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 猕猴桃果冻 → 猕猴桃果冻
  // 配方：fruitsdelight:filling/kiwi_jello
  event.json("fruitsdelight:recipe/filling/kiwi_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:kiwi_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:kiwi_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 猕猴桃饮 → 猕猴桃饮
  // 配方：fruitsdelight:filling/kiwi_juice
  event.json("fruitsdelight:recipe/filling/kiwi_juice.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:kiwi_juice",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:kiwi_juice"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 柠檬果酱 → 柠檬果酱
  // 配方：fruitsdelight:filling/lemon_jam
  event.json("fruitsdelight:recipe/filling/lemon_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lemon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lemon_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 柠檬果酱 → 果酱面包
  // 配方：fruitsdelight:filling/lemon_jam_bread
  event.json("fruitsdelight:recipe/filling/lemon_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lemon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 柠檬果酱 → 果丹卷
  // 配方：fruitsdelight:filling/lemon_jam_roll
  event.json("fruitsdelight:recipe/filling/lemon_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lemon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 柠檬果冻 → 柠檬果冻
  // 配方：fruitsdelight:filling/lemon_jello
  event.json("fruitsdelight:recipe/filling/lemon_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lemon_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lemon_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 柠檬水 → 柠檬水
  // 配方：fruitsdelight:filling/lemon_juice
  event.json("fruitsdelight:recipe/filling/lemon_juice.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lemon_juice",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lemon_juice"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 荔枝樱花饮 → 荔枝樱花饮
  // 配方：fruitsdelight:filling/lychee_cherry_tea
  event.json("fruitsdelight:recipe/filling/lychee_cherry_tea.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lychee_cherry_tea",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lychee_cherry_tea"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 荔枝果酱 → 荔枝果酱
  // 配方：fruitsdelight:filling/lychee_jam
  event.json("fruitsdelight:recipe/filling/lychee_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lychee_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lychee_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 荔枝果酱 → 果酱面包
  // 配方：fruitsdelight:filling/lychee_jam_bread
  event.json("fruitsdelight:recipe/filling/lychee_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lychee_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 荔枝果酱 → 果丹卷
  // 配方：fruitsdelight:filling/lychee_jam_roll
  event.json("fruitsdelight:recipe/filling/lychee_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lychee_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 荔枝果冻 → 荔枝果冻
  // 配方：fruitsdelight:filling/lychee_jello
  event.json("fruitsdelight:recipe/filling/lychee_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lychee_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lychee_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 芒果果酱 → 芒果果酱
  // 配方：fruitsdelight:filling/mango_jam
  event.json("fruitsdelight:recipe/filling/mango_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mango_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mango_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 芒果果酱 → 果酱面包
  // 配方：fruitsdelight:filling/mango_jam_bread
  event.json("fruitsdelight:recipe/filling/mango_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mango_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 芒果果酱 → 果丹卷
  // 配方：fruitsdelight:filling/mango_jam_roll
  event.json("fruitsdelight:recipe/filling/mango_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mango_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 芒果果冻 → 芒果果冻
  // 配方：fruitsdelight:filling/mango_jello
  event.json("fruitsdelight:recipe/filling/mango_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mango_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mango_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 芒果茶 → 芒果茶
  // 配方：fruitsdelight:filling/mango_tea
  event.json("fruitsdelight:recipe/filling/mango_tea.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mango_tea",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mango_tea"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 山竹果酱 → 山竹果酱
  // 配方：fruitsdelight:filling/mangosteen_jam
  event.json("fruitsdelight:recipe/filling/mangosteen_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mangosteen_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mangosteen_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 山竹果酱 → 果酱面包
  // 配方：fruitsdelight:filling/mangosteen_jam_bread
  event.json("fruitsdelight:recipe/filling/mangosteen_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mangosteen_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 山竹果酱 → 果丹卷
  // 配方：fruitsdelight:filling/mangosteen_jam_roll
  event.json("fruitsdelight:recipe/filling/mangosteen_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mangosteen_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 山竹果冻 → 山竹果冻
  // 配方：fruitsdelight:filling/mangosteen_jello
  event.json("fruitsdelight:recipe/filling/mangosteen_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mangosteen_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mangosteen_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 山竹清茶 → 山竹清茶
  // 配方：fruitsdelight:filling/mangosteen_tea
  event.json("fruitsdelight:recipe/filling/mangosteen_tea.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mangosteen_tea",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mangosteen_tea"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 西瓜果酱 → 西瓜果酱
  // 配方：fruitsdelight:filling/melon_jam
  event.json("fruitsdelight:recipe/filling/melon_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:melon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:melon_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 西瓜果酱 → 果酱面包
  // 配方：fruitsdelight:filling/melon_jam_bread
  event.json("fruitsdelight:recipe/filling/melon_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:melon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 西瓜果酱 → 果丹卷
  // 配方：fruitsdelight:filling/melon_jam_roll
  event.json("fruitsdelight:recipe/filling/melon_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:melon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 西瓜果冻 → 西瓜果冻
  // 配方：fruitsdelight:filling/melon_jello
  event.json("fruitsdelight:recipe/filling/melon_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:melon_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:melon_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 橘子果酱 → 橘子果酱
  // 配方：fruitsdelight:filling/orange_jam
  event.json("fruitsdelight:recipe/filling/orange_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:orange_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:orange_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 橘子果酱 → 果酱面包
  // 配方：fruitsdelight:filling/orange_jam_bread
  event.json("fruitsdelight:recipe/filling/orange_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:orange_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 橘子果酱 → 果丹卷
  // 配方：fruitsdelight:filling/orange_jam_roll
  event.json("fruitsdelight:recipe/filling/orange_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:orange_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 橘子果冻 → 橘子果冻
  // 配方：fruitsdelight:filling/orange_jello
  event.json("fruitsdelight:recipe/filling/orange_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:orange_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:orange_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 橘子汁 → 橘子汁
  // 配方：fruitsdelight:filling/orange_juice
  event.json("fruitsdelight:recipe/filling/orange_juice.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:orange_juice",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:orange_juice"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 水蜜桃果酱 → 水蜜桃果酱
  // 配方：fruitsdelight:filling/peach_jam
  event.json("fruitsdelight:recipe/filling/peach_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:peach_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:peach_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 水蜜桃果酱 → 果酱面包
  // 配方：fruitsdelight:filling/peach_jam_bread
  event.json("fruitsdelight:recipe/filling/peach_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:peach_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 水蜜桃果酱 → 果丹卷
  // 配方：fruitsdelight:filling/peach_jam_roll
  event.json("fruitsdelight:recipe/filling/peach_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:peach_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 水蜜桃果冻 → 水蜜桃果冻
  // 配方：fruitsdelight:filling/peach_jello
  event.json("fruitsdelight:recipe/filling/peach_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:peach_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:peach_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 白桃乌龙茶 → 白桃乌龙茶
  // 配方：fruitsdelight:filling/peach_tea
  event.json("fruitsdelight:recipe/filling/peach_tea.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:peach_tea",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:peach_tea"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 梨子果酱 → 梨子果酱
  // 配方：fruitsdelight:filling/pear_jam
  event.json("fruitsdelight:recipe/filling/pear_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pear_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pear_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 梨子果酱 → 果酱面包
  // 配方：fruitsdelight:filling/pear_jam_bread
  event.json("fruitsdelight:recipe/filling/pear_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pear_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 梨子果酱 → 果丹卷
  // 配方：fruitsdelight:filling/pear_jam_roll
  event.json("fruitsdelight:recipe/filling/pear_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pear_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 梨子果冻 → 梨子果冻
  // 配方：fruitsdelight:filling/pear_jello
  event.json("fruitsdelight:recipe/filling/pear_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pear_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pear_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 梨汁 → 梨汁
  // 配方：fruitsdelight:filling/pear_juice
  event.json("fruitsdelight:recipe/filling/pear_juice.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pear_juice",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pear_juice"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 柿子果酱 → 柿子果酱
  // 配方：fruitsdelight:filling/persimmon_jam
  event.json("fruitsdelight:recipe/filling/persimmon_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:persimmon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:persimmon_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 柿子果酱 → 果酱面包
  // 配方：fruitsdelight:filling/persimmon_jam_bread
  event.json("fruitsdelight:recipe/filling/persimmon_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:persimmon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 柿子果酱 → 果丹卷
  // 配方：fruitsdelight:filling/persimmon_jam_roll
  event.json("fruitsdelight:recipe/filling/persimmon_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:persimmon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 柿子果冻 → 柿子果冻
  // 配方：fruitsdelight:filling/persimmon_jello
  event.json("fruitsdelight:recipe/filling/persimmon_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:persimmon_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:persimmon_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 菠萝果酱 → 菠萝果酱
  // 配方：fruitsdelight:filling/pineapple_jam
  event.json("fruitsdelight:recipe/filling/pineapple_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pineapple_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pineapple_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 菠萝果酱 → 果酱面包
  // 配方：fruitsdelight:filling/pineapple_jam_bread
  event.json("fruitsdelight:recipe/filling/pineapple_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pineapple_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 菠萝果酱 → 果丹卷
  // 配方：fruitsdelight:filling/pineapple_jam_roll
  event.json("fruitsdelight:recipe/filling/pineapple_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pineapple_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 菠萝果冻 → 菠萝果冻
  // 配方：fruitsdelight:filling/pineapple_jello
  event.json("fruitsdelight:recipe/filling/pineapple_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pineapple_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pineapple_jello"
      }
    ]
  })

  // minecraft:glass_bottle + 125mB 浆果果酱 → 浆果果酱
  // 配方：fruitsdelight:filling/sweetberry_jam
  event.json("fruitsdelight:recipe/filling/sweetberry_jam.json", {
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
        "type": "neoforge:single",
        "fluid": "fruitsdelight:sweetberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:sweetberry_jam"
      }
    ]
  })

  // minecraft:bread + 125mB 浆果果酱 → 果酱面包
  // 配方：fruitsdelight:filling/sweetberry_jam_bread
  event.json("fruitsdelight:recipe/filling/sweetberry_jam_bread.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:sweetberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:jam_bread"
      }
    ]
  })

  // 果丹皮 + 125mB 浆果果酱 → 果丹卷
  // 配方：fruitsdelight:filling/sweetberry_jam_roll
  event.json("fruitsdelight:recipe/filling/sweetberry_jam_roll.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_sheet"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:sweetberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_roll"
      }
    ]
  })

  // minecraft:bowl + 125mB 浆果果冻 → 浆果果冻
  // 配方：fruitsdelight:filling/sweetberry_jello
  event.json("fruitsdelight:recipe/filling/sweetberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:sweetberry_jello",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:sweetberry_jello"
      }
    ]
  })
})
