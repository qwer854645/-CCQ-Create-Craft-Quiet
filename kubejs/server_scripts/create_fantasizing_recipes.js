// Create: Fantasizing Again 全配方重写
// 移除模组原生配方（旧 fluid_stack 格式与 KubeJS 2101 不兼容），用 KubeJS API 重新注册
ServerEvents.recipes(event => {

  const create = event.recipes.create

  event.remove({ mod: 'create_fantasizing' })
  event.remove({ id: /^create_fantasizing:/ })

  // ===== 工作台合成 =====

  // 安山箱
  event.shaped(
    Item.of('create_fantasizing:andesite_crate', 4),
    [
      'APA',
      'PCP',
      'APA'
    ],
    {
      A: 'create:andesite_alloy',
      P: '#minecraft:planks',
      C: '#c:chests'
    }
  ).id('ccq_core:cfa_andesite_crate')
  event.shaped(
    Item.of('create_fantasizing:andesite_crate', 8),
    [
      'CCC',
      'C C',
      'CCC'
    ],
    {
      C: 'create:andesite_casing'
    }
  ).id('ccq_core:cfa_andesite_crate_alt')

  // 黄铜箱
  event.shaped(
    Item.of('create_fantasizing:brass_crate', 4),
    [
      'APA',
      'PCP',
      'APA'
    ],
    {
      A: '#c:ingots/brass',
      P: '#minecraft:planks',
      C: '#c:chests'
    }
  ).id('ccq_core:cfa_brass_crate')
  event.shaped(
    Item.of('create_fantasizing:brass_crate', 8),
    [
      'CCC',
      'C C',
      'CCC'
    ],
    {
      C: 'create:brass_casing'
    }
  ).id('ccq_core:cfa_brass_crate_alt')

  // 铁箱
  event.shaped(
    Item.of('create_fantasizing:iron_crate', 4),
    [
      'APA',
      'PCP',
      'APA'
    ],
    {
      A: '#c:ingots/iron',
      P: '#minecraft:planks',
      C: '#c:chests'
    }
  ).id('ccq_core:cfa_iron_crate')
  event.shaped(
    Item.of('create_fantasizing:iron_crate', 16),
    [
      'CCC',
      'C C',
      'CCC'
    ],
    {
      C: 'create:item_vault'
    }
  ).id('ccq_core:cfa_iron_crate_alt')

  // 坚固箱
  event.shaped(
    Item.of('create_fantasizing:sturdy_crate', 4),
    [
      'APA',
      'PCP',
      'APA'
    ],
    {
      A: '#c:plates/obsidian',
      P: '#minecraft:planks',
      C: '#c:chests'
    }
  ).id('ccq_core:cfa_sturdy_crate')
  event.shaped(
    Item.of('create_fantasizing:sturdy_crate', 8),
    [
      'CCC',
      'C C',
      'CCC'
    ],
    {
      C: 'create:railway_casing'
    }
  ).id('ccq_core:cfa_sturdy_crate_alt')

  // 流体桶（已禁用）
  /*
  event.shaped(
    Item.of('create_fantasizing:copper_fluid_barrel', 4),
    [
      'APA',
      'PCP',
      'APA'
    ],
    {
      A: '#c:ingots/copper',
      P: '#minecraft:planks',
      C: '#c:barrels'
    }
  ).id('ccq_core:cfa_copper_fluid_barrel')
  event.shaped(
    Item.of('create_fantasizing:copper_fluid_barrel', 8),
    [
      'CCC',
      'C C',
      'CCC'
    ],
    {
      C: 'create:copper_casing'
    }
  ).id('ccq_core:cfa_copper_fluid_barrel_alt')

  event.shaped(
    Item.of('create_fantasizing:gold_fluid_barrel', 4),
    [
      'APA',
      'PCP',
      'APA'
    ],
    {
      A: '#c:ingots/gold',
      P: '#minecraft:planks',
      C: '#c:barrels'
    }
  ).id('ccq_core:cfa_gold_fluid_barrel')
  event.shaped(
    Item.of('create_fantasizing:gold_fluid_barrel', 8),
    [
      'CCC',
      'C C',
      'CCC'
    ],
    {
      C: 'create_fantasizing:gold_casing'
    }
  ).id('ccq_core:cfa_gold_fluid_barrel_alt')

  event.shaped(
    Item.of('create_fantasizing:diamond_fluid_barrel', 4),
    [
      'APA',
      'PCP',
      'APA'
    ],
    {
      A: '#c:gems/diamond',
      P: '#minecraft:planks',
      C: '#c:barrels'
    }
  ).id('ccq_core:cfa_diamond_fluid_barrel')
  event.shaped(
    Item.of('create_fantasizing:diamond_fluid_barrel', 8),
    [
      'CCC',
      'C C',
      'CCC'
    ],
    {
      C: 'create_fantasizing:diamond_casing'
    }
  ).id('ccq_core:cfa_diamond_fluid_barrel_alt')

  event.shaped(
    Item.of('create_fantasizing:zinc_fluid_barrel', 4),
    [
      'APA',
      'PCP',
      'APA'
    ],
    {
      A: '#c:ingots/zinc',
      P: '#minecraft:planks',
      C: '#c:barrels'
    }
  ).id('ccq_core:cfa_zinc_fluid_barrel')
  event.shaped(
    Item.of('create_fantasizing:zinc_fluid_barrel', 8),
    [
      'CCC',
      'C C',
      'CCC'
    ],
    {
      C: 'create_fantasizing:zinc_casing'
    }
  ).id('ccq_core:cfa_zinc_fluid_barrel_alt')
  */

  // 传送器
  event.shaped(
    'create_fantasizing:transporter',
    [
      'EAW'
    ],
    {
      E: 'create:electron_tube',
      A: '#c:ingots/brass',
      W: 'minecraft:wind_charge'
    }
  ).id('ccq_core:cfa_transporter')

  // 玫瑰石英灯泡
  event.shaped(
    Item.of('create_fantasizing:rose_quartz_bulb', 8),
    [
      'R',
      'P'
    ],
    {
      R: 'create:polished_rose_quartz',
      P: '#c:plates/copper'
    }
  ).id('ccq_core:cfa_rose_quartz_bulb')

  // 海晶风扇叶片
  event.shaped(
    'create_fantasizing:prismarine_fan_blades',
    [
      ' S ',
      'SCS',
      ' S '
    ],
    {
      C: '#c:gems/prismarine',
      S: 'minecraft:prismarine_shard'
    }
  ).id('ccq_core:cfa_prismarine_fan_blades')

  // 光辉/暗影隧道
  event.shaped(
    Item.of('create_fantasizing:refined_radiance_tunnel', 2),
    [
      'AA',
      'KK'
    ],
    {
      A: 'create:refined_radiance',
      K: 'minecraft:dried_kelp'
    }
  ).id('ccq_core:cfa_refined_radiance_tunnel')

  event.shaped(
    Item.of('create_fantasizing:shadow_steel_tunnel', 2),
    [
      'AA',
      'KK'
    ],
    {
      A: 'create:shadow_steel',
      K: 'minecraft:dried_kelp'
    }
  ).id('ccq_core:cfa_shadow_steel_tunnel')

  /*// 阴阳引擎（三种引擎均可）
  event.shaped(
    'create_fantasizing:yin_yang_engine',
    ['#', 'E'],
    {
      '#': 'create_fantasizing:taiji_chipset',
      E: 'create_fantasizing:compact_hydraulic_engine'
    }
  ).id('ccq_core:cfa_yin_yang_engine_hydraulic')
  event.shaped(
    'create_fantasizing:yin_yang_engine',
    ['#', 'E'],
    {
      '#': 'create_fantasizing:taiji_chipset',
      E: 'create_fantasizing:compact_wind_engine'
    }
  ).id('ccq_core:cfa_yin_yang_engine_wind')
  event.shaped(
    'create_fantasizing:yin_yang_engine',
    ['#', 'E'],
    {
      '#': 'create_fantasizing:taiji_chipset',
      E: 'create_fantasizing:sculk_engine'
    }
  ).id('ccq_core:cfa_yin_yang_engine_sculk')*/

  // 切石
  event.stonecutting(
    Item.of('create_fantasizing:sturdy_girder', 8),
    'create:railway_casing'
  ).id('ccq_core:cfa_sturdy_girder')

  // ===== 机械合成 =====

  create.mechanical_crafting(
    'create_fantasizing:tree_cutter',
    [
      '#  ',
      '#*#',
      '#l ',
      ' l ',
      ' l '
    ],
    {
      '#': '#c:plates/obsidian',
      '*': 'create:flywheel',
      l: 'create:gantry_shaft'
    }
  ).id('ccq_core:cfa_tree_cutter')

  create.mechanical_crafting(
    'create_fantasizing:block_placer',
    [
      '###*%',
      '  -AB'
    ],
    {
      '#': '#c:plates/obsidian',
      '*': 'create:precision_mechanism',
      '%': 'minecraft:beacon',
      '-': 'minecraft:end_rod',
      A: 'create:andesite_alloy',
      B: '#c:ingots/brass'
    }
  ).id('ccq_core:cfa_block_placer')

  create.mechanical_crafting(
    Item.of('minecraft:echo_shard', 2),
    [
      'O@   ',
      '@#/  ',
      'O/*/ ',
      ' O/#@',
      '  O@O'
    ],
    {
      '*': 'minecraft:echo_shard',
      '/': '#c:gems/amethyst',
      '#': 'create:refined_radiance',
      '@': 'create:shadow_steel',
      O: 'minecraft:sculk'
    }
  ).id('ccq_core:cfa_echo_shard_copy')

  /*create.mechanical_crafting(
    Item.of('minecraft:heart_of_the_sea', 2),
    [
      ' ### ',
      '#^@^#',
      '^@*@^',
      '#^@^#',
      ' ### '
    ],
    {
      '*': 'minecraft:heart_of_the_sea',
      '#': 'minecraft:prismarine_shard',
      '@': 'create:refined_radiance',
      '^': '#c:gems/prismarine'
    }
  ).id('ccq_core:cfa_heart_of_the_sea_copy')

  create.mechanical_crafting(
    Item.of('minecraft:heavy_core', 2),
    [
      'I@ @I',
      '@ # @',
      ' #*# ',
      '@ # @',
      'I@ @I'
    ],
    {
      '*': 'minecraft:heavy_core',
      '#': '#c:obsidians',
      '@': 'create:shadow_steel',
      I: '#minecraft:anvil'
    }
  ).id('ccq_core:cfa_heavy_core_copy')*/

  create.mechanical_crafting(
    Item.of('minecraft:nether_star', 2),
    [
      '  #  ',
      ' #@# ',
      '#@*@#',
      ' #@# ',
      '  #  '
    ],
    {
      '*': '#c:nether_stars',
      '#': 'create:refined_radiance',
      '@': 'create:shadow_steel'
    }
  ).id('ccq_core:cfa_nether_star_copy')

  create.mechanical_crafting(
    'create_fantasizing:sculk_engine_frame',
    [
      '#',
      '*',
      'U'
    ],
    {
      '#': 'minecraft:sculk_catalyst',
      '*': 'minecraft:recovery_compass',
      U: 'minecraft:sculk_shrieker'
    }
  ).id('ccq_core:cfa_sculk_engine_frame')

  // ===== 部署器 / 物品应用（含 tag 的 Create 配方用 event.custom，避免 # 被当成流体） =====

  event.custom({
    type: 'create:deploying',
    ingredients: [
      { tag: 'c:plates/obsidian' },
      { item: 'minecraft:conduit' }
    ],
    results: [{ id: 'create_fantasizing:sturdy_conduit' }]
  }).id('ccq_core:cfa_sturdy_conduit')

  event.custom({
    type: 'create:deploying',
    ingredients: [
      { tag: 'c:plates/obsidian' },
      { item: 'minecraft:heavy_core' }
    ],
    results: [{ id: 'create_fantasizing:sturdy_heavy_core' }]
  }).id('ccq_core:cfa_sturdy_heavy_core')

  // 金/锌/钻石机壳（已禁用）
  /*
  event.custom({
    type: 'create:item_application',
    ingredients: [
      { item: 'create_fantasizing:zinc_casing' },
      { tag: 'c:gems/diamond' }
    ],
    results: [{ id: 'create_fantasizing:diamond_casing' }]
  }).id('ccq_core:cfa_diamond_casing')

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_logs' },
      { tag: 'c:ingots/gold' }
    ],
    results: [{ id: 'create_fantasizing:gold_casing' }]
  }).id('ccq_core:cfa_gold_casing_log')

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_woods' },
      { tag: 'c:ingots/gold' }
    ],
    results: [{ id: 'create_fantasizing:gold_casing' }]
  }).id('ccq_core:cfa_gold_casing_wood')

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_logs' },
      { tag: 'c:ingots/zinc' }
    ],
    results: [{ id: 'create_fantasizing:zinc_casing' }]
  }).id('ccq_core:cfa_zinc_casing_log')

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_woods' },
      { tag: 'c:ingots/zinc' }
    ],
    results: [{ id: 'create_fantasizing:zinc_casing' }]
  }).id('ccq_core:cfa_zinc_casing_wood')
  */

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_logs' },
      { item: 'create:refined_radiance' }
    ],
    results: [{ id: 'create:refined_radiance_casing' }]
  }).id('ccq_core:cfa_refined_radiance_casing_log')

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_woods' },
      { item: 'create:refined_radiance' }
    ],
    results: [{ id: 'create:refined_radiance_casing' }]
  }).id('ccq_core:cfa_refined_radiance_casing_wood')

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_logs' },
      { item: 'create:shadow_steel' }
    ],
    results: [{ id: 'create:shadow_steel_casing' }]
  }).id('ccq_core:cfa_shadow_steel_casing_log')

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_woods' },
      { item: 'create:shadow_steel' }
    ],
    results: [{ id: 'create:shadow_steel_casing' }]
  }).id('ccq_core:cfa_shadow_steel_casing_wood')

  // ===== 混合 / 压缩 =====

  create.mixing(
    'create_fantasizing:alternative_chromatic_compound',
    [
      'create:powdered_obsidian',
      'create:powdered_obsidian',
      'create:powdered_obsidian',
      'minecraft:glowstone_dust',
      'minecraft:glowstone_dust',
      'minecraft:prismarine_shard',
      'minecraft:prismarine_shard',
      'minecraft:popped_chorus_fruit',
      'minecraft:popped_chorus_fruit'
    ]
  ).superheated().id('ccq_core:cfa_alternative_chromatic_compound')

  create.mixing(
    Fluid.of('create_fantasizing:powder_snow', 1000),
    'minecraft:snow_block'
  ).id('ccq_core:cfa_powder_snow')

  event.custom({
    type: 'create:compacting',
    ingredients: [
      {
        type: 'neoforge:tag',
        tag: 'c:powder_snow',
        amount: 1000
      }
    ],
    results: [
      { id: 'minecraft:snow_block' }
    ]
  }).id('ccq_core:cfa_powder_snow_to_block')

  // sculk 引擎另有序列组装配方，神秘转化类型当前 Create 版本未注册，跳过

  // ===== 色差隧道（模组自定义配方类型，保留 JSON） =====

  event.custom({
    type: 'create_fantasizing:exposing',
    ingredients: [
      {
        type: 'neoforge:compound',
        ingredients: [
          { item: 'create_fantasizing:alternative_chromatic_compound' },
          { item: 'create:chromatic_compound' }
        ]
      }
    ],
    results: [
      { id: 'create:refined_radiance' }
    ]
  }).id('ccq_core:cfa_refined_radiance_exposing')

  event.custom({
    type: 'create_fantasizing:shadow_plating',
    ingredients: [
      {
        type: 'neoforge:compound',
        ingredients: [
          { item: 'create_fantasizing:alternative_chromatic_compound' },
          { item: 'create:chromatic_compound' }
        ]
      }
    ],
    results: [
      { id: 'create:shadow_steel' }
    ]
  }).id('ccq_core:cfa_shadow_steel_plating')

  event.custom({
    type: 'create_fantasizing:shadow_plating',
    ingredients: [
      { item: 'minecraft:cobblestone' }
    ],
    results: [
      { id: 'minecraft:cobbled_deepslate' }
    ]
  }).id('ccq_core:cfa_deep_cobblestone')

  event.custom({
    type: 'create_fantasizing:shadow_plating',
    ingredients: [
      { item: 'minecraft:stone' }
    ],
    results: [
      { id: 'minecraft:deepslate' }
    ]
  }).id('ccq_core:cfa_deep_stone')

  // ===== 序列组装 =====

  const transitionalAltChromatic = 'create_fantasizing:incomplete_alternative_chromatic_compound'
  create.sequenced_assembly(
    [
      CreateItem.of('create_fantasizing:alternative_chromatic_compound')
    ],
    'create:powdered_obsidian',
    [
      create.deploying(transitionalAltChromatic, [transitionalAltChromatic, 'minecraft:glowstone_dust']),
      create.deploying(transitionalAltChromatic, [transitionalAltChromatic, 'minecraft:prismarine_shard']),
      create.deploying(transitionalAltChromatic, [transitionalAltChromatic, 'minecraft:popped_chorus_fruit']),
      create.filling(transitionalAltChromatic, [transitionalAltChromatic, Fluid.of('minecraft:lava', 500)]),
      create.deploying(transitionalAltChromatic, [transitionalAltChromatic, 'create:powdered_obsidian']),
      create.pressing(transitionalAltChromatic, transitionalAltChromatic)
    ]
  )
    .transitionalItem(transitionalAltChromatic)
    .loops(2)
    .id('ccq_core:cfa_alternative_chromatic_compound_seq')

  const transitionalHeart = 'create_fantasizing:unprocessed_heart_of_the_sea'
  /*create.sequenced_assembly(
    [
      CreateItem.of('minecraft:heart_of_the_sea', 2),
      CreateItem.of('minecraft:heart_of_the_sea', 0.25)
    ],
    'minecraft:heart_of_the_sea',
    [
      create.deploying(transitionalHeart, [transitionalHeart, 'minecraft:prismarine_shard']),
      create.deploying(transitionalHeart, [transitionalHeart, 'minecraft:prismarine_crystals']),
      create.deploying(transitionalHeart, [transitionalHeart, 'create:refined_radiance']),
      create.deploying(transitionalHeart, [transitionalHeart, 'minecraft:prismarine_shard']),
      create.filling(transitionalHeart, [transitionalHeart, Fluid.of('minecraft:water', 1000)])
    ]
  )
    .transitionalItem(transitionalHeart)
    .loops(3)
    .id('ccq_core:cfa_heart_of_the_sea_seq')*/

  const transitionalHydraulic = 'create_fantasizing:incomplete_compact_hydraulic_engine'
  create.sequenced_assembly(
    [
      CreateItem.of('create_fantasizing:compact_hydraulic_engine')
    ],
    'create_fantasizing:sturdy_conduit',
    [
      create.deploying(transitionalHydraulic, [transitionalHydraulic, 'create_fantasizing:prismarine_fan_blades']),
      create.filling(transitionalHydraulic, [transitionalHydraulic, Fluid.of('minecraft:water', 10)])
    ]
  )
    .transitionalItem(transitionalHydraulic)
    .loops(32)
    .id('ccq_core:cfa_compact_hydraulic_engine')

  const transitionalWind = 'create_fantasizing:incomplete_compact_wind_engine'
  create.sequenced_assembly(
    [
      CreateItem.of('create_fantasizing:compact_wind_engine')
    ],
    'create_fantasizing:sturdy_heavy_core',
    [
      create.deploying(transitionalWind, [transitionalWind, 'minecraft:white_wool']),
      create.deploying(transitionalWind, [transitionalWind, 'minecraft:wind_charge'])
    ]
  )
    .transitionalItem(transitionalWind)
    .loops(32)
    .id('ccq_core:cfa_compact_wind_engine')

  const transitionalSculk = 'create_fantasizing:incomplete_sculk_engine'
  create.sequenced_assembly(
    [
      CreateItem.of('create_fantasizing:sculk_engine')
    ],
    'create_fantasizing:sculk_engine_frame',
    [
      create.deploying(transitionalSculk, [transitionalSculk, 'minecraft:sculk_sensor']),
      create.deploying(transitionalSculk, [transitionalSculk, 'minecraft:sculk'])
    ]
  )
    .transitionalItem(transitionalSculk)
    .loops(32)
    .id('ccq_core:cfa_sculk_engine')

  // 含色差隧道步骤的序列组装（自定义步骤无法用 create.* API 表达）
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'minecraft:echo_shard' },
    loops: 2,
    results: [
      { count: 2, id: 'minecraft:echo_shard' },
      { id: 'minecraft:echo_shard' }
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_echo_shard' },
          { tag: 'c:gems/amethyst' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_echo_shard' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_echo_shard' },
          { item: 'minecraft:sculk' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_echo_shard' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_echo_shard' },
          { item: 'create:refined_radiance' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_echo_shard' }]
      },
      {
        type: 'create_fantasizing:shadow_plating',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_echo_shard' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_echo_shard' }]
      },
      {
        type: 'create:cutting',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_echo_shard' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_echo_shard' }]
      }
    ],
    transitional_item: { id: 'create_fantasizing:unprocessed_echo_shard' }
  }).id('ccq_core:cfa_echo_shard_seq')

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'minecraft:heavy_core' },
    loops: 4,
    results: [
      { chance: 90.0, count: 2, id: 'minecraft:heavy_core' },
      { chance: 10.0, id: 'minecraft:heavy_core' }
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_heavy_core' },
          { tag: 'minecraft:anvil' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_heavy_core' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_heavy_core' },
          { item: 'create:shadow_steel' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_heavy_core' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_heavy_core' },
          { tag: 'c:obsidians' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_heavy_core' }]
      },
      {
        type: 'create_fantasizing:shadow_plating',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_heavy_core' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_heavy_core' }]
      },
      {
        type: 'create:pressing',
        ingredients: [
          { item: 'create_fantasizing:unprocessed_heavy_core' }
        ],
        results: [{ id: 'create_fantasizing:unprocessed_heavy_core' }]
      }
    ],
    transitional_item: { id: 'create_fantasizing:unprocessed_heavy_core' }
  }).id('ccq_core:cfa_heavy_core_seq')

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { tag: 'c:plates/gold' },
    loops: 3,
    results: [
      { id: 'create_fantasizing:taiji_chipset' }
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' },
          { item: 'create:refined_radiance' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create_fantasizing:exposing',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' },
          { item: 'create:shadow_steel' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create_fantasizing:shadow_plating',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create:cutting',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create:pressing',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      }
    ],
    transitional_item: { id: 'create_fantasizing:incomplete_taiji_chipset' }
  }).id('ccq_core:cfa_taiji_chipset_exposing')

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { tag: 'c:plates/gold' },
    loops: 3,
    results: [
      { id: 'create_fantasizing:taiji_chipset' }
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' },
          { item: 'create:shadow_steel' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create_fantasizing:shadow_plating',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' },
          { item: 'create:refined_radiance' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create_fantasizing:exposing',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create:cutting',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      },
      {
        type: 'create:pressing',
        ingredients: [
          { item: 'create_fantasizing:incomplete_taiji_chipset' }
        ],
        results: [{ id: 'create_fantasizing:incomplete_taiji_chipset' }]
      }
    ],
    transitional_item: { id: 'create_fantasizing:incomplete_taiji_chipset' }
  }).id('ccq_core:cfa_taiji_chipset_shadow_plating')

})
