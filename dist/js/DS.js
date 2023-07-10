
let questions = [
    {
      id: 1,
      question: " What is the hash function used in the division method?",
      answer: "h(k)=k mod m",
      options: [
        "h(k)=k mod m",
        "h(k)=k/m",
        "h(k)=m/k",
        "h(k)=m mod k"
      ]
    },
    {
      id: 2,
      question: "The leaves of an expression tree always contain?",
      answer: "operands",
      options: [
        "operators",
        "null",
        "expression",
        "operands"
      ]
    },
    {
      id: 3,
      question: "A variant of the linked list in which none of the node contains NULL pointer is?",
      answer: "Circular Linked List",
      options: [
        "Singly Linked List",
        "Circular Linked List",
        "Doubly Linked List",
        "Circular-Doubly Linked List"
      ]
    },
    {
      id: 4,
      question: "Circular Queue is also known as __________",
      answer: "Ring Buffer",
      options: [
        "Square Buffer",
        "Curve Buffer",
        "Ring Buffer",
        "Rectangle Buffer"
      ]
    },
    {
      id: 5,
      question: "When the user tries to delete the element from the empty stack then the condition is said to be a ____",
      answer: "Underflow",
      options: [
        "Overflow",
        "Underflow",
        "Garbage Value",
        "Global connection"
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
  