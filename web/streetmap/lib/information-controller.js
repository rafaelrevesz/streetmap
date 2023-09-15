'use strict'

const INFORMATION_URL = 'http://localhost:8081/train/information'

class InformationContoller {
	
	constructor() {
		this.information = {}
	}
	
	initialize() {
		window.setInterval(() => {
			this._queryInformation(this)
		}, 1000)
		return this._queryInformation(this)
		
	}
	
	_queryInformation(self) {
		return new Promise((resolve, reject) => {
			Ajax.request({ method: 'GET', url: INFORMATION_URL })
			.then((data) => {
				self.information = data
				resolve({information: self.information})
			})
			.catch((err) => {
				console.log(`Failed to update information: ${err}`)
				reject(err)
			})
		})
	}
	
	updateInformation(evt, args) {
		let self = args[Object.keys(args)[0]]
		Ajax.request({ method: 'PUT', url: INFORMATION_URL, body: self.information })
		.then((data) => {
			self.information = data
		})
		.catch((err) => {
			console.log(`Failed to update information: ${err}`)
		})
	}
	
}
