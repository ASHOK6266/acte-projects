function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmPass = document.forms["myForm"]["confirm_password"].value;
    var phoneNum = document.forms["myForm"]["phone"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    }