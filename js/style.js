// $(document).ready(function(){
//     $(".hamburger").click(function(){
//       $(this).toggleClass("is-active");
//     });
//   });


let myTextOne = 'WE ARE THE WOMEN OF ROOTHUB XTRAORDINARY';
let myArray = myTextOne.split("");
let myTextTwo = 'WE ARE SOCIAL, SMART AND STYLISH';
let myArrayTwo = myTextTwo.split("");
let loopTimerOne;
let loopTimerTwo;
function frameLooperOne() {
    if (myArray.length > 0) {
        document.getElementById("type_text_one").innerHTML += myArray.shift();
    }
    else {
        clearTimeout(loopTimerOne);
        return false;
    }
    loopTimer = setTimeout('frameLooperOne()', 100);
}
frameLooperOne();
function frameLooperTwo() {
    if (myArrayTwo.length > 0) {
        document.getElementById("type_text_two").innerHTML += myArrayTwo.shift();
    }
    else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('frameLooperTwo()', 250);
}
frameLooperTwo();
