
let submitBtn = document.getElementById("submit");
let oninputValidate = document.getElementsByClassName("inpValid");

submitBtn.addEventListener("click", (e) => {
    validate.validationForm();
})


var validate = new ValidationFormMain();

function ValidationFormMain() {
    this.validationForm = validationForm;
    this.resetForm = resetForm;
    this.inputErrorDisplay = inputErrorDisplay;

    function validationForm() {
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let mobile = document.getElementById("mobile").value;
        let dob = document.getElementById("dob").value;
        let age = document.getElementById("age").value;
        let city = document.getElementById("city").value;
        let addressArea = document.getElementById("addressArea").value;
        let checkboxes = document.querySelectorAll('input[name="Skills"]:checked');
        // let dateValidationResult = isValidDate(dob);

        let pattern = /^[a-zA-Z]{1,15}$/;
        let num = /\d/;
        let count = /\d{10}$/;
        let ageCount = /\d{1,2}$/;
        let dobvalidate = /\d{1,2}\/\d{1,2}\/\d{4}/;
        let address = /^.{2,250}$/;

        if (fname == "") {
            //firstnameError.innerHTML="Enter first name it is mandatory";
            alertDisplay("Enter first name it is mandatory");

        }
        else if (lname == "") {
            // document.getElementById("lastnameError").innerHTML= "last name is mandatory";
            alertDisplay("Last name is mandatory");
        }

        else if (!gender) {
            alertDisplay("Please select a gender");
        }
        else if (dob == '') {
            alertDisplay("Enter date of-birth");
        }
        else if (mobile == "") {
            alertDisplay("Please enter mobile number");
        }
        else if (addressArea == "") {
            alertDisplay("Please enter address it is mandatory");
        }
        else if (!address.test(addressArea)) {
            alertDisplay("address Should be less than 250 characters");
        }
        else if (!count.test(mobile)) {
            alertDisplay("Enter 10 digit mobile no");
        }
        else if (pattern.test(mobile)) {
            alertDisplay("Mobile no not contain alphabets");
        }

        else if (!(age > 17 && age < 70)) {
            alertDisplay("Your age was not eligible for register");
        }
        else if (city == "") {
            alertDisplay("Please select city");
        }
        else if (checkboxes.length === 0) {
            document.getElementById("checkboxError").innerHTML = "Please select at least one skill";
        }

        else {

            document.getElementById("alertBox").style.display = 'block';
            document.getElementById("alertBox").style.background = 'green';
            document.getElementById("msg").innerHTML = "Form submitted Successfully";
            document.getElementById("progressBar").style.animation = 'progress 3s 1 ease-in-out';
            setTimeout(function () {
                document.getElementById("alertBox").style.display = 'none';
            }, 3000);

            resetForm();
        }
    }

    function isValidDate(dateString) {

        let datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

        if (!datePattern.test(dateString)) {
            return "invalidFormat";
        }

        let parts = dateString.split('/');
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]) - 1;
        let year = parseInt(parts[2]);

        let testDate = new Date(year, month, day);

        if (testDate.getFullYear() !== year || testDate.getMonth() !== month || testDate.getDate() !== day) {

            return "invalidDate";
        }

        if (year >= 2024) {
            return "futureDate";
        }

        calculateAge(day, month, year);
        return true;
    }


    function calculateAge(day, month, year) {
        let ageInp = document.getElementById("age");

        let currentDate = new Date();

        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth() + 1;
        let currentYear = currentDate.getFullYear();

        let age = currentYear - year;

        if (currentMonth < month || (currentMonth === month && currentDay < day)) {
            age--;
        }

        ageInp.value = age;
        // return age;
    }

    function alertDisplay(msg) {
        document.getElementById("alertBox").style.display = 'block';
        document.getElementById("alertBox").style.background = "linear-gradient(147deg, #990000 0%, #ff0000 74%)";
        document.getElementById("msg").innerHTML = msg;
        document.getElementById("progressBar").style.animation = 'progress 3s 1 ease-in-out';
        setTimeout(function () {
            document.getElementById("alertBox").style.display = 'none';
        }, 3000);

    }

    function resetForm() {

        document.getElementById('formObj').reset()
        document.getElementById("firstnameError").innerHTML = "&nbsp;";
        document.getElementById("lastnameError").innerHTML = "&nbsp;";
        document.getElementById("checkboxError").innerHTML = "&nbsp;";
        document.getElementById("ageErrorDiv").innerHTML = "&nbsp;";
        document.getElementById("dobErrorDiv").innerHTML = "&nbsp;";

    }

    function inputErrorDisplay(e) {
        let err = document.getElementById(e.name + "Error");
        let dobvalidate = /\d{1,2}\/\d{1,2}\/\d{4}/;
        //let pattern=/^[a-zA-Z]{1,15}$/;
        if (e.id == "fname" || e.id == "lname") {
            if (e.value.match("[^a-z]")) {
                err.innerHTML = "Error Name Not Contain number";
            }

            else {
                err.innerHTML = "&nbsp;";
            }
        }
        else if (e.id == "dob") {
            let dateValidationResult = isValidDate(e.value);

            if (!dobvalidate.test(e.value)) {
                err.innerHTML = "Please enter a valid date of birth in the format dd/mm/yyyy";
            }
            else if (dateValidationResult === "invalidFormat") {
                err.innerHTML = "Please enter a valid date of birth ";
                //return;
            }
            else if (dateValidationResult === "invalidDate") {
                err.innerHTML = "Please enter a valid date";
                //return;
            }
            else if (dateValidationResult === "futureDate") {
                err.innerHTML = "Date of birth should be before the year 2024";
                //return;
            }
            else {
                err.innerHTML = "&nbsp;";
            }

        }

    }

}
