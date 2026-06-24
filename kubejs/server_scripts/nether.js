ServerEvents.recipes(event => {

    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight

    create.haunting('eternalnether:withered_blackstone','minecraft:blackstone').id('ccq_core:withered_blackstone')
    create.haunting('eternalnether:withered_coal_block','minecraft:coal_block').id('ccq_core:withered_coal_block')
    create.haunting('eternalnether:withered_quartz_block','minecraft:quartz_block').id('ccq_core:withered_quarz_block')
    
    //远古残骸
    create.haunting('eternalnether:withered_debris','minecraft:ancient_debris').id('ccq_core:ancient_debris')
    //删掉远古残骸烧制配方
    event.remove('minecraft:netherite_scrap_from_blasting')
    event.remove('minecraft:netherite_scrap')
    create.haunting(
    [
        CreateItem.of('minecraft:netherite_scrap',1),
        CreateItem.of('minecraft:netherite_scrap',0.2),
        CreateItem.of('minecraft:wither_skeleton_skull',0.05)
    ],
    'eternalnether:withered_debris'
    ).id('ccq_core:netherite_scrap')

    create.haunting('eternalnether:withered_bone_block','minecraft:bone_block').id('ccq_core:withered_bone_block')
    create.haunting('eternalnether:withered_bone','minecraft:bone').id('ccq_core:withered_bone')
    event.shaped(
    'eternalnether:withered_bone_block',
    [  
        'bb ',
        'bb ',
        '   '
    ],
    { b:'eternalnether:withered_bone'}
    ).id('ccq_core:withered_bone1')
    create.haunting([CreateItem.of('eternalnether:warped_ender_pearl',0.9),CreateItem.of('eternalnether:warped_ender_pearl',0.9)],'eternalnether:warped_ender_pearl').id('ccq_core:warped_ender_pearl')
    event.shapeless(
        'eternalnether:netherite_bell',
        [
            'eternalnether:netherite_bell',
            'minecraft:netherite_ingot'
        ]
    ).id('ccq_core:netherite_bell')
    event.shaped(
        Item.of('eternalnether:gilded_netherite_shield'),
        [
            'ddd',
            'igi',
            'ddd'
        ],
        {
            d:'minecraft:diamond',
            i:'minecraft:netherite_ingot',
            g:'eternalnether:gilded_netherite_shield'
        }
    ).id('ccq_core:gilded_netherite_shield').keepIngredient('eternalnether:gilded_netherite_shield')
    event.shaped(
        Item.of('eternalnether:cutlass'),
        [
            'ddd',
            'dcd',
            'ddd'
        ],
        {
            d:'minecraft:diamond',
            c:'eternalnether:cutlass'
        }
    ).id('ccq_core:cutlass').keepIngredient('eternalnether:cutlass')
    /*create.crushing(
        [
            CreateItem.of('minecraft:flint',1),
            CreateItem.of('minecraft:flint',0.8),
            CreateItem.of('minecraft:flint',0.5),
        ],
        'netherexp:silt_flint_ore'
    ).id('ccq_core:silt_flint_ore')
    create.sandpaper_polishing('netherexp:quartz_crystal','minecraft:quartz').id('ccq_core:quartz_crystal')
    event.shaped(
        Item.of('netherexp:stridite',2),
        [
            'ddd',
            'dsd',
            'ddd'
        ],
        {
            d:'minecraft:diamond',
            s:'netherexp:stridite'
        }
    ).id('ccq_core:stridite')
    create.haunting('netherexp:black_ice','minecraft:blue_ice').id('ccq_core:black_ice')
    create.crushing(
        [
            Item.of('netherexp:fossil_fuel',2)
        ],
        'netherexp:fossil_fuel_ore'
    ).id('ccq_core:fossil_fuel_ore')
    create.crushing(
        [
            Item.of('minecraft:bone',5)
        ],
        'netherexp:fossil_ore'
    ).id('ccq_core:fossil_ore')
    create.haunting(CreateItem.of('netherexp:banshee_rod',0.08),'minecraft:bone').id('ccq_core:banshee_rod')*/

})