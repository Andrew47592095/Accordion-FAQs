const faq_wrapper = document.getElementById('faq-wrapper');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

//QuerySelectorAll means all selected elements will be added to an array
//👉questions >>> NodeList[h3.question, h3.question]
//👉answers >>> NodeList[p.answer, p.answer]

//when questions[0] is clicked, answers[0] will be shown 

questions.forEach((question, index) => {
  question.addEventListener('click',() => {
    question.classList.toggle('clicked');
    if(answers[index].classList.contains('active')) {
      answers[index].classList.remove('active')
    } else {
      answers[index].classList.toggle('active');
      
    }
  })
})
