StartupEvents.registry('item', (event) => {
  event
    .create('ccq_core:prank_bread')
    .texture('minecraft:item/bread')
    .food((food) => {
      food.nutrition(1)
      food.saturation(1)
      food.alwaysEdible()
    })
})
