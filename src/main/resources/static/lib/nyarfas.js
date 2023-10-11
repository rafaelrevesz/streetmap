    const Icons = {
      Ghost: "ghost",
      Witch: "witch",
      Wolf: "wolf",
      Skull: "skull",
      Spider: "spider",
      Rip: "rip",
      Cat: "cat",
      Bat: "bat",
      Pumpkin: "pumpkin"
    }

	function getHouses() {
	  var houses = new Array();
	  houses.push(new House("2/c", 47.540820800387914, 18.721879748012023, 47.5410858003, 18.722058, 0.00035, 0.00035));
	  houses.push(new House("2/d/a", 47.540965800387914, 18.721579748012023, 47.54123, 18.721779748012023, 0.00035, 0.00035));
	  houses.push(new House("2/d/b", 47.540820800387914, 18.721329748012023, 47.541080800387914, 18.721479748012023, 0.00035, 0.00035));
	  houses.push(new House("2/e/1", 47.541095800387914, 18.721279748012023, 47.541365800387914, 18.721479748012023, 0.00036, 0.00036));
	  houses.push(new House("2/e/2", 47.540950800387914, 18.721029748012023, 47.54121, 18.721179748012023, 0.00035, 0.00035));
	  houses.push(new House("2/f/1", 47.541225800387914, 18.720979748012023, 47.541495800387914, 18.721179748012023, 0.00036, 0.00036));
	  houses.push(new House("2/f/2", 47.541080800387914, 18.720729748012023, 47.541350800387914, 18.720879748012023, 0.00036, 0.00036));
	  houses.push(new House("2/g/1", 47.541355800387914, 18.720679748012023, 47.541625800387914, 18.720879748012023, 0.00036, 0.00036));
	  houses.push(new House("2/g/2", 47.541210800387914, 18.720429748012023, 47.541480800387914, 18.720579748012023, 0.00036, 0.00036));
	  houses.push(new House("592/18", 47.541455800387914, 18.720279748012023, 47.541725800387914, 18.720479748012023, 0.0004, 0.0004));
	  houses.push(new House("2/i/a", 47.54175800387914, 18.719559748012023, 47.54202, 18.7198, 0.00035, 0.00035));
	  houses.push(new House("2/i/b", 47.54160800387914, 18.719359748012023, 47.54187, 18.7196, 0.00035, 0.00035));
	  houses.push(new House("2/i/c", 47.54140800387914, 18.719209748012023, 47.54168, 18.71942, 0.00035, 0.00035));
	  houses.push(new House("2/i/f", 47.54165800387914, 18.719859748012023, 47.54192, 18.7201, 0.00035, 0.00035));
      houses.push(new House("2/i/d", 47.54145800387914, 18.719709748012023, 47.54173, 18.71993   , 0.00035, 0.00035));
	  houses.push(new House("4", 47.54195800387914, 18.719159748012023, 47.54224, 18.7194, 0.0004, 0.0004));
	  houses.push(new House("0/", 47.54184, 18.71885, 47.542147, 18.71847, 0.00025, 0.00025)); // 8
	  houses.push(new House("9/a", 47.54104, 18.7221, 47.54135, 18.72235, 0.0004, 0.0004));
	  houses.push(new House("9/b", 47.5413, 18.72235, 47.5416, 18.72258, 0.0004, 0.0004));
	  houses.push(new House("9/c", 47.54112, 18.7219, 47.54142, 18.72213, 0.0004, 0.0004));
	  houses.push(new House("11/a", 47.541204, 18.721709, 47.541483, 18.721914, 0.00035, 0.00035));
	  houses.push(new House("11/b", 47.541353, 18.721934, 47.541633, 18.722144, 0.00035, 0.00035));
	  houses.push(new House("12", 47.54152, 18.71862, 47.54178, 18.71885, 0.00035, 0.00035));
	  houses.push(new House("14", 47.5413, 18.7185, 47.54157, 18.7186, 0.00045, 0.00045));
	  houses.push(new House("14/", 47.5412, 18.7185, 47.54178, 18.71885, 0.0003, 0.0003));
	  houses.push(new House("20", 47.54090800387914, 18.7183, 47.54122800387914, 18.718459748012023, 0.00042, 0.00042));
	  houses.push(new House("24", 47.54058800387914, 18.7179, 47.54089800387914, 18.718109748012023, 0.00042, 0.00042));
	  houses.push(new House("25", 47.54199, 18.71995, 47.54234  , 18.72007, 0.00047, 0.00047));
	  houses.push(new House("29", 47.54223, 18.71945, 47.542495, 18.719575, 0.00035, 0.00035));
	  houses.push(new House("30", 47.54026800387914, 18.71768, 47.540545 , 18.71793, 0.0004, 0.0004));
	  houses.push(new House("31", 47.54225, 18.7192, 47.542595, 18.71937, 0.00045, 0.00045));
	  houses.push(new House("32", 47.54014800387914, 18.71757, 47.54041, 18.7177, 0.0004, 0.0004));

	  houses.push(new House("37", 47.54217, 18.71870, 47.54244, 18.71886, 0.00035, 0.00035));

	  houses.push(new House("39", 47.54195800387914, 18.718559748012023, 47.54227, 18.718729748012023, 0.0004, 0.0004));
	  houses.push(new House("41", 47.541885, 18.7184, 47.542147, 18.71847, 0.00035, 0.00035));
	  houses.push(new House("0/", 47.54182, 18.71839, 47.542147, 18.71847, 0.00025, 0.00025)); // 43
	  houses.push(new House("45", 47.54163800387914, 18.71825, 47.54192, 18.71839, 0.0004, 0.0004));
	  houses.push(new House("61", 47.54054000387914, 18.71728, 47.54084, 18.71748, 0.0004, 0.0004));
	  houses.push(new House("65", 47.54030000387914, 18.71715, 47.54053, 18.7173, 0.00033, 0.00033));
	  houses.push(new House("67", 47.54010800387914, 18.71692, 47.540445, 18.71713, 0.00045, 0.00045));
	  houses.push(new House("75", 47.539505800387914, 18.716469748012023, 47.539815800387914, 18.716629748012023, 0.0004, 0.0004));
	  houses.push(new House("79", 47.539325800387914, 18.716349748012023, 47.539535800387914, 18.716499748012023, 0.0003, 0.0003));
	  houses.push(new House("81", 47.539167800387914, 18.716089748012023, 47.539415800387914, 18.716279748012023, 0.00035, 0.00035));
	  houses.push(new House("83", 47.539105800387914, 18.715669748012023, 47.539375800387914, 18.715789748012023, 0.0004, 0.0004));
	  houses.push(new House("85", 47.538905800387914, 18.715579748012023, 47.539230800387914, 18.715679748012023, 0.0004, 0.0004));
	  return houses;
	}

	function getHouseNumbers() {
	  var numbers = new Array();
	  numbers.push(new HouseNumber("2/c", 47.5410858003, 18.722058));
	  numbers.push(new HouseNumber("2/d/a", 47.54123, 18.721779748012023));
	  numbers.push(new HouseNumber("2/d/b", 47.541080800387914, 18.721479748012023));
	  numbers.push(new HouseNumber("2/e/1", 47.541365800387914, 18.721479748012023));
	  numbers.push(new HouseNumber("2/e/2", 47.54121, 18.721179748012023));
	  numbers.push(new HouseNumber("2/f/1", 47.541495800387914, 18.721179748012023));
	  numbers.push(new HouseNumber("2/f/2", 47.541350800387914, 18.720879748012023));
	  numbers.push(new HouseNumber("2/g/1", 47.541625800387914, 18.720879748012023));
	  numbers.push(new HouseNumber("2/g/2", 47.541480800387914, 18.720579748012023));
	  numbers.push(new HouseNumber("592/18", 47.541725800387914, 18.720479748012023));
	  numbers.push(new HouseNumber("2/i/a", 47.54202, 18.7198));
	  numbers.push(new HouseNumber("2/i/b", 47.54187, 18.7196));
	  numbers.push(new HouseNumber("2/i/c", 47.54168, 18.71942));
	  numbers.push(new HouseNumber("2/i/f", 47.54192, 18.7201));
      numbers.push(new HouseNumber("2/i/d", 47.54173, 18.71993));
	  numbers.push(new HouseNumber("4", 47.54224, 18.7194));
	  //numbers.push(new HouseNumber("0/", 47.542147, 18.71847)); // 8
	  numbers.push(new HouseNumber("9/a", 47.54135, 18.72235));
	  numbers.push(new HouseNumber("9/b", 47.5416, 18.72258));
	  numbers.push(new HouseNumber("9/c", 47.54142, 18.72213));
	  numbers.push(new HouseNumber("11/a", 47.541483, 18.721914));
	  numbers.push(new HouseNumber("11/b", 47.541633, 18.722144));
	  numbers.push(new HouseNumber("12", 47.54178, 18.71885));
	  numbers.push(new HouseNumber("14", 47.54157, 18.7186));
	  numbers.push(new HouseNumber("20", 47.54122800387914, 18.718459748012023));
	  numbers.push(new HouseNumber("24", 47.54089800387914, 18.718109748012023));
	  numbers.push(new HouseNumber("25", 47.54234  , 18.72007));
	  numbers.push(new HouseNumber("29", 47.542495, 18.719575));
	  numbers.push(new HouseNumber("30", 47.540545 , 18.71793));
	  numbers.push(new HouseNumber("31", 47.542595, 18.71937));
	  numbers.push(new HouseNumber("32", 47.54041, 18.7177));
	  numbers.push(new HouseNumber("37", 47.54244, 18.71886));
	  numbers.push(new HouseNumber("39", 47.54227, 18.718729748012023));
	  numbers.push(new HouseNumber("41", 47.542147, 18.71847));
	  //numbers.push(new HouseNumber("0/", 47.542147, 18.71847, 0 // 43
	  numbers.push(new HouseNumber("45", 47.54192, 18.71839));
	  numbers.push(new HouseNumber("61", 47.54084, 18.71748));
	  numbers.push(new HouseNumber("65", 47.54053, 18.7173));
	  numbers.push(new HouseNumber("67", 47.540445, 18.71713));
	  numbers.push(new HouseNumber("75", 47.539815800387914, 18.716629748012023));
	  numbers.push(new HouseNumber("79", 47.539535800387914, 18.716499748012023));
	  numbers.push(new HouseNumber("81", 47.539415800387914, 18.716279748012023));
	  numbers.push(new HouseNumber("83", 47.539375800387914, 18.715789748012023));
	  numbers.push(new HouseNumber("85", 47.539230800387914, 18.715679748012023));
	  return houses;
	}

	function addHouseToMap(map, house) {
        var imageUrl = 'houses/' + house.number.replaceAll("/", "_") + '.svg';
        var altText = house.number;
        var latLngBounds = L.latLngBounds([[house.latitude, house.longitude], [house.latitude + house.width, house.longitude + house.height]]);

        var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
            opacity: 0.9,
            errorOverlayUrl: imageUrl,
            alt: altText,
            interactive: true
        }).addTo(map);
	}

	function addSeasonToMap(map, house) {
	        var imageUrl = 'season/' + house.number.replaceAll("/", "_") + '.svg';
            var altText = '20';
            var latLngBounds = L.latLngBounds([[house.latitude, house.longitude], [house.latitude + 0.0004, house.longitude + 0.0004]]);

            var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
                opacity: 0.8,
                errorOverlayUrl: imageUrl,
                alt: altText,
                interactive: true
            }).addTo(map);
	}

	function addHouseNumberAsMarkerToMap(map, houseNumber, eventMap) {
	    var event = eventMap.get(houseNumber.number);
	    if (event != null) {
                iconWidth = 50;
                iconAnchorX = 22;
                if (houseNumber.number.length > 4) {
                    if (houseNumber.number.length > 5) {
                        iconWidth = 100;
                        iconAnchorX = 46;
                    } else {
                        iconWidth = 75;
                        iconAnchorX = 33;
                    }
                }
            var houseNumberFormatted = houseNumber.number.replaceAll("/", "_");
            var numberFolder = "orange/";
            if (event.info != null) {
              numberFolder = "blue/";
            }
            var houseNumberIcon = L.icon({
                iconUrl: 'numbers/' + numberFolder + houseNumberFormatted +'.png',
                iconSize:     [iconWidth, 40],
                iconAnchor:   [iconAnchorX, 40],
                popupAnchor:  [0, -12]
            })
            if (event.info != null) {
                var customPopup = "<table class='popupContainer'><tr><td class='icon'><img src='" + serverUrl + "/icons/" + event.icon + ".png'></td><td class='title'><b>" + houseNumber.number + "</b>: " + event.info + "</td></tr></table>";
                var customOptions =
                        {
                        'maxWidth': '500',
                        'className' : 'custom'
                        }

                L.marker([houseNumber.latitude, houseNumber.longitude],
                        {icon: houseNumberIcon}).bindPopup(customPopup,customOptions).addTo(map)
            } else {
                L.marker([houseNumber.latitude, houseNumber.longitude],
                        {icon: houseNumberIcon}).addTo(map)
            }
        }
	}

	function addStreet(map) {
        var imageUrl = 'street.svg';
        var altText = '20';
        var latitude = 47.54368;
        var longitude = 18.71497;
        var latLngBounds = L.latLngBounds([[latitude, longitude], [latitude - 0.0067, longitude + 0.0085]]);

        var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
            opacity: 0.2,
            errorOverlayUrl: imageUrl,
            alt: altText,
            interactive: true
        }).addTo(map);
	}

	class House {
	  constructor(number, latitude, longitude, numberLatitude, numberLongitude, width, height) {
	    this.number = number;
	    this.latitude = latitude;
	    this.longitude = longitude;
	    this.numberLatitude = numberLatitude;
	    this.numberLongitude = numberLongitude;
	    this.width = width;
	    this.height = height;
	  }
	}

	class HouseNumber {
	  constructor(number, latitude, longitude) {
	    this.number = number;
	    this.latitude = latitude;
	    this.longitude = longitude;
	  }
	}

	function addPlantsToMapBeforeHouses(map) {
        addPlantToMap(map, 47.542000, 18.719799, 0.00015, 0.00015, "tree_1"); // 2/i: fa
        addPlantToMap(map, 47.541847, 18.720101, 0.00015, 0.00015, "tree_1"); // 2/i: fa
	}

	function addPlantsToMap(map) {
        addPlantToMap(map, 47.54207, 18.71916, 0.00007, 0.00016, "bush_2"); // 4: ház melletti bokor
        addPlantToMap(map, 47.54205, 18.71919, 0.00007, 0.00016, "bush_2"); // 4: ház melletti bokor
        addPlantToMap(map, 47.54203, 18.71922, 0.00007, 0.00016, "bush_2"); // 4: ház melletti bokor
        addPlantToMap(map, 47.54220, 18.71919, 0.00015, 0.00015, "tree_1"); // fa a kanyarban
        addPlantToMap(map, 47.54217, 18.71909, 0.00015, 0.00015, "tree_1"); // fa a kanyarban
        addPlantToMap(map, 47.54210, 18.71902, 0.00015, 0.00015, "tree_1"); // fa a kanyarban
        addPlantToMap(map, 47.54203, 18.71895, 0.00015, 0.00015, "tree_1"); // fa a kanyarban
        addPlantToMap(map, 47.54243, 18.7192, 0.00018, 0.00018, "tree_1"); // 31: fa
        addPlantToMap(map, 47.54201, 18.7187, 0.00015, 0.00015, "tree_1"); // 39: fa
        addPlantToMap(map, 47.54201, 18.7196, 0.00015, 0.00015, "tree_1"); // 4: fa

        addPlantToMap(map, 47.54142, 18.71862, 0.00012, 0.00012, "tree_1"); // 14: fa
        addPlantToMap(map, 47.54143, 18.71872, 0.00012, 0.00012, "tree_1"); // 14: fa

        addPlantToMap(map, 47.54133, 18.7184, 0.00006, 0.00012, "bush_1"); // 14: garázs melletti bokor
        addPlantToMap(map, 47.5413, 18.71845, 0.00006, 0.00012, "bush_1"); // 14: garázs melletti bokor
        addPlantToMap(map, 47.54127, 18.7185, 0.00006, 0.00012, "bush_1"); // 14: garázs melletti bokor

        addPlantToMap(map, 47.5412, 18.7183, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.54115, 18.71825, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.5411, 18.7182, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.54105, 18.71815, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.541454, 18.721459, 0.00010, 0.00010, "tree_1"); // 11 után: fa
        addPlantToMap(map, 47.541404, 18.721559, 0.00010, 0.00010, "tree_1"); // 11 után: fa
        addPlantToMap(map, 47.541354, 18.721659, 0.00010, 0.00010, "tree_1"); // 11 után: fa
        addPlantToMap(map, 47.542200, 18.720501, 0.00015, 0.00015, "tree_1"); // tápos: fa
        addPlantToMap(map, 47.542120, 18.720441, 0.00015, 0.00015, "tree_1"); // tápos: fa
        addPlantToMap(map, 47.542030, 18.720381, 0.00015, 0.00015, "tree_1"); // tápos: fa
        addPlantToMap(map, 47.541950, 18.720321, 0.00015, 0.00015, "tree_1"); // tápos: fa
        addPlantToMap(map, 47.54055, 18.71768, 0.00008, 0.00008, "tree_1"); // 30: fa
        addPlantToMap(map, 47.54050, 18.71764, 0.00008, 0.00008, "tree_1"); // 30: fa
        addPlantToMap(map, 47.54045, 18.71760, 0.00008, 0.00008, "tree_1"); // 30: fa
        addPlantToMap(map, 47.54031, 18.71690, 0.00008, 0.00008, "tree_1"); // 67: fa
        addPlantToMap(map, 47.54028, 18.71695, 0.00008, 0.00008, "tree_1"); // 67: fa
        addPlantToMap(map, 47.54024, 18.71722, 0.00008, 0.00008, "tree_1"); // 67: fa
        addPlantToMap(map, 47.53940, 18.7166, 0.00008, 0.00008, "tree_1"); // 79: fa
        addPlantToMap(map, 47.53938, 18.71655, 0.00008, 0.00008, "tree_1"); // 79: fa
        addPlantToMap(map, 47.53936, 18.71650, 0.00008, 0.00008, "tree_1"); // 79: fa
        addPlantToMap(map, 47.53923, 18.71604, 0.00009, 0.00009, "tree_1"); // 81: fa
        addPlantToMap(map, 47.53901, 18.71581, 0.00011, 0.00011, "tree_1"); // kanyar: fa
        addPlantToMap(map, 47.53898, 18.71584, 0.00011, 0.00011, "tree_1"); // kanyar: fa
        addPlantToMap(map, 47.53896, 18.71587, 0.00011, 0.00011, "tree_1"); // kanyar: fa
        addPlantToMap(map, 47.53895, 18.71590, 0.00011, 0.00011, "tree_1"); // kanyar: fa
        addPlantToMap(map, 47.53894, 18.71596, 0.00011, 0.00011, "tree_1"); // kanyar: fa
        addPlantToMap(map, 47.53893, 18.71600, 0.00011, 0.00011, "tree_1"); // kanyar: fa
	}

    function addPlantToMap(map, latitude, longitude, width, height, plantImage) {
        var imageUrl = 'plants/' + plantImage + '.svg';
        var latLngBounds = L.latLngBounds([[latitude, longitude], [latitude + width, longitude + height]]);

        var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
            opacity: 1,
            errorOverlayUrl: imageUrl,
            interactive: true
        }).addTo(map);
    }