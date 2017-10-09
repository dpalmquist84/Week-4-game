$( document ).ready(function() {
    console.log( "ready!" );
});

var wins = 0;
var losses = 0;
var total = 0;



//generate a number between 18 -120
function getRandomInt(min, max) {
  rand = Math.floor(Math.random() * (120 - 18 + 1)) + 18;
  console.log(rand);
  $(".guess").html(`your score to quess is: ${rand}`);
  return rand;
  $(".score").html("Your score is: " + total);
}
getRandomInt();
game();


function game(){
if (rand === total){ 
  wins++;
  alert('You got it right.  You must be very smart :)')
  $('.wins').html("wins " + wins);
  $('.score').empty();
  getRandomInt();
  total = 0;
 
} else if (rand < total){
    alert('No more game for YOU');
	losses++;
	$(".losses").html("losses " + losses);
	$('.score').empty();
	getRandomInt();
	total = 0;

}
}



$(".crystal1").on("click",function(){
	total += 10;
	console.log(total);
	$('.score').html("Your total score is: " + total);
	game();
});

$(".crystal2").on("click",function(){
	total += 5;
	console.log(total);
	$('.score').html("Your total score is: " + total);
	game();
});

$(".crystal3").on("click",function(){
	total += 3;
	console.log(total);
	$('.score').html("Your total score is: " + total);
	game();
});

$(".crystal4").on("click",function(){
	total += 1;
	console.log(total);
	$('.score').html("Your total score is: " + total);
	game();
});



//reset the game

	$('#clear').on("click", function(){
		$(".guess").empty();
		$(".score").empty();
        total = 0;
        $('.score').html("Your total score is: " + total);
		getRandomInt();
        game();
	
});







