
const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const contentContainer = document.querySelectorAll('.content')

console.log(btns);

about.addEventListener('click', function (e) {
    // console.log);
    const btnid = e.target.dataset.id
    if (btnid) {

        btns.forEach(function (btn) {
            btn.classList.remove('active')
            e.target.classList.add("active")
        })

        // hide othe articls 
        contentContainer.forEach(function (article) {

            article.classList.remove('active')   
            const ele=document.getElementById(btnid)
            ele.classList.add('active')

        })

    }


})