var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var myclick = this.textContent;
        // this.classList.addClass(".pressed");
          callme(myclick);
        

    });
}

document.addEventListener("keypress",(event)=>{

callme(event.key);

});

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