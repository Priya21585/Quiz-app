const questions =[
{
    question:"which is the largest animal in the world ?",
    answers:[
        {text:"Shark" , correct:false},
        {text:"Blue whale" , correct:true},
        {text:"Lion" , correct:false},
        {text:"Elephant" , correct:false},
    ]
},

{
    question:"which is the longest river in the world ?",
    answers:[
        {text:"Amazon" , correct:false},
        {text:"Mekong" , correct:false},
        {text:"Nile" , correct:true},
        {text:"Congo" , correct:false},
    ]
},

{
    question:"which is the smallest country in the world ?",
    answers:[
        {text:"Vatican city" , correct:true},
        {text:"Bhutan" , correct:false},
        {text:"Nepal" , correct:false},
        {text:"Sri lanka" , correct:false},
    ]
},

{
    question:"which is the largest desert in the world ?",
    answers:[
        {text:"Kalahari" , correct:false},
        {text:"Gobi" , correct:false},
        {text:"Sahara" , correct:false},
        {text:"Antarctica" , correct:true},
    ]
},

{
    question:"which is the smallest continent in the world ?",
    answers:[
        {text:"Asia" , correct:false},
        {text:"Arctic" , correct:false},
        {text:"Australia" , correct:true},
        {text:"Africa" , correct:false},
    ]
}

];

const questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const startBtn

let currentQuestionIndex = 0 ;
let score = 0; 

function startQuiz(){
    currentQuestionIndex = 0 ;
    score = 0 ;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    nextButton.style.display = "block" ;
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}

nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});


startQuiz();

