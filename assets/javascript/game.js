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
  $(".guess").html(rand);
  return rand;
}
getRandomInt();
game();


function game(){
if (rand === total){ 
  wins++;
  alert('You got it right.  You must be very smart :)')
  $('.wins').html("wins " + wins);
  getRandomInt();
 
} else if (rand < total){
    alert('No more game for YOU');
	losses++;
	$(".losses").html("losses " + losses);
	getRandomInt();

}
}



$(".crystal1").on("click",function(){
	total += 10;
	console.log(total);
	$('.score').html("Your score is: " + total);
	game();
});

$(".crystal2").on("click",function(){
	total += 5;
	console.log(total);
	$('.score').html("Your score is: " + total);
});

$(".crystal3").on("click",function(){
	total += 3;
	console.log(total);
	$('.score').html("Your score is: " + total);
});

$(".crystal4").on("click",function(){
	total += 1;
	console.log(total);
	$('.score').html("Your score is: " + total);
});

$(".score").html("Your score is: " + total);

//reset the game

	$('#clear').on("click", function(){
		$(".guess").empty();
		$(".score").empty();
		getRandomInt();
		game();
	
});







