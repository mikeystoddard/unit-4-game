// variables 

var random = 0
var score = 0
var wins = 0
var losses = 0
var crystals = 0


$(document).ready(function () {
    beginGame()
})

// jquery - i had a very difficult time on this and needed additional assistance. Need to further review this. 
// will bring this up in next tutor session - heavily relied on YouTube and past assignments for this, wouldn't be able to replicate it on my own

function beginGame() {
    var randomnumber = Math.floor(Math.random() * 12);
    $("#click1").attr("value", randomnumber);
    console.log(randomnumber);


    var randomnumber = Math.floor(Math.random() * 12);
    $("#click2").attr("value", randomnumber);
    console.log(randomnumber);


    var randomnumber = Math.floor(Math.random() * 12);
    $("#click3").attr("value", randomnumber);
    console.log(randomnumber);


    var randomnumber = Math.floor(Math.random() * 12);
    $("#click4").attr("value", randomnumber);
    console.log(randomnumber);


    random = Math.floor(Math.random() * 119);
    $("#random").text("Match Number:" + random);
    console.log(randomnumber, random);
}

//making the button clicks work. I also struggled with this part and had to model it off of previous assignments
//we did in class. Need further review on this as well
$("button").on("click", function (event) {
    event.preventDefault();
    var gemValue = $(this).attr("value");
    score += parseInt(gemValue);
    console.log(score);
    $("#score").text("Your Total Score: " + score);
    if (score === random) {
        wins++;
        alert("You Won!");
        $("#wins").text("Wins" + wins);
        $("#score").text("Your Total Score: " + score);
        reset();
    }
    else if (score > random) {
        losses++;
        alert("You lost! Keep trying!")
        $("#losses").text("Losses" + losses);
        reset();
    }
})

// game reset - I understood this part just fine!
function reset() {
    alert("Would you like to play another game!?");
    score = 0;
    $("#score").text("Your Total Score: " + score);
    beginGame();
}

//end of script