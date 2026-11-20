// 农夫乐事：pot
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 生羊排 → 熟羊排
  // 配方：farmersdelight:pot/add/cooked_mutton_chops
  event.json("farmersdelight:recipe/pot/add/cooked_mutton_chops.json", {
    "type": "kaleidoscope_cookery:pot",
    "ingredients": [
      {
        "item": "farmersdelight:mutton_chops"
      }
    ],
    "result": {
      "id": "farmersdelight:cooked_mutton_chops"
    }
  })
})
