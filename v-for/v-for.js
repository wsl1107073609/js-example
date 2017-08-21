$(function(){
	vFor.initVue();
	vFor.initVueOther();

})

var vFor = {
	initVue: function(){
		var example1 = new Vue({
			el: '#example1',
			data: {
				items: [
					{message: 'Boo'},
					{message: 'Foo'}

				]
			}
		})
	},
	initVueOther: function(){
		var example2 = new Vue({
			el: '#example2',
			data: {
				parentMessage: 'Parent',
				items: [
					{message: 'Boo'},
					{message: 'Foo'}

				]
			}
		});

		var repeatObject = new Vue({
			el: '#repeat-object',
			data: {
				object: {
					FirstName: 'Cherry',
					LastName: 'PiPi',
					FamilyName: 'Wu'

				}
			}
		});

		var repeatObject1 = new Vue({
			el: '#repeat-object1',
			data: {
				object: {
					One: 'strawberry',
					Two: 'apple',
					Three: 'orange'

				}
			}
		});

		var repeatObject2 = new Vue({
			el: '#repeat-object2',
			data: {
				object: {
					One: 'strawberry',
					Two: 'apple',
					Three: 'orange'

				}
			}
		})

		

	}
}


