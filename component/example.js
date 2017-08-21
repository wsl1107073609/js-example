$(function(){
	example.initVue();
});

var example = {
	initVue: function(){
		var vue = new Vue({
			el: '#app',
			data: {
				groceryList: [
					{ text: '蔬菜'},
					{ text: '水果'},
					{ text: '奶酪'}
				]
			},
			methods: {

			}
		});
	}
}