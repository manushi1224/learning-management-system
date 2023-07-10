
let questions = [
  {
    id: 1,
    question: "C is a __________ language?",
    answer: "Middle level",
    options: [
      "Low level",
      "Middle level",
      "High level",
      "Machine level"
    ]
  },
  {
    id: 2,
    question: "ASCII value of a is _____",
    answer: "97",
    options: [
      "97",
      "98",
      "96",
      "99"
    ]
  },
  {
    id: 3,
    question: "Which data type allows storage of same data type?",
    answer: "Both a and b",
    options: [
      "Array",
      "Structure",
      "Void",
      "Both a and b"
    ]
  },
  {
    id: 4,
    question: "Which of the following is a symbol for Logical OR operator?",
    answer: "||",
    options: [
      "&",
      "&&",
      "|",
      "||"
    ]
  },
  {
    id: 5,
    question: "What is the output of 16>>2?",
    answer: "4",
    options: [
      "32",
      "16",
      "8",
      "4"
    ]
  }

];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};

function next() {


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "/public/html/end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
