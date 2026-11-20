ServerEvents.recipes(event => {

    const create = event.recipes.create
    const farmer = event.recipes.farmersdelight
    // 保留工作台调整；枪械与配件原生配方供哨戒动力臂生成工业生产线。
  event.remove('ars_armorer:blocks/ars_workbench')

  //应用军械台
  event.remove('applied_armorer:worckbench_applied_armorer')
  create.mechanical_crafting(
    'tacz:workbench_c[custom_data={BlockId:"applied_armorer:worckbench_applied_armorer"}]', 
    [
      'uuiiuu',
      'iullui',
      'iuuuui',
      'ii  ii'
    ],
    {
      i:'minecraft:iron_ingot',
      u:'northstar:lunar_sapphire_shard',
      l:'#c:glass_panes'
    }
  ).id('ccq_core:worckbench_applied_armorer')

  // Sentry Mechanical Arm generates production routes from native gunpack recipes.
  //子弹
   
  
  
  create.compacting(
    Item.of('tacz:ammo[max_stack_size=20,custom_data={AmmoId:"applied_armorer:fluix_battery"}]',4),
    [
      Item.of('minecraft:redstone',16),
      Item.of('minecraft:iron_ingot',4)
    ]
  ).id('ccq_core:fluix_battery')
    

  /*create.mechanical_crafting(
    'tacz:workbench_b[custom_data={BlockId:"create_armorer:create_workbench"}]', 
    [
      'llllll',
      'lbbbbl',
      'lccccl',
      'll  ll'
    ],
    {
      c:'minecraft:copper_ingot',
      l:'#minecraft:logs',
      b:'create:brass_ingot'
    }
  ).id('ccq_core:createa_workbench')
  //tacz子弹配方
  create.compacting(
    Item.of('tacz:ammo[max_stack_size=32,custom_data={AmmoId:"create_armorer:gernade"}]',8),
    [
      Item.of('minecraft:copper_ingot',8),
      Item.of('minecraft:gunpowder',2),
      Item.of('minecraft:redstone',4)
    ]
  ).id('ccq_core:gernade')
  create.compacting(
    Item.of('tacz:ammo[max_stack_size=60,custom_data={AmmoId:"create_armorer:slap"}]',60),
    [
      Item.of('minecraft:copper_ingot',4),
      Item.of('minecraft:gunpowder',3),
      Item.of('minecraft:iron_ingot',6)
    ]
  ).id('ccq_core:slap')
  create.compacting(
    Item.of('tacz:ammo[max_stack_size=12,custom_data={AmmoId:"create_armorer:40mmhe"}]',12),
    [
      Item.of('minecraft:copper_ingot',8),
      Item.of('minecraft:gunpowder',12),
      Item.of('minecraft:redstone',12),
      'minecraft:netherite_scrap'
    ]
  ).id('ccq_core:40mmhe')
  
  create.compacting(
    Item.of('tacz:ammo[max_stack_size=36,custom_data={AmmoId:"tacz:12g"}]',18),
    [
      Item.of('minecraft:copper_ingot',15),
      Item.of('minecraft:gunpowder',6),
      Item.of('minecraft:iron_nugget',18)
    ]
  ).id('ccq_core:12g')
  create.compacting(
    Item.of('tacz:ammo[max_stack_size=60,custom_data={AmmoId:"create_armorer:rbapb"}]',32),
    [
      Item.of('minecraft:copper_ingot',8),
      Item.of('minecraft:gunpowder',3)
    ]
  ).id('ccq_core:rbapb')
  create.compacting(
    Item.of('tacz:ammo[max_stack_size=60,custom_data={AmmoId:"create_armorer:gas_pistol_ammo"}]',60),
    [
      Item.of('minecraft:copper_ingot',8),
      Item.of('minecraft:gunpowder',2)
    ]
  ).id('ccq_core:gas_pistol_ammo')
*/
})
