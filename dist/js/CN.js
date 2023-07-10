
let questions = [
    {
      id: 1,
      question: "'Parity bits' are used for which of the following purposes?",
      answer: "To detect errors",
      options: [
        "To detect errors",
        "Encryption of data",
        "To transmit faster",
        "To identify the user"
      ]
    },
    {
      id: 2,
      question: "The maximum length (in bytes) of an IPv4 datagram is?",
      answer: "65535",
      options: [
        "32",
        "1024",
        "512",
        "65535"
      ]
    },
    {
      id: 3,
      question: "In specific, if the systems use separate protocols, which one of the following devices is used to link two systems?",
      answer: "Gateway",
      options: [
        "Repeater",
        "Gateway",
        "Bridge",
        "Hub"
      ]
    },
    {
      id: 4,
      question: "Which of the following methods is used to broadcast two packets on the medium at a time?",
      answer: "Collision",
      options: [
        "Collision",
        "Synchronous",
        "Asynchronous",
        "None of the above"
      ]
    },
    {
      id: 5,
      question: "What is the efficiency of the Go back N (ARQ) protocol?",
      answer: "N = N / (1 + 2a)",
      options: [
        "N = N / (2a + 2a)",
        "N = N / (1 + 2a)",
        "N = N * (2a + 2a)",
        "N = N * (1 + 2a)"
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
