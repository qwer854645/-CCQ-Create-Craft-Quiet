ServerEvents.recipes((event) => {
  const potting = (id) => {
    event.replaceOutput({ id: id }, "minecraft:iron_ingot", "create:crushed_raw_zinc");
  };
  (
    potting("northstar:crushing/mars_zinc_ore"),
    potting("northstar:crushing/mars_deep_zinc_ore"),
    potting("northstar:crushing/moon_zinc_ore"),
    potting("northstar:crushing/moon_deep_zinc_ore"),
    potting("northstar:crushing/mercury_zinc_ore"),
    potting("northstar:crushing/mercury_deep_zinc_ore"),
    potting("northstar:crushing/venus_zinc_ore"),
    potting("northstar:crushing/venus_deep_zinc_ore")
  );
  event.remove('createfisheryindustry:pressing/zinc_plate')
  event.remove('createdeco:pressing/zinc_sheet')
});
