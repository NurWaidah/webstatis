// toggle class active
const navbarNav = document.querySelector 
('.navbar-nav'); 
// click menu
document.querySelector ('#menu') .onclick = () => {
    navbarNav.classList.toggle ('active');
};

// click diluar sidebar untuk menutup nav
const menu =document.querySelector
('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active')
})

// read more
function cikanteh(event) {
    event.preventDefault();
    const cikanteh = document.getElementById("cikanteh");
    if (
      cikanteh.style.display === "none" ||
      cikanteh.style.display === ""
    ) {
      cikanteh.style.display = "block";
    } else {
      cikanteh.style.display = "none";
    }
 }

 function seribu(event) {
    event.preventDefault();
    const seribu = document.getElementById("seribu");
    if (
      seribu.style.display === "none" ||
      seribu.style.display === ""
    ) {
      seribu.style.display = "block";
    } else {
      seribu.style.display = "none";
    }
 }

 function upas(event) {
    event.preventDefault();
    const upas = document.getElementById("upas");
    if (
      upas.style.display === "none" ||
      upas.style.display === ""
    ) {
      upas.style.display = "block";
    } else {
      upas.style.display = "none";
    }
 }
