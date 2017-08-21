$(function(){
	watch.initVue();
})

var watch = {
	initVue: function(){
		var watchExample = new Vue({
			el: '#watch-app',
			data: {
				question: '',
				answer: 'I can not give you an answer until you ask a question!'
			},
			watch: {
				//if the model question is changed, the function will run...
				question: function(){
					this.answer = 'Waiting for you to stop typing...';
					this.getAnswer();
				}
			},
			methods: {
				getAnswer: _.debounce(
			      function () {
			        var vm = this
			        if (this.question.indexOf('?') === -1) {
			          vm.answer = 'Questions usually contain a question mark. ;-)'
			          return
			        }
			        vm.answer = 'Thinking...'
			        axios.get('https://yesno.wtf/api')
			          .then(function (response) {
			            vm.answer = _.capitalize(response.data.answer)
			          })
			          .catch(function (error) {
			            vm.answer = 'Error! Could not reach the API. ' + error
			          })
			      },
			      // 这是我们为用户停止输入等待的毫秒数
			      500
			    )
			}
		})
	}
	
}
