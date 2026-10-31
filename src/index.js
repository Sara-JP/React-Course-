const getRectangleArea = (width, height) => width * height;

const sayHello = () => console.log('Hello, World!')


console.log(getRectangleArea(5,10)); 

sayHello();


const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(function (number){
    return number * 2;
});

console.log(double);

const double2 = numbers.map((number)=> number * 2);

console.log(double2);

const person ={
    name: 'Brad',
    sayHelloRegular: function(){
        console.log(this);
    },
    sayHelloArrow: ()=> console.log(this),

};

person.sayHelloArrow();