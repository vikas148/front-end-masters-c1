// function x() {
//     var i=1;
//     setTimeout (function () {
//         console.log(i);
//     },3000)
// }

// x();


// function x() {
//     for(let i=1; i<=5; i++){      //now use let insted of var
//         setTimeout(function () {
//             console.log(i);
//         },i*1000);
//     }

//     console.log("good morning");
// }

// x();


function x() {
    for(var i=1; i<=5; i++){      //now use let insted of var
        function close(i){
            setTimeout(function () {
                console.log(i);
            },i*1000);
        }
        close(i);
    }

    console.log("good morning");
}

x();
