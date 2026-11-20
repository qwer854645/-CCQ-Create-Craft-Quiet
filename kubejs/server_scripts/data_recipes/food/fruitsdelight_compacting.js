// 水果乐事：压块
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 1000mB 苹果果酱 → 苹果果酱块
  // 配方：fruitsdelight:compacting/apple_jam_block
  event.json("fruitsdelight:recipe/compacting/apple_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:apple_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:apple_jam_block"
      }
    ]
  })

  // 1000mB 苹果果冻 → 苹果果冻块
  // 配方：fruitsdelight:compacting/apple_jello_block
  event.json("fruitsdelight:recipe/compacting/apple_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:apple_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:apple_jello_block"
      }
    ]
  })

  // 1000mB 杨梅果酱 → 杨梅果酱块
  // 配方：fruitsdelight:compacting/bayberry_jam_block
  event.json("fruitsdelight:recipe/compacting/bayberry_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bayberry_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:bayberry_jam_block"
      }
    ]
  })

  // 1000mB 杨梅果冻 → 杨梅果冻块
  // 配方：fruitsdelight:compacting/bayberry_jello_block
  event.json("fruitsdelight:recipe/compacting/bayberry_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:bayberry_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:bayberry_jello_block"
      }
    ]
  })

  // 1000mB 蓝莓果酱 → 蓝莓果酱块
  // 配方：fruitsdelight:compacting/blueberry_jam_block
  event.json("fruitsdelight:recipe/compacting/blueberry_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:blueberry_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:blueberry_jam_block"
      }
    ]
  })

  // 1000mB 蓝莓果冻 → 蓝莓果冻块
  // 配方：fruitsdelight:compacting/blueberry_jello_block
  event.json("fruitsdelight:recipe/compacting/blueberry_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:blueberry_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:blueberry_jello_block"
      }
    ]
  })

  // 1000mB 紫颂果果酱 → 紫颂果果酱块
  // 配方：fruitsdelight:compacting/chorus_jam_block
  event.json("fruitsdelight:recipe/compacting/chorus_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:chorus_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:chorus_jam_block"
      }
    ]
  })

  // 1000mB 紫颂果果冻 → 紫颂果果冻块
  // 配方：fruitsdelight:compacting/chorus_jello_block
  event.json("fruitsdelight:recipe/compacting/chorus_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:chorus_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:chorus_jello_block"
      }
    ]
  })

  // 1000mB 蔓越莓果酱 → 蔓越莓果酱块
  // 配方：fruitsdelight:compacting/cranberry_jam_block
  event.json("fruitsdelight:recipe/compacting/cranberry_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:cranberry_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:cranberry_jam_block"
      }
    ]
  })

  // 1000mB 蔓越莓果冻 → 蔓越莓果冻块
  // 配方：fruitsdelight:compacting/cranberry_jello_block
  event.json("fruitsdelight:recipe/compacting/cranberry_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:cranberry_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:cranberry_jello_block"
      }
    ]
  })

  // 1000mB 榴莲果酱 → 榴莲果酱块
  // 配方：fruitsdelight:compacting/durian_jam_block
  event.json("fruitsdelight:recipe/compacting/durian_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:durian_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:durian_jam_block"
      }
    ]
  })

  // 1000mB 榴莲果冻 → 榴莲果冻块
  // 配方：fruitsdelight:compacting/durian_jello_block
  event.json("fruitsdelight:recipe/compacting/durian_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:durian_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:durian_jello_block"
      }
    ]
  })

  // 1000mB 无花果果酱 → 无花果果酱块
  // 配方：fruitsdelight:compacting/fig_jam_block
  event.json("fruitsdelight:recipe/compacting/fig_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:fig_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:fig_jam_block"
      }
    ]
  })

  // 1000mB 无花果果冻 → 无花果果冻块
  // 配方：fruitsdelight:compacting/fig_jello_block
  event.json("fruitsdelight:recipe/compacting/fig_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:fig_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:fig_jello_block"
      }
    ]
  })

  // 1000mB 发光浆果果酱 → 发光浆果果酱块
  // 配方：fruitsdelight:compacting/glowberry_jam_block
  event.json("fruitsdelight:recipe/compacting/glowberry_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:glowberry_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:glowberry_jam_block"
      }
    ]
  })

  // 1000mB 发光浆果果冻 → 发光浆果果冻块
  // 配方：fruitsdelight:compacting/glowberry_jello_block
  event.json("fruitsdelight:recipe/compacting/glowberry_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:glowberry_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:glowberry_jello_block"
      }
    ]
  })

  // 1000mB 哈密瓜果酱 → 哈密瓜果酱块
  // 配方：fruitsdelight:compacting/hamimelon_jam_block
  event.json("fruitsdelight:recipe/compacting/hamimelon_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hamimelon_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hamimelon_jam_block"
      }
    ]
  })

  // 1000mB 哈密瓜果冻 → 哈密瓜果冻块
  // 配方：fruitsdelight:compacting/hamimelon_jello_block
  event.json("fruitsdelight:recipe/compacting/hamimelon_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hamimelon_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hamimelon_jello_block"
      }
    ]
  })

  // 1000mB 山楂果酱 → 山楂果酱块
  // 配方：fruitsdelight:compacting/hawberry_jam_block
  event.json("fruitsdelight:recipe/compacting/hawberry_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hawberry_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_jam_block"
      }
    ]
  })

  // 1000mB 山楂果冻 → 山楂果冻块
  // 配方：fruitsdelight:compacting/hawberry_jello_block
  event.json("fruitsdelight:recipe/compacting/hawberry_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:hawberry_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_jello_block"
      }
    ]
  })

  // 山楂 + 山楂 + 山楂 + minecraft:sugar → 果丹皮
  // 配方：fruitsdelight:compacting/hawberry_sheet
  event.json("fruitsdelight:recipe/compacting/hawberry_sheet.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "item": "fruitsdelight:hawberry"
      },
      {
        "item": "fruitsdelight:hawberry"
      },
      {
        "item": "fruitsdelight:hawberry"
      },
      {
        "item": "minecraft:sugar"
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:hawberry_sheet"
      }
    ]
  })

  // 1000mB 猕猴桃果酱 → 猕猴桃果酱块
  // 配方：fruitsdelight:compacting/kiwi_jam_block
  event.json("fruitsdelight:recipe/compacting/kiwi_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:kiwi_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:kiwi_jam_block"
      }
    ]
  })

  // 1000mB 猕猴桃果冻 → 猕猴桃果冻块
  // 配方：fruitsdelight:compacting/kiwi_jello_block
  event.json("fruitsdelight:recipe/compacting/kiwi_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:kiwi_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:kiwi_jello_block"
      }
    ]
  })

  // 1000mB 柠檬果酱 → 柠檬果酱块
  // 配方：fruitsdelight:compacting/lemon_jam_block
  event.json("fruitsdelight:recipe/compacting/lemon_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lemon_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lemon_jam_block"
      }
    ]
  })

  // 1000mB 柠檬果冻 → 柠檬果冻块
  // 配方：fruitsdelight:compacting/lemon_jello_block
  event.json("fruitsdelight:recipe/compacting/lemon_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lemon_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lemon_jello_block"
      }
    ]
  })

  // 1000mB 荔枝果酱 → 荔枝果酱块
  // 配方：fruitsdelight:compacting/lychee_jam_block
  event.json("fruitsdelight:recipe/compacting/lychee_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lychee_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lychee_jam_block"
      }
    ]
  })

  // 1000mB 荔枝果冻 → 荔枝果冻块
  // 配方：fruitsdelight:compacting/lychee_jello_block
  event.json("fruitsdelight:recipe/compacting/lychee_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:lychee_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:lychee_jello_block"
      }
    ]
  })

  // 1000mB 芒果果酱 → 芒果果酱块
  // 配方：fruitsdelight:compacting/mango_jam_block
  event.json("fruitsdelight:recipe/compacting/mango_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mango_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mango_jam_block"
      }
    ]
  })

  // 1000mB 芒果果冻 → 芒果果冻块
  // 配方：fruitsdelight:compacting/mango_jello_block
  event.json("fruitsdelight:recipe/compacting/mango_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mango_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mango_jello_block"
      }
    ]
  })

  // 1000mB 山竹果酱 → 山竹果酱块
  // 配方：fruitsdelight:compacting/mangosteen_jam_block
  event.json("fruitsdelight:recipe/compacting/mangosteen_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mangosteen_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mangosteen_jam_block"
      }
    ]
  })

  // 1000mB 山竹果冻 → 山竹果冻块
  // 配方：fruitsdelight:compacting/mangosteen_jello_block
  event.json("fruitsdelight:recipe/compacting/mangosteen_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:mangosteen_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:mangosteen_jello_block"
      }
    ]
  })

  // 1000mB 西瓜果酱 → 西瓜果酱块
  // 配方：fruitsdelight:compacting/melon_jam_block
  event.json("fruitsdelight:recipe/compacting/melon_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:melon_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:melon_jam_block"
      }
    ]
  })

  // 1000mB 西瓜果冻 → 西瓜果冻块
  // 配方：fruitsdelight:compacting/melon_jello_block
  event.json("fruitsdelight:recipe/compacting/melon_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:melon_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:melon_jello_block"
      }
    ]
  })

  // 1000mB 橘子果酱 → 橘子果酱块
  // 配方：fruitsdelight:compacting/orange_jam_block
  event.json("fruitsdelight:recipe/compacting/orange_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:orange_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:orange_jam_block"
      }
    ]
  })

  // 1000mB 橘子果冻 → 橘子果冻块
  // 配方：fruitsdelight:compacting/orange_jello_block
  event.json("fruitsdelight:recipe/compacting/orange_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:orange_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:orange_jello_block"
      }
    ]
  })

  // 1000mB 水蜜桃果酱 → 水蜜桃果酱块
  // 配方：fruitsdelight:compacting/peach_jam_block
  event.json("fruitsdelight:recipe/compacting/peach_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:peach_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:peach_jam_block"
      }
    ]
  })

  // 1000mB 水蜜桃果冻 → 水蜜桃果冻块
  // 配方：fruitsdelight:compacting/peach_jello_block
  event.json("fruitsdelight:recipe/compacting/peach_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:peach_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:peach_jello_block"
      }
    ]
  })

  // 1000mB 梨子果酱 → 梨子果酱块
  // 配方：fruitsdelight:compacting/pear_jam_block
  event.json("fruitsdelight:recipe/compacting/pear_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pear_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pear_jam_block"
      }
    ]
  })

  // 1000mB 梨子果冻 → 梨子果冻块
  // 配方：fruitsdelight:compacting/pear_jello_block
  event.json("fruitsdelight:recipe/compacting/pear_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pear_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pear_jello_block"
      }
    ]
  })

  // 1000mB 柿子果酱 → 柿子果酱块
  // 配方：fruitsdelight:compacting/persimmon_jam_block
  event.json("fruitsdelight:recipe/compacting/persimmon_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:persimmon_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:persimmon_jam_block"
      }
    ]
  })

  // 1000mB 柿子果冻 → 柿子果冻块
  // 配方：fruitsdelight:compacting/persimmon_jello_block
  event.json("fruitsdelight:recipe/compacting/persimmon_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:persimmon_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:persimmon_jello_block"
      }
    ]
  })

  // 1000mB 菠萝果酱 → 菠萝果酱块
  // 配方：fruitsdelight:compacting/pineapple_jam_block
  event.json("fruitsdelight:recipe/compacting/pineapple_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pineapple_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pineapple_jam_block"
      }
    ]
  })

  // 1000mB 菠萝果冻 → 菠萝果冻块
  // 配方：fruitsdelight:compacting/pineapple_jello_block
  event.json("fruitsdelight:recipe/compacting/pineapple_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:pineapple_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:pineapple_jello_block"
      }
    ]
  })

  // 1000mB 浆果果酱 → 浆果果酱块
  // 配方：fruitsdelight:compacting/sweetberry_jam_block
  event.json("fruitsdelight:recipe/compacting/sweetberry_jam_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:sweetberry_jam",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:sweetberry_jam_block"
      }
    ]
  })

  // 1000mB 浆果果冻 → 浆果果冻块
  // 配方：fruitsdelight:compacting/sweetberry_jello_block
  event.json("fruitsdelight:recipe/compacting/sweetberry_jello_block.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "create"
      }
    ],
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "fruitsdelight:sweetberry_jello",
        "amount": 1000
      }
    ],
    "results": [
      {
        "id": "fruitsdelight:sweetberry_jello_block"
      }
    ]
  })
})
