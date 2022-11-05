	function getHouses() {
	  var houses = new Array();
	  houses.push(new House(20, 47.54090800387914, 18.718159748012023));
	  houses.push(new House(39, 47.54195800387914, 18.718559748012023));
	  return houses;
	}

	function addHouseToMap(map, house) {
        var imageUrl = 'houses/' + house.number + '.svg';
        var altText = '20';
        var latLngBounds = L.latLngBounds([[house.latitude, house.longitude], [house.latitude + 0.0004, house.longitude + 0.0004]]);

        var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
            opacity: 0.8,
            errorOverlayUrl: imageUrl,
            alt: altText,
            interactive: true
        }).addTo(map);
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
	  constructor(number, latitude, longitude) {
	    this.number = number;
	    this.latitude = latitude;
	    this.longitude = longitude;
	  }
	}
