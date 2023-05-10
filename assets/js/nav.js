window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 300) {
      navbar.style.backgroundColor = "#000";
    }
    else{
        navbar.style.backgroundColor= "transparent";
    }
  });
  
  const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', function() {
  nav.classList.toggle('show');
});
