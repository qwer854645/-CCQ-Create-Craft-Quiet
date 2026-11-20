// 荷兰美食：压块
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 500mB 凝乳 → 未成熟的奶酪
  // 配方：create_bic_bit:compacting/unripe_cheese
  event.json("create_bic_bit:recipe/compacting/unripe_cheese.json", {
    "type": "create:compacting",
    "ingredients": [
      {
        "type": "neoforge:single",
        "fluid": "create_bic_bit:curdled_milk",
        "amount": 500
      }
    ],
    "results": [
      {
        "id": "create_bic_bit:unripe_cheese"
      }
    ]
  })
})
