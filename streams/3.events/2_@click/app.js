var app = new Vue({
	el: '#app', // element
	data: {
       count: 0
	},
	methods: {
		countUp: function () {
			this.count += 1;
		},
		countDown: function () {
			this.count -= 1;
		}
	}
})

// Redefine data : app.message = "Web developer"
