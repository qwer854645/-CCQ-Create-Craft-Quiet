ServerEvents.tags('item', event => {
  //实用物件的刀子没有knife标签
  event.add('c:tools/knife', 'create_things_and_misc:copper_knife')
  event.add('c:tools/knife', 'create_things_and_misc:zinc_knife')
  event.add('c:tools/knife', 'create_things_and_misc:brass_knife')
  //盐，面团cf的tags好乱，匹配一下
  event.add('c:dusts','createfood:salt')
  event.add('c:dusts/salt','createfood:salt')
  event.add('supplementaries:hourglass_dusts','createfood:salt')
  event.add('c:dough','create:dough')
  event.add('c:foods','create:dough')
  event.add('c:foods/dough','create:dough')
  event.add('c:wheat_dough','create:dough')
  event.add('luncheonmeatsdelight:starch','create:dough')
  //森罗的标签
  event.add('c:foods/carrot', 'minecraft:carrot')
  event.add('c:crops/corn', 'culturaldelights:corn_kernels')
  event.add('c:crops/corn', 'culturaldelights:corn_cob')
  event.add('c:vegetables/ube', 'dungeonsdelight:rotbulb')
  event.add('c:crops/grains', 'minecraft:wheat_seeds')
  //铂暂时没标签
  //event.add('c:ingots/platinum', 'createpropulsion:platinum_ingot')
})
