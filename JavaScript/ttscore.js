const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1score")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2score")
}


const resetbtn = document.querySelector('#Reset');
let playto = document.querySelector("#Playto");
let isgameOver = false;
let winningScore = 5;

function updatescore(player, oppenent) {
    if (player.score !== winningScore && !isgameOver) {
        player.score = player.score + 1;
        player.display.textContent = player.score;
        if (player.score == winningScore) {
            player.display.classList.add("winner");
            oppenent.display.classList.add("loser");
            player.button.disabled = true;
            oppenent.button.disabled = true;
        }
    }
    else {

        isgameOver = true;
        console.log("gameOver");
    }
}

p1.button.addEventListener('click', function () {
    updatescore(p1, p2);
})

p2.button.addEventListener('click', function () {

    updatescore(p2, p1);
})

resetbtn.addEventListener('click', Rst)

function Rst() {
    isgameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("winner", "loser");
        p.button.disabled = false;
    }
}


playto.addEventListener('change', function () {
    Rst();
    alert(`playto changed ${playto.value}`);
    winningScore = parseInt(this.value)
})


