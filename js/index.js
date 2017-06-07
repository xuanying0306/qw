/*
* @Author: Administrator
* @Date:   2017-04-21 09:55:25
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-21 10:17:40
*/

// alert('hello');
var obj = document.getElementsByTagName('p');
// console.log(obj);//0:p,length:1;__proto__:html

	
window.onload = function(){
	obj[0].onclick = function(){
		obj[0].style.color = 'red';
	}

}