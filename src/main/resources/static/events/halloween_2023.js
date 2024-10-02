
function loadEvent() {
  return new Event("Happy Halloween a Nyárfás utcában", "autumn", "happy_halloween.png", createEvents(), false);
}

function createEvents() {
  var eventMap = new Map();
  eventMap.set("37", new HouseEvent("37", "Vér-est", Icons.Bat));
  eventMap.set("61", new HouseEvent("61", "Pumpkin house", Icons.Pumpkin));
  eventMap.set("9/3", new HouseEvent("9/3", null, null));
  eventMap.set("39", new HouseEvent("39", "Zomb-Ivó", Icons.Zombie));
  eventMap.set("12", new HouseEvent("12", "A szelid fa!", Icons.Ghost));
  eventMap.set("32", new HouseEvent("32", "Pokol kapuja", Icons.Skull));
  eventMap.set("79", new HouseEvent("79", "Rémecskék kicsiny házikója", Icons.Bat));
  eventMap.set("85", new HouseEvent("85", "Pocakos pók pagoda", Icons.Spider));
  eventMap.set("2/d/b", new HouseEvent("2/d/b", null, null));
  eventMap.set("55", new HouseEvent("55", "RémRom", Icons.Spider));
  eventMap.set("65", new HouseEvent("65", "Temető", Icons.Rip));
  eventMap.set("25", new HouseEvent("25", "Krematórium Casino", Icons.Rip));
  eventMap.set("2/i/c", new HouseEvent("2/i/c", "Újonc lidércek", Icons.Ghost));
  eventMap.set("2/i/f", new HouseEvent("2/i/f", "Újonc lidércek", Icons.Ghost));
  eventMap.set("592/18", new HouseEvent("592/18", "Boszi tanya", Icons.Witch));
  eventMap.set("7/3", new HouseEvent("7/3", "Banya pók", Icons.Spider));
  eventMap.set("31", new HouseEvent("31", "Nyanya tanya", Icons.Witch));
  eventMap.set("75", new HouseEvent("75", "Czikora Boszorka Borozója", Icons.Witch));
  eventMap.set("40", new HouseEvent("40", "Szellemes Negyvenes", Icons.Ghost));
  eventMap.set("5", new HouseEvent("5", "Tökmagok csokigyára", Icons.Pumpkin));
  eventMap.set("41", new HouseEvent("41", "Kaporlaki", Icons.Bat));
  eventMap.set("11/a", new HouseEvent("11/a", "Cirmos-lak", Icons.Cat));
  eventMap.set("24", new HouseEvent("24", "FélTök, ugyi?", Icons.Pumpkin));
  eventMap.set("2/c", new HouseEvent("2/c", "Póklak", Icons.Spider));
  eventMap.set("14", new HouseEvent("14", null, null));
  eventMap.set("2/f/a", new HouseEvent("2/f/a", "Veszedelmes Tökfészek", Icons.Pumpkin));
  eventMap.set("2/f/b", new HouseEvent("2/f/b", "CsokigyűjTÖK udvara", Icons.Pumpkin));
  eventMap.set("67", new HouseEvent("67", null, null));
  eventMap.set("9/1", new HouseEvent("9/1", null, null));
  eventMap.set("2/d/a", new HouseEvent("2/d/a", null, null));
  eventMap.set("2/g/a", new HouseEvent("2/g/a", null, null));
  eventMap.set("20", new HouseEvent("20", "Ahkmenrah fáraó kriptája", Icons.Rip));
  return eventMap;
}