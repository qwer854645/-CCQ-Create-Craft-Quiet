// 水果乐事：搅拌
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 黄柠檬片 + minecraft:sugar + minecraft:apple + minecraft:apple + 100mB minecraft:water → 125mB 苹果果酱
  // 配方：fruitsdelight:mixing/flowing_apple_jam
  event.json("fruitsdelight:recipe/mixing/flowing_apple_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:apple"
      },
      {
        "item": "minecraft:apple"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:apple_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 苹果果酱 → 125mB 苹果果冻
  // 配方：fruitsdelight:mixing/flowing_apple_jello
  event.json("fruitsdelight:recipe/mixing/flowing_apple_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:apple_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:apple_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/bayberry + #c:foods/fruits/bayberry + #c:foods/fruits/bayberry + #c:foods/fruits/bayberry + 100mB minecraft:water → 125mB 杨梅果酱
  // 配方：fruitsdelight:mixing/flowing_bayberry_jam
  event.json("fruitsdelight:recipe/mixing/flowing_bayberry_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/bayberry"
      },
      {
        "tag": "c:foods/fruits/bayberry"
      },
      {
        "tag": "c:foods/fruits/bayberry"
      },
      {
        "tag": "c:foods/fruits/bayberry"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:bayberry_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 杨梅果酱 → 125mB 杨梅果冻
  // 配方：fruitsdelight:mixing/flowing_bayberry_jello
  event.json("fruitsdelight:recipe/mixing/flowing_bayberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bayberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:bayberry_jello"
      }
    ]
  })

  // #c:foods/fruits/bayberry + #c:foods/fruits/bayberry + #c:foods/fruits/bayberry + #c:foods/fruits/bayberry + 250mB minecraft:water → 250mB 杨梅汁
  // 配方：fruitsdelight:mixing/flowing_bayberry_soup
  event.json("fruitsdelight:recipe/mixing/flowing_bayberry_soup.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "tag": "c:foods/fruits/bayberry"
      },
      {
        "tag": "c:foods/fruits/bayberry"
      },
      {
        "tag": "c:foods/fruits/bayberry"
      },
      {
        "tag": "c:foods/fruits/bayberry"
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
        "id": "fruitsdelight:bayberry_soup"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/blueberry + #c:foods/fruits/blueberry + #c:foods/fruits/blueberry + #c:foods/fruits/blueberry + 100mB minecraft:water → 125mB 蓝莓果酱
  // 配方：fruitsdelight:mixing/flowing_blueberry_jam
  event.json("fruitsdelight:recipe/mixing/flowing_blueberry_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/blueberry"
      },
      {
        "tag": "c:foods/fruits/blueberry"
      },
      {
        "tag": "c:foods/fruits/blueberry"
      },
      {
        "tag": "c:foods/fruits/blueberry"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:blueberry_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 蓝莓果酱 → 125mB 蓝莓果冻
  // 配方：fruitsdelight:mixing/flowing_blueberry_jello
  event.json("fruitsdelight:recipe/mixing/flowing_blueberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:blueberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:blueberry_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + minecraft:chorus_fruit + minecraft:chorus_fruit + 100mB minecraft:water → 125mB 紫颂果果酱
  // 配方：fruitsdelight:mixing/flowing_chorus_jam
  event.json("fruitsdelight:recipe/mixing/flowing_chorus_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:chorus_fruit"
      },
      {
        "item": "minecraft:chorus_fruit"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:chorus_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 紫颂果果酱 → 125mB 紫颂果果冻
  // 配方：fruitsdelight:mixing/flowing_chorus_jello
  event.json("fruitsdelight:recipe/mixing/flowing_chorus_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:chorus_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:chorus_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/cranberry + #c:foods/fruits/cranberry + #c:foods/fruits/cranberry + #c:foods/fruits/cranberry + 100mB minecraft:water → 125mB 蔓越莓果酱
  // 配方：fruitsdelight:mixing/flowing_cranberry_jam
  event.json("fruitsdelight:recipe/mixing/flowing_cranberry_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/cranberry"
      },
      {
        "tag": "c:foods/fruits/cranberry"
      },
      {
        "tag": "c:foods/fruits/cranberry"
      },
      {
        "tag": "c:foods/fruits/cranberry"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:cranberry_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 蔓越莓果酱 → 125mB 蔓越莓果冻
  // 配方：fruitsdelight:mixing/flowing_cranberry_jello
  event.json("fruitsdelight:recipe/mixing/flowing_cranberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:cranberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:cranberry_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + 榴莲肉 + 榴莲肉 + 100mB minecraft:water → 125mB 榴莲果酱
  // 配方：fruitsdelight:mixing/flowing_durian_jam
  event.json("fruitsdelight:recipe/mixing/flowing_durian_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "fruitsdelight:durian_flesh"
      },
      {
        "item": "fruitsdelight:durian_flesh"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:durian_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 榴莲果酱 → 125mB 榴莲果冻
  // 配方：fruitsdelight:mixing/flowing_durian_jello
  event.json("fruitsdelight:recipe/mixing/flowing_durian_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:durian_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:durian_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/fig + #c:foods/fruits/fig + 100mB minecraft:water → 125mB 无花果果酱
  // 配方：fruitsdelight:mixing/flowing_fig_jam
  event.json("fruitsdelight:recipe/mixing/flowing_fig_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/fig"
      },
      {
        "tag": "c:foods/fruits/fig"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:fig_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 无花果果酱 → 125mB 无花果果冻
  // 配方：fruitsdelight:mixing/flowing_fig_jello
  event.json("fruitsdelight:recipe/mixing/flowing_fig_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:fig_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:fig_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + minecraft:glow_berries + minecraft:glow_berries + minecraft:glow_berries + minecraft:glow_berries + 100mB minecraft:water → 125mB 发光浆果果酱
  // 配方：fruitsdelight:mixing/flowing_glowberry_jam
  event.json("fruitsdelight:recipe/mixing/flowing_glowberry_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:glow_berries"
      },
      {
        "item": "minecraft:glow_berries"
      },
      {
        "item": "minecraft:glow_berries"
      },
      {
        "item": "minecraft:glow_berries"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:glowberry_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 发光浆果果酱 → 125mB 发光浆果果冻
  // 配方：fruitsdelight:mixing/flowing_glowberry_jello
  event.json("fruitsdelight:recipe/mixing/flowing_glowberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:glowberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:glowberry_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + 哈密瓜片 + 哈密瓜片 + 哈密瓜片 + 哈密瓜片 + 100mB minecraft:water → 125mB 哈密瓜果酱
  // 配方：fruitsdelight:mixing/flowing_hamimelon_jam
  event.json("fruitsdelight:recipe/mixing/flowing_hamimelon_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "fruitsdelight:hamimelon_slice"
      },
      {
        "item": "fruitsdelight:hamimelon_slice"
      },
      {
        "item": "fruitsdelight:hamimelon_slice"
      },
      {
        "item": "fruitsdelight:hamimelon_slice"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:hamimelon_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 哈密瓜果酱 → 125mB 哈密瓜果冻
  // 配方：fruitsdelight:mixing/flowing_hamimelon_jello
  event.json("fruitsdelight:recipe/mixing/flowing_hamimelon_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hamimelon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:hamimelon_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/hawberry + #c:foods/fruits/hawberry + #c:foods/fruits/hawberry + #c:foods/fruits/hawberry + 100mB minecraft:water → 125mB 山楂果酱
  // 配方：fruitsdelight:mixing/flowing_hawberry_jam
  event.json("fruitsdelight:recipe/mixing/flowing_hawberry_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/hawberry"
      },
      {
        "tag": "c:foods/fruits/hawberry"
      },
      {
        "tag": "c:foods/fruits/hawberry"
      },
      {
        "tag": "c:foods/fruits/hawberry"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:hawberry_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 山楂果酱 → 125mB 山楂果冻
  // 配方：fruitsdelight:mixing/flowing_hawberry_jello
  event.json("fruitsdelight:recipe/mixing/flowing_hawberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hawberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:hawberry_jello"
      }
    ]
  })

  // minecraft:sugar + #minecraft:leaves + #c:foods/fruits/hawberry + #c:foods/fruits/hawberry + #c:foods/fruits/hawberry + #c:foods/fruits/hawberry + 250mB minecraft:water → 250mB 山楂茶
  // 配方：fruitsdelight:mixing/flowing_hawberry_tea
  event.json("fruitsdelight:recipe/mixing/flowing_hawberry_tea.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "minecraft:leaves"
      },
      {
        "tag": "c:foods/fruits/hawberry"
      },
      {
        "tag": "c:foods/fruits/hawberry"
      },
      {
        "tag": "c:foods/fruits/hawberry"
      },
      {
        "tag": "c:foods/fruits/hawberry"
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
        "id": "fruitsdelight:hawberry_tea"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/kiwi + #c:foods/fruits/kiwi + 100mB minecraft:water → 125mB 猕猴桃果酱
  // 配方：fruitsdelight:mixing/flowing_kiwi_jam
  event.json("fruitsdelight:recipe/mixing/flowing_kiwi_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/kiwi"
      },
      {
        "tag": "c:foods/fruits/kiwi"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:kiwi_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 猕猴桃果酱 → 125mB 猕猴桃果冻
  // 配方：fruitsdelight:mixing/flowing_kiwi_jello
  event.json("fruitsdelight:recipe/mixing/flowing_kiwi_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:kiwi_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:kiwi_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/lemon + #c:foods/fruits/lemon + 100mB minecraft:water → 125mB 柠檬果酱
  // 配方：fruitsdelight:mixing/flowing_lemon_jam
  event.json("fruitsdelight:recipe/mixing/flowing_lemon_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/lemon"
      },
      {
        "tag": "c:foods/fruits/lemon"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:lemon_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 柠檬果酱 → 125mB 柠檬果冻
  // 配方：fruitsdelight:mixing/flowing_lemon_jello
  event.json("fruitsdelight:recipe/mixing/flowing_lemon_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lemon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:lemon_jello"
      }
    ]
  })

  // minecraft:sugar + #c:foods/fruits/lemon + #c:foods/fruits/lemon + 250mB minecraft:water → 250mB 柠檬水
  // 配方：fruitsdelight:mixing/flowing_lemon_juice
  event.json("fruitsdelight:recipe/mixing/flowing_lemon_juice.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/lemon"
      },
      {
        "tag": "c:foods/fruits/lemon"
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
        "id": "fruitsdelight:lemon_juice"
      }
    ]
  })

  // minecraft:sugar + minecraft:cherry_leaves + #c:foods/fruits/lychee + #c:foods/fruits/lychee + #c:foods/fruits/lychee + #c:foods/fruits/lychee + 250mB minecraft:water → 250mB 荔枝樱花饮
  // 配方：fruitsdelight:mixing/flowing_lychee_cherry_tea
  event.json("fruitsdelight:recipe/mixing/flowing_lychee_cherry_tea.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:cherry_leaves"
      },
      {
        "tag": "c:foods/fruits/lychee"
      },
      {
        "tag": "c:foods/fruits/lychee"
      },
      {
        "tag": "c:foods/fruits/lychee"
      },
      {
        "tag": "c:foods/fruits/lychee"
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
        "id": "fruitsdelight:lychee_cherry_tea"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/lychee + #c:foods/fruits/lychee + #c:foods/fruits/lychee + #c:foods/fruits/lychee + 100mB minecraft:water → 125mB 荔枝果酱
  // 配方：fruitsdelight:mixing/flowing_lychee_jam
  event.json("fruitsdelight:recipe/mixing/flowing_lychee_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/lychee"
      },
      {
        "tag": "c:foods/fruits/lychee"
      },
      {
        "tag": "c:foods/fruits/lychee"
      },
      {
        "tag": "c:foods/fruits/lychee"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:lychee_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 荔枝果酱 → 125mB 荔枝果冻
  // 配方：fruitsdelight:mixing/flowing_lychee_jello
  event.json("fruitsdelight:recipe/mixing/flowing_lychee_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lychee_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:lychee_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/mango + #c:foods/fruits/mango + 100mB minecraft:water → 125mB 芒果果酱
  // 配方：fruitsdelight:mixing/flowing_mango_jam
  event.json("fruitsdelight:recipe/mixing/flowing_mango_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/mango"
      },
      {
        "tag": "c:foods/fruits/mango"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:mango_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 芒果果酱 → 125mB 芒果果冻
  // 配方：fruitsdelight:mixing/flowing_mango_jello
  event.json("fruitsdelight:recipe/mixing/flowing_mango_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mango_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:mango_jello"
      }
    ]
  })

  // minecraft:sugar + #minecraft:leaves + #c:foods/fruits/mango + #c:foods/fruits/mango + 250mB minecraft:water → 250mB 芒果茶
  // 配方：fruitsdelight:mixing/flowing_mango_tea
  event.json("fruitsdelight:recipe/mixing/flowing_mango_tea.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "minecraft:leaves"
      },
      {
        "tag": "c:foods/fruits/mango"
      },
      {
        "tag": "c:foods/fruits/mango"
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
        "id": "fruitsdelight:mango_tea"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/mangosteen + #c:foods/fruits/mangosteen + 100mB minecraft:water → 125mB 山竹果酱
  // 配方：fruitsdelight:mixing/flowing_mangosteen_jam
  event.json("fruitsdelight:recipe/mixing/flowing_mangosteen_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/mangosteen"
      },
      {
        "tag": "c:foods/fruits/mangosteen"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:mangosteen_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 山竹果酱 → 125mB 山竹果冻
  // 配方：fruitsdelight:mixing/flowing_mangosteen_jello
  event.json("fruitsdelight:recipe/mixing/flowing_mangosteen_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mangosteen_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:mangosteen_jello"
      }
    ]
  })

  // minecraft:sugar + #minecraft:leaves + #c:foods/fruits/mangosteen + #c:foods/fruits/mangosteen + 250mB minecraft:water → 250mB 山竹清茶
  // 配方：fruitsdelight:mixing/flowing_mangosteen_tea
  event.json("fruitsdelight:recipe/mixing/flowing_mangosteen_tea.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "minecraft:leaves"
      },
      {
        "tag": "c:foods/fruits/mangosteen"
      },
      {
        "tag": "c:foods/fruits/mangosteen"
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
        "id": "fruitsdelight:mangosteen_tea"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + minecraft:melon_slice + minecraft:melon_slice + minecraft:melon_slice + minecraft:melon_slice + 100mB minecraft:water → 125mB 西瓜果酱
  // 配方：fruitsdelight:mixing/flowing_melon_jam
  event.json("fruitsdelight:recipe/mixing/flowing_melon_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:melon_slice"
      },
      {
        "item": "minecraft:melon_slice"
      },
      {
        "item": "minecraft:melon_slice"
      },
      {
        "item": "minecraft:melon_slice"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:melon_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 西瓜果酱 → 125mB 西瓜果冻
  // 配方：fruitsdelight:mixing/flowing_melon_jello
  event.json("fruitsdelight:recipe/mixing/flowing_melon_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:melon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:melon_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/orange + #c:foods/fruits/orange + 100mB minecraft:water → 125mB 橘子果酱
  // 配方：fruitsdelight:mixing/flowing_orange_jam
  event.json("fruitsdelight:recipe/mixing/flowing_orange_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/orange"
      },
      {
        "tag": "c:foods/fruits/orange"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:orange_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 橘子果酱 → 125mB 橘子果冻
  // 配方：fruitsdelight:mixing/flowing_orange_jello
  event.json("fruitsdelight:recipe/mixing/flowing_orange_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:orange_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:orange_jello"
      }
    ]
  })

  // minecraft:sugar + #c:foods/fruits/orange + #c:foods/fruits/orange + 250mB minecraft:water → 250mB 橘子汁
  // 配方：fruitsdelight:mixing/flowing_orange_juice
  event.json("fruitsdelight:recipe/mixing/flowing_orange_juice.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/orange"
      },
      {
        "tag": "c:foods/fruits/orange"
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
        "id": "fruitsdelight:orange_juice"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/peach + #c:foods/fruits/peach + 100mB minecraft:water → 125mB 水蜜桃果酱
  // 配方：fruitsdelight:mixing/flowing_peach_jam
  event.json("fruitsdelight:recipe/mixing/flowing_peach_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/peach"
      },
      {
        "tag": "c:foods/fruits/peach"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:peach_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 水蜜桃果酱 → 125mB 水蜜桃果冻
  // 配方：fruitsdelight:mixing/flowing_peach_jello
  event.json("fruitsdelight:recipe/mixing/flowing_peach_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:peach_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:peach_jello"
      }
    ]
  })

  // minecraft:sugar + #minecraft:leaves + #c:foods/fruits/peach + #c:foods/fruits/peach + 250mB minecraft:water → 250mB 白桃乌龙茶
  // 配方：fruitsdelight:mixing/flowing_peach_tea
  event.json("fruitsdelight:recipe/mixing/flowing_peach_tea.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "minecraft:leaves"
      },
      {
        "tag": "c:foods/fruits/peach"
      },
      {
        "tag": "c:foods/fruits/peach"
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
        "id": "fruitsdelight:peach_tea"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/pear + #c:foods/fruits/pear + 100mB minecraft:water → 125mB 梨子果酱
  // 配方：fruitsdelight:mixing/flowing_pear_jam
  event.json("fruitsdelight:recipe/mixing/flowing_pear_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/pear"
      },
      {
        "tag": "c:foods/fruits/pear"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:pear_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 梨子果酱 → 125mB 梨子果冻
  // 配方：fruitsdelight:mixing/flowing_pear_jello
  event.json("fruitsdelight:recipe/mixing/flowing_pear_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pear_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:pear_jello"
      }
    ]
  })

  // minecraft:sugar + #c:foods/fruits/pear + #c:foods/fruits/pear + 250mB minecraft:water → 250mB 梨汁
  // 配方：fruitsdelight:mixing/flowing_pear_juice
  event.json("fruitsdelight:recipe/mixing/flowing_pear_juice.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/pear"
      },
      {
        "tag": "c:foods/fruits/pear"
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
        "id": "fruitsdelight:pear_juice"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + #c:foods/fruits/persimmon + #c:foods/fruits/persimmon + 100mB minecraft:water → 125mB 柿子果酱
  // 配方：fruitsdelight:mixing/flowing_persimmon_jam
  event.json("fruitsdelight:recipe/mixing/flowing_persimmon_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "tag": "c:foods/fruits/persimmon"
      },
      {
        "tag": "c:foods/fruits/persimmon"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:persimmon_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 柿子果酱 → 125mB 柿子果冻
  // 配方：fruitsdelight:mixing/flowing_persimmon_jello
  event.json("fruitsdelight:recipe/mixing/flowing_persimmon_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:persimmon_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:persimmon_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + 菠萝切片 + 菠萝切片 + 菠萝切片 + 菠萝切片 + 100mB minecraft:water → 125mB 菠萝果酱
  // 配方：fruitsdelight:mixing/flowing_pineapple_jam
  event.json("fruitsdelight:recipe/mixing/flowing_pineapple_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "fruitsdelight:pineapple_slice"
      },
      {
        "item": "fruitsdelight:pineapple_slice"
      },
      {
        "item": "fruitsdelight:pineapple_slice"
      },
      {
        "item": "fruitsdelight:pineapple_slice"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:pineapple_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 菠萝果酱 → 125mB 菠萝果冻
  // 配方：fruitsdelight:mixing/flowing_pineapple_jello
  event.json("fruitsdelight:recipe/mixing/flowing_pineapple_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pineapple_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:pineapple_jello"
      }
    ]
  })

  // 黄柠檬片 + minecraft:sugar + minecraft:sweet_berries + minecraft:sweet_berries + minecraft:sweet_berries + minecraft:sweet_berries + 100mB minecraft:water → 125mB 浆果果酱
  // 配方：fruitsdelight:mixing/flowing_sweetberry_jam
  event.json("fruitsdelight:recipe/mixing/flowing_sweetberry_jam.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "fruitsdelight:lemon_slice"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:sweet_berries"
      },
      {
        "item": "minecraft:sweet_berries"
      },
      {
        "item": "minecraft:sweet_berries"
      },
      {
        "item": "minecraft:sweet_berries"
      },
      {
        "type": "neoforge:single",
        "fluid": "minecraft:water",
        "amount": 100
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:sweetberry_jam"
      }
    ]
  })

  // minecraft:slime_ball + 125mB 浆果果酱 → 125mB 浆果果冻
  // 配方：fruitsdelight:mixing/flowing_sweetberry_jello
  event.json("fruitsdelight:recipe/mixing/flowing_sweetberry_jello.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:slime_ball"
      },
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:sweetberry_jam",
        "amount": 125
      }
    ],
    "results": [
      {
        "amount": 125,
        "id": "fruitsdelight:sweetberry_jello"
      }
    ]
  })
})
