// 整合包：序列组装
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // #c:plates/gold → 红石构件
  // 配方：ccq_core:sequenced_assembly/redstone_module
  event.json("ccq_core:recipe/sequenced_assembly/redstone_module.json", {
    "type": "create:sequenced_assembly",
    "ingredient": {
      "tag": "c:plates/gold"
    },
    "loops": 3,
    "results": [
      {
        "id": "vintageimprovements:redstone_module"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "vintageimprovements:incomplete_redstone_module"
          },
          {
            "item": "minecraft:redstone"
          }
        ],
        "results": [
          {
            "id": "vintageimprovements:incomplete_redstone_module"
          }
        ]
      },
      {
        "type": "vintageimprovements:vibrating",
        "ingredients": [
          {
            "item": "vintageimprovements:incomplete_redstone_module"
          }
        ],
        "results": [
          {
            "id": "vintageimprovements:incomplete_redstone_module"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "vintageimprovements:incomplete_redstone_module"
          },
          {
            "tag": "c:gems/quartz"
          }
        ],
        "results": [
          {
            "id": "vintageimprovements:incomplete_redstone_module"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "vintageimprovements:incomplete_redstone_module"
          }
        ],
        "results": [
          {
            "id": "vintageimprovements:incomplete_redstone_module"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "vintageimprovements:incomplete_redstone_module"
          },
          {
            "tag": "c:nuggets/iron"
          }
        ],
        "results": [
          {
            "id": "vintageimprovements:incomplete_redstone_module"
          }
        ]
      }
    ],
    "transitional_item": {
      "id": "vintageimprovements:incomplete_redstone_module"
    }
  })
})
