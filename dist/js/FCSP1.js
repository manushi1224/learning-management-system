
let questions = [
  {
    id: 1,
    question: "Which character is used in Python to make a single line comment?",
    answer: "#",
    options: [
      "/",
      "//",
      "!",
      "#"
    ]
  },
  {
    id: 2,
    question: "If x=3.123, then int(x) will give ?",
    answer: "3",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    id: 3,
    question: "Which statement will check if a is equal to b?",
    answer: "if a == b:",
    options: [
      "if a = b:",
      "if a == b:",
      "if a === b:",
      "if (a==b){}"
    ]
    },
  {
    id: 4,
    question: "What happens when '2' == 2 is executed?",
    answer: "False",
    options: [
      "True",
      "False",
      "ValueError",
      "TypeError"
    ]
    },
    {
    id: 5,
    question: "Which is the correct operator for power(Xy)?",
    answer: "X**y",
    options: [
      "power(X,y)",
      "X^y",
      "X^^y",
      "X**y"
    ]
    }
  
];

let question_count = 0;
let points = 0;

window.onload = function() {
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
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
