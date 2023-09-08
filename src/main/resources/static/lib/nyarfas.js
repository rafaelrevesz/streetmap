	function getHouses() {
	  var houses = new Array();
	  houses.push(new House("4", 47.54195800387914, 18.719159748012023, 47.54225, 18.7194, 0.0004, 0.0004));
	  houses.push(new House("20", 47.54090800387914, 18.7183, 47.54122800387914, 18.718459748012023, 0.00042, 0.00042));
	  houses.push(new House("30", 47.54026800387914, 18.71763, 47.54055, 18.71793, 0.0004, 0.0004));
	  houses.push(new House("32", 47.54014800387914, 18.71752, 47.54041, 18.7177, 0.0004, 0.0004));
	  houses.push(new House("39", 47.54195800387914, 18.718559748012023, 47.54228800387914, 18.718759748012023, 0.0004, 0.0004));

	  houses.push(new House("45", 47.54163800387914, 18.71825, 47.54192, 18.71839, 0.0004, 0.0004));

	  houses.push(new House("67", 47.54010800387914, 18.71692, 47.54044, 18.71715, 0.00045, 0.00045));
	  houses.push(new House("75", 47.539505800387914, 18.716469748012023, 47.539815800387914, 18.716629748012023, 0.0004, 0.0004));
	  houses.push(new House("79", 47.539325800387914, 18.716369748012023, 47.539535800387914, 18.716499748012023, 0.0003, 0.0003));
	  houses.push(new House("81", 47.539167800387914, 18.716089748012023, 47.539415800387914, 18.716279748012023, 0.00035, 0.00035));
	  houses.push(new House("83", 47.539105800387914, 18.715669748012023, 47.539375800387914, 18.715789748012023, 0.0004, 0.0004));
	  houses.push(new House("85", 47.538905800387914, 18.715579748012023, 47.539230800387914, 18.715679748012023, 0.0004, 0.0004));
	  houses.push(new House("592/18", 47.541455800387914, 18.720279748012023, 47.541725800387914, 18.720479748012023, 0.0004, 0.0004));
	  return houses;
	}

	function addHouseToMap(map, house) {
        var imageUrl = 'houses/' + house.number.replace("/", "_") + '.svg';
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
	        var imageUrl = 'season/' + house.number.replace("/", "_") + '.svg';
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
			iconUrl: 'numbers/' + house.number.replace("/", "_") +'.svg',
			iconSize:     [100, 40],
			iconAnchor:   [50, 40],
			popupAnchor:  [0, -12]
		})
		L.marker([house.numberLatitude, house.numberLongitude],
				{icon: houseNumberIcon}).addTo(map).bindPopup(`Nyarfas u. ` + house.number)
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