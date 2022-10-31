let buffer = "0";
const screen = document.querySelector(".screen");
let runningTotal = 0;
let previousOperator;
function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymboll(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  // console.log('number');
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }

  // console.log(buffer);
}

function handleMath(value) {
  if (buffer === "0") {
    //do nothing
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = value;
  buffer = "0";
  console.log(runningTotal);
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function handleSymboll(value) {
  //   console.log('symboll');
  //  if (symboll === 'C') {

  //  }

  switch (value ) {
    case "C":
      buffer = "0";
      runningTotal=0;
      break;
    case "=":
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      buffer =+ runningTotal;
      runningTotal=0;

      // console.log('equals');
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      // console.log('backarrow');
      break;
    case "+":
    case "-":
    case "÷":
    case "×":
      handleMath(value);
      //console.log("math symbolls");
      break;

  }
}


function rerender() {
    screen.innerText = buffer;
  }

function init() {
  // console.log("hi");
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

// function init() {
//     document
//       .querySelector(".calc-buttons")
//       .addEventListener("click", function (event) {
//         buttonClick(event.target.innerText);
//       });
//   }



init();
