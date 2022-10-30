function greet(firstName, lastName,honorific,greeting) {
    return `${greeting} ${honorific} ${lastName} ! I,m extremly pleased you could join us, ${firstName}! I hope you enjoyed your stay, ${honorific} ${lastName}`;

}

console.log(greet("Brian","Holt","Lord","Saluations"));
console.log(greet("Jack","Sparrow","Captain","A-hoy"));