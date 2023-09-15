'use strict'

class RivetsConfiguraton {
	
	static setupParameters() {
		rivets.configure({
			prefix: 'data-rv'
		})
	}
	
	static setupFormatters() {
		rivets.formatters.lights = {
			read: function(value) {
				return value == 1
			},
			publish: function(value) {
				return (value)? 1 : 0
			}
		}
		rivets.formatters.doors = {
			read: function(value) {
				return value == 1
			},
			publish: function(value) {
				return (value)? 1 : 2
			}
		}
		rivets.formatters.simulatorControllerText = {
			read: function(value) {
				return value? "Stop" : "Start"
			}
		}
	}
	
}