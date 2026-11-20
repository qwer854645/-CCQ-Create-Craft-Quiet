// 哨戒动力臂：补充自动分类未覆盖的发射器与弹壳口径。
// 只覆盖必要字段，制作材料仍由原生枪包配方推导，保留特殊材料成本。
ServerEvents.generateData('after_mods', event => {
  // 两把发射器均被枪包归为 rpg，需要显式规则才能进入装配选择界面。
  const launchers = ['cannon_40mm_salamander', 'gl_revolver_devastator']
  launchers.forEach(id => {
    event.json('create_armorer:sentry_guns/' + id + '.json', {
      enabled: true,
      tier: 'reinforced',
      component_counts: {
        receiver: 1, barrel: 2, action: 1, recoil: 2,
        trigger: 1, feed: 1, grip: 1, control: 0
      }
    })
  })

  // 这些武器没有 shell 显示声明，显式启用对应口径的弹壳。
  // 自动复装继续读取原配方：不移除红石、下界合金碎片等弹头材料。
  // 气动弹药的枪包原配方也使用火药，先遵循该成本，不虚构压缩空气流体。
  const calibers = [
    'create_armorer:40mmhe', 'create_armorer:gernade',
    'create_armorer:gas_pistol_ammo', 'tacz:12g'
  ]
  calibers.forEach(id => {
    const parts = id.split(':')
    event.json(parts[0] + ':sentry_manufacturing/' + parts[1] + '.json', {
      enabled: true
    })
  })
})
