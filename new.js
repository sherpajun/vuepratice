const animals = [
    {name: 'lion',size: 'big'},
    {name: 'monkey',size: 'midum'},
    {name: 'dog',size: 'small'},
]

console.log(animals);

const num = 10;


//==: 데이터 타입 비교 안함
//===: 데이터 타입 까지 비교함
if(num === 10){
    console.log('10');
}else{
    console.log('not 10');
}

switch(num){

}

for(let i=0;i<3;i++){
    console.log(animals[i].name);

}


//삼항 연산자
(조건)? 성립할때: 성립안할때;
num >10 ? console.log('10보다 크다') : console.log('10보다 작다');
// forEach, map, filter, reduce

