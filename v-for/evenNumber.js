$(function(){
	evenNumbers.initVue();
	evenNumbers.initVueOther();
})

var evenNumbers = {
	initVue: function(){
		var evenNumbers = new Vue({
			el: '#evenNumbers',
			data: {
				numbers: [1,2,3,4,5,6,7,8,9,10]
			},
			methods: {
				even: function(numbers){
					return this.numbers.filter(function(num){
						if (num % 2 == 0) {
							return num;
						}
					});
				}
			}
		})
	},

	initVueOther: function(){
		var evenNumbersOther = new Vue({
			el: '#evenNumbersOther',
			data: {
				numbers: [1,2,3,4,5,6,7,8,9,10]
			},
			computed: {
				evenNumbers: function(){
					return this.numbers.filter(function(num){
						if (num %　2 == 0) {
							return num;
						}
					});

				}
			}
		})
	}
}