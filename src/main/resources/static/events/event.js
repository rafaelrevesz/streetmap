
function getEvents() {
  var events = new Map();
  return events;
}

class Event {
  constructor(number, info, icon) {
    this.number = number;
    this.info = info;
    this.icon = icon;
  }
}