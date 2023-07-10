
let questions = [
    {
      id: 1,
      question: "If 3 is the eigen value of A then the eigen value of A+3I is ______",
      answer: "6",
      options: [
        "6",
        "9",
        "0",
        "27"
      ]
    },
    {
      id: 2,
      question: "The signum function can be express as ________",
      answer: "u(t)-u(-t)",
      options: [
        "u(t)",
        "u(-t)",
        "u(t)-u(-t)",
        "u(t)+u(-t)"
      ]
    },
    {
      id: 3,
      question: "What is the value of Pulse of unit height and duration function for t>T?",
      answer: "0",
      options: [
        "1",
        "0",
        "-2",
        "T"
      ]
    },
    {
      id: 4,
      question: "Laplace Transform exists when _________",
      answer: "Both a and b",
      options: [
        "The function is piece-wise continuous",
        "The function is exponential order",
        "The function is piece-wise discrete",
        "Both a and b"
      ]
    },
    {
      id: 5,
      question: "The Laplace transform of 1 is _____",
      answer: "1/s",
      options: [
        "1/s",
        "s",
        "0",
        "cosx"
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
  