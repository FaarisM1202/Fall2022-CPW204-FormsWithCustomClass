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

}

function displayGame(myGame:VideoGame):void {
    // Display video game below the form

}

// Add validation code!
function isAllDataValid() {
    return true;
}