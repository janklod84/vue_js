var app = new Vue({
	el: '#app', // element
	data: {
      title: "Style",
      isRounded: false,
      sizeToggle: false,
      disabled: false,
      fontColor: '#ccc',
      backgroundColor: 'yellow'
	},
	computed: {
		styles: function () {
			return {
				color: this.fontColor,
			    background: this.backgroundColor
			}
		}
	}
})

// Redefine data : app.message = "Web developer"
