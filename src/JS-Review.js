// React-related JavaScript Refresher section

//Arrow functions


const getRectangleArea = (width, height) => width * height;

const sayHello = () => console.log('Hello, World!')


console.log(getRectangleArea(5,10)); 

sayHello();


const numbers5 = [1, 2, 3, 4, 5];

const double = numbers5.map(function (number){
    return number * 2;
});

console.log(double);

const double2 = numbers5.map((number)=> number * 2);

console.log(double2);

const person ={
    name: 'Brad',
    sayHelloRegular: function(){
        console.log(this);
    },
    sayHelloArrow: ()=> console.log(this),

};

person.sayHelloArrow();

//************************************************ */


const name = 'John';

const age = 30;


const greeting = 'Hello, my name is ' + name + ' and I am '+ age + ' years old';

const greeting2 = `Hello, my name is ${name} and I am ${age} years old`;

console.log(greeting);
console.log(greeting2);



//********************************************** */

const formatDate = (timestamp) =>{
    const date = new Date(timestamp);

    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString();

};

const note = {
    title: 'Discuss project',
    timestamp: Date.now(),
};

console.log(`Last Eddited: ${formatDate(note.timestamp)}`);

//*************************************************** */
const number = 2;

const message = number % 2 === 0 ? 'Even Number' : 'Odd Number';

console.log(message);

//************************************************* */

const note2 = {
    title: 'Meeting notes',
    content: 'Discuss project roadmap',
    timestamp: Date.now(),
    isPinned: false,
};

const noteText = `
    Title: ${note2.title}
    Status: ${note2.isPinned ? '📌 Pinned Note': '📝 Regular Note'}
    Last Edited: ${new Date(note2.timestamp).toLocaleString()}
`;

console.log(noteText);

//************************************************** */

console.log(false &&'Hello');

console.log(null &&'Hello');

console.log(true &&'Hello');


const isLoggedIn = true;

function showWelcome() {
//    return isLoggedIn &&'Welcome, User!';       //also correct
    return isLoggedIn ? 'Welcome, User' : '';
}

console.log(showWelcome())

//************************************************* */

const notes = [
    {title: 'Meeting Notes', content: 'Discuss project roadmap', isPinned: true,},
    {title: 'Grocery List', content: 'Buy Milk', isPinned: false,},
    {title: 'Workout Plan', content: 'Push day', isPinned: true,},
    {title: 'Recipe Idea', content: 'Pasta, Salad', isPinned: false,},
];

const [firstNote, ...otherNotes] = notes;

console.log(firstNote);
console.log(otherNotes);

//************************************************ */

const note3 = {
    title: 'Meeting Notes',
    content: 'Discuss project roadmap',
    isPinned: true,
};

const {title: noteTitle, isPinned} = note3;

console.log(noteTitle); 
console.log(isPinned);

//********************************************** */

const user = {
    name1: 'Ben',
    adress: {city: 'Boston', state: 'MA'},
    hobbies: ['Movies','Workout', 'Music'],
};

const {
    name1,
    adress: {city, state},
    hobbies: [firstHobby, ...otheHobbies],
} = user;

console.log(name1);
console.log(city,state);
console.log(firstHobby);
console.log(user.adress.city);
console.log(otheHobbies);


//************************************************** */
//Higher-Order Functions (HOFs)


const noteTitles = notes.map((note, index)=> `${index+1}. ${note.title}`);

console.log(noteTitles);

//************************************************** */

const pinnedNotes = notes
    .filter((note)=> note.isPinned)
    .map((note)=>note.title);

console.log(pinnedNotes);


//***************************************************** */

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((total , number)=> total+number,0);
console.log(sum);

const totalCharacters = notes.reduce((total, note)=> total+note.content.length, 0);
console.log(totalCharacters);


//****************************************************** */

notes.forEach((note)=> console.log(note.title));


//********************************************** */

//Optional Chaining & Nullish Coalescing Operator

const user2 = {
    name: 'Brad',
};

//console.log(user2.address.city); error 
console.log(user2.address?.city);

// handle null, undefined, false, 0, ''

let value = 0;
let result = value ?? 'Default Value';
let result2 = value || 'Default Value';

console.log(result);
console.log(result2);

console.log(user2.address?.city ?? 'Unknown');

//**************************************** */

//Immutability & Spread Operator

const notes3 = ['Meeting notes', 'Grocery list'];
notes3.push('Workout Plan');
console.log(notes3);
//Rerender wont work correctly in React




const notes4 = ['Meeting notes', 'Grocery list'];
const newNotes = [...notes4, 'Workout Plan'];
console.log(newNotes);

const changeNotes = notes4.map((note)=> note==='Grocery list'?'Shopping list':note);

console.log(notes4);
console.log(changeNotes);

//Objects

const user3= {
    name:'Brad',
    age:30,
};

const newUser={
    ...user3,
    age:31,
};

console.log(user3);
console.log(newUser);

//******************************************* */

// Promises & Async Await

const myPromiss = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved');
    }, 2000);
});

myPromiss.then((data)=>{
    console.log(data);
});

//reject

const myPromiss2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Promise Rejected');
    }, 2000);
});

myPromiss2.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});



fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=> response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));


const fetchData = async() =>{

    try{
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await responce.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
};
fetchData();