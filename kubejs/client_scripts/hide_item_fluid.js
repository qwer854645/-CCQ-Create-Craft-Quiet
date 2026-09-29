// 隐藏物品
RecipeViewerEvents.removeEntries('item', event => {
  const hideItems = [
      "brewinandchewin:apple_jelly",
      "brewinandchewin:glow_berry_marmalade",
      "brewinandchewin:sweet_berry_jam",

      "create_mechanical_spawner:spawn_fluid_fox_bucket",
      "create_mechanical_spawner:spawn_fluid_witch_bucket",
      "create_mechanical_spawner:spawn_fluid_parrot_bucket",
      "create_mechanical_spawner:spawn_fluid_wolf_bucket",

      //"create_things_and_misc:sprinkler",
      //"create_things_and_misc:sprinkler_head",
      'create_fantasizing:zinc_casing',
      'create_fantasizing:gold_casing',
      'create_fantasizing:diamond_casing',
      'create_fantasizing:zinc_fluid_barrel',
      'create_fantasizing:gold_fluid_barrel',
      'create_fantasizing:diamond_fluid_barrel',
      'create_fantasizing:yin_yang_engine',

      'functionalstorage:ender_drawer',

      'createdieselgenerators:plant_oil_bucket',

      //飞行戒指
      'balancedflight:ascended_flight_ring',
      
      'ars_nouveau:planarium_projector',

      'functionalstorage:dripping_upgrade',
      'functionalstorage:water_generator_upgrade',
      'functionalstorage:obsidian_upgrade',

      'createdeco:gold_coin',
      'createdeco:netherite_coin',
      'createdeco:brass_coin',
      'createdeco:iron_coin',
      'createdeco:copper_coin',
      'createdeco:zinc_coin',

      'tacz:workbench_b[custom_data={BlockId:"create_armorer:create_workbench"}]',

      //斯巴达武器的联动武器
      "spartan_weaponry_unofficial:tin_dagger",
      "spartan_weaponry_unofficial:silver_dagger",
      "spartan_weaponry_unofficial:nickel_dagger",
      "spartan_weaponry_unofficial:invar_dagger",
      "spartan_weaponry_unofficial:constantan_dagger",
      "spartan_weaponry_unofficial:aluminum_dagger",

      "spartan_weaponry_unofficial:tin_parrying_dagger",
      "spartan_weaponry_unofficial:silver_parrying_dagger",
      "spartan_weaponry_unofficial:nickel_parrying_dagger",
      "spartan_weaponry_unofficial:invar_parrying_dagger",
      "spartan_weaponry_unofficial:constantan_parrying_dagger",
      "spartan_weaponry_unofficial:aluminum_parrying_dagger",

      "spartan_weaponry_unofficial:tin_longsword",
      "spartan_weaponry_unofficial:silver_longsword",
      "spartan_weaponry_unofficial:nickel_longsword",
      "spartan_weaponry_unofficial:invar_longsword",
      "spartan_weaponry_unofficial:constantan_longsword",
      "spartan_weaponry_unofficial:aluminum_longsword",

      "spartan_weaponry_unofficial:tin_katana",
      "spartan_weaponry_unofficial:silver_katana",
      "spartan_weaponry_unofficial:nickel_katana",
      "spartan_weaponry_unofficial:invar_katana",
      "spartan_weaponry_unofficial:constantan_katana",
      "spartan_weaponry_unofficial:aluminum_katana",

      "spartan_weaponry_unofficial:tin_saber",
      "spartan_weaponry_unofficial:silver_saber",
      "spartan_weaponry_unofficial:nickel_saber",
      "spartan_weaponry_unofficial:invar_saber",
      "spartan_weaponry_unofficial:constantan_saber",
      "spartan_weaponry_unofficial:aluminum_saber",

      "spartan_weaponry_unofficial:tin_rapier",
      "spartan_weaponry_unofficial:silver_rapier",
      "spartan_weaponry_unofficial:nickel_rapier",
      "spartan_weaponry_unofficial:invar_rapier",
      "spartan_weaponry_unofficial:constantan_rapier",
      "spartan_weaponry_unofficial:aluminum_rapier",

      "spartan_weaponry_unofficial:tin_greatsword",
      "spartan_weaponry_unofficial:silver_greatsword",
      "spartan_weaponry_unofficial:nickel_greatsword",
      "spartan_weaponry_unofficial:invar_greatsword",
      "spartan_weaponry_unofficial:constantan_greatsword",
      "spartan_weaponry_unofficial:aluminum_greatsword",

      "spartan_weaponry_unofficial:tin_battle_hammer",
      "spartan_weaponry_unofficial:silver_battle_hammer",
      "spartan_weaponry_unofficial:nickel_battle_hammer",
      "spartan_weaponry_unofficial:invar_battle_hammer",
      "spartan_weaponry_unofficial:constantan_battle_hammer",
      "spartan_weaponry_unofficial:aluminum_battle_hammer",

      "spartan_weaponry_unofficial:tin_warhammer",
      "spartan_weaponry_unofficial:silver_warhammer",
      "spartan_weaponry_unofficial:nickel_warhammer",
      "spartan_weaponry_unofficial:invar_warhammer",
      "spartan_weaponry_unofficial:constantan_warhammer",
      "spartan_weaponry_unofficial:aluminum_warhammer",

      "spartan_weaponry_unofficial:tin_spear",
      "spartan_weaponry_unofficial:silver_spear",
      "spartan_weaponry_unofficial:nickel_spear",
      "spartan_weaponry_unofficial:invar_spear",
      "spartan_weaponry_unofficial:constantan_spear",
      "spartan_weaponry_unofficial:aluminum_spear",

      "spartan_weaponry_unofficial:tin_halberd",
      "spartan_weaponry_unofficial:silver_halberd",
      "spartan_weaponry_unofficial:nickel_halberd",
      "spartan_weaponry_unofficial:invar_halberd",
      "spartan_weaponry_unofficial:constantan_halberd",
      "spartan_weaponry_unofficial:aluminum_halberd",

      "spartan_weaponry_unofficial:tin_pike",
      "spartan_weaponry_unofficial:silver_pike",
      "spartan_weaponry_unofficial:nickel_pike",
      "spartan_weaponry_unofficial:invar_pike",
      "spartan_weaponry_unofficial:constantan_pike",
      "spartan_weaponry_unofficial:aluminum_pike",

      "spartan_weaponry_unofficial:tin_lance",
      "spartan_weaponry_unofficial:silver_lance",
      "spartan_weaponry_unofficial:nickel_lance",
      "spartan_weaponry_unofficial:invar_lance",
      "spartan_weaponry_unofficial:constantan_lance",
      "spartan_weaponry_unofficial:aluminum_lance",

      "spartan_weaponry_unofficial:longbow_tin_strengthened",
      "spartan_weaponry_unofficial:longbow_silver_strengthened",
      "spartan_weaponry_unofficial:longbow_nickel_strengthened",
      "spartan_weaponry_unofficial:longbow_invar_strengthened",
      "spartan_weaponry_unofficial:longbow_constantan_strengthened",
      "spartan_weaponry_unofficial:longbow_aluminum_strengthened",

      "spartan_weaponry_unofficial:heavy_crossbow_tin_strengthened",
      "spartan_weaponry_unofficial:heavy_crossbow_silver_strengthened",
      "spartan_weaponry_unofficial:heavy_crossbow_nickel_strengthened",
      "spartan_weaponry_unofficial:heavy_crossbow_invar_strengthened",
      "spartan_weaponry_unofficial:heavy_crossbow_constantan_strengthened",
      "spartan_weaponry_unofficial:heavy_crossbow_aluminum_strengthened",

      "spartan_weaponry_unofficial:throwing_knife_tin",
      "spartan_weaponry_unofficial:throwing_knife_silver",
      "spartan_weaponry_unofficial:throwing_knife_nickel",
      "spartan_weaponry_unofficial:throwing_knife_invar",
      "spartan_weaponry_unofficial:throwing_knife_constantan",
      "spartan_weaponry_unofficial:throwing_knife_aluminum",

      "spartan_weaponry_unofficial:tomahawk_tin",
      "spartan_weaponry_unofficial:tomahawk_silver",
      "spartan_weaponry_unofficial:tomahawk_nickel",
      "spartan_weaponry_unofficial:tomahawk_invar",
      "spartan_weaponry_unofficial:tomahawk_constantan",
      "spartan_weaponry_unofficial:tomahawk_aluminum",

      "spartan_weaponry_unofficial:javelin_tin",
      "spartan_weaponry_unofficial:javelin_silver",
      "spartan_weaponry_unofficial:javelin_nickel",
      "spartan_weaponry_unofficial:javelin_invar",
      "spartan_weaponry_unofficial:javelin_constantan",
      "spartan_weaponry_unofficial:javelin_aluminum", 

      "spartan_weaponry_unofficial:boomerang_tin",
      "spartan_weaponry_unofficial:boomerang_silver",
      "spartan_weaponry_unofficial:boomerang_nickel",
      "spartan_weaponry_unofficial:boomerang_invar",
      "spartan_weaponry_unofficial:boomerang_constantan",
      "spartan_weaponry_unofficial:boomerang_aluminum",

      "spartan_weaponry_unofficial:tin_battleaxe",
      "spartan_weaponry_unofficial:silver_battleaxe",
      "spartan_weaponry_unofficial:nickel_battleaxe",
      "spartan_weaponry_unofficial:invar_battleaxe",
      "spartan_weaponry_unofficial:constantan_battleaxe",
      "spartan_weaponry_unofficial:aluminum_battleaxe", 

      "spartan_weaponry_unofficial:tin_flanged_mace",
      "spartan_weaponry_unofficial:silver_flanged_mace",
      "spartan_weaponry_unofficial:nickel_flanged_mace",
      "spartan_weaponry_unofficial:invar_flanged_mace",
      "spartan_weaponry_unofficial:constantan_flanged_mace",
      "spartan_weaponry_unofficial:aluminum_flanged_mace",

      "spartan_weaponry_unofficial:tin_glaive",
      "spartan_weaponry_unofficial:silver_glaive",
      "spartan_weaponry_unofficial:nickel_glaive",
      "spartan_weaponry_unofficial:invar_glaive",
      "spartan_weaponry_unofficial:constantan_glaive",
      "spartan_weaponry_unofficial:aluminum_glaive",

      "spartan_weaponry_unofficial:tin_quarterstaff",
      "spartan_weaponry_unofficial:silver_quarterstaff",
      "spartan_weaponry_unofficial:nickel_quarterstaff",
      "spartan_weaponry_unofficial:invar_quarterstaff",
      "spartan_weaponry_unofficial:constantan_quarterstaff",
      "spartan_weaponry_unofficial:aluminum_quarterstaff",

      "spartan_weaponry_unofficial:tin_scythe",
      "spartan_weaponry_unofficial:silver_scythe",
      "spartan_weaponry_unofficial:nickel_scythe",
      "spartan_weaponry_unofficial:invar_scythe",
      "spartan_weaponry_unofficial:constantan_scythe",
      "spartan_weaponry_unofficial:aluminum_scythe"
  ];
  hideItems.forEach(itemId => event.remove(itemId));
});
//隐藏流体
RecipeViewerEvents.removeEntries('fluid', event => {
  const hideFluids = [
      "create_confectionery:black_chocolate",
      "create_confectionery:white_chocolate",
      "create_confectionery:hot_chocolate",
      "create_confectionery:caramel",

      "brewinandchewin:honey",
      
      "create_mechanical_spawner:spawn_fluid_fox",
      "create_mechanical_spawner:spawn_fluid_witch",
      "create_mechanical_spawner:spawn_fluid_parrot",
      "create_mechanical_spawner:spawn_fluid_wolf",
      
      "createdieselgenerators:plant_oil",

      "create_fantasizing:powder_snow"
  ];
  hideFluids.forEach(fluidId => event.remove(fluidId));
});
//把暗影跟光辉加进去
RecipeViewerEvents.addEntries('item', event => {
	event.add('create:shadow_steel')
  event.add('create:refined_radiance')
  event.add('create:shadow_steel_casing')
  event.add('create:refined_radiance_casing')
  event.add('ccq_core:storage_bridge')
})