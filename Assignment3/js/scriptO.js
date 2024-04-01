class FormValidator {
    constructor() {
        this.fname = document.getElementById("fname").value;
        this.lname = document.getElementById("lname").value;
        this.mobile = document.getElementById("mobile").value;
        this.age = document.getElementById("age").value;
        this.city = document.getElementById("city").value;
        this.dob = document.getElementById("dob").value;
        this.checkbox = document.getElementsByName('Skills');
    }

    validateName(name) {
        let pattern = /^[A-Za-z]+$/;
        return pattern.test(name);
    }

    validateMobile(mobile) {
        let count = /\d{10}$/;
        return count.test(mobile);
    }

    validateAge(age) {
        let ageCount = /\d{1,2}$/;
        return ageCount.test(age);
    }

    validateDOB(dob) {
        let enteredDate = new Date(dob);
        let yearLimit = 2024;
        return /^\d{2}\/\d{2}\/\d{4}$/.test(dob) && enteredDate.getFullYear() < yearLimit;
    }

    validateSkills() {
        let selectedSkills = [];
        for (var i = 0; i < this.checkbox.length; i++) {
            if (this.checkbox[i].checked) {
                selectedSkills.push(this.checkbox[i].value);
            }
        }
        return selectedSkills.length > 0;
    }

    validateForm() {
        if (this.fname === "" || !this.validateName(this.fname)) {
            alert("First name is mandatory and should only contain alphabets.");
        } else if (this.lname === "" || !this.validateName(this.lname)) {
            alert("Last name is mandatory and should only contain alphabets.");
        } else if (this.mobile === "" || !this.validateMobile(this.mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
        } else if (this.age === "" || !this.validateAge(this.age)) {
            alert("Age is mandatory and should be a 2-digit number.");
        } else if (this.dob === "" || !this.validateDOB(this.dob)) {
            alert("Date format should be dd/mm/yyyy and must be before the year 2024.");
        } else if (!this.validateSkills()) {
            alert("Please select at least one skill.");
        } else {
            alert("Form submitted successfully.");
        }
    }
}


function validation1() {
    let formValidator = new FormValidator();
    formValidator.validateForm();
}

function dateValidate() {
    let dob = document.getElementById("dob").value;
    let formValidator = new FormValidator();
    if (!formValidator.validateDOB(dob)) {
        alert("Date format should be dd/mm/yyyy and must be before the year 2024.");
    } else {
        alert("Date accepted");
    }
}
