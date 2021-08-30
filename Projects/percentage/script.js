// const toggle = document.getElementById("toggle");

// toggle.addEventListener("change", (e) => {
//     document.body.classList.toggle("dark", e.target.checked);
// });

const progressBar = document.querySelector('#progressBarFull');

const MAX_QUESTIONS = 100
let questionCounter = 94


progressBar.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`