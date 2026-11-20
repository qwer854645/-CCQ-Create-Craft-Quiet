// 新版未自动生成的特殊配件；保留原有制作材料与流程。
ServerEvents.generateData('after_mods', event => {
  // ap_projectile
  event.json("ccq_core:recipe/attachments/ap_projectile.json", {
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "pattern": [
    "BFF"
  ],
  "key": {
    "B": {
      "item": "sentrymechanicalarm:barrel_component"
    },
    "F": {
      "item": "create:fluid_tank"
    }
  },
  "result": {
    "id": "tacz:attachment",
    "components": {
      "minecraft:custom_data": {
        "AttachmentId": "create_armorer:muzzle_refit_ap_grenade"
      }
    }
  }
})
  // fluid_pipe_grip
  event.json("ccq_core:recipe/attachments/fluid_pipe_grip.json", {
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "pattern": [
    "F",
    "F"
  ],
  "key": {
    "F": {
      "item": "create:fluid_pipe"
    }
  },
  "result": {
    "id": "tacz:attachment",
    "components": {
      "minecraft:custom_data": {
        "AttachmentId": "create_armorer:grip_pipe"
      }
    }
  }
})
  // fluid_pipe_muzzle
  event.json("ccq_core:recipe/attachments/fluid_pipe_muzzle.json", {
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "pattern": [
    "FF"
  ],
  "key": {
    "F": {
      "item": "create:fluid_pipe"
    }
  },
  "result": {
    "id": "tacz:attachment",
    "components": {
      "minecraft:custom_data": {
        "AttachmentId": "create_armorer:muzzle_pipe"
      }
    }
  }
})
  // fluid_pipe_scope
  event.json("ccq_core:recipe/attachments/fluid_pipe_scope.json", {
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "pattern": [
    "FGF"
  ],
  "key": {
    "F": {
      "item": "create:fluid_pipe"
    },
    "G": {
      "item": "minecraft:glass_pane"
    }
  },
  "result": {
    "id": "tacz:attachment",
    "components": {
      "minecraft:custom_data": {
        "AttachmentId": "create_armorer:scope_pipe"
      }
    }
  }
})
})
