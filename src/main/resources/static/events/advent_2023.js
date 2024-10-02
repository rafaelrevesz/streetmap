function loadEvent() {
  return new Event("A zsámbéki Nyárfás utca", "winter", "advent.jpg", createEvents(), true, 25);
}


function createEvents() {
  var eventMap = new Map();
  eventMap.set("20", new HouseEvent("20", "december 2.", Icons.None, 2));
  eventMap.set("26", new HouseEvent("26", "december 3.", Icons.None, 3));
  eventMap.set("4", new HouseEvent("4", "december 4.", Icons.None, 4));
  eventMap.set("11/a", new HouseEvent("11/a", "december 4.", Icons.None, 4));
  eventMap.set("45", new HouseEvent("45", "december 4.", Icons.None, 4));
  eventMap.set("55", new HouseEvent("55", "december 5.", Icons.None, 5));
  eventMap.set("49", new HouseEvent("49", "december 6.", Icons.None, 6));
  eventMap.set("57", new HouseEvent("57", "december 7.", Icons.None, 7));
  eventMap.set("32", new HouseEvent("32", "december 8.", Icons.None, 8));
  eventMap.set("39", new HouseEvent("39", "december 8.", Icons.None, 8));
  eventMap.set("24", new HouseEvent("24", "december 9.", Icons.None, 9));
  eventMap.set("65", new HouseEvent("65", "december 10.", Icons.None, 10));
  eventMap.set("67", new HouseEvent("67", "december 11.", Icons.None, 11));
  eventMap.set("38", new HouseEvent("38", "december 12.", Icons.None, 12));
  eventMap.set("75", new HouseEvent("75", "december 16.", Icons.None, 16));
  eventMap.set("41", new HouseEvent("41", "december 16.", Icons.None, 16));
  eventMap.set("52", new HouseEvent("52", "december 17.", Icons.None, 17));
  eventMap.set("51", new HouseEvent("51", "december 20.", Icons.None, 20));
  eventMap.set("44", new HouseEvent("44", "december 21.", Icons.None, 21));
  eventMap.set("61", new HouseEvent("61", "december 22.", Icons.None, 22));
  eventMap.set("40", new HouseEvent("40", "december 24.", Icons.None, 24));
  return eventMap;
}