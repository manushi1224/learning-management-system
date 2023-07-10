
let questions = [
    {
      id: 1,
      question: "What is the derivative of sinx+cosx?",
      answer: "cosx-sinx",
      options: [
        "sinx+tanx",
        "cosx+sinx",
        "cosx-sinx",
        "cosx+tanx"
      ]
    },
    {
      id: 2,
      question: "What is the value of log(1)",
      answer: "0",
      options: [
        "1",
        "0",
        "-infinite",
        "+infinite"
      ]
    },
    {
      id: 3,
      question: "What is the value of i^241",
      answer: "i",
      options: [
        "-1",
        "1",
        "i",
        "-i"
      ]
    },
    {
      id: 4,
      question: "What is the integration of cotx?",
      answer: "ln|sinx|+c",
      options: [
        "ln|sinx|+c",
        "ln|cosx|+c",
        "tanx+c",
        "-tanx+c"
      ]
    },
    {
      id: 5,
      question: "What is the value of (tan^(2)θ - sec^(2)θ)?",
      answer: "-1",
      options: [
        "-1",
        "2",
        "0",
        "1"
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
