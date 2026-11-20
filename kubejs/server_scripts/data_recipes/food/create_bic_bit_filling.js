// 荷兰美食：注液
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 荷兰华夫饼 + 250mB 巧克力 → 巧克力糖浆华夫饼
  // 配方：create_bic_bit:filling/chocolate_glazed_stroopwafel
  event.json("create_bic_bit:recipe/filling/chocolate_glazed_stroopwafel.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:stroopwafel"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:chocolate_glazed_stroopwafel"
      }
    ]
  })

  // 吉拿棒 + 250mB 巧克力 → 巧克力包裹油条
  // 配方：create_bic_bit:filling/coated_churros
  event.json("create_bic_bit:recipe/filling/coated_churros.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:churros"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:coated_churros"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 炸油 → 炸油瓶
  // 配方：create_bic_bit:filling/frying_oil
  event.json("create_bic_bit:recipe/filling/frying_oil.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:frying_oil",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:frying_oil_bottle"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 番茄酱 → 番茄酱瓶
  // 配方：create_bic_bit:filling/ketchup_bottle
  event.json("create_bic_bit:recipe/filling/ketchup_bottle.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:ketchup",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:ketchup_bottle"
      }
    ]
  })

  // 荷兰炸肉棒三明治 + 250mB 番茄酱 → 顶部加番茄酱的弗里坎德三明治
  // 配方：create_bic_bit:filling/ketchup_frikandel_sandwich
  event.json("create_bic_bit:recipe/filling/ketchup_frikandel_sandwich.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:frikandel_sandwich"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:ketchup",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:ketchup_topped_frikandel_sandwich"
      }
    ]
  })

  // create_bic_bit:kroket_sandwich + 250mB 番茄酱 → 顶部加番茄酱的克罗克特三明治
  // 配方：create_bic_bit:filling/ketchup_kroket_sandwich
  event.json("create_bic_bit:recipe/filling/ketchup_kroket_sandwich.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:kroket_sandwich"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:ketchup",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:ketchup_topped_kroket_sandwich"
      }
    ]
  })

  // 顶部加番茄酱的弗里坎德三明治 + 250mB 蛋黄酱 → 顶部双重加料的弗里坎德三明治
  // 配方：create_bic_bit:filling/ketchup_mayonnaise_frikandel_sandwich
  event.json("create_bic_bit:recipe/filling/ketchup_mayonnaise_frikandel_sandwich.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:ketchup_topped_frikandel_sandwich"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:mayonnaise",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:mayonnaise_ketchup_topped_frikandel_sandwich"
      }
    ]
  })

  // 顶部加番茄酱的克罗克特三明治 + 250mB 蛋黄酱 → 顶部双重加料的克罗克特三明治
  // 配方：create_bic_bit:filling/ketchup_mayonnaise_kroket_sandwich
  event.json("create_bic_bit:recipe/filling/ketchup_mayonnaise_kroket_sandwich.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:ketchup_topped_kroket_sandwich"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:mayonnaise",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:mayonnaise_ketchup_topped_kroket_sandwich"
      }
    ]
  })

  // minecraft:glass_bottle + 250mB 蛋黄酱 → 蛋黄酱瓶
  // 配方：create_bic_bit:filling/mayonnaise_bottle
  event.json("create_bic_bit:recipe/filling/mayonnaise_bottle.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:mayonnaise",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:mayonnaise_bottle"
      }
    ]
  })

  // 荷兰炸肉棒三明治 + 250mB 蛋黄酱 → 顶部加蛋黄酱的弗里坎德三明治
  // 配方：create_bic_bit:filling/mayonnaise_frikandel_sandwich
  event.json("create_bic_bit:recipe/filling/mayonnaise_frikandel_sandwich.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:frikandel_sandwich"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:mayonnaise",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:mayonnaise_topped_frikandel_sandwich"
      }
    ]
  })

  // 顶部加蛋黄酱的弗里坎德三明治 + 250mB 番茄酱 → 顶部双重加料的弗里坎德三明治
  // 配方：create_bic_bit:filling/mayonnaise_ketchup_frikandel_sandwich
  event.json("create_bic_bit:recipe/filling/mayonnaise_ketchup_frikandel_sandwich.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:mayonnaise_topped_frikandel_sandwich"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:ketchup",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:mayonnaise_ketchup_topped_frikandel_sandwich"
      }
    ]
  })

  // 顶部加蛋黄酱的克罗克特三明治 + 250mB 番茄酱 → 顶部双重加料的克罗克特三明治
  // 配方：create_bic_bit:filling/mayonnaise_ketchup_kroket_sandwich
  event.json("create_bic_bit:recipe/filling/mayonnaise_ketchup_kroket_sandwich.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:mayonnaise_topped_kroket_sandwich"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:ketchup",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:mayonnaise_ketchup_topped_kroket_sandwich"
      }
    ]
  })

  // create_bic_bit:kroket_sandwich + 250mB 蛋黄酱 → 顶部加蛋黄酱的克罗克特三明治
  // 配方：create_bic_bit:filling/mayonnaise_kroket_sandwich
  event.json("create_bic_bit:recipe/filling/mayonnaise_kroket_sandwich.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:kroket_sandwich"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:mayonnaise",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:mayonnaise_topped_kroket_sandwich"
      }
    ]
  })

  // minecraft:bowl + 250mB 荷兰土豆菜 → 荷兰土豆菜碗
  // 配方：create_bic_bit:filling/stamppot_bowl
  event.json("create_bic_bit:recipe/filling/stamppot_bowl.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bowl"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:stamppot",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:stamppot_bowl"
      }
    ]
  })

  // #c:foods/dough/wheat + #c:honey → 甜面团
  // 配方：create_bic_bit:filling/sweet_dough
  event.json("create_bic_bit:recipe/filling/sweet_dough.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "tag": "c:foods/dough/wheat"
      },
      {
        "type": "neoforge:tag",
        "tag": "c:honey",
        "amount": 125
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:sweet_dough"
      }
    ]
  })

  // 包裹的吉拿棒 + 250mB 巧克力 → 包装巧克力包裹油条
  // 配方：create_bic_bit:filling/wrapped_coated_churros
  event.json("create_bic_bit:recipe/filling/wrapped_coated_churros.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:wrapped_churros"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:wrapped_coated_churros"
      }
    ]
  })

  // 包裹的荷兰华夫饼 + 250mB 巧克力 → 包裹的巧克力施特鲁普华夫
  // 配方：create_bic_bit:filling/wrapped_coated_stroopwafel
  event.json("create_bic_bit:recipe/filling/wrapped_coated_stroopwafel.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:wrapped_stroopwafel"
      },
      {
        "type": "neoforge:single",
        "fluid": "create:chocolate",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:wrapped_chocolate_glazed_stroopwafel"
      }
    ]
  })

  // 包裹薯条 + 250mB 番茄酱 → 裹着番茄酱的薯条
  // 配方：create_bic_bit:filling/wrapped_ketchup_fries
  event.json("create_bic_bit:recipe/filling/wrapped_ketchup_fries.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:wrapped_fries"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:ketchup",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:wrapped_ketchup_topped_fries"
      }
    ]
  })

  // 裹着番茄酱的薯条 + 250mB 蛋黄酱 → 裹着双重加料的薯条
  // 配方：create_bic_bit:filling/wrapped_ketchup_mayonnaise_fries
  event.json("create_bic_bit:recipe/filling/wrapped_ketchup_mayonnaise_fries.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:wrapped_ketchup_topped_fries"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:mayonnaise",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:wrapped_mayonnaise_ketchup_topped_fries"
      }
    ]
  })

  // 包裹薯条 + 250mB 蛋黄酱 → 裹着蛋黄酱的薯条
  // 配方：create_bic_bit:filling/wrapped_mayonnaise_fries
  event.json("create_bic_bit:recipe/filling/wrapped_mayonnaise_fries.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:wrapped_fries"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:mayonnaise",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:wrapped_mayonnaise_topped_fries"
      }
    ]
  })

  // 裹着蛋黄酱的薯条 + 250mB 番茄酱 → 裹着双重加料的薯条
  // 配方：create_bic_bit:filling/wrapped_mayonnaise_ketchup_fries
  event.json("create_bic_bit:recipe/filling/wrapped_mayonnaise_ketchup_fries.json", {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "create_bic_bit:wrapped_mayonnaise_topped_fries"
      },
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:ketchup",
        "amount": 250
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:wrapped_mayonnaise_ketchup_topped_fries"
      }
    ]
  })
})
