ServerEvents.recipes(event => {
    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight

    event.remove({input:'spartan_weaponry_unofficial:grease_ball'})
    event.remove({output:'spartan_weaponry_unofficial:grease_ball'})
    event.remove({mod:'spartan_weaponry_unofficial',type:'minecraft:brewing'})
})