
function addDiv() {
  let divParent=document.getElementById("divParent");
  divParent.style.width= 100*3+3*8+"px";

    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {

           let gridItem = document.createElement("div");
           gridItem.setAttribute("id",'fixColor');
           gridItem.classList.add("changecolor");
           gridItem.style.float='left';
           gridItem.style.margin='4px';
       
           divParent.appendChild(gridItem);

          

		  gridItem.addEventListener("click", function() {
            if (this.classList.contains("redBack")) {
               this.classList.remove("redBack");
			   this.style.backgroundColor="yellow";
            } else {
                this.classList.add("redBack");
				this.style.backgroundColor="red";
            }
         });


		 gridItem.addEventListener("mouseover",function(){
             if (!(this.classList.contains("redBack"))) {
                 this.style.backgroundColor="red";
             } 
		 });

		 gridItem.addEventListener("mouseout",function(){
             if (!(this.classList.contains("redBack"))) {
                 this.style.backgroundColor="yellow";
             } 
		 });

		 /* gridItem.addEventListener("click", function() {
            if (this.style.backgroundColor == "red") {
              this.style.backgroundColor = "yellow";
			  gridItem.classList.add("clickedItem");
            } else {
              this.style.backgroundColor = "red";
			  
            }
          });*/

          
          /* gridItem.addEventListener("click", function(e) {
			  console.log(e.target.className);
             if (e.target.className=="changecolor redBack") {
				 
                 gridItem.classList.remove("redBack");
				 gridItem.classList.add("yellowBack");
				
             }
			 else if(e.target.className=="changecolor yellowBack") {
				
                 gridItem.classList.remove("yellowBack");
				 gridItem.classList.add("redBack");
             }
			 else{
			   gridItem.classList.add("redBack");
			 }
         });*/
	 
      
       }
       
        var clearDiv = document.createElement("div");
        clearDiv.style.clear="both";
        divParent.appendChild(clearDiv);

   }
}
