ServerEvents.tags('item', event => {

  // 盐，面团 cf 的 tags 好乱，匹配一下
  // createfood 已移除；盐相关标签一并去掉

  event.add('c:dough','create:dough')

  event.add('c:foods','create:dough')

  event.add('c:foods/dough','create:dough')

  event.add('c:wheat_dough','create:dough')

  event.add('luncheonmeatsdelight:starch','create:dough')

  // 森罗的标签

  event.add('c:foods/carrot', 'minecraft:carrot')

  event.add('c:crops/corn', 'culturaldelights:corn_kernels')

  event.add('c:crops/corn', 'culturaldelights:corn_cob')

  event.add('c:vegetables/ube', 'dungeonsdelight:rotbulb')

  event.add('c:crops/grains', 'minecraft:wheat_seeds')

  // 铂暂时没标签

  //event.add('c:ingots/platinum', 'createpropulsion:platinum_ingot')

})
