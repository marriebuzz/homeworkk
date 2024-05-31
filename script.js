const questions = [
  {
    question: "რომელ ქვეყანას ყავს მსოფლიოში ყველაზე დიდი მოსახლეობა?",
    answers: [
      { text: "ა) ინდოეთი", correct: false },
      { text: "ბ) ჩინეთი", correct: true },
      { text: "გ) შეერთებული შტატები", correct: false },
      { text: "დ) ინდონეზია", correct: false },
    ],
  },
  {
    question: "რა არის ადამიანის სხეულის ყველაზე დიდი ორგანო?",
    answers: [
      { text: "ა) გული", correct: false },
      { text: "ბ) ღვიძლი", correct: false },
      { text: "გ) კანი", correct: true },
      { text: "დ) ფილტვები", correct: false },
    ],
  },
  {
    question: "რა არის ყველაზე პატარა ქვეყანა მსოფლიოში?",
    answers: [
      { text: "ა) სან მორინო", correct: false },
      { text: "ბ) მონაკო", correct: false },
      { text: "გ) მალტა", correct: false },
      { text: "დ) ვატიკანი", correct: true },
    ],
  },
  {
    question: "რომელია ყველაზე დიდი პლანეტა მზის სისტემაში?",
    answers: [
      { text: "ა) მარსი", correct: false },
      { text: "ბ) იუპიტერი", correct: true },
      { text: "გ) სატურნი", correct: false },
      { text: "დ) ნეპტუნი", correct: false },
    ],
  },
];

// HTML ელემენტების მიღება ID-ებით
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; //მიმდინარე კითხვის ინდექსი
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "შემდეგი";
  nextButton.style.display = "none";
  showQuestion();
}

// კითხვის ჩვენება
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex]; //მიმდინარე კითხვა
  let questionNo = currentQuestionIndex + 1; //კითხვის ნომერი
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  //პასუხების ღილაკების შექმნა
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `ქულა: ${score}`;
  nextButton.innerHTML = "თავიდან თამაში";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
