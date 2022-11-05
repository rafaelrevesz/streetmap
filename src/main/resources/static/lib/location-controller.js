'use strict'

const LOCATION_URL = 'http://localhost:8081/train/location'

class LocationController {
	
	constructor(map, informationController) {
		this.map = map
		this.location = {}
		this.trainMarker = undefined
		window.setInterval(() => { this._updateLocation(this) }, 1000)
		
		informationController.initialize().then((data) => {
			this.vehiclesType = data.vehiclesType
		})
	}
	
	initialize() {
		return this._updateLocation(this)
	}
	
	createTramMarker() {
		let tramIcon = L.icon({
			iconUrl: 'images/Logo_tramway-budapest.svg',
			iconSize:     [24, 24],
			iconAnchor:   [12, 12],
			popupAnchor:  [0, -12]
		})
		this.trainMarker = L.marker([this.location.latitude, this.location.longitude],
				{icon: tramIcon}).addTo(this.map).bindPopup(`Tram ${this.vehiclesType}`)
	}
	
	removeTramMarker() {
		this.map.removeLayer(this.trainMarker)
		this.trainMarker = undefined
	}
	
	_updateLocation(locationcontext) {
		return new Promise((resolve, reject) => {
			Ajax.request({ method: 'GET', url: LOCATION_URL })
			.then((data) => {
				locationcontext.location = data
				if(locationcontext.trainMarker) {
					locationcontext.trainMarker.setLatLng([data.latitude, data.longitude])
				}
				resolve(data)
			})
			.catch((err) => {
				console.log(`Error occured: ${err}`)
				reject(err)
			})
		})
		
	}
	
}
