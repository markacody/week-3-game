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
	var cSays = "";
	var uGuess = "";
	var wins = 0;
	var losses = 0;
	var turns = 9;
	var done = 0;

	// computer picks letter from the array

	// loop gives user 9 inputs
		
		// capture input in variable
		// decrement turns and replace # in "turns"
		// append input to "done"
		// compare input to cSays
			 //if match, increment wins and append to wins
			 //if no match continue
// after 9 attempts increment losses and append to losses 
// restart game 

};