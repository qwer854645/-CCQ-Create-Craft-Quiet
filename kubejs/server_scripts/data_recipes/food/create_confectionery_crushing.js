// 糖果工艺：粉碎
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // create_confectionery:crushed_cocoa → create_confectionery:cocoa_powder + create_confectionery:cocoa_butter（75.0%）
  // 配方：create_confectionery:cocoa_powder_and_butter_recipe
  event.json("create_confectionery:recipe/cocoa_powder_and_butter_recipe.json", {
    "group": "create_confectionery",
    "type": "create:crushing",
    "ingredients": [
      {
        "item": "create_confectionery:crushed_cocoa"
      }
    ],
    "processing_time": 50,
    "results": [
      {
        "id": "create_confectionery:cocoa_powder",
        "count": 1
      },
      {
        "id": "create_confectionery:cocoa_butter",
        "count": 1,
        "chance": 0.75
      }
    ]
  })
})
