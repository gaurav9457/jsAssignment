function createGrid(){
    let rows = document.getElementById("rows").value;
   let cols = document.getElementById("cols").value;

   //console.log("rows",rows,"cols",cols);
   // var total=rows*cols;

   var boxParent= document.getElementById("boxParent");
     boxParent.innerHTML="";

     boxParent.style.width= 80*cols+8*cols +"px";
     boxParent.style.height = 80 * rows + 8 * rows + "px";
    

    
      for (var i = 1; i <= rows; i++) {
           for (var j = 1; j <= cols; j++) {
  
              var gridItem = document.createElement("div");
              gridItem.classList.add("grid-item");
              gridItem.style.float='left';
              gridItem.style.margin='4px';
              boxParent.appendChild(gridItem);
  
           }
           var clearDiv = document.createElement("div");
           clearDiv.style.clear="both";
           boxParent.appendChild(clearDiv);

      }
    
  } 