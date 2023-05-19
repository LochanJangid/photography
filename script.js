// Nav
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


// Testimonial
const testi = document.getElementById("client_testi"),
  img = document.getElementById("client_img"),
  client_name = document.getElementById("client_name"),
  proff = document.getElementById("client_proff");

setTimeout(() => {
  testi.innerText =
    "First Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus ad officia esse iure at. Dolores perferendis nemo quis exercitationem?";
  client_name.innerText = "Client Name: 2";
  proff.innerText = "Web Designer";
}, 3000);

setTimeout(() => {
  testi.innerText =
    "Second Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus ad officia esse iure at. Dolores perferendis nemo quis exercitationem?";
  client_name.innerText = "Client Name: 3";
  proff.innerText = "App Developer";
}, 6000);

setTimeout(() => {
  testi.innerText =
    "Last Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus ad officia esse iure at. Dolores perferendis nemo quis exercitationem?";
  client_name.innerText = "Client Name: 4";
  proff.innerText = "App Designer";
}, 9000);
