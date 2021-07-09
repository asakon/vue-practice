let app = new Vue ({
	el: '#app',
	data: {
		message: 'みなさん、こんにちは',
		url: 'https://wings.msn.to',
		flag: true,
		email: 'Y-Suzuki@example.com',
		current: new Date().toLocaleString()
	},
	computed: {
		randomc: function() {
			return Math.random();
		}
	},
	methods: {
		localEmail: function() {
			return this.email.split('@')[0].toLowerCase();
		},
		onclick: function() {
			this.current = new Date().toLocaleString();
		},
		randomm: function() {
			return Math.random();
		}
	}
});