new Vue({
	el: '#app',
	data: {
		output: 'Your favority food'
	},
	methods: {
		readRefs: function () {
			this.output = this.$refs.input.value;
            console.log(this.$refs.test.innerText);
		}
	},
	computed: {}
});
