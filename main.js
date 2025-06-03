const menuBtn = document.getElementById("menu-btn")

const navLinks = document.getElementById("nav-links")

const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
	navLinks.classList.toggle("open");

	const isOpen = navLinks.classList.contains("open");
	menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
	navLinks.classList.remove("open")
	menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
});


ScrollReveal().reveal(".header-container p", {
    ...scrollRevealOption,
	delay: 700,
});

ScrollReveal().reveal(".header-container form", {
    ...scrollRevealOption,
	delay: 1000,
});


ScrollReveal().reveal(".feature-card", {
	...scrollRevealOption,
	duration: 1000,
	interval:  300,
	reset: true,
});

ScrollReveal().reveal(".destination-card", {
	...scrollRevealOption,
	duration: 1000,
	interval:  200,
});

ScrollReveal().reveal(".package-card", {
	...scrollRevealOption,
	interval:  500,
	reset: true,
});


const swiperInstance = new Swiper(".swiper", {
	slidesPerView: "auto",
	spaceBetween: 20,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	loop: true,
	speed: 700,
	keyboard: {
        enabled: true,  
        onlyInViewport: true, 
    },
	autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
});
