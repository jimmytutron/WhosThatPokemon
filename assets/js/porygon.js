// I heard you wanna be a Pokemon Master???
// When the page loads, intialize the game with a start button. When the user presses the start button the game will begin.

// one question or slide will be displayed and there will be a counter that's decrementing the time remaining to answer.

// the user has a certain amount of time to select an answer. They can only pick once and cannot change their answer.

// When the player clicks an answer it will tell the player whether or not they were correct and then display the correct answer. 
// The correct answer will be displayed for a short time before automatically moving to the next question

// if the player does not make a selection and the timer ticks down to 0, 
// then the correct answer will display and will automatically move to the next question.

// When all the questions have been answered, display the user's correct answers, wrong answers, and skipped answer. 
// A reset button will allow the user to play again without resetting the game.

//define global variables

var currentPokemon = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var answered;
var tickTock;
var time;
var userChoice;

var whoDat = [{
		pokemon: "assets/imgs/pokemon1.png",
		pokemonAnswer: "assets/imgs/pokemon1answer.png",
		answers: ["Raichu","Pikachu","Pichu","Pachirishu"],
		correct: 1
	},{
		pokemon: "assets/imgs/pokemon2.png",
		pokemonAnswer: "assets/imgs/pokemon2answer.png",
		answers: ["Chansey","Jigglypuff","Audino","Clefairy"],
		correct: 3
	},{
		pokemon: "assets/imgs/pokemon3.png",
		pokemonAnswer: "assets/imgs/pokemon3answer.png",
		answers: ["Vaporeon","Flareon","Jolteon","Espeon"],
		correct: 0
	},{
		pokemon: "assets/imgs/pokemon4.png",
		pokemonAnswer: "assets/imgs/pokemon4answer.png",
		answers: ["Dodrio","Dugtrio","Oricorio","Lucario"],
		correct: 1
	},{
		pokemon: "assets/imgs/pokemon5.png",
		pokemonAnswer: "assets/imgs/pokemon5answer.png",
		answers: ["Exeggcute","Cleffa","Togepi","Marill"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon6.png",
		pokemonAnswer: "assets/imgs/pokemon6answer.png",
		answers: ["Dragonite","Salamence","Tyranitar","Garchomp"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon7.png",
		pokemonAnswer: "assets/imgs/pokemon7answer.png",
		answers: ["Blaziken","Latias","Latios","Noivern"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon8.png",
		pokemonAnswer: "assets/imgs/pokemon8answer.png",
		answers: ["Butterfree","Venemoth","Dustox","Beautifly"],
		correct: 3
	},{
		pokemon: "assets/imgs/pokemon9.png",
		pokemonAnswer: "assets/imgs/pokemon9answer.png",
		answers: ["Klink","Klang","Klefki","Klinklang"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon10.png",
		pokemonAnswer: "assets/imgs/pokemon10answer.png",
		answers: ["Greninja","Pangoro","Zoroark","Bisharp"],
		correct: 0
	},{
		pokemon: "assets/imgs/pokemon11.png",
		pokemonAnswer: "assets/imgs/pokemon11answer.png",
		answers: ["Raichu","Pikachu","Mimikyu","Pachirishu"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon12.png",
		pokemonAnswer: "assets/imgs/pokemon12answer.png",
		answers: ["Voltorb","Electrode","Solosis","Jigglypuff as seen from above"],
		correct: 2
	}
	];

var restart = $("#restart");
var rightAnswerText = $("#right");
var wrongAnswerText = $("#wrong");
var unansweredText = $("#unanswered");

 $("#start").on("click", function(){
 	$(this).hide();
 	intialize();
 });

  $("#restart").on("click", function(){
 	$(this).hide();
 	intialize();
 });

function intialize(){
  	$("#right").empty();
	$("#wrong").empty();
	$("#unanswered").empty();
	currentPokemon = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 0;
	newPokemon();
};
function newPokemon(){
	answered = true;

	$("#correctPokemon").empty();

 		$("#pokemon").html("<img class='pkmnImg img-fluid' src=" + whoDat[currentPokemon].pokemon + ">");
 		for (var i=0; i < 4; i++){
 			var choices = $('<div>');
 			choices.html("<h2 class='hvr-sweep-to-top'>" + whoDat[currentPokemon].answers[i] + "</h2>");
 			choices.attr("data-index", i);
 			choices.addClass("thisPokemon");
 			$("#answers").append(choices);
 		}
 	countdown();

 	$(".thisPokemon").on("click", function(){
 		userChoice = $(this).data("index");
 		clearInterval(time);
 		displayPokemon();
 	});
};
function countdown(){
 		tickTock = 1000;
 		$("#timer").text(tickTock);
 		answered = true;
 		time = setInterval(displayCountdown, 1000);
};
function displayCountdown(){
 		tickTock--;
 		$("#timer").text(tickTock);
 		if (tickTock < 1){
 			clearInterval(time);
 			answered = false;
 			displayPokemon();
 		}
};

function displayPokemon(){
 		$("#pokemon").empty();
 		$(".thisPokemon").empty();

 		var correctIndex = whoDat[currentPokemon].correct
 		var correctAnswerText = whoDat[currentPokemon].answers[correctIndex];

 		if(userChoice === correctIndex && answered === true){
 			correctAnswers++;
 			$("#correctPokemon").html("It's " + correctAnswerText);
 			$("#pokemon").html("<img class='pkmnImg img-fluid' src=" + whoDat[currentPokemon].pokemonAnswer + ">");
 		} else if (userChoice != correctIndex && answered === true){
 			incorrectAnswers++;
 			$("#correctPokemon").html("It's " + correctAnswerText);
 			$("#pokemon").html("<img class='pkmnImg img-fluid' src=" + whoDat[currentPokemon].pokemonAnswer + ">");
 		} else {
 			unanswered++;
 			$("#correctPokemon").html("It's " + correctAnswerText);
 			$("#pokemon").html("<img class='pkmnImg img-fluid' src=" + whoDat[currentPokemon].pokemonAnswer + ">");
 			answered = true;
 		}
 		if (currentPokemon === whoDat.length -1){
 			setTimeout(results, 10000)
 		}else{
 			currentPokemon++;
 			setTimeout(newPokemon, 10000);
 		}
};
function results(){
	$("#timer").empty();
	$("#correctPokemon").empty();
	$("#pokemon").empty();

	$("#right").html("Correct Answers: " + correctAnswers);
	$("#wrong").html("Incorrect Answers: " + incorrectAnswers);
	$("#unanswered").html("Unanswered: " + unanswered);
	restart.addClass("restart");
	restart.show();
	restart.html("Play Again?");
};








