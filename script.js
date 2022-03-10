//const variables
const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
const scoreElement = document.getElementById('score')
let shuffledQuestions, currentQuestionIndex
let score = 0;

//startgame functiion and score reset//
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    questionElement.classList.remove('hide')
    scoreElement.classList.remove('hide')
    score = 0
    scoreElement.innerText = "Score: " + score
    setNextQuestion()
}

//next question function //
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//event listners for buttons starts game and changes questions
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// function to reset buttons with hide class //
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild (answerButtonElement.firstChild)
    }
}

//show question function  //
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

//select answers fucntion and score++//
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    addStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        addStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    if(correct) {
        score++
        scoreElement.innerText = "Score: " + score
        console.log("score + 1")
    }
}

//add function to add classes correct and wrong
function addStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
//add function to remove classes correct and wrong
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//questions array//
const question = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '9', correct: false},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'What is 4 + 4?',
        answers: [
            {text: '7', correct: false},
            {text: '6', correct: false},
            {text: '8', correct: true},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'What is 1 + 2?',
        answers: [
            {text: '5', correct: false},
            {text: '3', correct: true},
            {text: '9', correct: false},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'What is 4 + 6?',
        answers: [
            {text: '10', correct: true},
            {text: '6', correct: false},
            {text: '9', correct: false},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'What is 10 + 2?',
        answers: [
            {text: '10', correct: false},
            {text: '6', correct: false},
            {text: '9', correct: false},
            {text: '12', correct: true}
        ]
    },
    {
        question: 'What is 6 + 6?',
        answers: [
            {text: '10', correct: false},
            {text: '12', correct: true},
            {text: '3', correct: false},
            {text: '15', correct: false}
        ]
    }
]