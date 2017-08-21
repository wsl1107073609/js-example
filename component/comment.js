Vue.component('todo-item',{
	props: ['todo'],  //将数据从父作用域传到子组件
	template: '<li>{{ todo.text }}</li>'
});