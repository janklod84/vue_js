Vue.component('book', {
	template: '#books',
	props: ['title', 'author', 'content']
});


new Vue({
	el : '#app',
	data: {
		author: 'David Flanagon',
		title: 'Javascript The Defenetive Guide',
		content: 'Lorem ipsum dolor sit amet, consecteur adipisicing elit. Inventore, mollitia.'
	}
})