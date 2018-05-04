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
		gifRight: "https://m.popkey.co/7d5b9a/47oQR.gif",
		gifWrong: "https://www.reactiongifs.us/wp-content/uploads/2014/08/pikachu_crying_pokemon.gif",
		correct: 1
	},{
		pokemon: "assets/imgs/pokemon2.png",
		pokemonAnswer: "assets/imgs/pokemon2answer.png",
		gifRight: "https://pa1.narvii.com/6176/c74939814e4a6c079d2cc964921f1c20a4165338_hq.gif",
		gifWrong: "https://i.pinimg.com/originals/26/79/9c/26799c63d600b3a9e85f659f1c7630f6.gif",
		answers: ["Chansey","Jigglypuff","Audino","Clefairy"],
		correct: 3
	},{
		pokemon: "assets/imgs/pokemon3.png",
		pokemonAnswer: "assets/imgs/pokemon3answer.png",
		gifRight: "https://i.gifer.com/8Xvg.gif",
		gifWrong: "https://pa1.narvii.com/6485/61b18568f3975b047091198800fb4f8ae34e12b5_hq.gif",
		answers: ["Vaporeon","Flareon","Jolteon","Espeon"],
		correct: 0
	},{
		pokemon: "assets/imgs/pokemon4.png",
		pokemonAnswer: "assets/imgs/pokemon4answer.png",
		gifRight: "https://pa1.narvii.com/6530/01392bf0844bf359323b9e8eb4c1cebd8e57a83d_hq.gif",
		gifWrong: "https://i1.wp.com/68.media.tumblr.com/f9ad7eea96e999b50c82f8884a86546a/tumblr_owarlwD5VT1qioqevo2_1280.gif",
		answers: ["Dodrio","Dugtrio","Oricorio","Lucario"],
		correct: 1
	},{
		pokemon: "assets/imgs/pokemon5.png",
		pokemonAnswer: "assets/imgs/pokemon5answer.png",
		gifRight: "https://pa1.narvii.com/6232/cc07b298f596324e179f6ddef89412b43adef232_hq.gif",
		gifWrong: "https://i.gifer.com/7ttG.gif",
		answers: ["Exeggcute","Cleffa","Togepi","Marill"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon6.png",
		gifRight: "https://thumbs.mic.com/Y2VjNzZjYjZiMyMvVHE0dkdNWEM0Z3prTVBHdkJNZTdyV09XZ2l3PS9maXQtaW4vNzYweDAvZmlsdGVyczpub191cHNjYWxlKCk6Zm9ybWF0KGpwZWcpOnF1YWxpdHkoODApL2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9wb2xpY3ltaWMtaW1hZ2VzL3ZyaWF1Y3JweXNwdTgzeHE4eGppazFqZm1pZWdhZ3N1d2M5amw2cWptdnFsazlvcmdsMWxxNXRvZ2xnbm9uYWMuZ2lm.gif",
		gifWrong: "https://www.pokecommunity.com/signaturepics/sigpic660252_2.gif",
		pokemonAnswer: "assets/imgs/pokemon6answer.png",
		answers: ["Dragonite","Salamence","Tyranitar","Garchomp"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon7.png",
		gifRight: "http://i.imgur.com/LxN7ai3.gif",
		gifWrong: "https://media.giphy.com/media/TUaKA70WsyC64/giphy.gif",
		pokemonAnswer: "assets/imgs/pokemon7answer.png",
		answers: ["Blaziken","Latias","Latios","Noivern"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon8.png",
		gifRight: "https://78.media.tumblr.com/c93a7ca4f9cbbceaf8dd45aa16c6c6ae/tumblr_mpsoghDOso1r5fhkdo1_500.gif",
		gifWrong: "https://25.media.tumblr.com/tumblr_m65131tJ5u1qlms3vo1_500.gif",
		pokemonAnswer: "assets/imgs/pokemon8answer.png",
		answers: ["Butterfree","Venemoth","Dustox","Beautifly"],
		correct: 3
	},{
		pokemon: "assets/imgs/pokemon9.png",
		gifRight: "https://pa1.narvii.com/5905/d5d0abc5ba30604eefe7165b73fa1553ee5e5e65_hq.gif",
		gifWrong: "https://i.chzbgr.com/full/8535999744/h2A85AF85/",
		pokemonAnswer: "assets/imgs/pokemon9answer.png",
		answers: ["Klink","Klang","Klefki","Klinklang"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon10.png",
		gifRight: "https://sixprizes.com/wp-content/uploads/2016/03/greninja-nod-3-2.gif",
		gifWrong: "http://i0.kym-cdn.com/photos/images/newsfeed/001/152/546/aba.gif",
		pokemonAnswer: "assets/imgs/pokemon10answer.png",
		answers: ["Greninja","Pangoro","Zoroark","Bisharp"],
		correct: 0
	},{
		pokemon: "assets/imgs/pokemon11.png",
		gifRight: "http://gifimage.net/wp-content/uploads/2017/10/mimikyu-gif-3.gif",
		gifWrong: "https://i0.wp.com/68.media.tumblr.com/25f1ab69f4774d4cf68f6ad12aa1b774/tumblr_ouhdif5fmK1qioqevo1_1280.gif",
		pokemonAnswer: "assets/imgs/pokemon11answer.png",
		answers: ["Raichu","Pikachu","Mimikyu","Pachirishu"],
		correct: 2
	},{
		pokemon: "assets/imgs/pokemon12.png",
		gifRight: "http://31.media.tumblr.com/fbef48d53228a27267ed35d1a5660643/tumblr_mxd1v7DObd1qau6z9o1_r1_500.gif",
		gifWrong: "https://78.media.tumblr.com/d3480bf2785e4cf37614d9d124a59c4e/tumblr_p1oi2a16T21wof669o1_500.gif",
		pokemonAnswer: "assets/imgs/pokemon12answer.png",
		answers: ["Voltorb","Electrode","Solosis","Jigglypuff"],
		correct: 2
	}
	];

var restart = $("#restart");

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

 		$("#pokemon").html("<img class='pkmnImg img-fluid animated bounceInLeft' src=" + whoDat[currentPokemon].pokemon + ">");
 		for (var i=0; i < 4; i++){
 			var choices = $('<div>');
 			choices.html("<h2 class='btn btn-2 btn-2h animated bounceInRight'>" + whoDat[currentPokemon].answers[i] + "</h2>");
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
 		tickTock = 10;
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
 		$("#timer").empty();

 		var correctIndex = whoDat[currentPokemon].correct
 		var correctAnswerText = whoDat[currentPokemon].answers[correctIndex];
 		var rightGif = "<img class='img-fluid animated bounceInRight' src='" +whoDat[currentPokemon].gifRight + "'>";
 		var wrongGif = "<img class='img-fluid animated bounceInRight' src='" +whoDat[currentPokemon].gifWrong + "'>";

 		if(userChoice === correctIndex && answered === true){
 			correctAnswers++;
 			$("#correctPokemon").html("<h2 class='animated bounceInRight'> It's " + correctAnswerText + "!</h2>");
 			$("#correctPokemon").append(rightGif);
 			$("#pokemon").html("<img class='pkmnImg img-fluid animated bounceInLeft' src=" + whoDat[currentPokemon].pokemonAnswer + ">");
 		} else if (userChoice != correctIndex && answered === true){
 			incorrectAnswers++;
 			$("#correctPokemon").html("<h2 class='animated bounceInRight'> Wrong! It's " + correctAnswerText+ "!</h2>");
 			$("#correctPokemon").append(wrongGif);
 			$("#pokemon").html("<img class='pkmnImg img-fluid animated bounceInLeft' src=" + whoDat[currentPokemon].pokemonAnswer + ">");
 		} else {
 			unanswered++;
 			$("#correctPokemon").html("<h2 class='animated bounceInRight'> You ran out of time! It's " + correctAnswerText+ "!</h2>");
 			$("#correctPokemon").append(wrongGif);
 			$("#pokemon").html("<img class='pkmnImg img-fluid animated bounceInLeft' src=" + whoDat[currentPokemon].pokemonAnswer + ">");
 			answered = true;
 		}
 		if (currentPokemon === whoDat.length -1){
 			setTimeout(results, 4000)
 		}else{
 			currentPokemon++;
 			setTimeout(newPokemon, 4000);
 		}
};
function results(){
	$("#timer").empty();
	$("#correctPokemon").empty();
	$("#pokemon").empty();

	$("#right").html("<h2> Correct Answers: " + correctAnswers + "</h2>");
	$("#wrong").html("<h2> Incorrect Answers: " + incorrectAnswers + "</h2>");
	$("#unanswered").html("<h2> Unanswered: " + unanswered + "</h2>");
	restart.show();
	restart.html("<h2 class='btn btn-2 btn-2h'>Play Again?</h2>");
};













