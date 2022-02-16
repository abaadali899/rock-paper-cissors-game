/* Your  Age in Days */
/* ******************* Challenge 01 Starts****************** */
function ageInDays() {
  var birthYear = prompt("Enter the Year you born");
  var ageInDays = (2021 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "Hii dude! You are " + ageInDays + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
/* *******************Challenge 01 Ends****************** */

/* ********************  Chalenge 02 starts ********************* */
function generatPic() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-pic-gen");
  image.src = "https://picsum.photos/200/200";
  div.appendChild(image);
}
/* ********************  Chalenge 02 Ends ********************* */

/* ********************  Chalenge 03 starts ********************* */

function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log("computerChoice:", botChoice);

  results = decideWinner(humanChoice, botChoice);
  console.log(results);

  message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
  return ["rock", "paper", "scissor"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { spaper: 1, scissors: 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "you lose", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "you tied", color: "yellow" };
  } else {
    return { message: "you won", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    papaer: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  // Let's remove images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    " ' height=150 width=150 style='box-shadow 0px 10px 50px rgba(37, 50, 233,1);' > ";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    " ;font-size:25px padding:30px '> " +
    finalMessage["message"] +
    "  </h1>";
  botDiv.innerHTML =
    "<img src=' " +
    imagesDatabase[botImageChoice] +
    " ' height=150 width=150 style='box-shadow 0px 10px 50px rgba(243, 38, 24,1);' > ";
  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
}
