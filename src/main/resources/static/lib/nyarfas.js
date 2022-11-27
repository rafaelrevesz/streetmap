	function getHouses() {
	  var houses = new Array();
	  houses.push(new House("20", 47.54090800387914, 18.718159748012023, 47.54122800387914, 18.718359748012023));
	  houses.push(new House("39", 47.54195800387914, 18.718559748012023, 47.54228800387914, 18.718759748012023));
	  houses.push(new House("83", 47.539105800387914, 18.715669748012023, 47.539375800387914, 18.715789748012023));
	  houses.push(new House("85", 47.538905800387914, 18.715579748012023, 47.539230800387914, 18.715679748012023));
	  houses.push(new House("592/18", 47.541455800387914, 18.720279748012023, 47.541725800387914, 18.720479748012023));
	  return houses;
	}

	function addHouseToMap(map, house) {
        var imageUrl = 'houses/' + house.number.replace("/", "_") + '.svg';
        var altText = '20';
        var latLngBounds = L.latLngBounds([[house.latitude, house.longitude], [house.latitude + 0.0004, house.longitude + 0.0004]]);

        var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
            opacity: 0.8,
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
				{icon: houseNumberIcon}).addTo(map).bindPopup(`House`)
	}

	function addStreet(map) {
        var imageUrl = 'street.svg';
        var altText = '20';
        var latitude = 47.54368;
        var longitude = 18.71497;
        var latLngBounds = L.latLngBounds([[latitude, longitude], [latitude - 0.0067, longitude + 0.0085]]);

        var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
            opacity: 0.8,
            errorOverlayUrl: imageUrl,
            alt: altText,
            interactive: true
        }).addTo(map);
	}

	class House {
	  constructor(number, latitude, longitude, numberLatitude, numberLongitude) {
	    this.number = number;
	    this.latitude = latitude;
	    this.longitude = longitude;
	    this.numberLatitude = numberLatitude;
	    this.numberLongitude = numberLongitude;
	  }
	}
