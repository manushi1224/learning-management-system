
let questions = [
  {
    id: 1,
    question: "The probabilities that a student will solve Question A and Question B are 0.4 and 0.5 respectively. What is the probability that he solves at least one of the two questions?",
    answer: "0.7",
    options: [
      "0.7",
      "0.6",
      "0.8",
      "0.9"
    ]
  },
  {
    id: 2,
    question: "If E(x) = 2 and E(z) = 4, then E(z-x)= ________",
    answer: "2",
    options: [
      "6",
      "2",
      "1",
      "0"
    ]
  },
  {
    id: 3,
    question: "What is the mode of the observations 1, 2, 3, 5, 7, 5, 9, 5, 10,10?",
    answer: "5",
    options: [
      "10",
      "7",
      "9",
      "5"
    ]
  },
  {
    id: 4,
    question: "The values of correlation coefficient lies in the interval:",
    answer: "[-1,1]",
    options: [
      "[0,1]",
      "[-1,1]",
      "[1,2]",
      "[-1,0]"
    ]
    },
    {
    id: 5,
    question: "Goodness of fit of a distribution is tested by __________",
    answer: "Chi-square test",
    options: [
      "t-test",
      "F-test",
      "Chi-square test",
      "z-test "
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
