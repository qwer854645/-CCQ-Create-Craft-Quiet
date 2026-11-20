// 糖果工艺：压制
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:cocoa_beans → create_confectionery:crushed_cocoa
  // 配方：create_confectionery:crushed_cocoa_recipe
  event.json("create_confectionery:recipe/crushed_cocoa_recipe.json", {
    "group": "create_confectionery",
    "type": "create:pressing",
    "ingredients": [
      {
        "item": "minecraft:cocoa_beans"
      }
    ],
    "results": [
      {
        "id": "create_confectionery:crushed_cocoa"
      }
    ]
  })

  // create_confectionery:gingerdough → create_confectionery:gingerbread_man
  // 配方：create_confectionery:gingerbread_man_recipe
  event.json("create_confectionery:recipe/gingerbread_man_recipe.json", {
    "group": "create_confectionery",
    "type": "create:pressing",
    "ingredients": [
      {
        "item": "create_confectionery:gingerdough"
      }
    ],
    "results": [
      {
        "id": "create_confectionery:gingerbread_man"
      }
    ]
  })
})
