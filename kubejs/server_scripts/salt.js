ServerEvents.recipes(event => {
    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight
    
    //直接获得岩盐，岩盐加工成粗盐
    event.replaceOutput({output:'expandeddelight:salt'},'expandeddelight:salt','northstar:salt')
    event.remove('expandeddelight:cutting/salt_rock')
    create.crushing(
        [
            Item.of('expandeddelight:salt_rock',1),
            CreateItem.of('expandeddelight:salt_rock',0.5),
            CreateItem.of('northstar:salt',0.8)
        ],
        'expandeddelight:deepslate_salt_ore'
    ).id('ccq_core:deepslate_salt_ore')
    create.crushing(
        [
            Item.of('expandeddelight:salt_rock',1),
            CreateItem.of('expandeddelight:salt_rock',0.5),
            CreateItem.of('northstar:salt',0.8)
        ],
        'expandeddelight:salt_ore'
    ).id('ccq_core:salt_ore')
    create.crushing(
        [
            Item.of('northstar:salt',2),
            CreateItem.of('northstar:salt',0.8)
        ],
        'expandeddelight:salt_rock'
    ).id('ccq_core:salt_rock')

    //粗盐加工成精盐
    event.remove('northstar:copacting/brine_to_salt')
    create.mixing(
        'expandeddelight:salt',
        Fluid.of('northstar:brine',500)
    ).heated().id('ccq_core:salt')

    //修复第一行被错误修改的袋装盐
    event.remove('expandeddelight:salt')
    event.shapeless(
        'expandeddelight:salt',
        'cratedelight:salt_bag'
    ).id('expandeddelight:salt')

    //粉碎石头概率出圆石，沙砾，岩盐
    create.crushing(
        [
            CreateItem.of('expandeddelight:salt_rock',0.03),
            CreateItem.of('minecraft:cobblestone',0.4),
            CreateItem.of('minecraft:gravel',0.8)
        ],
        'minecraft:stone'
    ).id('ccq_core:crush_stone')

    event.remove('create:crushing/basalt')
})