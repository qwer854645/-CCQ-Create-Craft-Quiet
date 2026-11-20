// 整合包：离心处理
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 2个 ccq_core:crushing_blackstone → 2个 minecraft:coal + 碳粉（80.0%）
  // 配方：ccq_core:centrifugation/centrifugation_crushing_black_stone
  event.json("ccq_core:recipe/centrifugation/centrifugation_crushing_black_stone.json", {
    "type": "vintageimprovements:centrifugation",
    "ingredients": [
      {
        "count": 2,
        "item": "ccq_core:crushing_blackstone"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "minecraft:coal"
      },
      {
        "count": 1,
        "chance": 0.8,
        "id": "createnuclear:coal_dust"
      }
    ],
    "processing_time": 1000
  })

  // 4个 ccq_core:crushing_granite → 2个 minecraft:redstone + minecraft:gravel
  // 配方：ccq_core:centrifugation/centrifugation_crushing_granite
  event.json("ccq_core:recipe/centrifugation/centrifugation_crushing_granite.json", {
    "type": "vintageimprovements:centrifugation",
    "ingredients": [
      {
        "count": 4,
        "item": "ccq_core:crushing_granite"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "minecraft:redstone"
      },
      {
        "count": 1,
        "id": "minecraft:gravel"
      }
    ],
    "processing_time": 1000
  })

  // ccq_core:crushing_limestone → 可疑的石块（5.0%） + 富钙粉
  // 配方：ccq_core:centrifugation/centrifugation_crushing_limestone
  event.json("ccq_core:recipe/centrifugation/centrifugation_crushing_limestone.json", {
    "type": "vintageimprovements:centrifugation",
    "ingredients": [
      {
        "count": 1,
        "item": "ccq_core:crushing_limestone"
      }
    ],
    "results": [
      {
        "count": 1,
        "chance": 0.05,
        "id": "create_aquatic_ambitions:suspicious_rock"
      },
      {
        "count": 1,
        "id": "create_aquatic_ambitions:calcium_rich_powder"
      }
    ],
    "processing_time": 1000
  })

  // ccq_core:crushing_raw_overworld_ore → 粗铅 + 粗铅（60.0%） + 粗铀
  // 配方：ccq_core:centrifugation/centrifugation_crushing_overworld_ore
  event.json("ccq_core:recipe/centrifugation/centrifugation_crushing_overworld_ore.json", {
    "type": "vintageimprovements:centrifugation",
    "ingredients": [
      {
        "count": 1,
        "item": "ccq_core:crushing_raw_overworld_ore"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "createnuclear:raw_lead"
      },
      {
        "count": 1,
        "chance": 0.6,
        "id": "createnuclear:raw_lead"
      },
      {
        "count": 1,
        "id": "createnuclear:raw_uranium"
      }
    ],
    "processing_time": 1000
  })

  // 2个 ccq_core:crushing_shale → 2个 ccq_core:raw_lapis（80.0%） + minecraft:coal
  // 配方：ccq_core:centrifugation/centrifugation_crushing_shale
  event.json("ccq_core:recipe/centrifugation/centrifugation_crushing_shale.json", {
    "type": "vintageimprovements:centrifugation",
    "ingredients": [
      {
        "count": 2,
        "item": "ccq_core:crushing_shale"
      }
    ],
    "results": [
      {
        "count": 2,
        "chance": 0.8,
        "id": "ccq_core:raw_lapis"
      },
      {
        "count": 1,
        "id": "minecraft:coal"
      }
    ],
    "processing_time": 800
  })

  // 2个 ccq_core:crushing_tuff → 2个 minecraft:gold_nugget（80.0%） + 铜粒
  // 配方：ccq_core:centrifugation/centrifugation_crushing_tuff
  event.json("ccq_core:recipe/centrifugation/centrifugation_crushing_tuff.json", {
    "type": "vintageimprovements:centrifugation",
    "ingredients": [
      {
        "count": 2,
        "item": "ccq_core:crushing_tuff"
      }
    ],
    "results": [
      {
        "count": 2,
        "chance": 0.8,
        "id": "minecraft:gold_nugget"
      },
      {
        "count": 1,
        "id": "create:copper_nugget"
      }
    ],
    "processing_time": 1000
  })
})
