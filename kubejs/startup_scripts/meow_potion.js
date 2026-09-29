StartupEvents.registry('mob_effect', (event) => {
  event
    .create('ccq_core:meow')
    .beneficial()
    .color(Color.rgba(255, 182, 193, 255))
})

StartupEvents.registry('potion', (event) => {
  // 2 分钟 = 2400 tick
  event.create('ccq_core:meow').effect('ccq_core:meow', 2400, 0)
})
