// tab creation
const featureNavbar =document.querySelectorAll(".feature-navbar div")
const featureNavbarLine =document.querySelectorAll(".feature-navbar div span")
const features = document.querySelectorAll(".feature-details")
const featureText = document.querySelectorAll(".feature-text")


featureNavbar.forEach((ele)=>{
    ele.addEventListener("click",function(){
        id=ele.dataset.id;
        if(id){
            featureNavbarLine.forEach((item)=>{
                item.classList.remove("active")
            })
        }

        ele.firstElementChild.classList.add("active")
        features.forEach((feature)=>{
            feature.classList.remove("show")
        })
        const element = document.getElementById(id)
        element.classList.add("show")

    })
})

// Accordian creation
const faqHeading = document.querySelectorAll(".faq-heading")

faqHeading.forEach((question)=>{
    question.addEventListener("click",()=>{
        question.firstElementChild.nextElementSibling.classList.toggle("active")
        question.nextElementSibling.classList.toggle("show")
    })
})

//email validation check
const inputText = document.getElementById("input")
const error = document.getElementsByClassName("error")[0]
const errorImage = document.getElementById("input_img")
const validation = () =>
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = re.test(String(inputText.value).toLowerCase())
    
    if(inputText.value === "" ||inputText.value === null || (!valid)){
        error.classList.add("show")
        errorImage.style.display="block"
    }
    else{
       inputText.value="";
       errorImage.style.display="none"
       error.classList.remove("show")

    }
}
// creating hamburger menu
const hamburgerIcon = document.getElementsByClassName("hamburger-icon")[0]
const menuSmall = document.querySelector(".navbar-end-small .links")
const navLinks = document.querySelectorAll(".navbar-end-small .nav-links")
hamburgerIcon.addEventListener("click",()=>{
    hamburgerIcon.classList.toggle("close")
    menuSmall.classList.toggle("show")
})
navLinks.forEach((item)=>{
    item.addEventListener("click",()=>{
        hamburgerIcon.classList.remove("close")
        menuSmall.classList.remove("show");
    })
})
//adding animations
$ (document).ready(function() {
    $(".intro-text-container h1").addClass("animate__animated animate__slideInLeft");

    $(".download-text").waypoint(function(){
        $(".download-text-small").addClass("animate__animated animate__fadeInUp");
    },{ offset: '60%' });
})