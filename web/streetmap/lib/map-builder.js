'use strict'

class MapBuilder {
	
	constructor(target, latLonPos) {
		/*map.on('click', function(e) {
			console.log(`"latitude": ${e.latlng.lat}, "longitude": ${e.latlng.lng}, "altitude": null`)
		})*/
	}
	
	static createMap(target, latLonPos) {
		let map = L.map(target).setView(latLonPos, 13);
		//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		//L.tileLayer('https://{s}.tile.openstreetmap.com/transport/{z}/{x}/{y}.png', {
		L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map)
		return map
	}
	
}
