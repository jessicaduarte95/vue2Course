var one = new Vue({
	el: '#app-one',
	data: {
		title: 'Vue App One'
	},
	methods: {},
	computed: {
		greet: function () {
			return 'Hello from app one :)';
		}
	}
});

var two = new Vue({
	el: '#app-two',
	data: {
		title: 'Vue App Two'
	},
	methods: {
		changeTitle: function () {
			one.title = 'Title one change!';
		}
	},
	computed: {
		greet: function () {
			return 'Hiiiii, app two :)';
		}
	}
});

// two.title = "Change from outside"
