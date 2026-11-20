// 整合包：方块注液
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 忘魂肥料 + 500mB ccq_core:mob_essence → 复生土
  // 配方：ccq_core:block_spouting/letios_compost
  event.json("ccq_core:recipe/block_spouting/letios_compost.json", {
    "type": "cmr:block_spouting",
    "ingredients": [
      {
        "item": "mynethersdelight:letios_compost"
      },
      {
        "type": "fluid_stack",
        "amount": 500,
        "fluid": "ccq_core:mob_essence"
      }
    ],
    "results": [
      {
        "item": {
          "id": "mynethersdelight:resurgent_soil"
        }
      }
    ]
  })

  // 有机堆肥 + 500mB ccq_core:mob_essence → 沃土
  // 配方：ccq_core:block_spouting/organic_compost
  event.json("ccq_core:recipe/block_spouting/organic_compost.json", {
    "type": "cmr:block_spouting",
    "ingredients": [
      {
        "item": "farmersdelight:organic_compost"
      },
      {
        "type": "fluid_stack",
        "amount": 500,
        "fluid": "ccq_core:mob_essence"
      }
    ],
    "results": [
      {
        "item": {
          "id": "farmersdelight:rich_soil"
        }
      }
    ]
  })
})
