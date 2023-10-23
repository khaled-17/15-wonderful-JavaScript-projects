//using selectors inside the element
// traversing the dom

//catch btn of + and _

const showbtn=document.querySelectorAll('.question-btn')
const questiontext=document.querySelector('.question-text')

showbtn.forEach(function (btn) {

    btn.addEventListener('click',function (e) {
        console.log("ddd");
 const question= e.currentTarget.parentElement.parentElement
             question.classList.toggle('show-text')
        
            
        })
    
})