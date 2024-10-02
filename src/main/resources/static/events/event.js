
class Event {
  constructor(eventName, season, titleImage, houseEvents, continuouslyAppear, dayOfAllDisplays) {
    this.houseEvents = houseEvents;
    this.eventName = eventName;
    this.season = season;
    this.titleImage = titleImage;
    this.continuouslyAppear = continuouslyAppear;
    this.dayOfAllDisplays = dayOfAllDisplays;
  }

  displayHouse(houseNumber) {
    if (!this.continuouslyAppear) {
      return true;
    }
    var date = new Date().getDate();
    if (this.houseEvents.get(houseNumber) == null) {
      return date >= this.dayOfAllDisplays;
    }
    return this.houseEvents.get(houseNumber).dayAppear <= date;
  }
}

class HouseEvent {
  constructor(number, info, icon, dayAppear) {
    this.number = number;
    this.info = info;
    this.icon = icon;
    this.dayAppear = dayAppear;
  }
}