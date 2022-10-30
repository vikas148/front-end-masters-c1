let string='hi my name is Brian';
string=string.substring(3,13);
console.log(string);


const number=5.3;
const roundNumber=Math.round(number);
const seil=Math.ceil(number)
console.log(roundNumber);
console.log(seil);

const  randomnumber=Math.random();
console.log(randomnumber);


// want to see if a string contains another string?
const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo =
      "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringToLookFor = "cute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));


// want to know how many milliseconds have elapsed since Jan 1 1970?
console.log(Date.now());