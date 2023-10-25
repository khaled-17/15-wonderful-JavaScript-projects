const menu = [
  {
    id: 1,
    title: "1-Color-Flipper",
    category: "breakfast",
    img: "./images/item-1",
  },
  {
    id: 2,
    title: "2-Counter",
    category: "lunch",
    img: "./images/item-2",
  },
  {
    id: 3,
    title: "3-Reviews",
    category: "shakes",
    img: "./images/item-3",
  },
  {
    id: 4,
    title: "4-Navbar",
    category: "breakfast",
    img: "./images/item-4",
  },
  {
    id: 5,
    title: "5-Sidebar",
    category: "lunch",
    img: "./images/item-5",
  },
  {
    id: 6,
    title: "6-Modal",
    category: "shakes",
    img: "./images/item-6",
  },
  {
    id: 7,
    title: "7-Questions",
    category: "breakfast",
    img: "./images/item-7",
  },
  {
    id: 8,
    title: "8-Menu",
    category: "lunch",
    img: "./images/item-8",
  },
  {
    id: 9,
    title: "9-video",
    category: "lunch",
    img: "./images/item-9",
  },
  {
    id: 10,
    title: "10-Scroll",
    category: "shakes",
    img: "./images/item-10",
  },
  {
    id: 11,
    title: "11-Tabs",
    category: "shakes",
    img: "./images/item-11",
  },
  {
    id: 12,
    title: "12-Countdown-Timer",
    category: "shakes",
    img: "./images/item-12",
  },
  {
    id: 13,
    title: "13-Lorem-Ipsum",
    category: "shakes",
    img: "./images/item-13",
  },
  {
    id: 14,
    title: "14-Grocery-Bud",
    category: "shakes",
    img: "./images/item-14",
  },
  {
    id: 15,
    title: "15-Slider",
    category: "shakes",
    img: "./images/item-15",
  },
];

const sectionCenter = document.querySelector('.section-center')
const filterBtn = document.querySelectorAll('.filter-btn')

window.addEventListener('DOMContentLoaded', function () {


  displayMenuItems(menu)

})

filterBtn.forEach(function (btn) {

  btn.addEventListener('click', function (e) {
    // console.log();

    // console.log('menuItem');

    const category = e.currentTarget.dataset.id

    const menuCategory = menu.filter(function (menuItem) {
      // console.log(category);

      // console.log(menuItem.category);

      if (menuItem.category == category) {
        // console.log(menuItem);
        return menuItem
      }
    })

    if (category === 'all') {

      displayMenuItems(menu)
    } else {
      displayMenuItems(menuCategory)

    }



  })




})








          // <h4 class="visit showVisit">ddd</h4>


function displayMenuItems(params) {
  let displayMenu = params.map(function (item) {
    return `<a href=./${item.title}><article class="menu-item">
      <div class="item-info">
        <div>
          <img src=${item.img}.jpeg class="photo gif" id="gif" alt="">
          <h4 class="visit showVisit">click to show</h4>
        </div>
        <header>
          <h4>${item.title}</h4>
        </header>
      </div>
    </article></a>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;

  // Add the hover effect to each GIF element
  const gifs = document.querySelectorAll(".gif");

  gifs.forEach((gif) => {
    const visit=gif.parentElement.querySelector('h4')

    gif.addEventListener("mouseover", () => {
      const git=changeImageExtension(gif,'jpeg','gif')
      // console.log(gif);
      // gif.src = item.gifSrc; // Replace with the path to your GIF in the 'item' object
      gif.style.border=".25rem  solid #222"
      visit.classList.remove('showVisit')

      // console.log(visit);
     });
    
    gif.addEventListener("mouseout", () => {
      const git=changeImageExtension(gif,'gif','jpeg')
      gif.style.border=".25rem  solid #c59d5f"
      visit.classList.add('showVisit')
      // console.log(visit);

 
      // gif.src = item.staticImageSrc; // Replace with the path to your static image in the 'item' object
    });
  });
}




 
function changeImageExtension(img,fromEx,toEx) {
  const currentSrc = img.src;
  const newExtension = `.${toEx}`; // قم بتغيير الامتداد الجديد هنا

  // قم بالتحقق مما إذا كانت الصورة الحالية تنتهي بامتداد .gif
  if (currentSrc.endsWith(`.${fromEx}`)) {
    const newSrc = currentSrc.replace(`.${fromEx}`, newExtension);
    img.src = newSrc;
  }
}