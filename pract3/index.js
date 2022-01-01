const { exit } = require("process");
const readline = require("readline");
const rs = require("readline-sync")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var QuizData = require("./quizQue.json");
var userName;
var playQuiz;
var points = 0;
var option;

const GetUserData = () => {
    rl.question(`Enter The User User Name  ?  `, function (answer) {
        var name = answer;
        SetUserData(name);
    });
}
const SetUserData = (name) => {
    userName = name;
    console.log(`\n\nHello, Wellcome  ${userName}!`);
    StartGame();
}
const StartGame = () => {
    rl.question(`${userName} You Have Play a React Quiz ("Yes" Press : 'Y' and "No" Press :'N') ? `, function (answer) {
        playQuiz = answer;
        if (playQuiz == "Y" || playQuiz == "y") {
            GameRoles();
        } else {
            if (playQuiz == "N" || playQuiz == "n") {
                console.log(`Thank You ${userName}`);
                rl.close();
            }
        }
    });
}
const GameRoles = () => {
    console.log("\nThere Will 10 Questions")
    console.log(`******************* Game Rolus *******************`);
    console.log(`1) Your Right Answer For +5 Point  `);
    console.log(`2) Your Wrong Answer For -2 Point  `);
    console.log(`**************************************************`);
    QuizQues();
}
const QuizQues = () => {
    var no = 0;
    while (true) {
        if (QuizData.length == no) {
            console.log(`\nYour Score :- ${points}`);
            rl.close();
            exit();
        } else {

            console.log('\n');
            console.log(`${no + 1}) ${QuizData[no].Qus}`);
            console.log(`A) ${QuizData[no].A}`);
            console.log(`B) ${QuizData[no].B}`);
            console.log(`C) ${QuizData[no].C}`);
            console.log(`D) ${QuizData[no].D}`);
            GetQuizOptions(QuizData[no].Ans);
            no++;
        }

    }
}
const GetQuizOptions = (Ans) => {
    var op = rs.question(`Select Option  ?  `);
    option = op.toUpperCase();
    if (Ans == option) {
        points += 5;
        console.log("\nYour Score : -", points);
    } else {
        points -= 2;
        console.log(`\nCorrect Answer  : ${Ans}`);
        console.log("\nYour Score : -", points);
    }
}

GetUserData();
