// 应用军械师保留原有制枪方式，不生成哨戒动力臂装配路线。
ServerEvents.generateData('after_mods', event => {
  const guns = [
  "moritz_gernade_gl3",
  "moritz_mg_emg_prototype",
  "moritz_mg_hmg22",
  "moritz_rifle_ar77",
  "moritz_shotgun_sg914",
  "moritz_sniper_semi_k30",
  "niklas_lever_vigenere",
  "niklas_pistol_double_win_win",
  "niklas_pistol_semi_pride",
  "niklas_pistol_semi_right",
  "niklas_pistol_semi_union",
  "niklas_smg_freedom",
  "special_melee_task_manager"
]
  guns.forEach(id => {
    event.json('applied_armorer:sentry_guns/' + id + '.json', { enabled: false })
  })
})

// 魔艺军械师仍使用 Forge 旧标签，桥接到当前新生魔艺的 c 命名空间。
ServerEvents.tags('item', event => {
  event.add('forge:gems/source', '#c:gems/source')
  event.add('forge:logs/archwood', '#c:logs/archwood')
})
