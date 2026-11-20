// 整合包：打磨
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // ccq_core:crushing_diorite → minecraft:quartz
  // 配方：ccq_core:grinder_polishing/grinder_crushing_diorite
  event.json("ccq_core:recipe/grinder_polishing/grinder_crushing_diorite.json", {
    "type": "vintageimprovements:polishing",
    "ingredients": [
      {
        "item": "ccq_core:crushing_diorite"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "minecraft:quartz"
      }
    ],
    "processing_time": 50,
    "speed_limits": 3
  })

  // ccq_core:crushing_raw_gem → 2个 ccq_core:raw_amethyst
  // 配方：ccq_core:grinder_polishing/grinder_crushing_gem
  event.json("ccq_core:recipe/grinder_polishing/grinder_crushing_gem.json", {
    "type": "vintageimprovements:polishing",
    "ingredients": [
      {
        "item": "ccq_core:crushing_raw_gem"
      }
    ],
    "results": [
      {
        "count": 2,
        "id": "ccq_core:raw_amethyst"
      }
    ],
    "processing_time": 50,
    "speed_limits": 2
  })

  // ccq_core:crushing_raw_overworld_ore → 粗铂
  // 配方：ccq_core:grinder_polishing/grinder_crushing_overworld_ore
  event.json("ccq_core:recipe/grinder_polishing/grinder_crushing_overworld_ore.json", {
    "type": "vintageimprovements:polishing",
    "ingredients": [
      {
        "item": "ccq_core:crushing_raw_overworld_ore"
      }
    ],
    "results": [
      {
        "count": 1,
        "id": "createpropulsion:raw_platinum"
      }
    ],
    "processing_time": 50,
    "speed_limits": 2
  })
})
