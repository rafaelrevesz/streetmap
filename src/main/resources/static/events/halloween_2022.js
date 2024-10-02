function loadEvent() {
  return new Event("Happy Halloween a Nyárfás utcában", "autumn", "happy_halloween.png", createEvents(), false);
}

function createEvents() {
  var eventMap = new Map();
  eventMap.set("2/c", new HouseEvent("2/c", null, null, null));
  eventMap.set("2/f/1", new HouseEvent("2/f/1", null, null, null));
  eventMap.set("2/f/2", new HouseEvent("2/f/2", null, null));
  eventMap.set("2/d/a", new HouseEvent("2/d/a", null, null));
  eventMap.set("2/d/b", new HouseEvent("2/d/b", null, null));
  eventMap.set("2/g/1", new HouseEvent("2/g/1", null, null));
  eventMap.set("2/h", new HouseEvent("2/h", "Boszork&aacute;ny tanya", Icons.Witch));
  eventMap.set("4", new HouseEvent("4", null, null));
  eventMap.set("20", new HouseEvent("20", "T&ouml;kfej zombik", Icons.Pumpkin));
  eventMap.set("25", new HouseEvent("25", "V&eacute;rfarkas tanya", Icons.Wolf));
  eventMap.set("30", new HouseEvent("30", null, null));
  eventMap.set("32", new HouseEvent("32", "R&eacute;mek h&aacute;za", Icons.Cat));
  eventMap.set("39", new HouseEvent("39", "Szellem tanya", Icons.Ghost));
  eventMap.set("45", new HouseEvent("45", "Az elszabadult zombi otthona", Icons.Skull));
  eventMap.set("61", new HouseEvent("61", null, null));
  eventMap.set("65", new HouseEvent("65", "A temet&#337;", Icons.Rip));
  eventMap.set("67", new HouseEvent("67", null, null));
  eventMap.set("75", new HouseEvent("75", "Banya tanya", Icons.Witch));
  eventMap.set("79", new HouseEvent("79", "P&oacute;k h&aacute;l&oacute;j&aacute;ban", Icons.Spider));
  eventMap.set("83", new HouseEvent("83", "P&oacute;k-&oacute;l", Icons.Spider));
  eventMap.set("85", new HouseEvent("85", "Pocakos p&oacute;k pagod&aacute;ja", Icons.Spider));
  return eventMap;
}