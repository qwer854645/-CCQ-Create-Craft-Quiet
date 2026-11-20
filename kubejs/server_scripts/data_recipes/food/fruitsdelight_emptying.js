// 水果乐事：分液
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 苹果果酱 → minecraft:glass_bottle + 125mB 苹果果酱
  // 配方：fruitsdelight:emptying/apple_jam_emptying
  event.json("fruitsdelight:recipe/emptying/apple_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:apple_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:apple_jam"
      }
    ]
  })

  // 苹果果冻 → minecraft:bowl + 125mB 苹果果冻
  // 配方：fruitsdelight:emptying/apple_jello_emptying
  event.json("fruitsdelight:recipe/emptying/apple_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:apple_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:apple_jello"
      }
    ]
  })

  // 杨梅果酱 → minecraft:glass_bottle + 125mB 杨梅果酱
  // 配方：fruitsdelight:emptying/bayberry_jam_emptying
  event.json("fruitsdelight:recipe/emptying/bayberry_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:bayberry_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:bayberry_jam"
      }
    ]
  })

  // 杨梅果冻 → minecraft:bowl + 125mB 杨梅果冻
  // 配方：fruitsdelight:emptying/bayberry_jello_emptying
  event.json("fruitsdelight:recipe/emptying/bayberry_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:bayberry_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:bayberry_jello"
      }
    ]
  })

  // 杨梅汁 → minecraft:glass_bottle + 250mB 杨梅汁
  // 配方：fruitsdelight:emptying/bayberry_soup_emptying
  event.json("fruitsdelight:recipe/emptying/bayberry_soup_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:bayberry_soup"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:bayberry_soup"
      }
    ]
  })

  // 贝里尼鸡尾酒 → minecraft:glass_bottle + 250mB 贝里尼鸡尾酒
  // 配方：fruitsdelight:emptying/bellini_cocktail_emptying
  event.json("fruitsdelight:recipe/emptying/bellini_cocktail_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:bellini_cocktail"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:bellini_cocktail"
      }
    ]
  })

  // 蓝莓果酱 → minecraft:glass_bottle + 125mB 蓝莓果酱
  // 配方：fruitsdelight:emptying/blueberry_jam_emptying
  event.json("fruitsdelight:recipe/emptying/blueberry_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:blueberry_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:blueberry_jam"
      }
    ]
  })

  // 蓝莓果冻 → minecraft:bowl + 125mB 蓝莓果冻
  // 配方：fruitsdelight:emptying/blueberry_jello_emptying
  event.json("fruitsdelight:recipe/emptying/blueberry_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:blueberry_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:blueberry_jello"
      }
    ]
  })

  // 紫颂果果酱 → minecraft:glass_bottle + 125mB 紫颂果果酱
  // 配方：fruitsdelight:emptying/chorus_jam_emptying
  event.json("fruitsdelight:recipe/emptying/chorus_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:chorus_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:chorus_jam"
      }
    ]
  })

  // 紫颂果果冻 → minecraft:bowl + 125mB 紫颂果果冻
  // 配方：fruitsdelight:emptying/chorus_jello_emptying
  event.json("fruitsdelight:recipe/emptying/chorus_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:chorus_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:chorus_jello"
      }
    ]
  })

  // 蔓越莓果酱 → minecraft:glass_bottle + 125mB 蔓越莓果酱
  // 配方：fruitsdelight:emptying/cranberry_jam_emptying
  event.json("fruitsdelight:recipe/emptying/cranberry_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:cranberry_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:cranberry_jam"
      }
    ]
  })

  // 蔓越莓果冻 → minecraft:bowl + 125mB 蔓越莓果冻
  // 配方：fruitsdelight:emptying/cranberry_jello_emptying
  event.json("fruitsdelight:recipe/emptying/cranberry_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:cranberry_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:cranberry_jello"
      }
    ]
  })

  // 榴莲果酱 → minecraft:glass_bottle + 125mB 榴莲果酱
  // 配方：fruitsdelight:emptying/durian_jam_emptying
  event.json("fruitsdelight:recipe/emptying/durian_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:durian_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:durian_jam"
      }
    ]
  })

  // 榴莲果冻 → minecraft:bowl + 125mB 榴莲果冻
  // 配方：fruitsdelight:emptying/durian_jello_emptying
  event.json("fruitsdelight:recipe/emptying/durian_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:durian_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:durian_jello"
      }
    ]
  })

  // 无花果果酱 → minecraft:glass_bottle + 125mB 无花果果酱
  // 配方：fruitsdelight:emptying/fig_jam_emptying
  event.json("fruitsdelight:recipe/emptying/fig_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:fig_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:fig_jam"
      }
    ]
  })

  // 无花果果冻 → minecraft:bowl + 125mB 无花果果冻
  // 配方：fruitsdelight:emptying/fig_jello_emptying
  event.json("fruitsdelight:recipe/emptying/fig_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:fig_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:fig_jello"
      }
    ]
  })

  // 发光浆果果酱 → minecraft:glass_bottle + 125mB 发光浆果果酱
  // 配方：fruitsdelight:emptying/glowberry_jam_emptying
  event.json("fruitsdelight:recipe/emptying/glowberry_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:glowberry_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:glowberry_jam"
      }
    ]
  })

  // 发光浆果果冻 → minecraft:bowl + 125mB 发光浆果果冻
  // 配方：fruitsdelight:emptying/glowberry_jello_emptying
  event.json("fruitsdelight:recipe/emptying/glowberry_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:glowberry_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:glowberry_jello"
      }
    ]
  })

  // 哈密瓜果酱 → minecraft:glass_bottle + 125mB 哈密瓜果酱
  // 配方：fruitsdelight:emptying/hamimelon_jam_emptying
  event.json("fruitsdelight:recipe/emptying/hamimelon_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:hamimelon_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:hamimelon_jam"
      }
    ]
  })

  // 哈密瓜果冻 → minecraft:bowl + 125mB 哈密瓜果冻
  // 配方：fruitsdelight:emptying/hamimelon_jello_emptying
  event.json("fruitsdelight:recipe/emptying/hamimelon_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:hamimelon_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:hamimelon_jello"
      }
    ]
  })

  // 哈密瓜汁 → minecraft:glass_bottle + 250mB 哈密瓜汁
  // 配方：fruitsdelight:emptying/hamimelon_juice_emptying
  event.json("fruitsdelight:recipe/emptying/hamimelon_juice_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:hamimelon_juice"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:hamimelon_juice"
      }
    ]
  })

  // 山楂果酱 → minecraft:glass_bottle + 125mB 山楂果酱
  // 配方：fruitsdelight:emptying/hawberry_jam_emptying
  event.json("fruitsdelight:recipe/emptying/hawberry_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:hawberry_jam"
      }
    ]
  })

  // 山楂果冻 → minecraft:bowl + 125mB 山楂果冻
  // 配方：fruitsdelight:emptying/hawberry_jello_emptying
  event.json("fruitsdelight:recipe/emptying/hawberry_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:hawberry_jello"
      }
    ]
  })

  // 山楂茶 → minecraft:glass_bottle + 250mB 山楂茶
  // 配方：fruitsdelight:emptying/hawberry_tea_emptying
  event.json("fruitsdelight:recipe/emptying/hawberry_tea_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry_tea"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:hawberry_tea"
      }
    ]
  })

  // 猕猴桃果酱 → minecraft:glass_bottle + 125mB 猕猴桃果酱
  // 配方：fruitsdelight:emptying/kiwi_jam_emptying
  event.json("fruitsdelight:recipe/emptying/kiwi_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:kiwi_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:kiwi_jam"
      }
    ]
  })

  // 猕猴桃果冻 → minecraft:bowl + 125mB 猕猴桃果冻
  // 配方：fruitsdelight:emptying/kiwi_jello_emptying
  event.json("fruitsdelight:recipe/emptying/kiwi_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:kiwi_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:kiwi_jello"
      }
    ]
  })

  // 猕猴桃饮 → minecraft:glass_bottle + 250mB 猕猴桃饮
  // 配方：fruitsdelight:emptying/kiwi_juice_emptying
  event.json("fruitsdelight:recipe/emptying/kiwi_juice_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:kiwi_juice"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:kiwi_juice"
      }
    ]
  })

  // 柠檬果酱 → minecraft:glass_bottle + 125mB 柠檬果酱
  // 配方：fruitsdelight:emptying/lemon_jam_emptying
  event.json("fruitsdelight:recipe/emptying/lemon_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:lemon_jam"
      }
    ]
  })

  // 柠檬果冻 → minecraft:bowl + 125mB 柠檬果冻
  // 配方：fruitsdelight:emptying/lemon_jello_emptying
  event.json("fruitsdelight:recipe/emptying/lemon_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:lemon_jello"
      }
    ]
  })

  // 柠檬水 → minecraft:glass_bottle + 250mB 柠檬水
  // 配方：fruitsdelight:emptying/lemon_juice_emptying
  event.json("fruitsdelight:recipe/emptying/lemon_juice_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_juice"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:lemon_juice"
      }
    ]
  })

  // 荔枝樱花饮 → minecraft:glass_bottle + 250mB 荔枝樱花饮
  // 配方：fruitsdelight:emptying/lychee_cherry_tea_emptying
  event.json("fruitsdelight:recipe/emptying/lychee_cherry_tea_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:lychee_cherry_tea"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:lychee_cherry_tea"
      }
    ]
  })

  // 荔枝果酱 → minecraft:glass_bottle + 125mB 荔枝果酱
  // 配方：fruitsdelight:emptying/lychee_jam_emptying
  event.json("fruitsdelight:recipe/emptying/lychee_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:lychee_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:lychee_jam"
      }
    ]
  })

  // 荔枝果冻 → minecraft:bowl + 125mB 荔枝果冻
  // 配方：fruitsdelight:emptying/lychee_jello_emptying
  event.json("fruitsdelight:recipe/emptying/lychee_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:lychee_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:lychee_jello"
      }
    ]
  })

  // 芒果果酱 → minecraft:glass_bottle + 125mB 芒果果酱
  // 配方：fruitsdelight:emptying/mango_jam_emptying
  event.json("fruitsdelight:recipe/emptying/mango_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:mango_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:mango_jam"
      }
    ]
  })

  // 芒果果冻 → minecraft:bowl + 125mB 芒果果冻
  // 配方：fruitsdelight:emptying/mango_jello_emptying
  event.json("fruitsdelight:recipe/emptying/mango_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:mango_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:mango_jello"
      }
    ]
  })

  // 芒果茶 → minecraft:glass_bottle + 250mB 芒果茶
  // 配方：fruitsdelight:emptying/mango_tea_emptying
  event.json("fruitsdelight:recipe/emptying/mango_tea_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:mango_tea"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:mango_tea"
      }
    ]
  })

  // 山竹果酱 → minecraft:glass_bottle + 125mB 山竹果酱
  // 配方：fruitsdelight:emptying/mangosteen_jam_emptying
  event.json("fruitsdelight:recipe/emptying/mangosteen_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:mangosteen_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:mangosteen_jam"
      }
    ]
  })

  // 山竹果冻 → minecraft:bowl + 125mB 山竹果冻
  // 配方：fruitsdelight:emptying/mangosteen_jello_emptying
  event.json("fruitsdelight:recipe/emptying/mangosteen_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:mangosteen_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:mangosteen_jello"
      }
    ]
  })

  // 山竹清茶 → minecraft:glass_bottle + 250mB 山竹清茶
  // 配方：fruitsdelight:emptying/mangosteen_tea_emptying
  event.json("fruitsdelight:recipe/emptying/mangosteen_tea_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:mangosteen_tea"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:mangosteen_tea"
      }
    ]
  })

  // 西瓜果酱 → minecraft:glass_bottle + 125mB 西瓜果酱
  // 配方：fruitsdelight:emptying/melon_jam_emptying
  event.json("fruitsdelight:recipe/emptying/melon_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:melon_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:melon_jam"
      }
    ]
  })

  // 西瓜果冻 → minecraft:bowl + 125mB 西瓜果冻
  // 配方：fruitsdelight:emptying/melon_jello_emptying
  event.json("fruitsdelight:recipe/emptying/melon_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:melon_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:melon_jello"
      }
    ]
  })

  // 橘子果酱 → minecraft:glass_bottle + 125mB 橘子果酱
  // 配方：fruitsdelight:emptying/orange_jam_emptying
  event.json("fruitsdelight:recipe/emptying/orange_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:orange_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:orange_jam"
      }
    ]
  })

  // 橘子果冻 → minecraft:bowl + 125mB 橘子果冻
  // 配方：fruitsdelight:emptying/orange_jello_emptying
  event.json("fruitsdelight:recipe/emptying/orange_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:orange_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:orange_jello"
      }
    ]
  })

  // 橘子汁 → minecraft:glass_bottle + 250mB 橘子汁
  // 配方：fruitsdelight:emptying/orange_juice_emptying
  event.json("fruitsdelight:recipe/emptying/orange_juice_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:orange_juice"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:orange_juice"
      }
    ]
  })

  // 水蜜桃果酱 → minecraft:glass_bottle + 125mB 水蜜桃果酱
  // 配方：fruitsdelight:emptying/peach_jam_emptying
  event.json("fruitsdelight:recipe/emptying/peach_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:peach_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:peach_jam"
      }
    ]
  })

  // 水蜜桃果冻 → minecraft:bowl + 125mB 水蜜桃果冻
  // 配方：fruitsdelight:emptying/peach_jello_emptying
  event.json("fruitsdelight:recipe/emptying/peach_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:peach_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:peach_jello"
      }
    ]
  })

  // 白桃乌龙茶 → minecraft:glass_bottle + 250mB 白桃乌龙茶
  // 配方：fruitsdelight:emptying/peach_tea_emptying
  event.json("fruitsdelight:recipe/emptying/peach_tea_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:peach_tea"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:peach_tea"
      }
    ]
  })

  // 梨子果酱 → minecraft:glass_bottle + 125mB 梨子果酱
  // 配方：fruitsdelight:emptying/pear_jam_emptying
  event.json("fruitsdelight:recipe/emptying/pear_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:pear_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:pear_jam"
      }
    ]
  })

  // 梨子果冻 → minecraft:bowl + 125mB 梨子果冻
  // 配方：fruitsdelight:emptying/pear_jello_emptying
  event.json("fruitsdelight:recipe/emptying/pear_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:pear_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:pear_jello"
      }
    ]
  })

  // 梨汁 → minecraft:glass_bottle + 250mB 梨汁
  // 配方：fruitsdelight:emptying/pear_juice_emptying
  event.json("fruitsdelight:recipe/emptying/pear_juice_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:pear_juice"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 250,
        "id": "fruitsdelight:pear_juice"
      }
    ]
  })

  // 柿子果酱 → minecraft:glass_bottle + 125mB 柿子果酱
  // 配方：fruitsdelight:emptying/persimmon_jam_emptying
  event.json("fruitsdelight:recipe/emptying/persimmon_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:persimmon_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:persimmon_jam"
      }
    ]
  })

  // 柿子果冻 → minecraft:bowl + 125mB 柿子果冻
  // 配方：fruitsdelight:emptying/persimmon_jello_emptying
  event.json("fruitsdelight:recipe/emptying/persimmon_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:persimmon_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:persimmon_jello"
      }
    ]
  })

  // 菠萝果酱 → minecraft:glass_bottle + 125mB 菠萝果酱
  // 配方：fruitsdelight:emptying/pineapple_jam_emptying
  event.json("fruitsdelight:recipe/emptying/pineapple_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:pineapple_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:pineapple_jam"
      }
    ]
  })

  // 菠萝果冻 → minecraft:bowl + 125mB 菠萝果冻
  // 配方：fruitsdelight:emptying/pineapple_jello_emptying
  event.json("fruitsdelight:recipe/emptying/pineapple_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:pineapple_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:pineapple_jello"
      }
    ]
  })

  // 浆果果酱 → minecraft:glass_bottle + 125mB 浆果果酱
  // 配方：fruitsdelight:emptying/sweetberry_jam_emptying
  event.json("fruitsdelight:recipe/emptying/sweetberry_jam_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:sweetberry_jam"
      }
    ],
    "results": [
      {
        "id": "minecraft:glass_bottle"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:sweetberry_jam"
      }
    ]
  })

  // 浆果果冻 → minecraft:bowl + 125mB 浆果果冻
  // 配方：fruitsdelight:emptying/sweetberry_jello_emptying
  event.json("fruitsdelight:recipe/emptying/sweetberry_jello_emptying.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:emptying",
    "ingredients": [
      {
        "item": "fruitsdelight:sweetberry_jello"
      }
    ],
    "results": [
      {
        "id": "minecraft:bowl"
      },
      {
        "amount": 125,
        "id": "fruitsdelight:sweetberry_jello"
      }
    ]
  })
})
