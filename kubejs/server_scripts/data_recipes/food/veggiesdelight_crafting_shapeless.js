// 蔬菜乐事：无序合成
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 玉米饼 + #c:foods/cooked_beef + 烟熏甜椒 + 米饭 → 牛肉卷饼
  // 配方：veggiesdelight:compat/culturaldelight/beef_burrito
  event.json("veggiesdelight:recipe/compat/culturaldelight/beef_burrito.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "culturaldelights"
      }
    ],
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "culturaldelights:tortilla"
      },
      {
        "tag": "c:foods/cooked_beef"
      },
      {
        "item": "veggiesdelight:smoked_bellpepper"
      },
      {
        "item": "farmersdelight:cooked_rice"
      }
    ],
    "result": {
      "count": 1,
      "id": "culturaldelights:beef_burrito"
    }
  })

  // 玉米饼 + #c:foods/cooked_chicken + #c:crops/garlic / #c:crops/onion + 番茄酱 + 烟熏甜椒 + 玉米棒 → culturaldelights:chicken_taco
  // 配方：veggiesdelight:compat/culturaldelight/chicken_taco
  event.json("veggiesdelight:recipe/compat/culturaldelight/chicken_taco.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "culturaldelights"
      }
    ],
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "culturaldelights:tortilla"
      },
      {
        "tag": "c:foods/cooked_chicken"
      },
      [
        {
          "tag": "c:crops/garlic"
        },
        {
          "tag": "c:crops/onion"
        }
      ],
      {
        "item": "farmersdelight:tomato_sauce"
      },
      {
        "item": "veggiesdelight:smoked_bellpepper"
      },
      {
        "item": "culturaldelights:corn_cob"
      }
    ],
    "result": {
      "count": 1,
      "id": "culturaldelights:chicken_taco"
    }
  })

  // #c:foods/bread + #culturaldelights:smoked_regular_eggplants + #c:foods/leafy_green + #c:crops/tomato → 茄子汉堡
  // 配方：veggiesdelight:compat/culturaldelight/eggplant_burger
  event.json("veggiesdelight:recipe/compat/culturaldelight/eggplant_burger.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "culturaldelights"
      }
    ],
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "tag": "c:foods/bread"
      },
      {
        "tag": "culturaldelights:smoked_regular_eggplants"
      },
      {
        "tag": "c:foods/leafy_green"
      },
      {
        "tag": "c:crops/tomato"
      }
    ],
    "result": {
      "count": 1,
      "id": "culturaldelights:eggplant_burger"
    }
  })

  // #c:foods/bread + #c:foods/cooked_mutton + #c:foods/cooked_egg + 芜菁 → 羊肉三明治
  // 配方：veggiesdelight:compat/culturaldelight/mutton_sandwich
  event.json("veggiesdelight:recipe/compat/culturaldelight/mutton_sandwich.json", {
    "neoforge:conditions": [
      {
        "type": "neoforge:mod_loaded",
        "modid": "culturaldelights"
      }
    ],
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "tag": "c:foods/bread"
      },
      {
        "tag": "c:foods/cooked_mutton"
      },
      {
        "tag": "c:foods/cooked_egg"
      },
      {
        "item": "veggiesdelight:turnip"
      }
    ],
    "result": {
      "count": 1,
      "id": "culturaldelights:mutton_sandwich"
    }
  })
})
