// 生物生成
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 100mB create_mechanical_spawner:spawn_fluid_bat → minecraft:guardian
  // 配方：create_mechanical_spawner:spawner/bat
  event.json("create_mechanical_spawner:recipe/spawner/bat.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "minecraft:prismarine_shard"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      },
      {
        "count": 2,
        "id": "minecraft:prismarine_crystals"
      },
      {
        "chance": 0.5,
        "count": 3,
        "id": "minecraft:prismarine_shard"
      },
      {
        "chance": 0.5,
        "count": 2,
        "id": "minecraft:prismarine_crystals"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_bat"
    },
    "output": "minecraft:guardian",
    "processingTime": 1500
  })

  // 100mB create_mechanical_spawner:spawn_fluid_bee → minecraft:endermite
  // 配方：create_mechanical_spawner:spawner/bee
  event.json("create_mechanical_spawner:recipe/spawner/bee.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "ends_delight:raw_ender_mite_meat"
      },
      {
        "chance": 0.5,
        "count": 2,
        "id": "ends_delight:raw_ender_mite_meat"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_bee"
    },
    "output": "minecraft:endermite",
    "processingTime": 500
  })

  // 100mB create_mechanical_spawner:spawn_fluid_blaze → minecraft:blaze
  // 配方：create_mechanical_spawner:spawner/blaze
  event.json("create_mechanical_spawner:recipe/spawner/blaze.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "minecraft:blaze_rod"
      },
      {
        "chance": 0.25,
        "count": 2,
        "id": "minecraft:blaze_rod"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_blaze"
    },
    "output": "minecraft:blaze",
    "processingTime": 3000
  })

  // 100mB create_mechanical_spawner:spawn_fluid_chicken → minecraft:turtle
  // 配方：create_mechanical_spawner:spawner/chicken
  event.json("create_mechanical_spawner:recipe/spawner/chicken.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "chance": 0.1,
        "count": 1,
        "id": "minecraft:turtle_scute"
      },
      {
        "chance": 0.8,
        "count": 1,
        "id": "minecraft:turtle_egg"
      },
      {
        "count": 1,
        "id": "minecraft:turtle_egg"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_chicken"
    },
    "output": "minecraft:turtle",
    "processingTime": 800
  })

  // 100mB create_mechanical_spawner:spawn_fluid_cow → minecraft:husk
  // 配方：create_mechanical_spawner:spawner/cow
  event.json("create_mechanical_spawner:recipe/spawner/cow.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "chance": 0.5,
        "count": 1,
        "id": "minecraft:sand"
      },
      {
        "count": 8,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_cow"
    },
    "output": "minecraft:husk",
    "processingTime": 1200
  })

  // 100mB create_mechanical_spawner:spawn_fluid_creeper → minecraft:creeper
  // 配方：create_mechanical_spawner:spawner/creeper
  event.json("create_mechanical_spawner:recipe/spawner/creeper.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "minecraft:gunpowder"
      },
      {
        "chance": 0.75,
        "count": 2,
        "id": "minecraft:gunpowder"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_creeper"
    },
    "output": "minecraft:creeper",
    "processingTime": 1600
  })

  // 100mB create_mechanical_spawner:spawn_fluid_drowned → minecraft:drowned
  // 配方：create_mechanical_spawner:spawner/drowned
  event.json("create_mechanical_spawner:recipe/spawner/drowned.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "chance": 0.2,
        "count": 1,
        "id": "minecraft:copper_ingot"
      },
      {
        "chance": 0.05,
        "count": 1,
        "id": "minecraft:trident"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_drowned"
    },
    "output": "minecraft:drowned",
    "processingTime": 1600
  })

  // 100mB create_mechanical_spawner:spawn_fluid_enderman → minecraft:enderman
  // 配方：create_mechanical_spawner:spawner/enderman
  event.json("create_mechanical_spawner:recipe/spawner/enderman.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "minecraft:ender_pearl"
      },
      {
        "chance": 0.5,
        "count": 2,
        "id": "ends_delight:enderman_gristle"
      },
      {
        "chance": 0.3,
        "count": 1,
        "id": "minecraft:ender_pearl"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_enderman"
    },
    "output": "minecraft:enderman",
    "processingTime": 1600
  })

  // 100mB create_mechanical_spawner:spawn_fluid_evoker → minecraft:evoker
  // 配方：create_mechanical_spawner:spawner/evoker
  event.json("create_mechanical_spawner:recipe/spawner/evoker.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "minecraft:emerald"
      },
      {
        "chance": 0.05,
        "count": 1,
        "id": "minecraft:totem_of_undying"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_evoker"
    },
    "output": "minecraft:evoker",
    "processingTime": 1800
  })

  // 100mB create_mechanical_spawner:spawn_fluid_ghast → minecraft:ghast
  // 配方：create_mechanical_spawner:spawner/ghast
  event.json("create_mechanical_spawner:recipe/spawner/ghast.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 1,
        "id": "minecraft:ghast_tear"
      },
      {
        "chance": 0.5,
        "count": 2,
        "id": "minecraft:ghast_tear"
      },
      {
        "chance": 0.75,
        "count": 2,
        "id": "mynethersdelight:ghasta"
      },
      {
        "chance": 0.75,
        "count": 2,
        "id": "mynethersdelight:ghasmati"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_ghast"
    },
    "output": "minecraft:ghast",
    "processingTime": 1800
  })

  // 200mB create_mechanical_spawner:spawn_fluid_horse → minecraft:sniffer
  // 配方：create_mechanical_spawner:spawner/horse
  event.json("create_mechanical_spawner:recipe/spawner/horse.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 1,
        "id": "minecraft:sniffer_egg"
      },
      {
        "chance": 0.8,
        "count": 1,
        "id": "minecraft:sniffer_egg"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 200,
      "fluid": "create_mechanical_spawner:spawn_fluid_horse"
    },
    "output": "minecraft:sniffer",
    "processingTime": 3000
  })

  // 100mB create_mechanical_spawner:spawn_fluid_magma_cube → minecraft:magma_cube
  // 配方：create_mechanical_spawner:spawner/magma_cube
  event.json("create_mechanical_spawner:recipe/spawner/magma_cube.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "minecraft:magma_cream"
      },
      {
        "chance": 0.2,
        "count": 1,
        "id": "minecraft:magma_cream"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_magma_cube"
    },
    "output": "minecraft:magma_cube",
    "processingTime": 2000
  })

  // 100mB create_mechanical_spawner:spawn_fluid_panda → minecraft:shulker
  // 配方：create_mechanical_spawner:spawner/panda
  event.json("create_mechanical_spawner:recipe/spawner/panda.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "chance": 0.5,
        "count": 2,
        "id": "minecraft:shulker_shell"
      },
      {
        "count": 1,
        "id": "ends_delight:shulker_meat"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_panda"
    },
    "output": "minecraft:shulker",
    "processingTime": 1500
  })

  // 100mB create_mechanical_spawner:spawn_fluid_pig → minecraft:phantom
  // 配方：create_mechanical_spawner:spawner/pig
  event.json("create_mechanical_spawner:recipe/spawner/pig.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "chance": 0.8,
        "count": 4,
        "id": "minecraft:phantom_membrane"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_pig"
    },
    "output": "minecraft:phantom",
    "processingTime": 1500
  })

  // 100mB create_mechanical_spawner:spawn_fluid_piglin → minecraft:piglin
  // 配方：create_mechanical_spawner:spawner/piglin
  event.json("create_mechanical_spawner:recipe/spawner/piglin.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "chance": 0.8,
        "count": 2,
        "id": "minecraft:gold_ingot"
      },
      {
        "chance": 0.01,
        "count": 1,
        "id": "minecraft:netherite_upgrade_smithing_template"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_piglin"
    },
    "output": "minecraft:piglin",
    "processingTime": 2000
  })

  // 100mB create_mechanical_spawner:spawn_fluid_rabbit → minecraft:warden
  // 配方：create_mechanical_spawner:spawner/rabbit
  event.json("create_mechanical_spawner:recipe/spawner/rabbit.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 1,
        "id": "minecraft:sculk_catalyst"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      },
      {
        "chance": 0.8,
        "count": 2,
        "id": "minecraft:sculk"
      },
      {
        "chance": 0.4,
        "count": 1,
        "id": "minecraft:sculk_sensor"
      },
      {
        "chance": 0.2,
        "count": 1,
        "id": "minecraft:sculk_shrieker"
      },
      {
        "chance": 0.05,
        "count": 1,
        "id": "minecraft:netherite_scrap"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_rabbit"
    },
    "output": "minecraft:warden",
    "processingTime": 8000
  })

  // 100mB create_mechanical_spawner:spawn_fluid_skeleton → minecraft:skeleton
  // 配方：create_mechanical_spawner:spawner/skeleton
  event.json("create_mechanical_spawner:recipe/spawner/skeleton.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "chance": 0.8,
        "count": 3,
        "id": "minecraft:bone"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_skeleton"
    },
    "output": "minecraft:skeleton",
    "processingTime": 1500
  })

  // 100mB create_mechanical_spawner:spawn_fluid_slime → minecraft:hoglin
  // 配方：create_mechanical_spawner:spawner/slime
  event.json("create_mechanical_spawner:recipe/spawner/slime.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 1,
        "id": "mynethersdelight:hoglin_loin"
      },
      {
        "chance": 0.5,
        "count": 1,
        "id": "mynethersdelight:hoglin_loin"
      },
      {
        "chance": 0.5,
        "count": 1,
        "id": "minecraft:porkchop"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_slime"
    },
    "output": "minecraft:hoglin",
    "processingTime": 1200
  })

  // 100mB create_mechanical_spawner:spawn_fluid_spider → minecraft:spider
  // 配方：create_mechanical_spawner:spawner/spider
  event.json("create_mechanical_spawner:recipe/spawner/spider.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "minecraft:spider_eye"
      },
      {
        "chance": 0.2,
        "count": 1,
        "id": "minecraft:spider_eye"
      },
      {
        "chance": 0.6,
        "count": 1,
        "id": "minecraft:string"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_spider"
    },
    "output": "minecraft:spider",
    "processingTime": 1800
  })

  // 100mB create_mechanical_spawner:spawn_fluid_villager → minecraft:villager
  // 配方：create_mechanical_spawner:spawner/villager
  event.json("create_mechanical_spawner:recipe/spawner/villager.json", {
    "type": "create_mechanical_spawner:spawner",
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_villager"
    },
    "output": "minecraft:villager",
    "processingTime": 6000
  })

  // 300mB create_mechanical_spawner:spawn_fluid_wither → minecraft:wither
  // 配方：create_mechanical_spawner:spawner/wither
  event.json("create_mechanical_spawner:recipe/spawner/wither.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 2,
        "id": "minecraft:nether_star"
      },
      {
        "count": 16,
        "id": "create:experience_nugget"
      },
      {
        "chance": 0.5,
        "count": 8,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 300,
      "fluid": "create_mechanical_spawner:spawn_fluid_wither"
    },
    "output": "minecraft:wither",
    "processingTime": 8000
  })

  // 200mB create_mechanical_spawner:spawn_fluid_wither_skeleton → minecraft:wither_skeleton
  // 配方：create_mechanical_spawner:spawner/wither_skeleton
  event.json("create_mechanical_spawner:recipe/spawner/wither_skeleton.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "chance": 0.8,
        "count": 2,
        "id": "minecraft:coal"
      },
      {
        "chance": 0.02,
        "count": 1,
        "id": "minecraft:wither_skeleton_skull"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 200,
      "fluid": "create_mechanical_spawner:spawn_fluid_wither_skeleton"
    },
    "output": "minecraft:wither_skeleton",
    "processingTime": 5000
  })

  // 100mB create_mechanical_spawner:spawn_fluid_zombie → minecraft:zombie
  // 配方：create_mechanical_spawner:spawner/zombie
  event.json("create_mechanical_spawner:recipe/spawner/zombie.json", {
    "type": "create_mechanical_spawner:spawner",
    "customLoot": [
      {
        "count": 6,
        "id": "minecraft:rotten_flesh"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      }
    ],
    "input": {
      "amount": 100,
      "fluid": "create_mechanical_spawner:spawn_fluid_zombie"
    },
    "output": "minecraft:zombie",
    "processingTime": 1500
  })
})
