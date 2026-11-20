ServerEvents.recipes(event => {

    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight

  // OEI 将该曲奇替换为空气，同时移除其合成配方，避免同步空产物时断开连接
  event.remove('expandeddelight:chocolate_cookie')

    // 甜菜制糖：动力搅拌，1 个甜菜根 -> 1 个糖，不需要加热
    create.mixing('minecraft:sugar', 'minecraft:beetroot')
      .id('ccq_core:sugar_from_beetroot')

    // 海带制糖：柴油动力工作盆发酵，1 个海带 -> 1 个糖，耗时 20 秒
    event.custom({
      type: 'createdieselgenerators:basin_fermenting',
      ingredients: [{ item: 'minecraft:kelp' }],
      results: [{ id: 'minecraft:sugar', count: 1 }],
      processing_time: 400
    }).id('ccq_core:sugar_from_kelp_fermenting')

    // 蜂蜜沿用原版 1 瓶蜂蜜 -> 3 个糖的配方
    //删除饮酒作乐的果酱（因为还有两个了
 event.remove('brewinandchewin:cooking/apple_jelly')
 event.remove('brewinandchewin:cooking/glow_berry_marmalade')
 event.remove('brewinandchewin:cooking/sweet_berry_jam')

//给一些末地乐事相关物品加配方
create.mechanical_crafting(
    Item.of('ends_delight:dragon_tooth', 1), 
    [
      'oegeo',
      ' ebe ', 
      'oegeo'
    ],
    {
      o: 'minecraft:obsidian',
      e: 'minecraft:end_crystal',
      b: 'minecraft:bone' ,
      g: 'minecraft:gold_ingot'
    }
  ).id('ccq_core:dragon_tooth')
  create.mechanical_crafting(
    Item.of('ends_delight:dragon_leg', 1),
    [
      'oegeo',
      ' eme ', 
      'oegeo'
    ],
    {
      o: 'minecraft:obsidian',
      e: 'minecraft:end_crystal',
      m: '#c:foods/raw_meat' ,
      g: 'minecraft:gold_ingot'
    }
  ).id('ccq_core:dragon_leg')
  //删掉用刀子切薯条
    event.remove('create_bic_bit:compat/farmersdelight/raw_fries')
event.shapeless(
    Item.of('quark:ancient_fruit',1), 
    [
      Item.of('minecraft:apple',2),
      'create:experience_nugget'
    ]
  ).id('ccq_core:ancient_fluit')
   //附魔金苹果：金苹果序列组装 x3
   // 下界合金锭 -> 经验流体100mb -> 金锭
   const transitionalEgApple = 'ccq_core:incomplete_enchanted_golden_apple'
   create.sequenced_assembly(
     [
       Item.of('minecraft:enchanted_golden_apple')
     ],
     'minecraft:golden_apple',
     [
       create.deploying(transitionalEgApple, [transitionalEgApple, 'minecraft:netherite_ingot']),
       create.filling(transitionalEgApple, [transitionalEgApple, Fluid.of('create_enchantment_industry:experience', 100)]),
       create.deploying(transitionalEgApple, [transitionalEgApple, 'minecraft:gold_ingot'])
     ]
   )
   .transitionalItem(transitionalEgApple)
   .loops(3)
   .id('ccq_core:eg_apple')
  //修复烤红薯配方
  event.remove('expandeddelight:baked_sweet_potato_from_campfire_cooking')
  event.remove('expandeddelight:baked_sweet_potato_from_campfire_smoking')
  event.remove('expandeddelight:baked_sweet_potato')
  //可可
  //event.remove('create_confectionery:cocoa_powder_and_butter_recipe')
  //油脂
  create.pressing( 'kaleidoscope_cookery:oil','minecraft:porkchop').id('ccq_core:oil')
    //删掉不合理的面团配方
  event.remove('farmersdelight:wheat_dough_from_water')
  //龙血
  create.mixing(
    Fluid.of('kaleidoscope_dim_wine:dragon_blood',200),
    [
      Fluid.of('kaleidoscope_dim_wine:dragon_blood',100),
      Fluid.of('create_dragons_plus:dragon_breath',100)
    ]
  ).superheated().id('ccq_core:dragon_blood')

  farmer.cutting(
        'culturaldelights:raw_calamari',
        '#c:tools/knife', 
        [ 
            "oceansdelight:tentacles",
        ]
    )
    //把几种鱿鱼统一一下，因为经过测试只会掉多元乐事的鱿鱼所以加几个配方
    /*event.shapeless(
        Item.of('minersdelight:squid',2),
        'culturaldelights:squid'
      ).id('ccq_core:squid')

      event.shapeless(
        Item.of('minersdelight:glow_squid',2),
        'culturaldelights:glow_squid'
      ).id('ccq_core:glow_squid')

      farmer.cutting(
        'minersdelight:tentacles',
        '#c:tools/knife', 
        [ 
            "oceansdelight:tentacles",
        ]
    )
        */

     /*//矿工乐事的杯子注液
     create.filling(
       'minersdelight:water_cup',
       [
           'minersdelight:copper_cup',
          Fluid.of('minecraft:water',1000)
     ]
    ).id('ccq_core:watercup')
    create.filling(
      'minersdelight:powder_snow_cup',
     [
         'minersdelight:copper_cup',
         Fluid.of('fluid:powder_snow',1000)
     ]
    ).id('ccq_core:snowcup')
    create.filling(
     'minersdelight:milk_cup',
     [
        'minersdelight:copper_cup',
         Fluid.of('minecraft:milk',1000)
     ]
    ).id('ccq_core:milkcup')*/
    //腌黄瓜
  /*event.shapeless(
    Item.of('culturaldelights:pickle',1), 
    [
      'culturaldelights:cucumber',
      '#c:salt'
    ]
  ).id('ccq_core:pickle')
  event.shapeless(
    Item.of('culturaldelights:cut_pickle',2), 
    [
      Item.of('culturaldelights:cut_cucumber',2),
      '#c:salt'
    ]
  ).id('ccq_core:cutpickle')*/
  //甜曲奇
  //event.smoking('createfood:raw_sugar_cookie', 'expandeddelight:sugar_cookie').id('ccq_core:sugar_cookie')
  //event.campfireCooking('createfood:raw_sugar_cookie', 'expandeddelight:sugar_cookie', 0.35, 600).id('ccq_core:sugar_cookie1')
})