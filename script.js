function nav(){
  var products = document.querySelector("#products");
var productspage = document.querySelector("#productpage");
var usecase = document.querySelector("#usecase");
var usecasepage = document.querySelector("#usecasepage");
var about = document.querySelector("#about");
var aboutpage = document.querySelector("#aboutpage");


//produsts
var flag = 1;
products.addEventListener("click", function(){
  if(flag == 1){
    productspage.style.opacity = "1";
    usecasepage.style.opacity = "0";
    aboutpage.style.opacity = "0";
    products.style.borderBottom = "1px solid black"
    usecase.style.borderBottom = "none";
       about.style.borderBottom = "none"
    flag = 0
  }
  else{
    productspage.style.opacity = "0";
     products.style.borderBottom = "none"
    flag = 1;
  }
})


//usecase
var flag = 1;
usecase.addEventListener("click", function(){
  if(flag == 1){
    usecasepage.style.opacity = "1";
    productspage.style.opacity="0"
    aboutpage.style.opacity = "0";
     usecase.style.borderBottom = "1px solid black";
      products.style.borderBottom = "none"
      about.style.borderBottom = "none"

    flag = 0
  }
  else{
    usecasepage.style.opacity = "0";
    usecase.style.borderBottom = "none"
    flag = 1;
  }
})


//about
var flag = 1;
about.addEventListener("click", function(){
  if(flag == 1){
    aboutpage.style.opacity = "1";
    productspage.style.opacity = "0";
    usecasepage.style.opacity = "0";
     about.style.borderBottom = "1px solid black"
      usecase.style.borderBottom = "none";
      products.style.borderBottom = "none"
    flag = 0
  }
  else{
    aboutpage.style.opacity = "0";
       about.style.borderBottom = "none"
    flag = 1;
  }
})

}
nav();


gsap.to("#childscroll",{
  transform:"translateX(-100%)",
  duration:12,
  ease:"none",
  repeat:-1,
})



function video(){
  var videodiv = document.querySelectorAll("#icon");
var videoacc = document.querySelector("#videoacc");
var info = document.querySelector('#info');

var video = '';
var paragraph = '';

videodiv.forEach(function(elem){
elem.addEventListener("mouseenter", function(){
  video = elem.getAttribute('data-video')
  videoacc.setAttribute("src", video)

})
  })
}
video();


  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // increse

  function increase(){
    // var increase = document.querySelector("#increase");
  var  elem1 = document.querySelector("#elem1");
  var  elem2 = document.querySelector("#elem2");
  var  elem3 = document.querySelector("#elem3");
  var zero = document.querySelector("#zero");
  var info = document.querySelector("#info");

  elem1.addEventListener("mouseenter",function(){
    zero.textContent = "01"
    info.textContent = "Choose the fully regulated accounts that work best for your business and your customers."
  })
 

  elem2.addEventListener("mouseenter",function(){
    zero.textContent = "02"
    info.textContent ="Start processing payments faster and more securely by connecting to the payment schemes via our API."
  })

  elem3.addEventListener("mouseenter",function(){
    zero.textContent = "03"
    info.textContent ="Offer your customers FSCS protected accounts by leveraging our banking licence. We take care of the banking products so you can focus on creating the business that your customers dream of."
  })
  }
  increase();


  //pin property
 function pin(){
  // var card1 = document.querySelector("#ourproducts  #card1")
 
  gsap.from("#ourproducts  #card1",{
    scrollTrigger:{
    trigger:"#card1",
    scroller:"body",
    // markers:true,
    pin:true,
    start:"top 0%",
    end:"top -35%"

    }
  })
 }
 pin();
  
 
 
 

