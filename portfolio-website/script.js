//TEST
const navBar = document.querySelector("nav");
const sideBar = document.querySelector("#sidePage");
const sideLists = document.querySelector(".side-list");
const pageOneMid = document.querySelector(".page-1 .mid-part");
sideLists.style = "display:none";

function displaySide(){
    // navBar.style = "display: none";
    // pageOneMid.style = "display: none";
    sideBar.classList.add("sideBarActive");  
    sideBar.classList.remove("hideSideBar");
    
    setTimeout(()=>{
        sideLists.style = "display:grid"; 
    }, 100); 
}
function hideSlide(){
   slideUp(afterSlideUp);

}
function slideUp(callback){
    sideLists.style = "display:none";
    sideBar.classList.add("hideSideBar");
    callback();
}
function afterSlideUp(){
    setTimeout(()=>{
        sideBar.classList.remove("sideBarActive");
        navBar.style = "diplay:flex";
        pageOneMid.style = "display: flex";
    }, 400);
    
    
}

const navLists = document.querySelectorAll("nav li");

navLists.forEach((list)=>{
    list.addEventListener("mouseover", activateLine);
})

function activateLine(){
   navLists.forEach((list) =>{
    list.classList.remove("white-line");
   }) ;
   this.classList.add("white-line");
}

    const typingElement = document.querySelector(".cursor-animation");
    const speed = 200;
    const word = "Reimagined";
    let newIndex = word.length;

    function addType(){
        
        let newWord = word;
        let wordLength = word.length
        let index = 0;
        let g ;
        
        
  let intervalId =  setInterval(()=>{
            g = newWord.slice(0, index);

            index++;
            typingElement.textContent = g;

            if(g.length == wordLength){
                clearInterval(intervalId);
                removeType(word);
            }
        }, speed)
            



        if(index == word.length){
            setTimeout(()=>{
                removeType(word);
            }, 3000);
        
            
        }

    }
    function removeType(word){
        
        let r = [...word];
    
        let g = "";
        
        let intervalId = setInterval(()=> {

        r.pop();
        g = r.join("");
        typingElement.textContent = g;  
        
        if(r.length < 1){
            clearInterval(intervalId);
            index = 0;
            addType();
        }  

        }, speed);  
       
       
            
    }

 document.addEventListener("DOMContentLoaded", addType);

const boxA = document.querySelector(".box-a");
const boxB = document.querySelector(".box-b");
const boxC = document.querySelector(".box-c");
const boxD = document.querySelector(".box-d");

const A = boxA.innerHTML;
const B = boxB.innerHTML;
const C = boxC.innerHTML;
const D = boxD.innerHTML;

function swapAB(){
   
    setInterval(()=>{
        

           
        
        setTimeout(()=>{
            boxB.innerHTML = A;
            boxA.innerHTML = B;
    
            // boxB.classList.remove("fadeBox");
            // boxA.classList.add("fadeBox");
    
        }, 5000);
        setTimeout(()=>{
            boxB.innerHTML = B;
            boxA.innerHTML = A;
        });
      },  10000);

}

function swapCD(){
    setInterval(()=>{
        
        
           
     
        setTimeout(()=>{
            boxD.innerHTML = C;
            boxC.innerHTML = D;
    
 
    
        }, 7000);
        setTimeout(()=>{
            boxD.innerHTML = D;
            boxC.innerHTML = C;
        })
        
    }, 10000);
}
 swapAB();
 swapCD();




// ABOUT ANIMATION
const aboutNav = document.querySelectorAll(".about-nav li") ;

aboutNav.forEach((list)=>{
    list.addEventListener("click", activateRed);
})

function activateRed(){
   aboutNav.forEach((list) =>{
    list.classList.remove("selected-nav");
    list.classList.remove("skill-list");
   }) ;
   this.classList.add("selected-nav");

}
const skillDiv = document.querySelector(".skill");
const expDiv = document.querySelector(".experience");
const eduDiv = document.querySelector(".education");

aboutNav[0].addEventListener("click", ()=>{
    skillDiv.style = "display:block";
    expDiv.style = "display:none";
    eduDiv.style = "display:none";
});
aboutNav[1].addEventListener("click", ()=>{
    expDiv.style = "display:block";
    skillDiv.style = "display:none";
    eduDiv.style = "display:none";
});
aboutNav[2].addEventListener("click", ()=>{
    eduDiv.style = "display:block";
    expDiv.style = "display:none";
    skillDiv.style = "display:none";
});

// LINK TRANSITIONS
const homeLink = document.getElementById("homeLink");
homeLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const homePage = document.getElementById("homePage");
    homePage.scrollIntoView({behavior: 'smooth'});
});


const aboutLink = document.getElementById("aboutLink");
aboutLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const aboutPage = document.getElementById("aboutPage");
    aboutPage.scrollIntoView({behavior: 'smooth'});
});

const serviceLink = document.getElementById("serviceLink");
serviceLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const servicePage = document.getElementById("servicePage");
    servicePage.scrollIntoView({behavior: 'smooth'});
});

const contactLink = document.getElementById("contactLink");
contactLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const contactPage = document.getElementById("contactPage");
    contactPage.scrollIntoView({behavior: 'smooth'});
});



// SIDE LINK TRANSITIONS
const sideHomeLink = document.getElementById("side-homeLink");
sideHomeLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const homePage = document.getElementById("homePage");
    hideSlide();
    
});


const sideAboutLink = document.getElementById("side-aboutLink");
sideAboutLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const aboutPage = document.getElementById("aboutPage");
    hideSlide();
    aboutPage.scrollIntoView({behavior: 'smooth'});
});

const sideServiceLink = document.getElementById("side-serviceLink");
sideServiceLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const servicePage = document.getElementById("servicePage");
    hideSlide();
    servicePage.scrollIntoView({behavior: 'smooth'});
});

const sideContactLink = document.getElementById("side-contactLink");
sideContactLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const contactPage = document.getElementById("contactPage");
    hideSlide();
    contactPage.scrollIntoView({behavior: 'smooth'});
});

const myWorkBtn = document.querySelector(".my-works");
myWorkBtn.addEventListener("click", (event)=>{
    const servicePage = document.getElementById("servicePage");
    servicePage.scrollIntoView({behavior: 'smooth'});
})

const hireMeBtn = document.querySelector(".hire-me");
hireMeBtn.addEventListener("mouseover", ()=>{
    document.querySelector(".hire-me a").style = "color:black";
})
hireMeBtn.addEventListener("mouseout", ()=>{
    document.querySelector(".hire-me a").style = "color:white";
})




const ServicePage = document.getElementById("servicePage");
const loader1 = document.querySelector(".main-bar .load1");
const loader2 = document.querySelector(".main-bar .load2");
const loader3 = document.querySelector(".main-bar .load3");
const loader4 = document.querySelector(".main-bar .load4");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loader1.classList.add("loading1"); 
    loader2.classList.add("loading2"); 
    loader3.classList.add("loading3"); 
    loader4.classList.add("loading4"); 

  } 
  if (entries[0].isIntersecting == false) {
    loader1.classList.remove("loading1"); 
    loader2.classList.remove("loading2"); 
    loader3.classList.remove("loading3"); 
    loader4.classList.remove("loading4"); 
  } 
});
// }, {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1.0
// });

observer.observe(ServicePage);


//FORM VALIDATION


const scriptURL = 'https://script.google.com/macros/s/AKfycbzjPXsqyAaBgDM4suW6nr5nQs-Prn0FUVZtTRM__T7y9PiEYMxEuPkSxDLgD4091K62KA/exec';
const form = document.forms['contact-form'];

form.addEventListener("submit", (event)=>{

    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const formP = document.getElementById('formP');


    // const numbers = [1,2,3,4,5,6,7,8,9,0];
    // const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",'w',"x","y","z"];

    if(firstName === "" || lastName === "" || email === "" || phoneNumber === "" || message=== ""){
        formP.textContent = "Please fill in the blank spaces";
        setTimeout(()=> formP.textContent = "", 3000);
    }

else  if
    ( (/\d/.test(firstName)) || (/\d/.test(lastName)) || (/[^0-9]/.test(phoneNumber)) ){
    console.error("Problem with one of the first four inputs")
    formP.textContent = "Please follow the given format"
    setTimeout(()=> formP.textContent ="", 3000);
    }
    
else if( email.includes("@") === false || email.includes(".") === false){
        console.error("Problem with the email input")
        formP.textContent = "Please follow the given format"
        setTimeout(()=> formP.textContent ="", 3000);
    }
    else{

  
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        formP.textContent = "Your feedback has been received";
        setTimeout(()=> formP.textContent = "", 3000);
    })
    
    .then(setTimeout(()=>{
        window.location.reload();
    }, 2000))
    .catch(error => console.error('Error!', error.message))
    }
});