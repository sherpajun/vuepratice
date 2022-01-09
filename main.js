
//var, const , let


for (var i = 0; i < 5; i++) {
    var name ="John";
    var engName = "codeJohn";
}

console.log(name,engName);
// var ES6 이후 없어지기 시작됫다.
// 글로벌 하게 불러지기 때문에 사용하지 않는다.


// let 어떤 변수가 값이 자주 변경 되어야 하는 경우 쓰인다.

let score = 0;

score = score + 10;

console.log(score);

// const 상수는 값이 변경되지 않는다.

const ch = "middle";

ch = "high";

console.log(ch);

//var, let, const 의 차이점 const와 let은 블럭 밖에서 선언 하면
// 블럭 안에서 불러 사용 할 수 있다.
// 그러나 var는 블럭 안에서 선언 하면 블럭 밖에서도 사용 할 수 있다.


//String Number boolean null undefined

//object

const monkey = {
    name: "원숭이",
    age: 10,
    weight : "10kg",
    gender :  "male",
    food : ["banana","carrot","potato"],
    home : {
        location:'north korea',
        size:"big",
        value : 3000
    }
}

//fuction
const item1 = 3000;
const item2 = 2000;
const item3 = 1000;

const loyalty = 1000;

function showprice(price){
    //console.log(price+loyalty);
    return price+loyalty;
}
const showPrice = function(price){
    return price+loyalty;
}

console.log(showPrice(item1));

showprice(item1);
showprice(item2);
showprice(item3);

//화살표 함수
const showPRice =(price) => {
    return price+loyalty;
}

