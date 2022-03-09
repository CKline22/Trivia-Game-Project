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

//next question function//
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//event listners for buttons
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//add function to reset hidden buttons //

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

//add function to add classes correct and wrong

//add function to remove classes correct and wrong

//select answers fucntion and score++//

//questions array//