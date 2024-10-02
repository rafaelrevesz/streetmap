
function loadEvent() {
  return new Event("Happy Halloween a Nyárfás utcában", "autumn", "happy_halloween.png", createEvents(), false);
}

function createEvents() {
  var eventMap = new Map();
  eventMap.set("20", new HouseEvent("20", "Vudu varázslók", Icons.Skull, null));
  return eventMap;
}