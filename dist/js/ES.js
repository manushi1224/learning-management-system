
let questions = [
    {
      id: 1,
      question: "Which of the following is the cause of soil pollution?",
      answer: "Acid rain",
      options: [
        "Ozone",
        "Aerosol",
        "Acid rain",
        "None of the above"
      ]
    },
    {
      id: 2,
      question: "The pollutants that decomposable and manageable in nature are termed as _________",
      answer: "Biodegradable pollutants",
      options: [
        "Biodegradable pollutants",
        "Renewable pollutants",
        "Non-biodegradable pollutants",
        "Non-renewable pollutants"
      ]
    },
    {
      id: 3,
      question: "Wildlife week is celebrated from",
      answer: "2nd October to 8th October",
      options: [
        "2nd October to 8th October",
        "15th October to 21st October",
        "14th June to 20th June",
        "15th January to 21st January"
      ]
    },
    {
      id: 4,
      question: "Which of the following device is used to measure the atmospheric humidity?",
      answer: "Hygrometer",
      options: [
        "Photometer",
        "Auxanometer",
        "Barometer",
        "Hygrometer"
      ]
    },
    {
      id: 5,
      question: "What is the full form of CPCB?",
      answer: "Central pollution control board",
      options: [
        "Control pollution control board",
        "Central pollution control board",
        "Central pollution central board",
        "Control pollution central board"
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
  