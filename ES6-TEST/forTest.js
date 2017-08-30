/***
var的作用域：
变量i是var声明的，在全局范围内都有效，所以全局只有一个变量i
而循环内被赋给数组a的function在运行时，会通过闭包读到这同一个变量i，导致最后输出的是最后一轮的i的值，也就是10。
**/
var a = [];
for(var i = 0; i < 10; i++){
	a[i] = function(){
		document.write(i+"<br>");
		console.log(i);
	}
}
a[6]();

/**
let 的作用域：只在let命令所在的代码块内有效

**/
var b = [];
for(let i = 0; i < 10; i++){
	b[i] = function(){
		document.write(i+"<br>");
		console.log(i);
	}
}
b[6]();


/**
暂时性死区
**/
// function bar(x=y, y=2){
// 	return [x, y];
// }

// bar();

function bar(x=2, y=x){
	return [x, y];
}

var array = bar();
document.write(array+"<br>");

/**
ES6的块级作用域
*/
function testLet(){
	let n = 5;
	if(true){
		let n = 10;
	}
	document.write(n+"<br>");
}
testLet();

function testVar(){
	var n = 5;
	if(true){
		var n = 10;
	}
	document.write(n+'<br>');
}
testVar();



/**
变量的解构赋值
**/
function* fibs(){
	let a = 0;
	let b = 1;

	while(true){
		yield a;
		[a, b] = [b, a + b];
	}
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first);

/**
默认值
**/
function f(){
	console.log("aaa");
}

let [x = f()] = [1];
console.log(x); //1

let y;
if ([1][0] === undefined) {
	y = f();
}else{
	y = [1][0];
}
console.log(y);


/**
数值和布尔值的解构赋值
***/
let {toString: s} = 123;
s === Number.prototype.toString
console.log(s);

var text = String.fromCodePoint(0x20BB7);
console.log(text);
for(let i=0;i<text.length;i++){
	console.log(text[i]);
}

for(let i of text){
	console.log(i);
}



/**
ES5:
***/
var arrayA = [1, 2, 3];
var arrayB = arrayA.map(function(item){
	return item * 2;
});
document.write(arrayB + '<br>');

/**
ES6
***/
var arrayC = [1, 2, 3];
var arrayD = arrayC.map(item => item * 2);
document.write(arrayD);

/**
do表达式
**/
// let returnT = do {
// 	let t = f() {
// 		t * t + 1;
// 	}
// };
// document.write(returnT);