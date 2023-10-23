// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const Thedate=document.getElementById('date')
 Thedate.innerHTML=new Date().getFullYear();
// ********** close links ************
const linksContainer=document.querySelector('.links-container')
const closeLinksBtn=document.querySelector('.nav-toggle')
const links=document.querySelector('.links')


closeLinksBtn.addEventListener('click',function () {

    // closelinks.classList.toggle('show-links')
   const containerHeight= linksContainer.getBoundingClientRect().height;
   const linksHeigh=links.getBoundingClientRect().height;

   console.log(linksHeigh);
   console.log(containerHeight);

   if (containerHeight ===0) {
    linksContainer.style.height=`${linksHeigh}px`
   } else {
    linksContainer.style.height=0
   }



})
 

// ********** fixed navbar ************
const navbar=document.getElementById('nav');
const topLink=document.querySelector('.top-link');

window.addEventListener('scroll',function () {
    const scrollHeight=window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height;
     
    console.log(scrollHeight);
    // console.log(navHeight);
if (scrollHeight>navHeight) {
    navbar.classList.add('fixed-nav');
} else {
    navbar.classList.remove('fixed-nav');
}

if (scrollHeight>500) {
    topLink.classList.add("show-link")   
}else{
    topLink.classList.remove("show-link")   

}

})



// ********** smooth scroll ************
// select links


