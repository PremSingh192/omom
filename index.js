

function callme(myclick) {
   
    switch (myclick) {
        case "a": var audio = new Audio("sounds/omom1.mp3");   
            audio.play();
            break;
        case "s": var audio = new Audio("sounds/omom2.mp3");
            audio.play();
            break;
        case "d": var audio = new Audio("sounds/omom3.mp3");
            audio.play();
            break;
        case "f": var audio = new Audio("sounds/omom4.mp3");
            audio.play();
            break;
        

        default:
            break;
    }
}

function changecolor(myclick){
 var mytemp =   document.querySelector("."+myclick);
 mytemp.classList.add("pressed");
 setTimeout(()=>{
     mytemp.classList.remove("pressed");
 },100);
}


// click event listener on all button

var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var myclick = this.textContent;
       
        callme(myclick);
        changecolor(myclick);
        

    });
}


//keyboard input function 
document.addEventListener("keypress",(event)=>{

callme(event.key);
changecolor(event.key);

});