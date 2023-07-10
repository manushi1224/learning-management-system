
let questions = [
    {
      id: 1,
      question: "The direction of magnetic lines of force inside the magnet is ______",
      answer: "From South to North",
      options: [
        "From South to North",
        "From North to South",
        "To transmit faster",
        "To identify the user"
      ]
    },
    {
      id: 2,
      question: "Divergence of magnetic flux density for closed surface is _____",
      answer: "0",
      options: [
        "1",
        "-1",
        "1",
        "0"
      ]
    },
    {
      id: 3,
      question: "When a pentavalent impurity is added to a pure semiconductor, it becomes ______",
      answer: "n-type semiconductor",
      options: [
        "An insulator",
        "n-type semiconductor",
        "p-type semiconductor",
        "An intrinsic semiconductor"
      ]
    },
    {
      id: 4,
      question: "The refractive indices of core and cladding of optical fiber are 1.40 and 1.14 respectively. What is numerical aperture?",
      answer: "0.812",
      options: [
        "0.312",
        "0.646",
        "0.812",
        "0.552"
      ]
    },
    {
      id: 5,
      question: "The type of interconnection cable that has the highest bandwidth is _________",
      answer: "Fiber-optic cable",
      options: [
        "Twisted-pair cable",
        "Fiber-optic cable",
        "Co-axial cable",
        "Open-wire cable"
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
