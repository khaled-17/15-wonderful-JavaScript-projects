//  ckatch btn 
// catch side bar 
// add togole to sidebare by bt


const togoleBtn=document.querySelector('.sidebar-toggle')
const closebtn=document.querySelector('.close-btn')
const sideBarmenu=document.querySelector('.sidebar')


//toggle btn
togoleBtn.addEventListener('click',function () {

    sideBarmenu.classList.toggle('show-sidebar')
})

//close btn 
closebtn.addEventListener('click',function () {

    sideBarmenu.classList.remove('show-sidebar')
})