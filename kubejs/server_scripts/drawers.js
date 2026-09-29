ServerEvents.recipes(event => {
    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight

    event.remove('functionalstorage:framed_1')
    event.remove('functionalstorage:framed_2')
    event.remove('functionalstorage:framed_4')
    event.replaceInput({input:'#minecraft:planks',mod:'functionalstorage'},'#minecraft:planks','northstar:titanium_ingot')
    event.remove('functionalstorage:dripping_upgrade')
    event.remove('functionalstorage:water_generator_upgrade')
    event.remove('functionalstorage:obsidian_upgrade')
    event.remove('functionalstorage:ender_drawer')
})