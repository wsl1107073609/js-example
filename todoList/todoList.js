$(function(){
	todoList.initVue();
})

var todoList = {
	initVue: function(){
		var vue = new Vue({
			el: '#todo-app',
			data: {
				newTodoText: '',
				todos: [
					'Do the dishes',
					'Take out the trash',
					'Mow the lawn'
				]
			},
			methods: {
				AddNewTodo: function(){
					alert(this.newTodoText);
					this.todos.push(this.newTodoText);
					this.newTodoText = '';
				}
			}
		})
	}
}