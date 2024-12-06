
class Event {
  constructor(eventName, season, titleImage, houseEvents, continuouslyAppear, dayOfAllDisplays, eventYear, eventMonth) {
    this.houseEvents = houseEvents;
    this.eventName = eventName;
    this.season = season;
    this.titleImage = titleImage;
    this.continuouslyAppear = continuouslyAppear;
    this.dayOfAllDisplays = dayOfAllDisplays;
    this.eventYear = eventYear;
    this.eventMonth = eventMonth;
  }

  displayHouse(houseNumber) {
    if (!this.continuouslyAppear) {
      return true;
    }
    //var date = new Date(2024, 11, 21);
    var date = new Date();
    if (date.getFullYear() != this.eventYear || (date.getMonth() + 1) != this.eventMonth) {
      return false;
    }
    var day = date.getDate();
    if (this.houseEvents.get(houseNumber) == null) {
      return day >= this.dayOfAllDisplays;
    }
    return this.houseEvents.get(houseNumber).dayAppear <= day;
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