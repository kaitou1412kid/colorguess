var numSquares = 2;
var pickedcolor;
var colors = [];

var squares = $(".squares");
var displayText = $(".guess");
init();

function init() {
    setupSquares();
    $(".guess").text(pickedcolor);
}
function setupSquares() {
    colors = genRandomColor(numSquares);
    pickedcolor = chooseColor();
    
    for(var i = 0; i< squares.length; i++) {
        if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        squares[i].addEventListener("click", function (){
            var clickedColor = this.style.backgroundColor;
            
            if(clickedColor == pickedcolor) {
                $(".conclusion").text("Correct");
                changeColor(pickedcolor);

            }
            else {
                this.style.backgroundColor= "#232323";
                //$(".conclusion").text("Try again"); 
                //gameOver(); 
            }
        });
    }
}

// function playAgain() {
//     alert("You win!! Play again?");
//     setupSquares();
// }

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function genRandomColor(num) {
    var arr= [];
    for(var i =0;i<num;i++){
        arr.push(makeColor());
    }
    return arr;
    
}

function makeColor () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}


