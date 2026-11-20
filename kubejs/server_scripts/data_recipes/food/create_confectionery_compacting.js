// 糖果工艺：压块
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 250mB create_confectionery:black_chocolate → create_confectionery:bar_of_black_chocolate
  // 配方：create_confectionery:bar_of_black_chocolate_recipe
  event.json("create_confectionery:recipe/bar_of_black_chocolate_recipe.json", {
    "group": "create_confectionery",
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:black_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:bar_of_black_chocolate"
      }
    ]
  })

  // 250mB create_confectionery:caramel → create_confectionery:bar_of_caramel
  // 配方：create_confectionery:bar_of_caramel_recipe
  event.json("create_confectionery:recipe/bar_of_caramel_recipe.json", {
    "group": "create_confectionery",
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:caramel",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:bar_of_caramel"
      }
    ]
  })

  // 250mB create_confectionery:ruby_chocolate → create_confectionery:bar_of_ruby_chocolate
  // 配方：create_confectionery:bar_of_ruby_chocolate_recipe
  event.json("create_confectionery:recipe/bar_of_ruby_chocolate_recipe.json", {
    "group": "create_confectionery",
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:ruby_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:bar_of_ruby_chocolate"
      }
    ]
  })

  // 250mB create_confectionery:white_chocolate → create_confectionery:bar_of_white_chocolate
  // 配方：create_confectionery:bar_of_white_chocolate_recipe
  event.json("create_confectionery:recipe/bar_of_white_chocolate_recipe.json", {
    "group": "create_confectionery",
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "create_confectionery:white_chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_confectionery:bar_of_white_chocolate"
      }
    ]
  })
})
