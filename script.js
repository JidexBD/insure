// navigation

const menu = document.querySelector(".nav-menu");

const closeBtn = document.querySelector(".close-btn");

const mobilenav = document.querySelector(".mobile-nav");

// open slider
menu.addEventListener("click", () => {
  mobilenav.classList.add("active");
});

// close button function

const closeSidebar = () => {
  mobilenav.classList.remove("active");
};

// close btn
closeBtn.addEventListener("click", closeSidebar);

//close from anywhere

document.addEventListener("click", (e) => {
  // if it is not inside the side bar or the close btn

  if (!mobilenav.contains(e.target) && !menu.contains(e.target)) {
    closeSidebar();
  }
});
