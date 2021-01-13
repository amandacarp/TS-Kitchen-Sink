//step 4 name variable
var myName: string = "Amanda";

//step 5 states constant
const states: number = 50;

//step 6 adds two numbers together
var sum: number = 5 + 4;

//step 8a hello world function
function sayHello() {
    alert("Hello World!");
}
 
//step 8b Calling function
sayHello(); 

//step 9a check age function
function checkAge(firstName: string, age: number){
    if (age < 21) {
        alert("Sorry " + firstName + ", you aren't old enough to view this page!");
    }
}

//step 9b run through firstNames in checkage function
var charles = {
    firstName: "Charles",
    age: 21
};

var abby = {
    firstName: "Abby",
    age: 27
};

var james = {
    firstName: "James",
    age: 18
};

var john = {
    firstName: "John",
    age: 17
};

checkAge(charles.firstName, charles.age);
checkAge(abby.firstName, abby.age);
checkAge(james.firstName, james.age);
checkAge(john.firstName, john.age);

//step 10a favorite veggie array
var veggies: string[] = ["corn", "eggplant", "broccoli"];

//step 10b loop through veggies
veggies.forEach(veggie => {
    console.log(veggie)
})

//step 11 create pet object
interface iPet {
    name: string,
    breed: string
}
var pet: iPet = {
    name: "Porsche",
    breed: "DSH"
};

console.log(pet.name, pet.breed);

//step 12a create an array of 5 objects
interface iFriends {
    name: string,
    age: number
}
var friends: iFriends[] = [
    {
        name: "Kevin",
        age: 18
    },
    {
        name: "Alex",
        age: 24
    },
    {
        name: "Carolyn",
        age: 32
    },
    {
        name: "Adam",
        age: 20
    },
    {
        name: "Roger",
        age: 25
    }
]

//step 12b loop checkage function for each object
for (var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}

//step 14 getlength function
function getLength(word: string){
    return word.length;
}

var length: number = getLength("Hello World");

if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}