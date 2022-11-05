'use strict'

const SIMULATOR_URL = 'http://localhost:8081/simulator/state'
const START_REQUEST_OBJECT = { "shouldRun": true, "routeId": "tram-4" }
const STOP_REQUEST_OBJECT = { "shouldRun": false, "routeId": null }

class SimulatorController {
	
	constructor(locationController) {
		this.locationController = locationController
		this.state = { shouldRun: true }
		this._setupState()
	}
	
	get isRunning() {
		return this.state.shouldRun == true
	}
	
	_setupState() {
		this.locationController.initialize().then((data) => {
			Ajax.request({ method: 'GET', url: SIMULATOR_URL })
			.then((data) =>{
				this.state = data
				if(this.state.shouldRun) {
					this.locationController.createTramMarker()
				}
			}).catch((err) =>{
				console.log('Failed to get state!')
			})
		})
	}
	
	start(evt, args) {
		let self = args[Object.keys(args)[0]]
		Ajax.request({ method: 'PUT', url: SIMULATOR_URL, body: JSON.stringify(START_REQUEST_OBJECT) })
		.then((data) =>{
			self.state = data
			self.locationController.createTramMarker()
			console.log('Simulation started.')
		}).catch((err) =>{
			console.log('Failed to start simulation!')
		})
	}
	
	stop(evt, args) {
		let self = args[Object.keys(args)[0]]
		Ajax.request({ method: 'PUT', url: SIMULATOR_URL, body: JSON.stringify(STOP_REQUEST_OBJECT) })
		.then((data) =>{
			self.state = data
			self.locationController.removeTramMarker()
			console.log('Simulation stopped.')
		}).catch((err) =>{
			console.log('Failed to stop simulation!')
		})
	}
	
	startStop(evt, args) {
		let self = args[Object.keys(args)[0]]
		if(self.state.shouldRun) {
			self.stop(evt, args)
		} else {
			self.start(evt, args)
		}
	}
	
}
