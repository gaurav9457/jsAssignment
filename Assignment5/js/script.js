var gridItem;
function addDiv() {
  let divParent=document.getElementById("divParent");
  divParent.style.width= 100*3+3*8+"px";
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {

           gridItem = document.createElement("div");
           gridItem.setAttribute("id",j);
           gridItem.classList.add("grid-item");
           gridItem.style.float='left';
           gridItem.style.margin='4px';
       
           divParent.appendChild(gridItem);

           gridItem.addEventListener("click", function() {
            if (this.style.backgroundColor == "red") {
              this.style.backgroundColor = "yellow";
            } else {
              this.style.backgroundColor = "red";
            }
          });
          
      //     gridItem.addEventListener("click", function() {
      //       if (this.classList.contains("redBack")) {
      //           this.classList.remove("redBack");
      //       } else {
      //           this.classList.add("redBack");
      //       }
      //   });
      
       }
       
        var clearDiv = document.createElement("div");
        clearDiv.style.clear="both";
        divParent.appendChild(clearDiv);

   }
}
