function createGrid(){
  let rows = document.getElementById("rows").value;
 let cols = document.getElementById("cols").value;
 console.log("rows",rows,"cols",cols);
  var total=rows*cols;
 var boxParent= document.getElementById("boxParent");
   boxParent.innerHTML="";
   boxParent.style.width= 100*cols +"px";
   boxParent.style.backgroundColor='red';
    for (var i = 0; i < total; i++) {
        //for (var j = 0; j < cols; j++) {

            var gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.float='left';
            gridItem.style.margin='4px';
            boxParent.appendChild(gridItem);

       // }
    }
} 