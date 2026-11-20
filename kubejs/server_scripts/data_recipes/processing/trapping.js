// 整合包：诱捕
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:iron_nugget → ccq_core:mineral_fish（100%）
  // 配方：ccq_core:trapping/get_mineral_fish
  event.json("ccq_core:recipe/trapping/get_mineral_fish.json", {
    "type": "createfisheryindustry:bait_trap",
    "ingredients": [
      {
        "item": "minecraft:iron_nugget"
      }
    ],
    "results": [
      {
        "id": "ccq_core:mineral_fish",
        "count": 1,
        "chance": 1
      }
    ],
    "baitLevel": 5,
    "requires_water": true
  })

  // minecraft:grass_block → minecraft:mutton（100%） + minecraft:dirt（100%） + minecraft:white_wool（80.0%）
  // 配方：ccq_core:trapping/grass_to_sheep
  event.json("ccq_core:recipe/trapping/grass_to_sheep.json", {
    "type": "createfisheryindustry:bait_trap",
    "ingredients": [
      {
        "item": "minecraft:grass_block"
      }
    ],
    "results": [
      {
        "id": "minecraft:mutton",
        "count": 1,
        "chance": 1
      },
      {
        "id": "minecraft:dirt",
        "count": 1,
        "chance": 1
      },
      {
        "id": "minecraft:white_wool",
        "count": 1,
        "chance": 0.8
      }
    ],
    "baitLevel": 5,
    "requires_water": false
  })

  // minecraft:potato → minecraft:porkchop（100%）
  // 配方：ccq_core:trapping/potato_to_pig
  event.json("ccq_core:recipe/trapping/potato_to_pig.json", {
    "type": "createfisheryindustry:bait_trap",
    "ingredients": [
      {
        "item": "minecraft:potato"
      }
    ],
    "results": [
      {
        "id": "minecraft:porkchop",
        "count": 1,
        "chance": 1
      }
    ],
    "baitLevel": 5,
    "requires_water": false
  })

  // minecraft:wheat → minecraft:beef（100%） + minecraft:leather（40.0%）
  // 配方：ccq_core:trapping/wheat_to_cow
  event.json("ccq_core:recipe/trapping/wheat_to_cow.json", {
    "type": "createfisheryindustry:bait_trap",
    "ingredients": [
      {
        "item": "minecraft:wheat"
      }
    ],
    "results": [
      {
        "id": "minecraft:beef",
        "count": 1,
        "chance": 1
      },
      {
        "id": "minecraft:leather",
        "count": 1,
        "chance": 0.4
      }
    ],
    "baitLevel": 5,
    "requires_water": false
  })
})
