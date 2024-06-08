var data = {
	name: 'Jéssica'
};

Vue.component('greeting', {
	template: '<p>Hiii, component here, {{ name }}! <button v-on:click="changeName">ChangeName</button></p>',
	data: function () {
		return data;
	},
	methods: {
		changeName: function () {
			this.name = 'Maria';
		}
	}
});

new Vue({
	el: '#app-one',
	data: {
		name: 'Jéssica'
	},
	methods: {},
	computed: {}
});

new Vue({
	el: '#app-two',
	data: {
		title: 'Vue App Two'
	},
	methods: {},
	computed: {}
});
