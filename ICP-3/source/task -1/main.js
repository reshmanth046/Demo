const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

const scoreboard = {
  player: 0,
  computer: 0
};
// Play game - main function calling individual functions for operations
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner,playerChoice,computerChoice);
}

// Get computers choice - using random generator generating random values for computer choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand <= 0.34) {
    return 'rock';
  } else if (rand >0.34 && rand<= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get game winner - deciding winner by comparing player and computer choice
function getWinner(player, computer) {
  if (player === computer) {
    return 'draw';
  } else if (player === 'rock') {
    if (computer === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (player === 'paper') {
    if (computer === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (player === 'scissors') {
    if (computer === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}
// showWinner - Dispalying both choices and showing winner along with incrementing scoreboard
function showWinner(winner,playerChoice,computerChoice){
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    result.innerHTML=`
    <h1 class="text-win">Final Result: Player won</h1>
    <p >User Selected : ${playerChoice}</p> 
    <p>computer Selected : ${computerChoice}</p>
    `;
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    result.innerHTML=`
    <h1 class="text-win">Final Result: computer won</h1>
    <p>User Selected : ${playerChoice}</p> 
    <p>computer Selected : ${computerChoice}</p>
    `;
  } else {
    result.innerHTML=`
    <h1 class="text-lose">Final Result: It's Draw</h1>
    <p>User Selected : ${playerChoice}</p> 
    <p>computer Selected : ${computerChoice}</p> 
    `;
  }
      // Show score
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;

}

// Restart game - clear values in player and computer choice and makes 0 each
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

// Event listeners for both choices clickings and restart button
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);
