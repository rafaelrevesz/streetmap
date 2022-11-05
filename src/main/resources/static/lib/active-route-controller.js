'use strict'

const STOPS_URL = 'http://localhost:8081/routes/tram-4'

class ActiveRouteController {
	
	constructor(map) {
		this.map = map
		this.stops = []
		this._createStopMarkers()
	}
	
	_createStopMarkers() {
		return new Promise((resolve, reject) => {
			this.stops = []
			Ajax.request({ method: 'GET', url: STOPS_URL })
			.then((data) => {
				let latlngs = []
				for(let stop of data.positions) {
					if(stop.name) {
						L.marker([stop.latitude, stop.longitude]).addTo(this.map).bindPopup(stop.name)
						this.stops.push(stop)
					}
					latlngs.push([stop.latitude, stop.longitude])
				}
				var polyline = L.polyline(latlngs, {color: '#FFD900'}).addTo(this.map);
				this.map.fitBounds(polyline.getBounds());
				
				resolve({stops: this.stops})
			})
			.catch((err) => {
				reject(err)
			})
		})
		
	}
	
}
