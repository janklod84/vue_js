Vue.component('task', {
	template: '<h1> {{ message }} </h1>',
	props: ['message']
});


new Vue({
	el : '#app',
})