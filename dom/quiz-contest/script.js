let quizData = [
    {
        category: "General Knowledge",
        questions: [
            {
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: [
                    "Harper Lee",
                    "George Orwell",
                    "Jane Austen",
                    "F. Scott Fitzgerald",
                ],
                answer: "Harper Lee",
            },
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                answer: "Paris",
            },
        ],
    },
    {
        category: "Science",
        questions: [
            {
                question: "What is the chemical symbol for gold?",
                options: ["Au", "Ag", "Fe", "Cu"],
                answer: "Au",
            },
            {
                question: "Who developed the theory of relativity?",
                options: [
                    "Isaac Newton",
                    "Albert Einstein",
                    "Galileo Galilei",
                    "Stephen Hawking",
                ],
                answer: "Albert Einstein",
            },
            // Add more questions...
        ],
    },
    {
        category: "History",
        questions: [
            {
                question: "In which year did World War II end?",
                options: ["1943", "1945", "1950", "1939"],
                answer: "1945",
            },
            {
                question: "Who was the first President of the United States?",
                options: [
                    "John Adams",
                    "George Washington",
                    "Thomas Jefferson",
                    "James Madison",
                ],
                answer: "George Washington",
            },
            // Add more questions...
        ],
    },
    {
        category: "Mathematics",
        questions: [
            {
                question: "What is the value of π (pi) to two decimal places?",
                options: ["3.14", "2.71", "1.62", "4.20"],
                answer: "3.14",
            },
            {
                question: "What is the square root of 25?",
                options: ["5", "6", "4", "7"],
                answer: "5",
            },
            // Add more math questions...
        ],
    },
    {
        category: "Geography",
        questions: [
            {
                question: "Which is the longest river in the world?",
                options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
                answer: "Amazon",
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                answer: "Canberra",
            },
            // Add more geography questions...
        ],
    },
];

let categories = quizData.map(item => item.category);
const chipsContainer = document.querySelector("form > .chips");
const popup = document.querySelector(".popup");
const homeSection = document.querySelector(".home");
const questionSection = document.querySelector("#question-section");

function toggleModal() {
    if (popup.style.display === "none") {
        popup.style.display = "flex";
    }
    else {
        popup.style.display = "none";
    }
}

categories.forEach((category) => {
    // <div class="chip">
    //           <input type="checkbox" value="Category1" id="category1" />
    //           <label for="category1">
    //             <span>Category1</span>
    //             <span class="close">X</span>
    //           </label>
    //         </div>
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = ` <input type="checkbox" value="${category}" id="${category}" />
       <label for="${category}">${category}</label>`;

    chipsContainer.appendChild(chip);

})

const form = document.querySelector(".categories");
const username = document.getElementById("username");
let selectedList = [];

form.addEventListener("submit", (e) => {
    selectedList = [];
    e.preventDefault();
    const inputsList = document.querySelectorAll(".categories input");

    for (let i = 0; i < inputsList.length; i++) {
        if (inputsList[i].checked) {
            selectedList.push(inputsList[i].value);
        }
    }

    if (selectedList.length < 3) {
        alert("please select atleast 3 categories")
    }
    else {
        username.innerText = "Aravind";
        toggleModal();
        openQuestionSection();
    }
})

function openQuestionSection() {
    // fill the question as per the categories 
    homeSection.style.display = "none";
    let selectedCategoriesObject = quizData.filter(item => {
        return Boolean(selectedList.find(cat => cat === item.category))
    })

    selectedCategoriesObject.forEach(selectedCategory => {
        questions.push(...selectedCategory.questions)
    });

    activeQuestionIndex = 0;
    applyQuestionDetails();
    questionSection.style.display = "block";
}