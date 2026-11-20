// 特殊近战武器与扳手转换；普通枪械由哨戒动力臂自动生成配方。
ServerEvents.generateData('after_mods', event => {
  // 普通扳手转换为武器扳手。
  event.json("ccq_core:recipe/guns/melee_wrench.json", {
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "pattern": [
    "W"
  ],
  "key": {
    "W": {
      "item": "create:wrench"
    }
  },
  "result": {
    "id": "tacz:modern_kinetic_gun",
    "components": {
      "minecraft:custom_data": {
        "GunId": "create_armorer:special_melee_wrench",
        "GunFireMode": "SEMI"
      }
    }
  }
})
  // 保留特殊近战武器的原有材料成本。
  event.json("ccq_core:recipe/guns/special_melee_atomic.json", {
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "pattern": [
    "DDBDD",
    "  S  ",
    "  S  ",
    "  B  "
  ],
  "key": {
    "B": {
      "item": "create:brass_ingot"
    },
    "D": {
      "item": "minecraft:diamond"
    },
    "S": {
      "item": "minecraft:stick"
    }
  },
  "result": {
    "id": "tacz:modern_kinetic_gun",
    "components": {
      "minecraft:custom_data": {
        "GunId": "create_armorer:special_melee_atomic",
        "GunFireMode": "SEMI"
      }
    }
  }
})
  // 武器扳手还原：严格匹配组件，避免其他枪械被转换。
  event.json("ccq_core:recipe/guns/unmelee_wrench.json", {
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "pattern": [
    "W"
  ],
  "key": {
    "W": {
      "type": "neoforge:components",
      "items": "tacz:modern_kinetic_gun",
      "components": {
        "minecraft:custom_data": {
          "GunId": "create_armorer:special_melee_wrench",
          "GunFireMode": "SEMI"
        }
      }
    }
  },
  "result": {
    "id": "create:wrench"
  }
})
})
