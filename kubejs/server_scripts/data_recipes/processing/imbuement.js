// 整合包：魔源灌注
// 从 data 配方整理；保留原配方覆盖与加载条件。
ServerEvents.generateData('after_mods', event => {

  // 月球蓝宝石碎片 → 魔源宝石
  // 配方：ccq_core:imbuement/imbuement_shr
  event.json("ccq_core:recipe/imbuement/imbuement_shr.json", {
    "type": "ars_nouveau:imbuement",
    "input": {
      "item": "northstar:lunar_sapphire_shard"
    },
    "output": {
      "count": 1,
      "id": "ars_nouveau:source_gem"
    },
    "pedestalItems": [],
    "source": 500
  })
})
