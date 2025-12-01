const moves = ["ROCK", "PAPER", "SCISSOR"];

function Autogeneratenum() {
    const randomnum = Math.floor(Math.random() * 3);
    return moves[randomnum];
}

let userScore = 0;
let AIScore = 0;
let rounds = 0;
let currentRound = 0;
let gamestarts = false;

function startgame() {
    rounds = parseInt(document.getElementById("roundsInput").value);
    userScore = 0;
    AIScore = 0;
    currentRound = 1;

    document.getElementById("intro").innerHTML += "Game started!! Let's test your prediction skills <br>";



    if (!gamestarts) {
        document.getElementById("ROCK").addEventListener("click", () => playround("ROCK"));
        document.getElementById("PAPER").addEventListener("click", () => playround("PAPER"));
        document.getElementById("SCISSOR").addEventListener("click", () => playround("SCISSOR"));
        gamestarts = true;
    }
}

function playround(playermove) {
    if (!rounds || rounds <= 0) {
        alert("Please enter how many rounds you want to play first!");
        return;
    }

    if (currentRound > rounds) {
        alert("Game over!! Refresh to play again");
        return;
    }

    const AImove = Autogeneratenum();
    let roundresult = "";

    if (playermove === AImove) {
        roundresult = "It's a Tie!";
    }
    else if (
        (playermove === "ROCK" && AImove === "SCISSOR") ||
        (playermove === "PAPER" && AImove === "ROCK") ||
        (playermove === "SCISSOR" && AImove === "PAPER")
    ) {
        roundresult = "You Win this round!";
        userScore++;
    }
    else {
        roundresult = "AI Wins this round!";
        AIScore++;
    }

    document.getElementById("results").innerHTML = `
        <p><strong>Round ${currentRound}</strong></p>
        Your Move: ${playermove}<br>
        AI Move: ${AImove}<br>
        Result: ${roundresult}<br>
        Status: You - ${userScore} | AI - ${AIScore} <br>
    `;

    currentRound++;

    if (currentRound > rounds) {
        document.getElementById("finalres").innerHTML += `<hr>`;
        if (userScore > AIScore) {
            document.getElementById("finalres").innerHTML += "<h3>🎉🔥 Congratulations! You won the game! 🎉🔥</h3>";
        }
        else if (AIScore > userScore) {
            document.getElementById("finalres").innerHTML += "<h3>🤖 AI won the game! Better luck next time. 💔</h3>";
        }
        else {
            document.getElementById("finalres").innerHTML += "<h3>🤝The game is a tie!🤝</h3>";
        }
    }
}
