// 蔬菜乐事：烹饪
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // minecraft:blaze_powder + 番茄酱 + 米饭 + #c:crops/garlic + #c:foods/cooked_chicken + #c:drinks/milk → culturaldelights:spicy_curry
  // 配方：veggiesdelight:compat/culturaldelight/cooking/spicy_curry
  event.json("veggiesdelight:recipe/compat/culturaldelight/cooking/spicy_curry.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "culturaldelights"
      }
    ],
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "minecraft:bowl"
    },
    "cookingtime": 400,
    "experience": 2.0,
    "ingredients": [
      {
        "item": "minecraft:blaze_powder"
      },
      {
        "item": "farmersdelight:tomato_sauce"
      },
      {
        "item": "farmersdelight:cooked_rice"
      },
      {
        "tag": "c:crops/garlic"
      },
      {
        "tag": "c:foods/cooked_chicken"
      },
      {
        "tag": "c:drinks/milk"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "count": 1,
      "id": "culturaldelights:spicy_curry"
    }
  })
})
