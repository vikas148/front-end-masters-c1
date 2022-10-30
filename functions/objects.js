const person = {

    name: "brian holt",
    city: "Seattle",
    state: "WA",

    favfood: "pizza",
    wantssex: true,
    nooftimeshots:100,
};
console.log(person);
console.log(person.name);
console.log(person["name"]);


const person1={
    name: "ravi",
    age: "25-35",
};

const person2={
    name: "yash",
    age: "65-75",
};


function suggestMusic(person) {
    if (person.age==="25-35") {
        console.log("i think you like rinkiya ke papa");
    }

    else if(person.age==="65-75"){
       console.log("you should do kirtan broo");
    }

    else{
        console.log("you should try after few years later");
    }
}

suggestMusic(person1);
suggestMusic(person2)

//Objects can even have their functions! Let's see that.

const dog={
    name: "dog",
    speak(){
        console.log("woo woo");
    },
};
dog.speak();

//

const me = {

    name:{
        first: "Brian",
        last: "holt",

    },
    location: {
        city: " siattle ",
        state: "sanganer",
        country: "India",
    },
};

console.log(me.name.first);
console.log(me.location.state);