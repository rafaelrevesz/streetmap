
function loadEvent() {
  return new Event("Happy Halloween a Nyárfás utcában", "autumn", "happy_halloween.png", createEvents(), false);
}

function createEvents() {
  var eventMap = new Map();
  eventMap.set("2/c", new HouseEvent("2/c", "Nyolclábú Rezidencia", Icons.Spider, null));
  eventMap.set("2/d/a", new HouseEvent("2/d/a", null, null, null));
  eventMap.set("2/d/b", new HouseEvent("2/d/b", "Szellemtelep", Icons.Ghost, null));
  eventMap.set("2/h", new HouseEvent("2/h", "Boszorkány tanya", Icons.Witch, null));
  eventMap.set("2/f/b", new HouseEvent("2/f/b", null, null, null));
  eventMap.set("2/i", new HouseEvent("2/i", "PÓKoli lakópark", Icons.Spider, null));
  eventMap.set("5", new HouseEvent("5", "Lufitemető", Icons.Rip, null));
  eventMap.set("7/2", new HouseEvent("7/2", null, null, null));
  eventMap.set("7/3", new HouseEvent("7/3", null, null, null));
  eventMap.set("9/1", new HouseEvent("9/1", null, null, null));
  eventMap.set("9/2", new HouseEvent("9/2", null, null, null));
  eventMap.set("9/3", new HouseEvent("9/3", null, null, null));
  eventMap.set("11/b", new HouseEvent("11/b", null, null, null));
  eventMap.set("12", new HouseEvent("12", null, null, null));
  eventMap.set("20", new HouseEvent("20", "Vudu varázslók", Icons.Skull, null));
  eventMap.set("24", new HouseEvent("24", "Banya kikötő", Icons.Witch, null));
  eventMap.set("30", new HouseEvent("30", "Póktanya", Icons.Spider, null));
  eventMap.set("31", new HouseEvent("31", "Vén árnyas fűz tanyája", Icons.Witch, null));
  eventMap.set("32", new HouseEvent("32", "Elhagyatot autószerelőműhely", Icons.Zombie, null));
  eventMap.set("37", new HouseEvent("37", "Bűztanya", Icons.Pumpkin, null));
  eventMap.set("39", new HouseEvent("39", "Két banya jósdája", Icons.Witch, null));
  eventMap.set("41", new HouseEvent("41", null, null, null));
  eventMap.set("55", new HouseEvent("55", "RémRom", Icons.Zombie, null));
  eventMap.set("65", new HouseEvent("65", null, null, null));

  eventMap.set("69", new HouseEvent("69", "Póktanya", Icons.Spider, null));

  eventMap.set("79", new HouseEvent("79", null, null, null));
  eventMap.set("85", new HouseEvent("85", 'Kislidérc házikója', Icons.Ghost, null));
  return eventMap;
}