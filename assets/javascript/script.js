// document.ready
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
}

function initApplication(){
	console.log("Hey Mama!");
	// create array of possible choices
	// name variables: computerGuess, userGuess, wins, losses, left, done
	var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','w','x','y','z'];
	var uGuess = "";
	var wins = 0;
	var losses = 0;
	var turns = 9;
	var done = 0;

	// computer picks letter from the array
	var cSaysLetter = letters[Math.floor(Math.random() * letters.length)];
	console.log("The letter is " + cSaysLetter);
		
	for (var i = 0; i <= 9; i++) {
		var uGuess = document.onkeypress=function(event){
			var x = event.keyCode;
			var y = String.fromCharCode(x);
			console.log("Your guess is " + y);	
			if (y == cSaysLetter) {
				wins++;
				document.getElementById("wins").innerHTML = wins;
			};
			done = document.getElementById("done");
			done.insertAdjacentHTML('beforeend', y + ", ");
			turns--;
			document.getElementById("turns").innerHTML = turns;
			if (i == 9 && y !== cSaysLetter) {
				losses++;
				document.getElementById("losses").innerHTML = losses;
			};
		};			
	}; 
	
	done = document.getElementById("done").innerHTML = "";
	turns = 9;

};