
let submitBtn=document.getElementById("submit");

submitBtn.addEventListener("click",(e)=>{
   validate.validationForm();
})

var validate= new ValidationFormMain();

function ValidationFormMain() {
    this.validationForm=validationForm;

    function validationForm() {
        let fname=document.getElementById("fname").value;
        let lname=document.getElementById("lname").value;
        let gender = document.querySelector('input[name="gender"]:checked');
       // let mobile=document.getElementById("mobile").value;
        let dob=document.getElementById("dob").value;
        let  age=document.getElementById("age").value;
        let city=document.getElementById("city").value;
        let checkbox = document.getElementsByName('Skills');
        let java=document.getElementById("java");
        let html=document.getElementById("html");
        let css=document.getElementById("css");
        let javascript=document.getElementById("javascript");
        let dateValidationResult = isValidDate(dob);

        let checkboxes = document.querySelectorAll('input[name="Skills"]:checked');
        let errorSpan=document.getElementById("errorSpan");
        
        

    let pattern=/^[A-Za-z]{1,15}$/;
    let num=/\d/;
    let count=/\d{10}$/;
    let ageCount=/\d{1,2}$/;
    let dobvalidate= /\d{1,2}\/\d{1,2}\/\d{4}/;

        if (fname=="") { 
            errorSpan.innerHTML="Enter first name it is mandatory";
            console.log("Entered");
        } 
        else if(num.test(fname)){
          
            alertDisplay("First Name Not contain number");
        }
        else if(lname=="") {
           document.getElementById("errorSpan1").innerHTML= "last name is mandatory";
        }
        else if(num.test(lname)){
            alertDisplay("last name not contain numbers")
        }
        else if (!gender) {
            alertDisplay("Please select a gender");
        }
        else if (!dobvalidate.test(dob)) {
            document.getElementById("dobErrorDiv").innerHTML="Please enter a valid date of birth in the format dd/mm/yyyy";
        }
        else if (dateValidationResult === "invalidFormat") {
            alertDisplay("Please enter a valid date of birth in the format dd/mm/yyyy");
            return;
        } else if (dateValidationResult === "invalidDate") {
            alertDisplay("Please enter a valid date");
            return;
        } else if (dateValidationResult === "futureDate") {
            alertDisplay("Date of birth should be before the year 2024");
            return;
        }
        // else if(mobile==""){
        //     document.getElementById("mobErrorDiv").innerHTML="Please enter mobile number";
        // }
        // else if(!count.test(mobile)){
        //     alert("Enter 10 digit mobile no");
        // }
        else if (checkboxes.length === 0) {
            document.getElementById("checkboxError").innerHTML="Please select at least one skill";
        }
            
        else if(!ageCount.test(age)){
            document.getElementById("ageErrorDiv").innerHTML="Enter 2 digit age";
        }

        else{
            alert("Form submitted");
        }
        }
    

        function isValidDate(dateString) {
            
            let datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        
            if (!datePattern.test(dateString)) {
                return "invalidFormat"; 
            }
        
            
            let parts = dateString.split('/');
            let day = parseInt(parts[0], 10);
            let month = parseInt(parts[1], 10) - 1; 
            let year = parseInt(parts[2], 10);
        
            
            let testDate = new Date(year, month, day);
        
            
            if (testDate.getFullYear() !== year || testDate.getMonth() !== month || testDate.getDate() !== day) {
                return "invalidDate"; 
            }
        
            
            if (year >= 2024) {
                return "futureDate"; 
            }
        
            calculateAge(dateString);
            return true;
        }

        function calculateAge(dob) {
            let  ageInp=document.getElementById("age");
            let dobParts = dob.split('/');
            let dobDay = parseInt(dobParts[0], 10);
            let dobMonth = parseInt(dobParts[1], 10);
            let dobYear = parseInt(dobParts[2], 10);
        
            
            let currentDate = new Date();
        
            let currentDay = currentDate.getDate();
            let currentMonth = currentDate.getMonth() + 1; 
            let currentYear = currentDate.getFullYear();
        
            
            let age = currentYear - dobYear;
        
           
            if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDay < dobDay)) {
                age--;
            }
              
            ageInp.value=age;
           // return age;
        }
        
        function alertDisplay(msg) {
            document.getElementById("alertBox").style.display = 'block';
           document.getElementById("msg").innerHTML = msg;
           document.getElementById("progressBar").style.animation = 'progress 3s 1 ease-in-out';
           setTimeout(function () {
               document.getElementById("alertBox").style.display = 'none';
           }, 3000);
        }


    
}