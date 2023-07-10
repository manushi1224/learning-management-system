
let questions = [
    {
        id: 1,
        question: "Which of the following is a positive facial expression?",
        answer: "Nodding while listening",
        options: [
            "Looking somewhere else",
            "Nodding while listening",
            "Wrinkled forehead",
            "Staring hard"
        ]
    },
    {
        id: 2,
        question: "'Not sharing your honest view when asked',is which kind of communication?",
        answer: "Passive aggressive",
        options: [
            "Passive aggressive",
            "Assertive",
            "Aggressive",
            "Passive"
        ]
    },
    {
        id: 3,
        question: "When people take extreme positions what is it called?",
        answer: "Polarisation",
        options: [
            "Fear",
            "Halo Effect",
            "Emotions",
            "Polarisation"
        ]
    },
    {
        id: 4,
        question: "The polite ending to a letter;for example Sincerely or Respectfully yours, is known as?",
        answer: "complimentary close",
        options: [
            "salutation",
            "date",
            "complimentary close",
            "zip code"
        ]
    },
    {
        id: 5,
        question: "Which of these is attached at the end of a proposal?",
        answer: "Appendices",
        options: [
            "Budget estimate",
            "Appendices",
            "Infrastructure",
            "Experience"
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