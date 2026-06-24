ServerEvents.recipes(event => {

    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight
    //生物精华
  create.compacting(
    Fluid.of('ccq_core:mob_essence',500),
    [
     Fluid.of('createaddition:bioethanol',500),
     Fluid.of('northstar:sulfuric_acid',500),
     Item.of('minecraft:sculk')
    ]
   ).id('ccq_core:mob_essence')
   //生物精华作用
   create.compacting( 
    [
      CreateItem.of('minecraft:sugar_cane', 0.2),
      CreateItem.of('minecraft:sugar_cane', 1)
    ],
    [ 
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:sugar_cane'
    ],
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:cocoa_beans', 0.2),
      CreateItem.of('minecraft:cocoa_beans', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:cocoa_beans'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:nether_wart', 0.2),
      CreateItem.of('minecraft:nether_wart', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:nether_wart'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:carrot', 0.2),
      CreateItem.of('minecraft:carrot', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:carrot'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:potato', 0.2),
      CreateItem.of('minecraft:potato', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:potato'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:beetroot', 0.2),
      CreateItem.of('minecraft:beetroot', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:beetroot'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:wheat', 0.2),
      CreateItem.of('minecraft:wheat', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:wheat'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('culturaldelights:corn_cob', 0.2),
      CreateItem.of('culturaldelights:corn_cob', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'culturaldelights:corn_cob'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('culturaldelights:avocado', 0.2),
      CreateItem.of('culturaldelights:avocado', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'culturaldelights:avocado'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('culturaldelights:cucumber', 0.2),
      CreateItem.of('culturaldelights:cucumber', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'culturaldelights:cucumber'
    ]
  )
   create.compacting( 
    [
      CreateItem.of('culturaldelights:white_eggplant', 0.2),
      CreateItem.of('culturaldelights:white_eggplant', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'culturaldelights:white_eggplant'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('culturaldelights:squid', 0.2),
      CreateItem.of('culturaldelights:squid', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'culturaldelights:squid'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('expandeddelight:asparagus', 0.2),
      CreateItem.of('expandeddelight:asparagus', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'expandeddelight:asparagus'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('expandeddelight:chili_pepper', 0.2),
      CreateItem.of('expandeddelight:chili_pepper', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'expandeddelight:chili_pepper'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('expandeddelight:peanut', 0.2),
      CreateItem.of('expandeddelight:peanut', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'expandeddelight:peanut'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('farmersdelight:cabbage', 0.2),
      CreateItem.of('farmersdelight:cabbage', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'farmersdelight:cabbage'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('farmersdelight:tomato', 0.2),
      CreateItem.of('farmersdelight:tomato', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'farmersdelight:tomato'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('farmersdelight:onion', 0.2),
      CreateItem.of('farmersdelight:onion', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'farmersdelight:onion'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('farmersdelight:rice', 0.2),
      CreateItem.of('farmersdelight:rice', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'farmersdelight:rice'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:blueberry', 0.2),
      CreateItem.of('fruitsdelight:blueberry', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:blueberry'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:cranberry', 0.2),
      CreateItem.of('fruitsdelight:cranberry', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:cranberry'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:pear', 0.2),
      CreateItem.of('fruitsdelight:pear', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:pear'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:hawberry', 0.2),
      CreateItem.of('fruitsdelight:hawberry', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:hawberry'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:lychee', 0.2),
      CreateItem.of('fruitsdelight:lychee', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:lychee'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:mango', 0.2),
      CreateItem.of('fruitsdelight:mango', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:mango'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:persimmon', 0.2),
      CreateItem.of('fruitsdelight:persimmon', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:persimmon'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:peach', 0.2),
      CreateItem.of('fruitsdelight:peach', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:peach'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:orange', 0.2),
      CreateItem.of('fruitsdelight:orange', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:orange'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:mangosteen', 0.2),
      CreateItem.of('fruitsdelight:mangosteen', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:mangosteen'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:bayberry', 0.2),
      CreateItem.of('fruitsdelight:bayberry', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:bayberry'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:kiwi', 0.2),
      CreateItem.of('fruitsdelight:kiwi', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:kiwi'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:fig', 0.2),
      CreateItem.of('fruitsdelight:fig', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:fig'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:lemon', 0.2),
      CreateItem.of('fruitsdelight:lemon', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:lemon'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:durian', 0.2),
      CreateItem.of('fruitsdelight:durian', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:durian'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:hamimelon', 0.2),
      CreateItem.of('fruitsdelight:hamimelon', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 400), 
      'fruitsdelight:hamimelon'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('fruitsdelight:pineapple', 0.2),
      CreateItem.of('fruitsdelight:pineapple', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'fruitsdelight:pineapple'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:apple', 0.2),
      CreateItem.of('minecraft:apple', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 400), 
      'minecraft:apple'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:chorus_fruit', 0.2),
      CreateItem.of('minecraft:chorus_fruit', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:chorus_fruit'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:sweet_berries', 0.2),
      CreateItem.of('minecraft:sweet_berries', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:sweet_berries'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:beef', 0.2),
      CreateItem.of('minecraft:beef', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:beef'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:porkchop', 0.2),
      CreateItem.of('minecraft:porkchop', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:porkchop'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:mutton', 0.2),
      CreateItem.of('minecraft:mutton', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:mutton'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:chicken', 0.2),
      CreateItem.of('minecraft:chicken', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:chicken'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:rabbit', 0.2),
      CreateItem.of('minecraft:rabbit', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:rabbit'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:cod', 0.2),
      CreateItem.of('minecraft:cod', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:cod'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:salmon', 0.2),
      CreateItem.of('minecraft:salmon', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:salmon'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:tropical_fish', 0.2),
      CreateItem.of('minecraft:tropical_fish', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:tropical_fish'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:pufferfish', 0.2),
      CreateItem.of('minecraft:pufferfish', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minecraft:pufferfish'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('quark:crab_leg', 0.2),
      CreateItem.of('quark:crab_leg', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'quark:crab_leg'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('create_bic_bit:raw_herring', 0.2),
      CreateItem.of('create_bic_bit:raw_herring', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'create_bic_bit:raw_herring'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:melon', 0.2),
      CreateItem.of('minecraft:melon', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 400), 
      'minecraft:melon'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minecraft:pumpkin', 0.2),
      CreateItem.of('minecraft:pumpkin', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 400), 
      'minecraft:pumpkin'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('veggiesdelight:bellpepper', 0.2),
      CreateItem.of('veggiesdelight:bellpepper', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'veggiesdelight:bellpepper'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('veggiesdelight:broccoli', 0.2),
      CreateItem.of('veggiesdelight:broccoli', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'veggiesdelight:broccoli'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('veggiesdelight:cauliflower', 0.2),
      CreateItem.of('veggiesdelight:cauliflower', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'veggiesdelight:cauliflower'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('veggiesdelight:garlic', 0.2),
      CreateItem.of('veggiesdelight:garlic', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'veggiesdelight:garlic'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('veggiesdelight:sweet_potato', 0.2),
      CreateItem.of('veggiesdelight:sweet_potato', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'veggiesdelight:sweet_potato'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('veggiesdelight:turnip', 0.2),
      CreateItem.of('veggiesdelight:turnip', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'veggiesdelight:turnip'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('veggiesdelight:zucchini', 0.2),
      CreateItem.of('veggiesdelight:zucchini', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'veggiesdelight:zucchini'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('mynethersdelight:bullet_pepper', 0.2),
      CreateItem.of('mynethersdelight:bullet_pepper', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'mynethersdelight:bullet_pepper'
    ]
  )
  /*create.compacting( 
    [
      CreateItem.of('minersdelight:gossypium', 0.2),
      CreateItem.of('minersdelight:gossypium', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minersdelight:gossypium'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('minersdelight:cave_carrot', 0.2),
      CreateItem.of('minersdelight:cave_carrot', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'minersdelight:cave_carrot'
    ]
  )*/
  create.compacting( 
    [
      CreateItem.of('kaleidoscope_cookery:red_chili', 0.2),
      CreateItem.of('kaleidoscope_cookery:red_chili', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_cookery:red_chili'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('kaleidoscope_cookery:green_chili', 0.2),
      CreateItem.of('kaleidoscope_cookery:green_chili', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_cookery:green_chili'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('kaleidoscope_cookery:lettuce', 0.2),
      CreateItem.of('kaleidoscope_cookery:lettuce', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_cookery:lettuce'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('kaleidoscope_cookery:caterpillar', 0.2),
      CreateItem.of('kaleidoscope_cookery:caterpillar', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_cookery:caterpillar'
    ]
  )
  /*create.compacting( 
    [
      CreateItem.of('kaleidoscope_cookery:raw_donkey_meat', 0.2),
      CreateItem.of('kaleidoscope_cookery:raw_donkey_meat', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_cookery:raw_donkey_meat'
    ]
  )*/
  create.compacting( 
    [
      CreateItem.of('kaleidoscope_dim_wine:crimson_grape', 0.2),
      CreateItem.of('kaleidoscope_dim_wine:crimson_grape', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_dim_wine:crimson_grape'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('kaleidoscope_dim_wine:warped_grape', 0.2),
      CreateItem.of('kaleidoscope_dim_wine:warped_grape', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_dim_wine:warped_grape'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('kaleidoscope_dim_wine:dreamfruit', 0.2),
      CreateItem.of('kaleidoscope_dim_wine:dreamfruit', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_dim_wine:dreamfruit'
    ]
  )
 /* create.compacting( 
    [
      CreateItem.of('dungeonsdelight:rotbulb', 0.2),
      CreateItem.of('dungeonsdelight:rotbulb', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'dungeonsdelight:rotbulb'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('dungeonsdelight:rotgourd', 0.2),
      CreateItem.of('dungeonsdelight:rotgourd', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 400), 
      'dungeonsdelight:rotgourd'
    ]
  )*/
  create.compacting( 
    [
      CreateItem.of('createfisheryindustry:raw_blue_mussel', 0.2),
      CreateItem.of('createfisheryindustry:raw_blue_mussel', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'createfisheryindustry:raw_blue_mussel'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('createfisheryindustry:raw_mediterranean_mussel', 0.2),
      CreateItem.of('createfisheryindustry:raw_mediterranean_mussel', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'createfisheryindustry:raw_mediterranean_mussel'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('createfisheryindustry:raw_lobster', 0.2),
      CreateItem.of('createfisheryindustry:raw_lobster', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'createfisheryindustry:raw_lobster'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('oceansdelight:guardian', 0.2),
      CreateItem.of('oceansdelight:guardian', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'oceansdelight:guardian'
    ]
  )
  create.compacting( 
    [
      CreateItem.of('kaleidoscope_tavern:grape', 0.2),
      CreateItem.of('kaleidoscope_tavern:grape', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'kaleidoscope_tavern:grape'
    ]
  )
 /* create.compacting( 
    [
      CreateItem.of('netherexp:cerebrage', 0.2),
      CreateItem.of('netherexp:cerebrage', 1)
    ], 
    [
      Fluid.of('ccq_core:mob_essence', 200), 
      'netherexp:cerebrage'
    ]
  )*/
})