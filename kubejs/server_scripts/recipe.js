ServerEvents.recipes(event => {

  const create = event.recipes.create
  const farmer = event.recipes.farmersdelight
  //给龙蛋加一个用光辉石跟暗影石合成的配方
  create.mechanical_crafting(
    Item.of('minecraft:dragon_egg', 2), 
    [
      '  r  ',
      ' rsr ', 
      'rsesr',
      ' rsr ',
      '  r  '
    ],
    {
      e: 'minecraft:dragon_egg',
      r:'create:refined_radiance',
      s:'create:shadow_steel'
    }
).id('ccq_core:dragon_egg')

//把铁钻头的配方加上个钛
event.remove('createoreexcavation:drill')
event.shaped(
    'createoreexcavation:drill', 
    [
      'bi ',
      'iti', 
      ' ii'
    ],
    {
      b:'minecraft:iron_block',
      i:'minecraft:iron_ingot',
      t:'northstar:titanium_ingot'
    }
  ).id('ccq_core:drill')

  //把动力刷怪笼的配方加上钨
  event.remove('create_mechanical_spawner:mechanical_spawner')
  create.mechanical_crafting(
    'create_mechanical_spawner:mechanical_spawner', 
    [
      'isssi',
      'ibbbi', 
      'ibtbi',
      'ibbbi',
      'ishsi'
    ],
    {
      i:'create:brass_ingot',
      s:'create:brass_sheet',
      b:'minecraft:iron_bars',
      h:'create:shaft',
      t:'northstar:tungsten_ingot'
    }
).id('ccq_core:mechanical_spawner')

  //不死图腾组装
  event.shaped(
    'ccq_core:totem_unable', 
    [
      ' g ',
      'ggg',
      ' g '
    ],
    {
      g:'createaddition:electrum_ingot'
    }
  ).id('ccq_core:totem_unable')
  const transitional1 = 'ccq_core:totem' 
    create.sequenced_assembly(
      [
        CreateItem.of('minecraft:totem_of_undying'),
      ],
      'ccq_core:totem_unable',
      [
        create.deploying(transitional1, [transitional1, 'createaddition:electrum_ingot']),
        create.deploying(transitional1, [transitional1, 'minecraft:emerald']),
        create.filling(transitional1, [transitional1, Fluid.of('minecraft:lava', 50)]),
        create.pressing(transitional1, transitional1)
      ]
    )
    .transitionalItem(transitional1)
    .loops(2) 
    .id('ccq_core:totem')
    //鞘翅组装
    event.shaped(
      'ccq_core:elytra_unable', 
      [
        'ggg',
        ' g ',
        'ggg'
      ],
      {
        g:'createaddition:electrum_ingot'
      }
    ).id('ccq_core:elytra_unable')
    event.remove('quark:tweaks/crafting/elytra_duplication')
    const transitional2 = 'ccq_core:elytra' 
    create.sequenced_assembly(
      [
        CreateItem.of('minecraft:elytra'),
      ],
      'ccq_core:elytra_unable',
      [
        create.deploying(transitional2, [transitional2, 'minecraft:phantom_membrane']),
        create.deploying(transitional2, [transitional2, 'createaddition:electrum_ingot']),
        create.deploying(transitional2, [transitional2, 'quark:dragon_scale']),
        create.pressing(transitional2, transitional2)
      ]
    )
    .transitionalItem(transitional2)
    .loops(3) 
    .id('ccq_core:elytra')
  //龙鳞
  create.mechanical_crafting(
    Item.of('quark:dragon_scale',2), 
    [
      'rrrr',
      'rdqs',
      'ssss'
    ],
    {
      d: 'minecraft:diamond',
      q:'quark:dragon_scale',
      r:'create:refined_radiance',
      s:'create:shadow_steel'
    }
  ).id('ccq_core:scale')

  //删掉柴油的植物燃油
  event.remove('create:fill_minecraft_bucket_with_createdieselgenerators_plant_oil')
  event.remove('createdieselgenerators:compacting/plant_oil')
  event.remove('create:empty_createdieselgenerators_plant_oil_bucket_of_createdieselgenerators_plant_oil')

  //把魔源宝石配方删掉用数据包加蓝宝石配方
  event.remove('ars_nouveau:imbuement_lapis')
  event.remove('ars_nouveau:imbuement_amethyst')
  event.remove('ars_nouveau:imbuement_amethyst_block')
  //删又在幻想的细雪
  event.remove('create_fantasizing:mixing/powder_snow')
  event.remove('create_fantasizing:compacting/powder_snow_to_block')
  event.remove('create:fill_minecraft_bucket_with_create_fantasizing_powder_snow')
  //修一下分液池无限细雪
  event.remove('create:empty_minecraft_powder_snow_bucket_of_fluid_powder_snow')
  create.emptying([Fluid.of('fluid:powder_snow',1000), 'minecraft:bucket'], 'minecraft:powder_snow_bucket')
  //墨囊
  create.compacting(
    Item.of('minecraft:ink_sac',2),
    [
      'createnuclear:coal_dust',
      'minecraft:slime_ball'
    ]
  ).id('ccq_core:ink')
  //熔岩冲程改
  event.remove('createnetherindustry:crafting/lava_engine')
  create.mechanical_crafting(
    'createnetherindustry:lava_stroke_engine', 
    [
      ' s ',
      'ucu',
      'tat'
    ],
    {
      s:'create:shaft',
      c:'minecraft:copper_block',
      a:'create:andesite_alloy_block',
      t:'createnuclear:steel_block',
      u:'northstar:tungsten_ingot'
    }
  ).id('ccq_core:lava_engine')
  //沉重核心
  const transitional3 = 'ccq_core:heavy_core_u' 
  create.sequenced_assembly(
    [
      CreateItem.of('minecraft:heavy_core'),
    ],
    'createaddition:electrum_ingot',
    [
      create.deploying(transitional3, [transitional3, 'northstar:tungsten_ingot']),
      create.deploying(transitional3, [transitional3, 'minecraft:wind_charge']),
      create.pressing(transitional3, transitional3)
    ]
  )
  .transitionalItem(transitional3)
  .loops(3) 
  .id('ccq_core:heavy_core')
  //浮空石
  create.compacting(
    CreateItem.of('aeronautics:levitite',0.6),
    Fluid.of('aeronautics:levitite_blend',1000)
  ).id('ccq_core:levitite')
  create.haunting('aeronautics:pearlescent_levitite','aeronautics:levitite').id('ccq_core:aeronautics_levitite_blend')
 //修复钢配方
 event.remove('createbigcannons:steel_ingot_from_block')
 event.remove('createbigcannons:steel_ingot_from_nuggets')
 event.remove('createbigcannons:mixing/alloy_steel')
 event.remove('createbigcannons:steel_block')
   //改良电子管
  event.remove('create:crafting/materials/electron_tube')
  event.shaped(
    Item.of("create:electron_tube", 1),
     [
      " A ", 
      "CDC"
    ], 
    {
    A: "create:polished_rose_quartz",
    C: "create:iron_sheet",
    D: "createaddition:copper_wire",
  }).id('ccq_core:electron_tube')

  //存储桥接器：连通 FXNT 与功能抽屉网络
  event.remove('ccq_core:storage_bridge')
  event.shaped(
    'ccq_core:storage_bridge',
    [
      'IEI',
      'FBD',
      'IEI'
    ],
    {
      I: 'create:brass_sheet',
      E: 'create:electron_tube',
      F: 'fxntstorage:storage_interface',
      B: 'create:brass_casing',
      D: 'functionalstorage:storage_controller'
    }
  ).id('ccq_core:storage_bridge')

  //末影人头
  event.shapeless(
    'supplementaries:enderman_head',
    [
      'spartan_weaponry_unofficial:enderman_head',
      'minecraft:redstone'
    ]
  ).id('ccq_core:enderman_head')

  //飞行戒指
  event.remove('create:mechanical_crafting/ascended_flight_ring')
  event.remove({output: 'balancedflight:ascended_flight_ring'})

  //动力刷石机
  event.replaceInput(
    'createcobblestone:mechanical_generator',
    'create:brass_casing',
    Ingredient.of('northstar:tungsten_block')
  )

  //虚空钢
  event.remove('createvoidway:mixing/void_steel_ingot')
  create.compacting(
    'createvoidway:void_steel_ingot',
    [
      'northstar:tungsten_ingot',
      'minecraft:ender_pearl'
    ]
  ).superheated().id('ccq_core:void_steel_ingot')

  //木屑出灰烬
  event.smelting(
    'supplementaries:ash',
    'createdieselgenerators:wood_chip'
  ).id('ccq_core:wood_chip_to_ash')

  //阴阳引擎
  event.remove('create_fantasizing:yin_yang_engine')

  //末影链接器
  event.remove('sophisticatedcore:ender_linker')

//删掉实用物件浇灌器
//实用物件都删了（
//event.remove('create_things_and_misc:sprinkler_craft')
//event.remove('create_things_and_misc:sprinklerheadcraft')
//event.remove('create_things_and_misc:diluted_bonemeal_craft')
});