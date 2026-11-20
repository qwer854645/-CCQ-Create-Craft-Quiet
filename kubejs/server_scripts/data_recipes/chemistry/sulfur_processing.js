// 硫化工：二氧化硫、三氧化硫与硫酸
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // #c:dusts/sulfur → 
  // 配方：vintageimprovements:pressurizing/compat/sulfur_dioxide_from_dust
  event.json("vintageimprovements:recipe/pressurizing/compat/sulfur_dioxide_from_dust.json", {
    "type": "vintageimprovements:pressurizing",
    "neoforge:conditions": [
      {
        "type": "neoforge:not",
        "value": {
          "type": "neoforge:tag_empty",
          "tag": "c:dusts/sulfur"
        }
      }
    ],
    "secondary_fluid_output": {
      "id": "vintageimprovements:sulfur_dioxide",
      "amount": 1000
    },
    "ingredients": [
      {
        "tag": "c:dusts/sulfur"
      }
    ],
    "results": [],
    "processing_time": 400,
    "heat_requirement": "heated"
  })

  // #c:gems/sulfur → 
  // 配方：vintageimprovements:pressurizing/sulfur_dioxide
  event.json("vintageimprovements:recipe/pressurizing/sulfur_dioxide.json", {
    "type": "vintageimprovements:pressurizing",
    "secondary_fluid_output": {
      "id": "vintageimprovements:sulfur_dioxide",
      "amount": 1000
    },
    "heat_requirement": "heated",
    "ingredients": [
      {
        "tag": "c:gems/sulfur"
      }
    ],
    "results": [],
    "processing_time": 600
  })

  // #c:sulfur_dioxide + #c:nuggets/vanadium → 
  // 配方：vintageimprovements:pressurizing/sulfur_trioxide
  event.json("vintageimprovements:recipe/pressurizing/sulfur_trioxide.json", {
    "type": "vintageimprovements:pressurizing",
    "secondary_fluid_output": {
      "id": "vintageimprovements:sulfur_trioxide",
      "amount": 250
    },
    "ingredients": [
      {
        "amount": 250,
        "tag": "c:sulfur_dioxide",
        "type": "neoforge:tag"
      },
      {
        "tag": "c:nuggets/vanadium"
      }
    ],
    "results": [],
    "processing_time": 400,
    "heat_requirement": "heated"
  })

  // #c:sulfur_dioxide + #c:nuggets/iron → 
  // 配方：vintageimprovements:pressurizing/sulfur_trioxide_alt
  event.json("vintageimprovements:recipe/pressurizing/sulfur_trioxide_alt.json", {
    "type": "vintageimprovements:pressurizing",
    "secondary_fluid_output": {
      "id": "vintageimprovements:sulfur_trioxide",
      "amount": 250
    },
    "ingredients": [
      {
        "amount": 250,
        "tag": "c:sulfur_dioxide",
        "type": "neoforge:tag"
      },
      {
        "tag": "c:nuggets/iron"
      }
    ],
    "results": [],
    "processing_time": 400,
    "heat_requirement": "superheated"
  })

  // #c:sulfur_trioxide → 1000mB 硫酸
  // 配方：vintageimprovements:pressurizing/sulfuric_acid
  event.json("vintageimprovements:recipe/pressurizing/sulfuric_acid.json", {
    "type": "vintageimprovements:pressurizing",
    "secondary_fluid_input": {
      "id": "minecraft:water",
      "amount": 1000
    },
    "ingredients": [
      {
        "amount": 1000,
        "tag": "c:sulfur_trioxide",
        "type": "neoforge:tag"
      }
    ],
    "results": [
      {
        "amount": 1000,
        "id": "vintageimprovements:sulfuric_acid"
      }
    ],
    "processing_time": 600
  })
})
