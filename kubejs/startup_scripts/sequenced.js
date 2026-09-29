StartupEvents.registry('item', event => {
	//不死图腾
	event.create('ccq_core:totem', 'create:sequenced_assembly').texture('minecraft:item/totem_of_undying')
	event.create('ccq_core:totem_unable').texture('minecraft:item/totem_of_undying').glow(true)
	//鞘翅
	event.create('ccq_core:elytra_unable').texture('minecraft:item/elytra').glow(true)
	event.create('ccq_core:elytra', 'create:sequenced_assembly').texture('minecraft:item/elytra')
	//沉重核心
	event.create('ccq_core:heavy_core_u', 'create:sequenced_assembly').texture('minecraft:item/iron_ingot')
	//附魔金苹果（序列组装中间产物）
	event.create('ccq_core:incomplete_enchanted_golden_apple', 'create:sequenced_assembly').texture('minecraft:item/golden_apple')
  	//星际航行基础(书)
  	event.create("ccq_core:interplanetary_navigation")

	event.create('ccq_core:mineral_fish').texture('minecraft:item/cod').glow(true)

	event.create('ccq_core:crushing_granite')
	event.create('ccq_core:crushing_diorite')
	event.create('ccq_core:crushing_limestone')
	event.create('ccq_core:crushing_basalt')
	event.create('ccq_core:crushing_andesite')
	event.create('ccq_core:crushing_shale')
	event.create('ccq_core:crushing_calcite')
	event.create('ccq_core:crushing_blackstone')
	event.create('ccq_core:crushing_tuff')
	event.create('ccq_core:raw_lapis')
	event.create('ccq_core:raw_amethyst')
	event.create('ccq_core:raw_gem')
	event.create('ccq_core:crushing_raw_gem')
	event.create('ccq_core:raw_overworld_ore')
	event.create('ccq_core:crushing_raw_overworld_ore')
	event.create('ccq_core:raw_nether_ore')
	event.create('ccq_core:crushing_raw_nether_ore')
})

Platform.mods.kubejs.name = 'ccq_core'

//存储桥接器未加入任何创造栏，JEI 默认不收
StartupEvents.modifyCreativeTab('create:base', event => {
  event.add('ccq_core:storage_bridge')
})
StartupEvents.modifyCreativeTab('functionalstorage:functionalstorage', event => {
  event.add('ccq_core:storage_bridge')
})