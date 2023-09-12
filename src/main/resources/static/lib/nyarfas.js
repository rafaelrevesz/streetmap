	function getHouses() {
	  var houses = new Array();
	  houses.push(new House("2/c", 47.540820800387914, 18.721879748012023, 47.541085800387914, 18.722079748012023, 0.00035, 0.00035, null));

	  houses.push(new House("2/d/a", 47.540965800387914, 18.721579748012023, 47.541225800387914, 18.721779748012023, 0.00035, 0.00035, null));
	  houses.push(new House("2/d/b", 47.540820800387914, 18.721329748012023, 47.541080800387914, 18.721479748012023, 0.00035, 0.00035, null));
	  houses.push(new House("2/e/1", 47.541095800387914, 18.721279748012023, 47.541365800387914, 18.721479748012023, 0.00036, 0.00036, null));
	  houses.push(new House("2/e/2", 47.540950800387914, 18.721029748012023, 47.541220800387914, 18.721179748012023, 0.00035, 0.00035, null));
	  houses.push(new House("2/f/1", 47.541225800387914, 18.720979748012023, 47.541495800387914, 18.721179748012023, 0.00036, 0.00036, null));
	  houses.push(new House("2/f/2", 47.541080800387914, 18.720729748012023, 47.541350800387914, 18.720879748012023, 0.00036, 0.00036, null));
	  houses.push(new House("2/g/1", 47.541355800387914, 18.720679748012023, 47.541625800387914, 18.720879748012023, 0.00036, 0.00036, null));
	  houses.push(new House("2/g/2", 47.541210800387914, 18.720429748012023, 47.541480800387914, 18.720579748012023, 0.00036, 0.00036, null));
	  houses.push(new House("592/18", 47.541455800387914, 18.720279748012023, 47.541725800387914, 18.720479748012023, 0.0004, 0.0004, null));
	  houses.push(new House("4", 47.54195800387914, 18.719159748012023, 47.54225, 18.7194, 0.0004, 0.0004, null));
	  houses.push(new House("20", 47.54090800387914, 18.7183, 47.54122800387914, 18.718459748012023, 0.00042, 0.00042, 'Borulj R&aacute;m-szesz!'));
	  houses.push(new House("24", 47.54058800387914, 18.7179, 47.54089800387914, 18.718109748012023, 0.00042, 0.00042, null));
	  houses.push(new House("30", 47.54026800387914, 18.71763, 47.54055, 18.71793, 0.0004, 0.0004, null));
	  houses.push(new House("32", 47.54014800387914, 18.71752, 47.54041, 18.7177, 0.0004, 0.0004, null));
	  houses.push(new House("39", 47.54195800387914, 18.718559748012023, 47.54228800387914, 18.718759748012023, 0.0004, 0.0004, null));
	  houses.push(new House("45", 47.54163800387914, 18.71825, 47.54192, 18.71839, 0.0004, 0.0004, null));
	  houses.push(new House("61", 47.54054000387914, 18.71728, 47.54084, 18.71748, 0.0004, 0.0004, null));
	  houses.push(new House("65", 47.54030000387914, 18.71715, 47.54053, 18.7173, 0.00033, 0.00033, null));
	  houses.push(new House("67", 47.54010800387914, 18.71692, 47.54044, 18.71715, 0.00045, 0.00045, null));
	  houses.push(new House("75", 47.539505800387914, 18.716469748012023, 47.539815800387914, 18.716629748012023, 0.0004, 0.0004, null));
	  houses.push(new House("79", 47.539325800387914, 18.716369748012023, 47.539535800387914, 18.716499748012023, 0.0003, 0.0003, null));
	  houses.push(new House("81", 47.539167800387914, 18.716089748012023, 47.539415800387914, 18.716279748012023, 0.00035, 0.00035, null));
	  houses.push(new House("83", 47.539105800387914, 18.715669748012023, 47.539375800387914, 18.715789748012023, 0.0004, 0.0004, null));
	  houses.push(new House("85", 47.538905800387914, 18.715579748012023, 47.539230800387914, 18.715679748012023, 0.0004, 0.0004, null));
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

	function addHouseNumberAsMarkerToMap(map, house) {
		var houseNumberIcon = L.icon({
			iconUrl: 'numbers/' + house.number.replaceAll("/", "_") +'.svg',
			iconSize:     [100, 40],
			iconAnchor:   [50, 40],
			popupAnchor:  [0, -12]
		})
		var popupText = `Ny&aacute;rf&aacute;s u. ` + house.number;
		if (house.info != null) {
		  popupText = house.info;
		}
		L.marker([house.numberLatitude, house.numberLongitude],
				{icon: houseNumberIcon}).addTo(map).bindPopup(popupText)
				// popup szín csere: https://stackoverflow.com/questions/20532635/how-can-i-change-the-background-color-of-a-leaflet-popup
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
	  constructor(number, latitude, longitude, numberLatitude, numberLongitude, width, height, info) {
	    this.number = number;
	    this.latitude = latitude;
	    this.longitude = longitude;
	    this.numberLatitude = numberLatitude;
	    this.numberLongitude = numberLongitude;
	    this.width = width;
	    this.height = height;
	    this.info = info;
	  }
	}

	function addPlantsToMap(map) {
        addPlantToMap(map, 47.54207, 18.71916, 0.00007, 0.00016, "bush_2"); // 4: ház melletti bokor
        addPlantToMap(map, 47.54205, 18.71919, 0.00007, 0.00016, "bush_2"); // 4: ház melletti bokor
        addPlantToMap(map, 47.54203, 18.71922, 0.00007, 0.00016, "bush_2"); // 4: ház melletti bokor
        addPlantToMap(map, 47.54220, 18.71919, 0.00015, 0.00015, "tree_1"); // fa a kanyarban
        addPlantToMap(map, 47.54217, 18.71909, 0.00015, 0.00015, "tree_1"); // fa a kanyarban
        addPlantToMap(map, 47.54210, 18.71902, 0.00015, 0.00015, "tree_1"); // fa a kanyarban
        addPlantToMap(map, 47.54203, 18.71895, 0.00015, 0.00015, "tree_1"); // fa a kanyarban
        addPlantToMap(map, 47.54201, 18.7187, 0.00015, 0.00015, "tree_1"); // 39: fa
        addPlantToMap(map, 47.54201, 18.7196, 0.00015, 0.00015, "tree_1"); // 4: fa
        addPlantToMap(map, 47.5412, 18.7183, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.54115, 18.71825, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.5411, 18.7182, 0.00010, 0.00010, "tree_1"); // 20: fa
        addPlantToMap(map, 47.54105, 18.71815, 0.00010, 0.00010, "tree_1"); // 20: fa
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