
let questions = [
    {
      id: 1,
      question: "The Indian Legislature was made bicameral for the first time by _____________",
      answer: "Government of India Act,1919",
      options: [
        "Government of India Act,1919",
        "Indian Council Act, 1909",
        "Indian Council Act, 1861",
        "Government of India Act,1858"
      ]
    },
    {
      id: 2,
      question: "Which of the following Articles of the Indian Constitution deal with citizenship in India? ",
      answer: "Articles 5 to 11",
      options: [
        "Articles 17 to 20",
        "Articles 1 to 4",
        "Articles 333 to 337",
        "Articles 5 to 11"
      ]
    },
    {
      id: 3,
      question: "The Supreme Court of India has propounded the ‘Doctrine of Basic Structure’ of the Constitution in which of the following cases?",
      answer: "Keshvanand Bharti Vs. Kerala State",
      options: [
        "Keshvanand Bharti Vs. Kerala State",
        "Golaknath Vs. Punjab State",
        "Sajjan Singh Vs. Rajasthan State",
        "Shankari Prasad Vs. Indian Union"
      ]
    },
    {
      id: 4,
      question: "Which one of the following is not the objective of the Directive Principles of State Policy?",
      answer: "To establish a religious state",
      options: [
        "To establish a welfare state",
        "To ensure socio-economic justice",
        "To establish a religious state",
        "To establish a secular state"
      ]
    },
    {
      id: 5,
      question: "Organisation of village panchayaths are incorporated under which head in the Indian Constitution?",
      answer: "Directive Principles of the state",
      options: [
        "Fundamental rights",
        "Directive Principles of the state",
        "Citizenship",
        "Fundamental duties"
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
  