class VideoGame {
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// test code
// let myGame = new VideoGame();
// myGame.title = "Mario";
// myGame.price = 8.99;
// myGame.rating = "E";
// myGame.isDigitalOnly = true;

window.onload = function() {
    let addBtn = 
    <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame() {
    console.log("Add video game was called");

     if((isAllDataValid)) {
         let game = getVideoGame();
         displayGame(game);
     }
}

function $(id:string) {
    return document.getElementById(id);
}

/**
 * Gets all the data from the game and
 * @returns it in the object.
 */

function getVideoGame():VideoGame {
    // Create game
    let game = new VideoGame();
    // Get all data on the form and cast the element
    let inputTitle = <HTMLInputElement>$("title");
    game.title = inputTitle.value;

    let priceInput = <HTMLInputElement>$("price");
    // since the keyword value is being used here again, you'll have to
    // use it differently.
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>$("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>$("online");
    if(digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    }
    // Return game
    return game;
}

function displayGame(myGame:VideoGame):void {
    // Display video game below the form
    let displayDiv = $("display");

    // creates the <h2> element in memory
    let gameHeading = document.createElement("h2");
    // this then attaches the games header into the actual document title
    gameHeading.innerHTML = myGame.title;

    // creates a paragraph that includes the whole details about the game
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if(myGame.isDigitalOnly) {
        notDigitalDisplay = "not";
    }
    
    gameInfo.innerText = myGame.title + " has a rating of " +
                                    myGame.rating + ". It costs " +
                                    myGame.price + ". It is " + notDigitalDisplay +
                                     " digital only.";

    // adds the h2 into the <div> display
    displayDiv.appendChild(gameHeading);

    // add <p> game info
    displayDiv.appendChild(gameInfo);
}

// Add validation code!
function isAllDataValid() {
    return true;
}