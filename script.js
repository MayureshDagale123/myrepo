const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", ()=>{
    h1.textContent = "You are Hacked !";
});

h1.addEventListener("mouseleave", ()=>{
    h1.textContent = "This is DESIGN version V6";
});
