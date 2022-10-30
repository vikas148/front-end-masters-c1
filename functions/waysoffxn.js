function bark() {
    console.log("woof");
}

const  meow= function() {
    console.log("meeeeeow");
};

const chrip=()=> {
    console.log("woof");
};
console.log(meow());

bark();
meow();
chrip();