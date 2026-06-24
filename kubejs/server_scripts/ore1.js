ServerEvents.recipes(event => {
    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight

    //粉碎主世界矿出煤炭跟粗红石
    create.crushing(
        [
            Item.of('minecraft:coal',2),
            Item.of('createoreexcavation:raw_redstone',2),
            CreateItem.of('createoreexcavation:raw_redstone',0.8),
            Item.of('ccq_core:crushing_raw_overworld_ore',2),
            Item.of('create:experience_nugget')
        ],
        'ccq_core:raw_overworld_ore'
    ).id('ccq_core:crushing_raw_overworld_ore')
    //洗出铜铁
    create.splashing(
        [
            'minecraft:raw_iron',
            'minecraft:raw_copper',
            CreateItem.of('3x minecraft:iron_nugget',0.6),
            CreateItem.of('3x create:copper_nugget',0.8)
        ],
        'ccq_core:crushing_raw_overworld_ore'
    ).id('ccq_core:splashing_crushing_raw_overworld_ore')

    //粉碎宝石出青金石
    create.crushing(
        [
            Item.of('ccq_core:raw_lapis',2),
            CreateItem.of('ccq_core:raw_lapis',0.8),
            Item.of('ccq_core:crushing_raw_gem',2),
            Item.of('create:experience_nugget')
        ],
        'ccq_core:raw_gem'
    ).id('ccq_core:crushing_raw_gem')

    //粉碎下界得萤石
    create.crushing(
        [
            Item.of('minecraft:glowstone_dust',4),
            Item.of('ccq_core:crushing_raw_nether_ore',2),
            Item.of('create:experience_nugget')
        ],
        'ccq_core:raw_nether_ore'
    ).id('ccq_core:crushing_raw_nether_ore')
    //打磨得石英
    create.sandpaper_polishing('minecraft:quartz','ccq_core:crushing_raw_nether_ore').id('ccq_core:sandpaper_polishing_crushing_raw_nether_ore')

    //粗宝石出矿
    create.cutting(
        [
            'minecraft:diamond',
            CreateItem.of('minecraft:diamond',0.8)
        ],
        'createoreexcavation:raw_diamond'
    ).id('ccq_core:raw_diamond')
    create.cutting(
        [
            'minecraft:emerald',
            CreateItem.of('minecraft:emerald',0.8)
        ],
        'createoreexcavation:raw_emerald'
    ).id('ccq_core:raw_emerald')
    create.cutting(
        [
            Item.of('minecraft:lapis_lazuli',2),
            CreateItem.of('minecraft:lapis_lazuli',0.8)
        ],
        'ccq_core:raw_lapis'
    ).id('ccq_core:raw_lapis')
    create.cutting(
        [
            Item.of('minecraft:amethyst_shard',1),
            CreateItem.of('minecraft:amethyst_shard',0.8)
        ],
        'ccq_core:raw_amethyst'
    ).id('ccq_core:raw_amethyst')

    //修复铂板
    event.remove('vintageimprovements:pressing/platinum_ingot')
})