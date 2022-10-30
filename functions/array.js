const daysOfWeek=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);
console.log(daysOfWeek[1]);
console.log(daysOfWeek[2]);
console.log(daysOfWeek[3]);


const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];

console.log(primeNumbers.lenght);
console.log(primeNumbers.join(" | "));



const courses = [
    { teacher: "Will Sentance", course: "JavaScript: The Hard Parts" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React" },
    { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
    { teacher: "Scott Moss", course: "Intro to Node.js" },
  ];
  
  courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });
  
  console.log(courses);
  
  courses[2] = { teacher: "vikas Holt", course: "Complete Intro to Databases" };
  
  console.log(courses);





  const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
  ];

  // method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }

//method 2
  cities.forEach(function (city) {
    console.log(city);
  });