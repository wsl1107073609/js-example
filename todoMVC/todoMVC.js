$(function(){

	//record the visibile todos
	// var filters = {
	// 	all: function(todos){
	// 		return todos;
	// 	},
	// 	active: function(todos){
	// 		return todos.filter(function(todo){
	// 			return !todo.done;
	// 		})
	// 	},
	// 	completed: function(todos){
	// 		return todos.filter(function(todo){
	// 			return todo.done;
	// 		})
	// 	}
	// }

	//add vue instance
	var vue = new Vue({
		el: '.todoapp',
		data: {
			newTodo: '',
			todos: [],
			visibility: 'all',
			remaining: 0
		},
		methods: {
			addTodo: function(){
				var value = this.newTodo &&　this.newTodo.trim();
				if(!value){
					return
				}
				this.todos.push({text: value, done: false});
				this.newTodo = '';
				this.remaining = this.todos.length;
			},
			removeTodo: function(todo){
				this.todos.splice(this.todos.indexOf(todo), 1);
				this.remaining = this.todos.length;
			},
			removeCompleted: function(){
				this.todos = this.todos.filter(function(todo){
					return !todo.done;
				})
				this.remaining = this.todos.length;
			},
			activeTodos: function(){
				this.todos.forEach(function(todo){
					todo.done = false;
				})
				this.remaining = this.todos.length;
			},
			completeTodos: function(){
				this.todos.forEach(function(todo){
					todo.done = true;
				})
				this.remaining = 0;
			},
			checkTodo: function(todo){
				this.remaining = todo.done ? this.remaining - 1 : this.remaining + 1;
			}

		},
		filters: {
			pluralize: function(n){
				return n === 1 ? 'item' : 'items';
			}
		}
	})

})

