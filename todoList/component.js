/**
create by cherry on 2017/5/3
**/
Vue.component('todo-item', {
	template: '\
		<li>\
			{{ title }} \
			<button @click="$emit(\'remove\')">X</button>\
		</li>\
		',
	props: ['title']
});