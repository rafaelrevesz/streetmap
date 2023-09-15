'use strict'

class Ajax {
	
	static request(params) {
		let body = (typeof params.body === 'object')? JSON.stringify(params.body) : params.body
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest()
			xhr.open(params.method, params.url)
			xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8")
			xhr.responseType = 'json'
			xhr.onload = () => resolve(xhr.response)
			xhr.onerror = () => reject(xhr)
			xhr.send(body)
		})
	}
	
}
