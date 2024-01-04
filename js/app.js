const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const footer = document.querySelector("footer");

const currentHour = new Date().getHours();



// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();
//find hour, change color

if (currentHour >= 6 && currentHour < 9) {
  // Change color for morning hours (6 AM to 9 AM)
  footer.style.backgroundColor = '#3F675F';
  footer.style.Color = 'bisque';
  navbar.style.backgroundColor = "#A3B086";
} else if (currentHour >= 9 && currentHour < 12) {
  // Change color for afternoon hours (9 PM to 12 PM)
  footer.style.backgroundColor = '#A3B086';
  footer.style.Color = 'burlywood';
  navbar.style.backgroundColor = "#A3B086";
}
else if (currentHour >= 12 && currentHour < 15) {
  // Change color for afternoon hours (12 PM to 3 PM)
  footer.style.backgroundColor = '#FFE3C7';
  footer.style.color = '#216998';
  navbar.style.backgroundColor = "#FFE3C7";
} else if (currentHour >= 15 && currentHour < 18) {
  // Change color for afternoon hours (3 PM to 5:59 PM)
  footer.style.backgroundColor = '#D8B382';
  footer.style.color = '#3F675F';
  navbar.style.backgroundColor = "#FFE3C7";
} else if (currentHour >= 18 && currentHour < 21) {
  // Change color for afternoon hours (6 PM to 9 PM)
  footer.style.backgroundColor = '#216998';
  footer.style.color = '#FFE3C7';
  navbar.style.backgroundColor = "#D8B382";
} else {
  // Change color for evening/night hours (9 PM onwards)
  footer.style.backgroundColor = '#222';
  footer.style.color = 'bisque';
  navbar.style.backgroundColor = "#D8B382";
}



