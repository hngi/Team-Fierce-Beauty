// mobile navigation header for about page

const body = document.querySelector("body");

const hambuger = document.querySelector(".hambuger__menu");

const nav = document.querySelector(".navigation");

// variables for slider
const circles = document.querySelectorAll(".circle");

const block = document.querySelectorAll(".card");

const testemonials = document.querySelector(".testimonials");

hambuger.addEventListener("click", () => {
	hambuger.classList.toggle("change");
	// body.classList.toggle("change");
	nav.classList.toggle("change");
});
