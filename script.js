// =========================
// Loading Screen
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);

});

// =========================
// Typing Animation
// =========================

const text = "Choose Your Dream Career with AI";

const typingElement = document.getElementById("typing");

let index = 0;

function typeText(){

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText,80);

    }

}

if(typingElement){
    typeText();
}

// =========================
// Mobile Menu
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

// =========================
// Dark Mode
// =========================

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.innerHTML="☀️";

}
else{

themeBtn.innerHTML="🌙";

}

});

}

// =========================
// Search Career
// =========================

const searchInput=document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter=searchInput.value.toLowerCase();

let cards=document.querySelectorAll(".career-card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.includes(filter)){

card.style.display="block";

}
else{

card.style.display="none";

}

});

});

}

// =========================
// Roadmap Button
// =========================

const roadmapButtons=document.querySelectorAll(".career-card button");

roadmapButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.getElementById("roadmaps").scrollIntoView({

behavior:"smooth"

});

});

});

// =========================
// Counter Animation
// =========================

const counters=document.querySelectorAll(".counter");

const speed=150;

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}
else{

counter.innerText=target;

}

};

updateCounter();

});

// =========================
// Back To Top
// =========================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

};

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =========================
// Reveal Animation
// =========================

const reveals=document.querySelectorAll(

".career-card,.roadmap-card,.salary-card,.testimonial-card,.why-card,.stat-card"

);

function reveal(){

reveals.forEach(element=>{

const windowHeight=window.innerHeight;

const top=element.getBoundingClientRect().top;

const visible=100;

if(top<windowHeight-visible){

element.style.opacity="1";

element.style.transform="translateY(0)";

}

});

}

reveals.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.8s";

});

window.addEventListener("scroll",reveal);

reveal();

// =========================
// Contact Form
// =========================

const form=document.querySelector(".contact form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you! Your message has been sent successfully.");

form.reset();

});

}

// =========================
// Newsletter
// =========================

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Successfully Subscribed!");

newsletter.reset();

});

}

// =========================
// Hero Buttons
// =========================

const primaryBtn=document.querySelector(".primary-btn");

if(primaryBtn){

primaryBtn.addEventListener("click",()=>{

document.getElementById("careers").scrollIntoView({

behavior:"smooth"

});

});

}

const secondaryBtn=document.querySelector(".secondary-btn");

if(secondaryBtn){

secondaryBtn.addEventListener("click",()=>{

document.getElementById("roadmaps").scrollIntoView({

behavior:"smooth"

});

});

}

console.log("🚀 CareerPilot AI Loaded Successfully!");