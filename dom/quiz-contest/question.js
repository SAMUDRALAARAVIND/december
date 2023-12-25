
let questions = [];
let activeQuestionIndex = -1;
let answers = [];

const questionTitle = document.getElementById("question-title");
const optionInputs = document.querySelectorAll("#options input");
const optionLabels = document.querySelectorAll("#options label");
const questionForm = document.getElementById("question-section");

// questions = [, , , , , ,]
function applyQuestionDetails() {

    // this function applies the data of a question on to the UI
    let activeQuestion = questions[activeQuestionIndex];
    /**
     * Every activeQuestion will look like 
     * {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                answer: "Paris",
        }
     */
    questionTitle.innerText = activeQuestion.question;

    for (let i = 0; i < 4; i++) {
        optionInputs[i].value = activeQuestion.options[i]
        optionLabels[i].innerText = activeQuestion.options[i];
    }

    if (answers[activeQuestionIndex]) {
        // apply the answer
        questionForm.option.value = answers[activeQuestionIndex]
    }
}


function previous() {
    if (activeQuestionIndex === 0) {
        alert("This is the first question")
    }
    else {
        activeQuestionIndex--;
        applyQuestionDetails();
    }
}

function next() {

    // save the answer of current question before moving to next question
    let selectedOption = questionForm.option.value;
    if (selectedOption) {
        answers[activeQuestionIndex] = selectedOption;
    }


    if (activeQuestionIndex === questions.length - 1) {
        showScores();
    }
    else {
        activeQuestionIndex++;
        questionForm.reset();
        applyQuestionDetails();
    }
}

