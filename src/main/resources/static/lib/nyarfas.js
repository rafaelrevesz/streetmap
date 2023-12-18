
	function getHouses() {
	  var houses = new Array();
	  var date = new Date().getDate();
	  if (date >= 24) houses.push(new House("2/c", 47.540820800387914, 18.721879748012023, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("2/d/a", 47.540965800387914, 18.721579748012023, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("2/d/b", 47.540820800387914, 18.721329748012023, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("2/e/1", 47.541095800387914, 18.721279748012023, 0.00036, 0.00036));
	  if (date >= 24) houses.push(new House("2/e/2", 47.540950800387914, 18.721029748012023, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("2/f/1", 47.541225800387914, 18.720979748012023, 0.00036, 0.00036));
	  if (date >= 24) houses.push(new House("2/f/2", 47.541080800387914, 18.720729748012023, 0.00036, 0.00036));
	  if (date >= 24) houses.push(new House("2/g/a", 47.541355800387914, 18.720679748012023, 0.00036, 0.00036));
	  if (date >= 24) houses.push(new House("2/g/b", 47.541210800387914, 18.720429748012023, 0.00036, 0.00036));
	  if (date >= 24) houses.push(new House("592/18", 47.541455800387914, 18.720279748012023, 0.0004, 0.0004));
	  if (date >= 24) houses.push(new House("2/i/a", 47.54175800387914, 18.719559748012023, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("2/i/b", 47.54160800387914, 18.719359748012023, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("2/i/c", 47.54140800387914, 18.719209748012023, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("2/i/f", 47.54165800387914, 18.719859748012023, 0.00035, 0.00035));
      if (date >= 24) houses.push(new House("2/i/d", 47.54145800387914, 18.719709748012023, 0.00035, 0.00035));
	  if (date >= 4) houses.push(new House("4", 47.54195800387914, 18.719159748012023, 0.0004, 0.0004));
	  if (date >= 24) houses.push(new House("5_b", 47.54206, 18.72294, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_b", 47.54188, 18.72285, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_b", 47.54170, 18.72276, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_b", 47.54152, 18.72267, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_b", 47.54134, 18.72258, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_b", 47.54116, 18.72249, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_b", 47.54098, 18.72240, 0.00026, 0.00026));

	  if (date >= 24) houses.push(new House("5_a", 47.54194, 18.72322, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_a", 47.54176, 18.72313, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_a", 47.54158, 18.72304, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_a", 47.54126, 18.72286, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_a", 47.54108, 18.72277, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("5_a", 47.54090, 18.72268, 0.00026, 0.00026));
	  if (date >= 24) houses.push(new House("7/a", 47.54104, 18.7221, 0.0004, 0.0004));
	  // houses.push(new House("7/b", 47.5413, 18.72220, 0.0004, 0.0004));
      if (date >= 24) houses.push(new House("0/", 47.54184, 18.71885, 0.00025, 0.00025)); // 8
	  if (date >= 24) houses.push(new House("9", 47.54112, 18.7219, 0.0004, 0.0004));
	  if (date >= 4) houses.push(new House("11/a", 47.541204, 18.721709, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("11/b", 47.541353, 18.721934, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("12", 47.54152, 18.71862, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("14", 47.5413, 18.7185, 0.00045, 0.00045));
	  if (date >= 24) houses.push(new House("14/", 47.5412, 18.7185, 0.0003, 0.0003));
	  if (date >= 2) houses.push(new House("20", 47.54090800387914, 18.7183, 0.00042, 0.00042));
	  if (date >= 24) houses.push(new House("22", 47.54081, 18.71805, 0.00034, 0.00034));
	  if (date >= 9) houses.push(new House("24", 47.54058800387914, 18.7179, 0.00042, 0.00042));
	  if (date >= 24) houses.push(new House("25", 47.54195, 18.71995, 0.00047, 0.00047));
	  if (date >= 3) houses.push(new House("26", 47.54045, 18.71782, 0.00045, 0.00045));
	  if (date >= 24) houses.push(new House("29", 47.54223, 18.71945, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("30", 47.54026800387914, 18.71768, 0.0004, 0.0004));
	  if (date >= 24) houses.push(new House("31", 47.54225, 18.7192, 0.00045, 0.00045));
	  if (date >= 8) houses.push(new House("32", 47.54014800387914, 18.71757, 0.0004, 0.0004));
	  if (date >= 24) houses.push(new House("0/", 47.53991, 18.71736, 0.00025, 0.00025)); // 36
	  if (date >= 24) houses.push(new House("37", 47.54217, 18.71870, 0.00035, 0.00035));
	  if (date >= 12) houses.push(new House("38", 47.53972, 18.71722, 0.00033, 0.00033));
	  if (date >= 8) houses.push(new House("39", 47.54195800387914, 18.718559748012023, 0.0004, 0.0004));
	  if (date >= 24) houses.push(new House("40", 47.53962, 18.71711, 0.00025, 0.00025));
	  if (date >= 16) houses.push(new House("41", 47.541885, 18.7184, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("0/", 47.53949, 18.71703, 0.00025, 0.00025)); // 42
      if (date >= 24) houses.push(new House("0/", 47.54182, 18.71839, 0.00025, 0.00025)); // 43
	  if (date >= 21) houses.push(new House("0/", 47.53936, 18.71692, 0.00025, 0.00025)); // 44
	  if (date >= 4) houses.push(new House("45", 47.54163800387914, 18.71825, 0.0004, 0.0004));
	  if (date >= 24) houses.push(new House("0/", 47.541555, 18.71817, 0.00025, 0.00025)); // 47
	  if (date >= 6) houses.push(new House("49", 47.541380, 18.71805, 0.00033, 0.00033));
	  if (date >= 24) houses.push(new House("50", 47.53895, 18.71645, 0.00027, 0.00027));
	  if (date >= 20) houses.push(new House("51", 47.54124, 18.71786, 0.00037, 0.00037));
	  if (date >= 17) houses.push(new House("52", 47.53877, 18.71615, 0.00040, 0.00040));
	  if (date >= 24) houses.push(new House("0/", 47.541150, 18.71788, 0.00025, 0.00025)); // 53
	  if (date >= 5) houses.push(new House("55", 47.54102, 18.71766, 0.00035, 0.00035));
	  if (date >= 5) houses.push(new House("55/", 47.54096, 18.71782, 0.00020, 0.00020));
	  if (date >= 7) houses.push(new House("57", 47.54098, 18.71730, 0.00029, 0.00029));
	  if (date >= 22) houses.push(new House("61", 47.54054000387914, 18.71728, 0.0004, 0.0004));
	  if (date >= 10) houses.push(new House("65", 47.54030000387914, 18.71715, 0.00033, 0.00033));
	  if (date >= 11) houses.push(new House("67", 47.54010800387914, 18.71692, 0.00045, 0.00045));
	  if (date >= 16) houses.push(new House("75", 47.539505800387914, 18.716469748012023, 0.0004, 0.0004));
	  if (date >= 24) houses.push(new House("79", 47.539325800387914, 18.716349748012023, 0.0003, 0.0003));
	  if (date >= 24) houses.push(new House("81", 47.539167800387914, 18.716089748012023, 0.00035, 0.00035));
	  if (date >= 24) houses.push(new House("83", 47.539105800387914, 18.715669748012023, 0.0004, 0.0004));
	  if (date >= 24) houses.push(new House("85", 47.538905800387914, 18.715579748012023, 0.0004, 0.0004));
	  return houses;
	}

	function getHouseNumbers() {
	  var numbers = new Array();
	  numbers.push(new HouseNumber("5", 47.54097, 18.722605));
	  numbers.push(new HouseNumber("2/c", 47.5410858003, 18.722058));
	  numbers.push(new HouseNumber("2/d/a", 47.54123, 18.721779748012023));
	  numbers.push(new HouseNumber("2/d/b", 47.541080800387914, 18.721479748012023));
	  numbers.push(new HouseNumber("2/e/1", 47.541365800387914, 18.721479748012023));
	  numbers.push(new HouseNumber("2/e/2", 47.54121, 18.721179748012023));
	  numbers.push(new HouseNumber("2/f/a", 47.541495800387914, 18.721179748012023));
	  numbers.push(new HouseNumber("2/f/b", 47.541350800387914, 18.720879748012023));
	  numbers.push(new HouseNumber("2/g/a", 47.541625800387914, 18.720879748012023));
	  numbers.push(new HouseNumber("2/g/b", 47.541480800387914, 18.720579748012023));
	  numbers.push(new HouseNumber("592/18", 47.541725800387914, 18.720479748012023));
	  numbers.push(new HouseNumber("2/i/a", 47.54202, 18.7198));
	  numbers.push(new HouseNumber("2/i/b", 47.54187, 18.7196));
	  numbers.push(new HouseNumber("2/i/c", 47.54168, 18.71942));
	  numbers.push(new HouseNumber("2/i/f", 47.54192, 18.7201));
      numbers.push(new HouseNumber("2/i/d", 47.54173, 18.71993));
	  numbers.push(new HouseNumber("4", 47.54224, 18.7194));
	  numbers.push(new HouseNumber("8", 47.542147, 18.71847));
	  numbers.push(new HouseNumber("7/1", 47.541255, 18.72222));
	  numbers.push(new HouseNumber("7/2", 47.54131, 18.72229));
	  numbers.push(new HouseNumber("7/3", 47.54137, 18.72238));
	  numbers.push(new HouseNumber("9/1", 47.541335, 18.72202));
	  numbers.push(new HouseNumber("9/2", 47.541395, 18.72210));
	  numbers.push(new HouseNumber("9/3", 47.54145, 18.72218));
	  numbers.push(new HouseNumber("9/a", 47.54135, 18.72235));
	  numbers.push(new HouseNumber("9/b", 47.5416, 18.72258));
	  numbers.push(new HouseNumber("9/c", 47.54142, 18.72213));
	  numbers.push(new HouseNumber("11/a", 47.541483, 18.721914));
	  numbers.push(new HouseNumber("11/b", 47.541633, 18.722144));
	  numbers.push(new HouseNumber("12", 47.54178, 18.71885));
	  numbers.push(new HouseNumber("14", 47.54157, 18.7186));
	  numbers.push(new HouseNumber("20", 47.54122800387914, 18.718459748012023));
	  numbers.push(new HouseNumber("24", 47.54089800387914, 18.718109748012023));
	  numbers.push(new HouseNumber("25", 47.54230, 18.72007));
	  numbers.push(new HouseNumber("26", 47.54075, 18.7180));
	  numbers.push(new HouseNumber("29", 47.542495, 18.719575));
	  numbers.push(new HouseNumber("30", 47.540545 , 18.71793));
	  numbers.push(new HouseNumber("31", 47.542595, 18.71937));
	  numbers.push(new HouseNumber("32", 47.54041, 18.7177));
	  numbers.push(new HouseNumber("37", 47.54244, 18.71886));
	  numbers.push(new HouseNumber("38", 47.53996, 18.71736));
	  numbers.push(new HouseNumber("39", 47.54227, 18.718729748012023));
	  numbers.push(new HouseNumber("40", 47.539808, 18.71723));
	  numbers.push(new HouseNumber("41", 47.542147, 18.71847));
	  numbers.push(new HouseNumber("43", 47.542147, 18.71847));
	  numbers.push(new HouseNumber("45", 47.54192, 18.71839));
	  numbers.push(new HouseNumber("49", 47.54162, 18.718205));
	  numbers.push(new HouseNumber("51", 47.54154, 18.71799));
	  numbers.push(new HouseNumber("52", 47.53905, 18.7163));
	  numbers.push(new HouseNumber("55", 47.54126, 18.71778));
	  numbers.push(new HouseNumber("57", 47.54119, 18.71743));
	  numbers.push(new HouseNumber("61", 47.54084, 18.71748));
	  numbers.push(new HouseNumber("65", 47.54053, 18.7173));
	  numbers.push(new HouseNumber("67", 47.540445, 18.71713));
	  numbers.push(new HouseNumber("75", 47.539815800387914, 18.716629748012023));
	  numbers.push(new HouseNumber("79", 47.539535800387914, 18.716499748012023));
	  numbers.push(new HouseNumber("81", 47.539415800387914, 18.716279748012023));
	  numbers.push(new HouseNumber("83", 47.539375800387914, 18.715789748012023));
	  numbers.push(new HouseNumber("85", 47.539230800387914, 18.715679748012023));
	  return numbers;
	}

	function addHouseToMap(map, house) {
	    addBuildingToMap(map, house, 'houses');
	}

	function addBuildingToMap(map, house, folder) {
        var imageUrl = folder + '/' + house.number.replaceAll("/", "_") + '.svg';
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
	    addBuildingToMap(map, house, 'season');
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
	  constructor(number, latitude, longitude, width, height) {
	    this.number = number;
	    this.latitude = latitude;
	    this.longitude = longitude;
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

        addPlantToMap(map, 47.54170, 18.72032, 0.00010, 0.00010, "bush_2"); // 592/18 mellett: fa
        addPlantToMap(map, 47.54166, 18.72028, 0.00010, 0.00010, "tree_1"); // 592/18 mellett: fa
        addPlantToMap(map, 47.54162, 18.72024, 0.00010, 0.00010, "tree_1"); // 592/18 mellett: fa
        addPlantToMap(map, 47.54158, 18.7202, 0.00010, 0.00010, "tree_1"); // 592/18 mellett: fa
        addPlantToMap(map, 47.54223, 18.71930, 0.00011, 0.00018, "bush_1"); // 4: ház előtti bokor
        addPlantToMap(map, 47.54178, 18.71872, 0.00008, 0.00008, "tree_1"); // 12: ház előtti kis fa
        addPlantToMap(map, 47.54174, 18.71868, 0.00008, 0.00008, "tree_1"); // 12: ház előtti kis fa
        addPlantToMap(map, 47.54170, 18.71864, 0.00008, 0.00008, "tree_1"); // 12: ház előtti kis fa

        addPlantToMap(map, 47.53892, 18.71615, 0.00011, 0.00011, "tree_1"); // kanyar: fa

        addPlantToMap(map, 47.53995, 18.71722, 0.00011, 0.00011, "tree_1"); // 40
        addPlantToMap(map, 47.53990, 18.71721, 0.00006, 0.00006, "tree_1"); // 40
        addPlantToMap(map, 47.53985, 18.71718, 0.00006, 0.00006, "tree_1"); // 40
        addPlantToMap(map, 47.53984, 18.71718, 0.00003, 0.00006, "bush_2"); // 40

        addPlantToMap(map, 47.54020, 18.71754, 0.00008, 0.00008, "tree_1"); // 34
        addPlantToMap(map, 47.54013, 18.71750, 0.00008, 0.00008, "tree_1"); // 34
        addPlantToMap(map, 47.54017, 18.71762, 0.00008, 0.00008, "tree_1"); // 34
        addPlantToMap(map, 47.54010, 18.71758, 0.00008, 0.00008, "tree_1"); // 34
        addPlantToMap(map, 47.54014, 18.71770, 0.00008, 0.00008, "tree_1"); // 34
        addPlantToMap(map, 47.54007, 18.71766, 0.00008, 0.00008, "tree_1"); // 34
        addPlantToMap(map, 47.53895, 18.7161, 0.00010, 0.00006, "bush_1"); // 52 előtt: fa
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

        addPlantToMap(map, 47.54177, 18.71854, 0.00008, 0.00008, "tree_1"); // 45: ház előtti kis fa
        addPlantToMap(map, 47.54166, 18.71843, 0.00008, 0.00008, "tree_1"); // 45: ház előtti kis fa

        addPlantToMap(map, 47.54140, 18.7184, 0.00006, 0.00012, "bush_1"); // 14: garázs melletti bokor
        addPlantToMap(map, 47.54137, 18.7184, 0.00006, 0.00012, "bush_1"); // 14: garázs melletti bokor
        addPlantToMap(map, 47.54133, 18.7184, 0.00006, 0.00012, "bush_1"); // 14: garázs melletti bokor
        addPlantToMap(map, 47.5413, 18.71845, 0.00006, 0.00012, "bush_1"); // 14: garázs melletti bokor
        addPlantToMap(map, 47.54127, 18.7185, 0.00006, 0.00012, "bush_1"); // 14: garázs melletti bokor

        addPlantToMap(map, 47.54110, 18.71800, 0.00010, 0.00010, "tree_1"); // 55: fa
        addPlantToMap(map, 47.54112, 18.71790, 0.00010, 0.00010, "tree_1"); // 55: fa
        addPlantToMap(map, 47.54111, 18.71785, 0.00010, 0.00010, "tree_1"); // 55: fa
        addPlantToMap(map, 47.54109, 18.71773, 0.00010, 0.00010, "tree_1"); // 55: fa
        addPlantToMap(map, 47.54111, 18.71765, 0.00010, 0.00010, "tree_1"); // 55: fa

        addPlantToMap(map, 47.5412, 18.7183, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.54115, 18.71825, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.5411, 18.7182, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.54105, 18.71815, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.541454, 18.721459, 0.00010, 0.00010, "tree_1"); // 11 után: fa
        addPlantToMap(map, 47.541404, 18.721559, 0.00010, 0.00010, "tree_1"); // 11 után: fa
        addPlantToMap(map, 47.541354, 18.721659, 0.00010, 0.00010, "tree_1"); // 11 után: fa
        addPlantToMap(map, 47.54184, 18.72045, 0.00010, 0.00015, "bush_2"); // kereszteződés bokor
        addPlantToMap(map, 47.54162, 18.721059, 0.00010, 0.00010, "tree_1"); // 11 után út mellett: fa
        addPlantToMap(map, 47.54157, 18.721159, 0.00010, 0.00010, "tree_1"); // 11 után út mellett: fa
        addPlantToMap(map, 47.54152, 18.721259, 0.00010, 0.00010, "tree_1"); // 11 után út mellett: fa
        addPlantToMap(map, 47.542200, 18.720501, 0.00015, 0.00015, "tree_1"); // tápos: fa
        addPlantToMap(map, 47.542120, 18.720441, 0.00015, 0.00015, "tree_1"); // tápos: fa
        addPlantToMap(map, 47.542030, 18.720381, 0.00015, 0.00015, "tree_1"); // tápos: fa
        addPlantToMap(map, 47.541950, 18.720321, 0.00015, 0.00015, "tree_1"); // tápos: fa

        addPlantToMap(map, 47.54249, 18.71945, 0.00010, 0.00010, "bush_1"); // 31 bokor
        addPlantToMap(map, 47.54247, 18.71944, 0.00010, 0.00010, "bush_1"); // 31 bokor
        addPlantToMap(map, 47.54245, 18.71943, 0.00010, 0.00010, "bush_1"); // 31 bokor
        addPlantToMap(map, 47.54243, 18.71942, 0.00010, 0.00010, "bush_1"); // 31 bokor

        addPlantToMap(map, 47.541950, 18.720321, 0.00015, 0.00015, "tree_1"); // 57: fa
        addPlantToMap(map, 47.541025, 18.71730, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.541005, 18.71735, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.540985, 18.71740, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.540965, 18.71745, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.540945, 18.71750, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.540925, 18.71755, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.540905, 18.71760, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.540885, 18.71765, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.540865, 18.71770, 0.00010, 0.00010, "bush_1"); // 57 bokor
        addPlantToMap(map, 47.540845, 18.71775, 0.00010, 0.00010, "bush_1"); // 57 bokor

        addPlantToMap(map, 47.54055, 18.71768, 0.00008, 0.00008, "tree_1"); // 30: fa
        addPlantToMap(map, 47.54050, 18.71764, 0.00008, 0.00008, "tree_1"); // 30: fa
        addPlantToMap(map, 47.54045, 18.71760, 0.00008, 0.00008, "tree_1"); // 30: fa
        addPlantToMap(map, 47.54031, 18.71690, 0.00008, 0.00008, "tree_1"); // 67: fa
        addPlantToMap(map, 47.54028, 18.71695, 0.00008, 0.00008, "tree_1"); // 67: fa
        addPlantToMap(map, 47.54024, 18.71722, 0.00008, 0.00008, "bush_1"); // 67: fa
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
        addPlantToMap(map, 47.53912, 18.71615, 0.00010, 0.00010, "bush_2"); // 52 előtt: fa
        addPlantToMap(map, 47.53905, 18.71605, 0.00006, 0.00006, "tree_1"); // kanyar: fa
        addPlantToMap(map, 47.53925, 18.71643, 0.00010, 0.00010, "bush_2"); // 81 előtt: fa
        addPlantToMap(map, 47.53924, 18.71639, 0.00007, 0.00006, "bush_1"); // 81 előtt: fa

        addPlantToMap(map, 47.53892, 18.7161, 0.00010, 0.00010, "bush_2"); // 52 előtt: fa
        addPlantToMap(map, 47.53889, 18.71613, 0.00010, 0.00010, "bush_2"); // 52 előtt: fa
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