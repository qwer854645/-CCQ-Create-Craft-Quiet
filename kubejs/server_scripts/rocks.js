ServerEvents.recipes(event => {
    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight
    //火山岩系列
  create.compacting(
    'northstar:volcanic_rock',
    [
      'northstar:mars_stone',
      Fluid.of('minecraft:lava',100)
    ]
  ).heated().id('ccq_core:volcanic_rock')
  create.crushing(
    Item.of('northstar:volcanic_ash',2),
    'northstar:volcanic_rock'
  ).id('ccq_core:volcanic_ash')
  create.crushing(
    Item.of('northstar:volcanic_ash_item'),
    Item.of('northstar:volcanic_ash')
  ).id('ccq_core:volcanic_ash_item')
  //给石灰岩一个配方
  create.compacting(CreateItem.of('create:limestone'), ['minecraft:coal','minecraft:diorite']).heated().id('ccq_core:limestone')
  create.compacting(CreateItem.of('create:limestone'), ['minecraft:charcoal','minecraft:diorite']).heated().id('ccq_core:limestone1')
  //末地石粉出矿
  create.crushing(
    [
        CreateItem.of('northstar:titanium_nugget',0.1), 
        CreateItem.of('minecraft:lapis_lazuli',0.2)
    ],
    'aeronautics:end_stone_powder'
  ).id('ccq_core:end_stone_powder_to_tit')
  //矿鱼
  create.crushing(
    [
        CreateItem.of('minecraft:iron_nugget',0.4),
        CreateItem.of('minecraft:gold_nugget',0.2),
        CreateItem.of('create:copper_nugget',0.5),
        CreateItem.of('create:zinc_nugget',0.3),
        CreateItem.of('create:brass_nugget',0.2)
    ],
    'ccq_core:mineral_fish'
  ).id('ccq_core:mineral_fish')

  //删除原本石头的配方以及粉碎配方
  event.remove('minecraft:granite')
  event.remove('create:crushing/granite')
  event.remove('minecraft:diorite')
  event.remove('create:crushing/diorite')
  event.remove('create:crushing/diorite_recycling')
  event.remove('create:crushing/limestone')
  event.remove('create:milling/limestone')
  event.remove('vintageimprovements:crushing/basalt_recycling')
  event.remove('vintageimprovements:crushing/basalt')
  event.remove('create:milling/andesite')
  event.remove('create:milling/calcite')
  event.remove('create:crushing/tuff_recycling')
  event.remove('create:crushing/tuff')
  event.remove('createaddition:crushing/tuff_recycling')

  //闪长岩洗涤
  create.splashing(
    [
        CreateItem.of('minecraft:gold_nugget',0.2),
        CreateItem.of('createpropulsion:platinum_nugget',0.4),
        Item.of('minecraft:iron_nugget',1)
    ],
    'ccq_core:crushing_diorite'
  ).id('ccq_core:splash_crushing_diorite')

  //黑石洗涤
  create.splashing(
    [
        CreateItem.of('2x createnuclear:coal_dust',0.5),
        Item.of('minecraft:bone_meal',1)
    ],
    'ccq_core:crushing_blackstone'
  ).id('ccq_core:splash_crushing_blackstone')

  //粉碎夸克石灰石
  create.crushing(
    [
      CreateItem.of('2x northstar:rutile_concentrate',0.5)
    ],
    'quark:limestone'
  ).id('ccq_core:crushing_quark_limestone')

  //各个石头粉碎
  //虽然有循环但是我还是挨个写吧好改
  create.crushing(
    [
      Item.of('ccq_core:crushing_granite',2),
      CreateItem.of('ccq_core:crushing_granite',0.9),
      CreateItem.of('ccq_core:crushing_granite',0.6)
    ],
    'minecraft:granite'
  ).id('ccq_core:crushing_granite')

  create.crushing(
    [
      Item.of('ccq_core:crushing_andesite',2),
      CreateItem.of('ccq_core:crushing_andesite',0.9),
      CreateItem.of('ccq_core:crushing_andesite',0.6)
    ],
    'minecraft:andesite'
  ).id('ccq_core:crushing_andesite')

  create.crushing(
    [
      Item.of('ccq_core:crushing_basalt',2),
      CreateItem.of('ccq_core:crushing_basalt',0.9),
      CreateItem.of('ccq_core:crushing_basalt',0.6)
    ],
    'minecraft:basalt'
  ).id('ccq_core:crushing_basalt')

  create.crushing(
    [
      Item.of('ccq_core:crushing_blackstone',2),
      CreateItem.of('ccq_core:crushing_blackstone',0.9),
      CreateItem.of('ccq_core:crushing_blackstone',0.6)
    ],
    'minecraft:blackstone'
  ).id('ccq_core:crushing_blackstone')

  create.crushing(
    [
      Item.of('ccq_core:crushing_calcite',2),
      CreateItem.of('ccq_core:crushing_calcite',0.9),
      CreateItem.of('ccq_core:crushing_calcite',0.6)
    ],
    'minecraft:calcite'
  ).id('ccq_core:crushing_calcite')

  create.crushing(
    [
      Item.of('ccq_core:crushing_diorite',2),
      CreateItem.of('ccq_core:crushing_diorite',0.9),
      CreateItem.of('ccq_core:crushing_diorite',0.6)
    ],
    'minecraft:diorite'
  ).id('ccq_core:crushing_diorite')

  create.crushing(
    [
      Item.of('ccq_core:crushing_limestone',2),
      CreateItem.of('ccq_core:crushing_limestone',0.9),
      CreateItem.of('ccq_core:crushing_limestone',0.6)
    ],
    'create:limestone'
  ).id('ccq_core:crushing_limestone')

  create.crushing(
    [
      Item.of('ccq_core:crushing_shale',2),
      CreateItem.of('ccq_core:crushing_shale',0.9),
      CreateItem.of('ccq_core:crushing_shale',0.6)
    ],
    'quark:shale'
  ).id('ccq_core:crushing_shale')

  create.crushing(
    [
      Item.of('ccq_core:crushing_tuff',2),
      CreateItem.of('ccq_core:crushing_tuff',0.9),
      CreateItem.of('ccq_core:crushing_tuff',0.6)
    ],
    'minecraft:tuff'
  ).id('ccq_core:crushing_tuff')
  'vintageimprovements'

  create.compacting(
    Item.of('northstar:lunar_sapphire_shard',2),
    [
     'northstar:lunar_sapphire_shard',
     'createaddition:electrum_ingot'
    ]
   ).id('ccq_core:lunar_sapphire_shard')
  /* //凝灰岩钠催化剂增产
  create.mixing(
    [
      CreateItem.of('minecraft:gold_ingot',0.25),
      CreateItem.of('minecraft:copper_ingot',0.25),
      CreateItem.of('create:zinc_ingot',0.25),
      CreateItem.of('minecraft:iron_ingot',0.3)
    ],
    [
      'minecraft:tuff',
      'northstar:sodium_catalyst'
    ]
  ).heated().id('ccq_core:tuff_sodium')
  //水晶增产
    create.compacting(
    Item.of('minecraft:amethyst_shard',2),
    [
     'minecraft:amethyst_shard',
    'createaddition:electrum_ingot'
    ]
   ).id('ccq_core:amethyst_shard')
  create.compacting(
    Item.of('northstar:lunar_sapphire_shard',2),
    [
     'northstar:lunar_sapphire_shard',
     'createaddition:electrum_ingot'
    ]
   ).id('ccq_core:lunar_sapphire_shard')*/
})