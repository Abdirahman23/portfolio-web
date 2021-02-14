let menu = document.querySelector(".menu")
let nav = document.querySelector(".nav")
let porfolio2 = document.querySelector(".portfolio2")
let porfolio3 = document.querySelector(".portfolio3")
let btnShow = document.querySelector(".btn3 button")
let submit = document.querySelector(".btn4")
let error = document.querySelector(".error")

function myFunction(){
  
    nav.classList.toggle("show")
}

menu.addEventListener("click", myFunction)

// show more button




function show(){
 
  if(porfolio2.style.display == "none"){
    porfolio2.style.display = "flex"
    this.textContent = "Show Less" 
} else{
    porfolio2.style.display = "none"
    
}

if(porfolio3.style.display == "none"){
    porfolio3.style.display = "flex"
} else{
    porfolio3.style.display = "none"
    this.textContent = "Show More" 
} 

}

btnShow.addEventListener("click" , show)

// submit form 

function messageSent(){
    this.textContent = "Not Sent"
    this.style.fontSize = "12px"
    this.style.backgroundColor = "red"
    error.style.display = "block"
}

submit.addEventListener("click" , messageSent )