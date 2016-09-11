/*
* @File_name test.js
* @Author: Caijw
* @Date:   2016-08-23 00:56:06
* @Last Modified by:   Caijw
* @email 573301753@qq.com
* @Last Modified time: 2016-09-08 23:42:43
*/
/*var name = "nicholas";
name.age = 27;
console.log(name.age);


var person = new Object();
person.name  = "cjw";
console.log(person.name);
console.log(person.name);
*/

// var colors = ['red', 'blue', 'green'];
//     // console.log(colors.join(','));
//     // console.log(colors.join('||'));
// var count = colors.push('black');

// console.log(count);
// console.log(colors);
// var item = colors.pop();
// console.log(item);
// console.log(colors);
// 
// var values = [1,12,3,14,5];
// values.reverse();
// console.log(values);//[ 5, 4, 3, 2, 1 ]
//                     //
//                     //
// values.sort();
// console.log(values);//[ 1, 12, 14, 3, 5 ]
                    //
                    //
//  function compare(value1,value2){
//  	if(value1<value2){
//  		return 1;
//  	}else if (value1>value2) {
//  		return -1;
//  	}else{
//  		return 0;
//  	}
//  }
// var values = [1,12,3,14,5];
// values.sort(compare);
// console.log(values);//[ 14, 12, 5, 3, 1 ]
// var colors = ["red","green","blue","black","pink"];

// var removed = colors.splice(0,1);
// console.log(colors);
// console.log(removed);
// // [ 'green', 'blue', 'black', 'pink' ]
// // [ 'red' ]

// removed = colors.splice(1,0,"yellow","orange");
// console.log(colors);
// console.log(removed);
// // [ 'green', 'yellow', 'orange', 'blue', 'black', 'pink' ]
// // []

// removed = colors.splice(1,1,"purple");
// console.log(colors);
// console.log(removed);
// 
// [ 'green', 'purple', 'orange', 'blue', 'black', 'pink' ]
// [ 'yellow' ]


// var colors2 = colors.slice(1);
// var colors3 = colors.slice(1,4);

// console.log(colors2);
// console.log(colors3);
// [ 'green', 'blue', 'black', 'pink' ]
// [ 'green', 'blue', 'black' ]


// var colors2 = colors.concat("yellow",["black","pink"]);

// console.log(colors);
// console.log(colors2);

//[ 'red', 'green', 'blue' ]
//[ 'red', 'green', 'blue', 'yellow', 'black', 'pink' ]
//
//


var test = {
	a : function(one, two){
		console.log('ccc');
		console.log(one+two);
		console.log(this);
	}
}

var test2 = {
	ccc : function(){
		console.log('ddd');
	}
}

test.a.apply(test2, ['1','2']);




