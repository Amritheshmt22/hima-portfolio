// =========================================
// Mobile Navigation
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// =========================================
// Close Mobile Menu on Link Click
// =========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =========================================
// Sticky Header Shadow
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

    }

});


// =========================================
// Active Navigation Link
// =========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================================
// Smooth Scroll
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// =========================================
// Contact Form
// =========================================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if(input.value.trim() === ""){

            valid = false;

            input.style.border = "2px solid red";

        }else{

            input.style.border = "1px solid #ccc";

        }

    });

    if(valid){

        alert("Thank you! Your message has been submitted successfully.");

        form.reset();

    }

});


// =========================================
// Hero Image Animation
// =========================================

const heroImage = document.querySelector(".hero-image img");

let direction = 1;

setInterval(() => {

    if(direction === 1){

        heroImage.style.transform = "translateY(-10px)";

        direction = 0;

    }

    else{

        heroImage.style.transform = "translateY(0px)";

        direction = 1;

    }

},1500);


// =========================================
// Fade-in Animation
// =========================================

const cards = document.querySelectorAll(

".project-card, .skill-box, .education-card, .certificate-card, .achievement-card"

);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{

threshold:0.15

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".8s";

observer.observe(card);

});


// =========================================
// Current Year in Footer
// =========================================

const footerText = document.querySelector("footer p:last-child");

footerText.innerHTML = `© ${new Date().getFullYear()} Hima Vijith. All Rights Reserved.`;


// =========================================
// Console Welcome Message
// =========================================

console.log("Portfolio Developed Successfully 🚀");