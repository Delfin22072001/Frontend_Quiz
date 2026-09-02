const questions = [
  { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { question: "Which planet is known as Earth's twin due to similar size?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: "Venus" },
  { question: "What percentage of Earth's surface is covered by water?", options: ["50%", "60%", "71%", "85%"], answer: "71%" },
  { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: "Nile River" },
  { question: "Which layer of the Earth is the hottest?", options: ["Crust", "Mantle", "Outer Core", "Inner Core"], answer: "Inner Core" },
  { question: "What is the largest desert in the world (by area)?", options: ["Sahara Desert", "Gobi Desert", "Antarctic Desert", "Arabian Desert"], answer: "Antarctic Desert" },
  { question: "Which gas makes up the majority of Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" },
  { question: "What causes the Earth's seasons?", options: ["Distance from the Sun", "The tilt of Earth's axis", "Ocean currents", "Moon's gravity"], answer: "The tilt of Earth's axis" },
  { question: "Which continent is home to the most countries?", options: ["Asia", "Africa", "Europe", "South America"], answer: "Africa" },
  { question: "What is the tallest mountain in the world (above sea level)?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], answer: "Mount Everest" }
];

const progressBar = document.getElementById('progress-bar')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const options = document.getElementById('options')
const result = document.getElementById('result')
const nextBtn = document.getElementById('next-btn')
const playagainBtn = document.getElementById('playagain-btn')
let index = 0
let score = 0
let questionNo = 1


function playQuiz(){
  progressBar.innerHTML=`<b>${questionNo} of Question ${questions.length}</b>`
  question.textContent=`${questionNo}) ${questions[index].question}`
  options.innerHTML=""
  let userOptions= questions[index].options
  const ul=document.createElement('ul')

  for(let option of userOptions){
    const li=document.createElement('li')
    const input = document.createElement('input')
    const div = document.createElement('div')
    input.type="radio"
    input.name="options"
    div.classList.add('list-container')
    li.classList.add('my-options')
    li.textContent=option
    input.value=li.textContent
    div.appendChild(input)
    div.appendChild(li)
    ul.appendChild(div)
  }
  options.appendChild(ul)

  if(index === questions.length - 1){
    nextBtn.textContent="Submit"
  }
}
playQuiz()

nextBtn.addEventListener('click', ()=>{

 const checked = document.querySelector('input[name="options"]:checked')
  if(!checked){
    alert("Please select a option")
  }

  if (checked.value === questions[index].answer) {
    score += 1
  }

  if(index < questions.length - 1){
    index += 1
    questionNo += 1
    playQuiz()
  }

  else{
    question.textContent="Quiz Submitted Successfully"
    options.textContent=""
    progressBar.textContent=""
    result.innerHTML=`You scored <b>${score} out of 10</b>`
    nextBtn.style.display="none"
    playagainBtn.style.display="block"
  }
})

playagainBtn.addEventListener('click', ()=>{
  result.textContent=""
  index=0
  score=0
  questionNo = 1
  playagainBtn.style.display="none"
  nextBtn.textContent="Next"
  nextBtn.style.display="block"
  playQuiz()
})








