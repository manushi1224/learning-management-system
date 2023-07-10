
let questions = [
    {
        id: 1,
        question: "Which gate is equivalent to bubbled AND gate?",
        answer: "NOR",
        options: [
            "AND",
            "NOR",
            "NAND",
            "OR"
        ]
    },
    {
        id: 2,
        question: "Excess-3 is also known as _____",
        answer: "Self Complementing Code",
        options: [
            "Positive weighted code",
            "Negative weighted code",
            "Cyclic code",
            "Self Complementing Code"
        ]
    },
    {
        id: 3,
        question: "DeMorgan's first theorem shows the equivalence of ______",
        answer: "NOR gate and Bubbled AND gate",
        options: [
            "NOR gate and Bubbled AND gate",
            "NOR gate and AND gate",
            "NAND gate and NOR gate",
            "OR gate and Exclusive OR gate"
        ]
    },
    {
        id: 4,
        question: "The ________ is a very useful and convenient tool for simplification of Boolean functions for large number of variables.",
        answer: "Quine McCluskey tabulation method",
        options: [
            "K-map",
            "Quine McCluskey tabulation method",
            "SOP K-map",
            "POS K-map"
        ]
    },
    {
        id: 5,
        question: "Number of bits needed to address 4K memory is _____",
        answer: "12",
        options: [
            "6",
            "8",
            "12",
            "16"
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