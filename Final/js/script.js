let display=document.getElementById("popupDiv");
let displayRegister=document.getElementById("Formcontainer");
let loginDiv=document.getElementById("popupChildMain");
function login() {
    console.log("script");
    loginDiv.style.display="block";
    display.style.display='block';
   // document.body.style.overflow='hidden';
}

function closePopup(){
    //let display=document.getElementById("popupDiv");
    display.style.display='none';
   // document.body.style.overflow='auto';
}
window.onclick = function(e) {
   // let display=document.getElementById("popupDiv");
    if (e.target == display || e.target==displayRegister) {
        display.style.display = "none";
        displayRegister.style.display='none';
        //document.body.style.overflow='auto';
    }
}
function register() {
    loginDiv.style.display="none";
    displayRegister.style.display='block';
}


