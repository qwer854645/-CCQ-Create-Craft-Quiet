// 整合包：振动处理
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 2个 ccq_core:crushing_basalt → 钒粒（80.0%） + 2个 minecraft:iron_nugget
  // 配方：ccq_core:vibrating/vibrating_crushing_basalt
  event.json("ccq_core:recipe/vibrating/vibrating_crushing_basalt.json", {
    "type": "vintageimprovements:vibrating",
    "ingredients": [
      {
        "count": 2,
        "item": "ccq_core:crushing_basalt"
      }
    ],
    "results": [
      {
        "chance": 0.8,
        "count": 1,
        "id": "vintageimprovements:vanadium_nugget"
      },
      {
        "count": 2,
        "id": "minecraft:iron_nugget"
      }
    ],
    "processing_time": 800
  })

  // 2个 ccq_core:crushing_calcite → ccq_core:raw_amethyst（80.0%） + minecraft:bone_meal
  // 配方：ccq_core:vibrating/vibrating_crushing_calcite
  event.json("ccq_core:recipe/vibrating/vibrating_crushing_calcite.json", {
    "type": "vintageimprovements:vibrating",
    "ingredients": [
      {
        "count": 2,
        "item": "ccq_core:crushing_calcite"
      }
    ],
    "results": [
      {
        "chance": 0.8,
        "count": 1,
        "id": "ccq_core:raw_amethyst"
      },
      {
        "count": 1,
        "id": "minecraft:bone_meal"
      }
    ],
    "processing_time": 800
  })

  // ccq_core:crushing_raw_gem → 粗钻石 + 2个 粗绿宝石 + 粗绿宝石（80.0%） + 粗钻石（50.0%）
  // 配方：ccq_core:vibrating/vibrating_crushing_gem
  event.json("ccq_core:recipe/vibrating/vibrating_crushing_gem.json", {
    "type": "vintageimprovements:vibrating",
    "ingredients": [
      {
        "count": 1,
        "item": "ccq_core:crushing_raw_gem"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "createoreexcavation:raw_diamond"
      },
      {
        "count": 2,
        "id": "createoreexcavation:raw_emerald"
      },
      {
        "chance": 0.8,
        "count": 1,
        "id": "createoreexcavation:raw_emerald"
      },
      {
        "chance": 0.5,
        "count": 1,
        "id": "createoreexcavation:raw_diamond"
      }
    ],
    "processing_time": 800
  })

  // 3个 ccq_core:crushing_granite → 铀粉（80.0%） + minecraft:red_sand
  // 配方：ccq_core:vibrating/vibrating_crushing_granite
  event.json("ccq_core:recipe/vibrating/vibrating_crushing_granite.json", {
    "type": "vintageimprovements:vibrating",
    "ingredients": [
      {
        "count": 3,
        "item": "ccq_core:crushing_granite"
      }
    ],
    "results": [
      {
        "chance": 0.8,
        "count": 1,
        "id": "createnuclear:uranium_powder"
      },
      {
        "count": 1,
        "id": "minecraft:red_sand"
      }
    ],
    "processing_time": 800
  })

  // ccq_core:crushing_limestone → 铅粒 + createnuclear:nitrate（60.0%） + 锌粒（80.0%）
  // 配方：ccq_core:vibrating/vibrating_crushing_limestone
  event.json("ccq_core:recipe/vibrating/vibrating_crushing_limestone.json", {
    "type": "vintageimprovements:vibrating",
    "ingredients": [
      {
        "count": 1,
        "item": "ccq_core:crushing_limestone"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "createnuclear:lead_nugget"
      },
      {
        "chance": 0.6,
        "count": 1,
        "id": "createnuclear:nitrate"
      },
      {
        "chance": 0.8,
        "count": 1,
        "id": "create:zinc_nugget"
      }
    ],
    "processing_time": 800
  })

  // ccq_core:crushing_raw_overworld_ore → minecraft:raw_gold + 2个 粗锌 + 粗锌（80.0%） + minecraft:raw_gold（50.0%）
  // 配方：ccq_core:vibrating/vibrating_crushing_overworld_ore
  event.json("ccq_core:recipe/vibrating/vibrating_crushing_overworld_ore.json", {
    "type": "vintageimprovements:vibrating",
    "ingredients": [
      {
        "count": 1,
        "item": "ccq_core:crushing_raw_overworld_ore"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "minecraft:raw_gold"
      },
      {
        "count": 2,
        "id": "create:raw_zinc"
      },
      {
        "chance": 0.8,
        "count": 1,
        "id": "create:raw_zinc"
      },
      {
        "chance": 0.5,
        "count": 1,
        "id": "minecraft:raw_gold"
      }
    ],
    "processing_time": 800
  })

  // 2个 ccq_core:crushing_tuff → 2个 锌粒（80.0%） + minecraft:iron_nugget
  // 配方：ccq_core:vibrating/vibrating_crushing_tuff
  event.json("ccq_core:recipe/vibrating/vibrating_crushing_tuff.json", {
    "type": "vintageimprovements:vibrating",
    "ingredients": [
      {
        "count": 2,
        "item": "ccq_core:crushing_tuff"
      }
    ],
    "results": [
      {
        "chance": 0.8,
        "count": 2,
        "id": "create:zinc_nugget"
      },
      {
        "count": 1,
        "id": "minecraft:iron_nugget"
      }
    ],
    "processing_time": 800
  })
})
