
var min = 0;
var sec = 0;
var msec = 0;
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var interval;
function timer() {
    sec++;
    seconds.innerHTML = sec;
    if (sec >= 60) {
        min++
        minutes.innerHTML = min;
        sec = 0
    }
    if (minutes.innerHTML == 2 && seconds.innerHTML == 30) {
        clearTimeout(interval);
        alert("Time's Up!!");
        paper.innerHTML = "<img src='medal.png'><br><h2>You got " + right + " of " + questions.length + " questions right</h2>" + "<br>" + "<h2>You got " + points + " points</h2><br><h2>Time: " + minutes.innerHTML + " : " + seconds.innerHTML;
        paper.innerHTML += "<a href='index.html'><button>Try Again</button></a><br>";
        getId("paper_status").innerHTML = "<h1>Your quiz has been competed!</h1>" + "<br>";
        document.getElementById("min").innerHTML = "";
        document.getElementById("sec").innerHTML = "";
        document.getElementById("colon").innerHTML = "";
        document.getElementById("time").innerHTML = "";
    }
}
interval = setInterval(timer, 1000);

var count = 0;
var paper, paper_status, question, choices, choice, opt1, opt2, opt3, opt4;
var right = 0;
var points = 0;
var questions = [
    {
        question: "Who invented JavaScript?",

        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Allen Sherman",
        answer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",

        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "react.js",
        answer: "c"
    },
    {
        question: "How do you create a function?",

        a: "function myFunction()",
        b: "myFunction()",
        c: "function()",
        d: "function = myFunction()",
        answer: "a"
    },
    {
        question: "How to write an IF statement in JavaScript?",

        a: "if i = 5 then",
        b: "if (i == 5)",
        c: "if i == 5 then",
        d: "if i = 5",
        answer: "b"
    },
    {
        question: "Which tool can you use to ensure code quality?",

        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",
        answer: "d"
    }
];

function getId(id) {
    return document.getElementById(id);
}

function getQuestion() {
    paper = getId("paper");

    if (count >= questions.length) {
        paper.innerHTML = "<img src='medal.png'><br><h2>You got " + right + " of " + questions.length + " questions right</h2>" + "<br>" + "<h2>You got " + points + " points</h2><br><h2>Time: " + minutes.innerHTML + " : " + seconds.innerHTML;
        paper.innerHTML += "<a href='index.html'><button>Try Again</button></a><br>";
        getId("paper_status").innerHTML = "<h1>Your quiz has been competed!</h1>" + "<br>";
        document.getElementById("min").innerHTML = "";
        document.getElementById("sec").innerHTML = "";
        document.getElementById("colon").innerHTML = "";
        document.getElementById("time").innerHTML = "";

        count = 0;
        right = 0;
        clearTimeout(interval);
        return false;
    }

    getId("paper_status").innerHTML = "Question " + (count + 1) + " of " + questions.length;

    question = questions[count].question;
    opt1 = questions[count].a;
    opt2 = questions[count].b;
    opt3 = questions[count].c;
    opt4 = questions[count].d;
    paper.innerHTML = "<h3>" + question + "</h3>";
    paper.innerHTML += "<label> <input type='radio' name='choices' value='a'>" + opt1 + "</label><hr color='turquoise'>";
    paper.innerHTML += "<label> <input type='radio' name='choices' value='b'>" + opt2 + "</label><hr color='turquoise'>";
    paper.innerHTML += "<label> <input type='radio' name='choices' value='c'>" + opt3 + "</label><hr color='turquoise'>";
    paper.innerHTML += "<label> <input type='radio' name='choices' value='d'>" + opt4 + "</label><hr color='turquoise'>";
    paper.innerHTML += "<button onclick='checkAns()'>Next</button>";

}
function checkAns() {

    choices = document.getElementsByName("choices");
    for (i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value
        }
    }
    if (choice == questions[count].answer) {
        right++;
        points += 10;
    }
    count++;
    getQuestion();



}

window.addEventListener("load", getQuestion);






