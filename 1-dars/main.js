const app = Vue.createApp({
	data(){
		return {
			count: 0
		}
	},

	methods:{
		ChangeAge(){
			this.count = this.count + 1;
		}
	}
});

app.mount('#app');
