
function loadEvent() {
  return new Event("A zsámbéki Nyárfás utca", "summer", "happy_halloween.png", createEvents(), false);
}

function createEvents() {
  var eventMap = new Map();
  eventMap.set("2/c", new HouseEvent("2/c", null, null, null));
  eventMap.set("2/d/a", new HouseEvent("2/d/a", null, null, null));
  eventMap.set("2/d/b", new HouseEvent("2/d/b", null, null, null));
  eventMap.set("2/e/1", new HouseEvent("2/e/1", null, null, null));
  eventMap.set("2/e/2", new HouseEvent("2/e/2", null, null, null));
  eventMap.set("2/f/a", new HouseEvent("2/f/1", null, null, null));
  eventMap.set("2/f/b", new HouseEvent("2/f/2", null, null, null));
  eventMap.set("2/g/1", new HouseEvent("2/g/1", null, null, null));
  eventMap.set("2/g/2", new HouseEvent("2/g/2", null, null, null));
  eventMap.set("2/h", new HouseEvent("2/h", null, null, null));
  eventMap.set("2/i/a", new HouseEvent("2/i/a", null, null, null));
  eventMap.set("2/i/b", new HouseEvent("2/i/b", null, null, null));
  eventMap.set("2/i/c", new HouseEvent("2/i/c", null, null, null));
  eventMap.set("2/i/d", new HouseEvent("2/i/d", null, null, null));
  eventMap.set("2/i/f", new HouseEvent("2/i/f", null, null, null));
  eventMap.set("4", new HouseEvent("4", null, null, null));
  eventMap.set("7/1", new HouseEvent("7/1", null, null, null));
  eventMap.set("7/2", new HouseEvent("7/2", null, null, null));
  eventMap.set("7/3", new HouseEvent("7/3", null, null, null));
  eventMap.set("9/1", new HouseEvent("9/1", null, null, null));
  eventMap.set("9/2", new HouseEvent("9/2", null, null, null));
  eventMap.set("9/3", new HouseEvent("9/3", null, null, null));
  eventMap.set("11/a", new HouseEvent("11/a", null, null, null));
  eventMap.set("11/b", new HouseEvent("11/b", null, null, null));
  eventMap.set("12", new HouseEvent("12", null, null, null));
  eventMap.set("14", new HouseEvent("14", null, null, null));
  eventMap.set("20", new HouseEvent("20", null, null, null));
  eventMap.set("24", new HouseEvent("24", null, null, null));
  eventMap.set("25", new HouseEvent("25", null, null, null));
  eventMap.set("26", new HouseEvent("26", null, null, null));
  eventMap.set("29", new HouseEvent("29", null, null, null));
  eventMap.set("30", new HouseEvent("30", null, null, null));
  eventMap.set("31", new HouseEvent("31", null, null, null));
  eventMap.set("32", new HouseEvent("32", null, null, null));
  eventMap.set("37", new HouseEvent("37", null, null, null));
  eventMap.set("38", new HouseEvent("38", null, null, null));
  eventMap.set("39", new HouseEvent("39", null, null, null));
  eventMap.set("40", new HouseEvent("40", null, null, null));
  eventMap.set("41", new HouseEvent("41", null, null, null));
  eventMap.set("44", new HouseEvent("44", null, null, null));
  eventMap.set("45", new HouseEvent("45", null, null, null));
  eventMap.set("49", new HouseEvent("49", null, null, null));
  eventMap.set("51", new HouseEvent("51", null, null, null));
  eventMap.set("57", new HouseEvent("57", null, null, null));
  eventMap.set("61", new HouseEvent("61", null, null, null));
  eventMap.set("65", new HouseEvent("65", null, null, null));
  eventMap.set("67", new HouseEvent("67", null, null, null));
  eventMap.set("75", new HouseEvent("75", null, null, null));
  eventMap.set("79", new HouseEvent("79", null, null, null));
  eventMap.set("81", new HouseEvent("81", null, null, null));
  eventMap.set("83", new HouseEvent("83", null, null, null));
  eventMap.set("85", new HouseEvent("85", null, null, null));
  return eventMap;
}