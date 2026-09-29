ServerEvents.recipes(event => {
/*
矿石开掘
 // 1. 矿脉生成
  // 生成矿脉（名称： 粗锇矿 ，贴图： mekanism:raw_osmium），生成规则（平均间隔128区块，最小间距8区块，随机数），id（kubejs:mek_osmium）；该 id 在配置矿脉开采时需要，也在 /coe 命令中作为 <recipe> 使用
   
  event.recipes.createoreexcavation.vein('{"text": "粗锇矿"}', 'mekanism:raw_osmium').placement(128, 8, 64825185).id("kubejs:mek_osmium")
   
  // 以上是生成矿脉最少需要的配置项，生成矿脉还包含以下可选项
   
  .priority(0)                                                    // 多个矿物都命中同一个区块时，采用数值高的矿脉
  .alwaysFinite()                                              // 矿脉不是无限开采的，不添加默认为 .alwaysInfinite() 可无限开采
  .veinSize(3, 8.5)                                            // 矿脉大小区间，3000-8500； 当矿脉不是无限开采时生效
  .biomeWhitelist('minecraft:is_overworld')          // 可生成的群系白名单；黑名单使用 .biomeBlacklist()*
   
  // 2. 矿脉开采
  // 生成矿脉后，需要配置如何开采
  // 产出单种物品
  // 矿物配置（产出：mekanism:raw_osmium，在 kubejs:mek_osmium 矿脉中，32 RPM 下每采集一次需要 600 tick），id（kubejs:mek_vein1）
  event.recipes.createoreexcavation.drilling('mekanism:raw_osmium', 'kubejs:mek_osmium', 600).id("kubejs:mek_vein1");
   
  // 产出多种物品，且有几率几率
  // 矿物配置（产出：mekanism:raw_osmium 和 5%几率 minecraft:diamond，在 kubejs:mek_osmium 矿脉中，32RPM下每采集一次需要 600 tick），id（kubejs:mek_vein1）
  event.recipes.createoreexcavation.drilling(['mekanism:raw_osmium', Item.of('minecraft:diamond').withChance(0.05)], 'kubejs:mek_osmium', 600).id("kubejs:mek_vein1");
   
  // 产出流体
  // 流体配置（产出：minecraft:lava 2000ml 从 kubejs:lava 矿脉中，32 RPM 下每采集一次需要 100 tick）；流体只能产出一种，不配置量默认为 1000ml
  event.recipes.createoreexcavation.extracting('minecraft:lava 2000', 'kubejs:lava', 100).id("kubejs:my_lava_vein");
   
  // 矿物和流体都通用的可选配置
  .fluid(Fliod.of('minecraft:lava',10))                                   // 需要流体 minecraft:lava，每次 10ml，不配置为 1000ml
  .drill('createoreexcavation:diamond_drill')           // 需要钻头 钻石以上 （下界合金钻头为 createoreexcavation:netherite_drill）
  .stress(512)  
*/ 
//月球
   /* 'northstar:lunar_asurine_caves',
    'northstar:lunar_cooled_lava_cave',
    'northstar:lunar_crater_fields',
    'northstar:lunar_glowstone_cavern',
    'northstar:lunar_hills',
    'northstar:lunar_ice_caves',
    'northstar:lunar_plains',
    //火星
    'northstar:martian_crimsite_caverns',
    'northstar:martian_highlands',
    'northstar:martian_magmatic_caves',
    'northstar:martian_peaks',
    //水星
    'northstar:mercury_basins',
    'northstar:mercury_hills',
    'northstar:mercury_icy_caverns',
    'northstar:mercury_magmatic_caverns',
    //金星
    "northstar:venus_fungal_caverns",
    "northstar:venus_fungal_forest",
    "northstar:venus_lava_caves",
    "northstar:venus_sulfuric_caverns",
    "northstar:venusian_plains",
    "northstar:venusian_wastes",*/

/*//铀
  event.recipes.createoreexcavation.vein('{"text": "粗铀矿"}', 'createnuclear:raw_uranium').placement(128, 12, 64825185).id("kubejs:make_uranium")
  .priority(2)                                                  
  .biomeWhitelist('minecraft:is_overworld')        

  event.recipes.createoreexcavation.drilling('createnuclear:raw_uranium', 'kubejs:make_uranium', 1800).id("kubejs:uranium_1")
   .drill('#createoreexcavation:drills')      
  .fluid(Fluid.of('minecraft:lava',10))
  .stress(128);   


//铅
  event.recipes.createoreexcavation.vein('{"text": "粗铅矿"}', 'createnuclear:raw_lead').placement(128, 6, 64366537).id("kubejs:make_lead")
  .priority(0)                             
  .biomeWhitelist('minecraft:is_overworld')        

  event.recipes.createoreexcavation.drilling('createnuclear:raw_lead', 'kubejs:make_lead', 600).id("kubejs:lead_1")
   .drill('#createoreexcavation:drills')          
  .stress(256);
    //铂
event.recipes.createoreexcavation.vein('{"text": "粗铂矿"}', 'createpropulsion:raw_platinum').placement(64, 6, 75437387).id("kubejs:make_platinum")
.priority(0)                             
.biomeWhitelist('minecraft:is_overworld')
event.recipes.createoreexcavation.drilling('createpropulsion:raw_platinum', 'kubejs:make_platinum', 600).id("kubejs:platinum_1")
 .drill('#createoreexcavation:drills')         
.stress(128);     
 */

  //删掉原有矿脉
  //event.remove({mod:'createoreexcavation',not:{type:'create:mechanical_crafting'},not:{type:'minecraft:shaped'},not:{type:'minecraft:smithing'}})
  event.remove({type:'createoreexcavation:vein'})
  event.remove({type:'createoreexcavation:drilling'})
  event.remove({type:'create:cutting',mod:'createoreexcavation'})

  //主世界
  event.recipes.createoreexcavation.vein(
    '{"text": "主世界金属矿石"}', 
    'ccq_core:raw_overworld_ore'
  ).placement(64, 5, 64346585)
  .id("kubejs:make_overworld")
  .priority(1)                                                 
  .biomeWhitelist('minecraft:is_overworld')        
  event.recipes.createoreexcavation.drilling(
    [
      CreateItem.of('ccq_core:raw_overworld_ore',0.5),
      CreateItem.of('ccq_core:raw_overworld_ore',0.8),
      Item.of('ccq_core:raw_overworld_ore', 1)
    ], 
    'kubejs:make_overworld', 
    800
  ).id("kubejs:overworld")
  .drill('#createoreexcavation:drills')   
  .fluid(Fluid.of('ccq_core:cooling_liquid',50))   
  .stress(128);   
  //主世界宝石
  event.recipes.createoreexcavation.vein(
    '{"text": "宝石矿"}', 
    'ccq_core:raw_gem'
  ).placement(64, 5, 1326585)
  .id("kubejs:make_gem")
  .priority(0)                                                 
  .biomeWhitelist('minecraft:is_overworld')        
  event.recipes.createoreexcavation.drilling(
    [
      CreateItem.of('ccq_core:raw_gem',0.8),
      Item.of('ccq_core:raw_gem', 1)
    ], 
    'kubejs:make_gem', 
    800
  ).id("kubejs:gem")
  .fluid(Fluid.of('ccq_core:cooling_liquid',50))
  .drill('#createoreexcavation:drills')      
  .stress(128);
  //下界
  event.recipes.createoreexcavation.vein(
    '{"text": "下界矿石"}',
     'ccq_core:raw_nether_ore'
    ).placement(64, 5, 13453285)
    .id("kubejs:make_nether")
  .priority(0)                                                 
  .biomeWhitelist('minecraft:is_nether')        
  event.recipes.createoreexcavation.drilling(
    [
      CreateItem.of('ccq_core:raw_nether_ore',0.8),
      Item.of('ccq_core:raw_nether_ore', 1)
    ], 
    'kubejs:make_nether', 
    800
  ).id("kubejs:nether")
  .fluid(Fluid.of('ccq_core:cooling_liquid',100))
  .drill('#createoreexcavation:drills')      
  .stress(128);


  //岩盐
  event.recipes.createoreexcavation.vein(
    '{"text": "盐矿"}',
     'expandeddelight:salt_ore'
  ).placement(128, 20, 64354185)
  .id("kubejs:make_salt")
  .priority(0)                                                 
  .biomeWhitelist('minecraft:is_overworld')        
  event.recipes.createoreexcavation.drilling(
    [
      CreateItem.of('expandeddelight:salt_ore',0.7),
      CreateItem.of('expandeddelight:deepslate_salt_ore', 0.3)
    ], 
    'kubejs:make_salt', 
    600
  ).id("kubejs:salt_1")
  .drill('#createoreexcavation:drills')      
  .stress(64);   
  
  //钛
  event.recipes.createoreexcavation.vein(
    '{"text": "粗钛矿"}', 
    'northstar:raw_titanium_ore'
  ).placement(192, 6, 64435345)
  .id("kubejs:make_titan")
  .priority(1)                             
  .biomeWhitelist('northstar:moon_biomes')        
  event.recipes.createoreexcavation.drilling('northstar:raw_titanium_ore', 'kubejs:make_titan', 1200).id("kubejs:titan_1")
  .drill('createoreexcavation:netherite_drill')      
  .fluid(Fluid.of('minecraft:lava',100))    
  .stress(512); 

  //火星铁
  event.recipes.createoreexcavation.vein(
    '{"text": "粗火星铁矿"}', 
    'northstar:raw_martian_iron_ore'
  ).placement(128, 6, 64355576)
  .id("kubejs:make_miron")
  .priority(1)                             
  .biomeWhitelist('northstar:mars_biomes')        
  event.recipes.createoreexcavation.drilling(
    'northstar:raw_martian_iron_ore', 
    'kubejs:make_miron', 
    800
  ).id("kubejs:miron_1")
  .drill('createoreexcavation:netherite_drill')      
  .fluid(Fluid.of('minecraft:lava',100))    
  .stress(256); 

  //钨
  event.recipes.createoreexcavation.vein(
    '{"text": "粗钨矿"}',
    'northstar:raw_tungsten_ore'
  ).placement(128, 6, 53465756)
  .id("kubejs:make_tung")
  .priority(0)                             
  .biomeWhitelist('northstar:mercury_biomes')        
  event.recipes.createoreexcavation.drilling(
    'northstar:raw_tungsten_ore', 
    'kubejs:make_tung', 
    1000
  ).id("kubejs:tung_1")
  .drill('#createoreexcavation:drills')     
  .fluid(Fluid.of('ccq_core:cooling_liquid',100))    
  .stress(256); 

//粗萤石
  event.recipes.createoreexcavation.vein(
    '{"text": "粗荧石矿"}', 
    'northstar:raw_glowstone_ore'
  ).placement(128, 6, 34776387)
  .id("kubejs:make_glow")
  .priority(0)                             
  .biomeWhitelist('northstar:venus_biomes')        
  event.recipes.createoreexcavation.drilling(
    'northstar:raw_glowstone_ore', 
    'kubejs:make_glow',
    600
  ).id("kubejs:glow_1")
  .drill('#createoreexcavation:drills')         
  .stress(256);     

  //金星
  event.recipes.createoreexcavation.vein(
    '{"text": "金星流体矿"}', 
    'createdieselgenerators:crude_oil_bucket'
  ).placement(512, 32, 347654387)
  .id("kubejs:make_venus")
  .priority(0)                             
  .biomeWhitelist('northstar:venus_biomes')        
  event.recipes.createoreexcavation.extracting(
    Fluid.of('createdieselgenerators:crude_oil',100), 
    'kubejs:make_venus', 
    1000
  ).id("kubejs:oil_1")
  .drill('createoreexcavation:drill')         
  .stress(128); 
  event.recipes.createoreexcavation.extracting(
    Fluid.of('northstar:sulfuric_acid',100), 
    'kubejs:make_venus', 
    500
  ).id("kubejs:acid_1")
  .fluid(Fluid.of('ccq_core:cooling_liquid',100))
  .drill('createoreexcavation:netherite_drill')         
  .stress(64)

  /*//硫酸
  event.recipes.createoreexcavation.vein('{"text": "硫酸"}', 'northstar:sulfuric_acid_bucket').placement(256, 32, 343545687).id("kubejs:make_acid")
  .priority(0)                             
  .biomeWhitelist('northstar:venus_biomes')        
  event.recipes.createoreexcavation.extracting(Fluid.of('northstar:sulfuric_acid',100), 'kubejs:make_acid', 500).id("kubejs:acid_1")
  .drill('createoreexcavation:netherite_drill')         
  .stress(128); */
})