//添加工业铁硬币的提示
ItemEvents.modifyTooltips((event) => {
  event.add("createdeco:industrial_iron_coin", "此币仅具有装饰价值，无流通作用");
});
//统一名字
ClientEvents.lang("zh_cn", (event) => {
  event.renameItem("createdeco:industrial_iron_coin", "工业铁币");
});
