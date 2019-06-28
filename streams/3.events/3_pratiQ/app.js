var app = new Vue({
	el: '#app', // element
	data: {
       url: "",
       cleanUrl: ""
	},
	methods: {
		cleanerUrl: function () {
			// https:// echape caractere avec \
			this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
		}
	}
})

// Redefine data : app.message = "Web developer"
