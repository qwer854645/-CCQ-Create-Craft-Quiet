// 统一 Create Deco 与 Numismatics 钱币
ServerEvents.recipes((event) => {
  event.shapeless(Item.of("createdeco:industrial_iron_coin", 2), ["numismatics:bevel"]);
  event.shapeless(Item.of("numismatics:bevel", 1), ["2x createdeco:industrial_iron_coin"]);
  const coinMap = {
    copper: "spur",
    iron: "bevel",
    zinc: "sprocket",
    brass: "cog",
    gold: "crown",
    netherite: "sun",
  };
  for (const [metal, coin] of Object.entries(coinMap)) {
    event.remove({ id: "createdeco:pressing/coins/" + metal + "_coin" });
    event.replaceInput({ input: "createdeco:" + metal + "_coin" }, "createdeco:" + metal + "_coin", "numismatics:" + coin);
    event.replaceOutput({ output: "createdeco:" + metal + "_coin" }, "createdeco:" + metal + "_coin", "numismatics:" + coin);
  }
});
