// Function that is called when the user clicks the "CLAIM YOUR FREE TRIAL button"
function startTrial() {
    var inputValid = true;

    // Get the input divs
    var inputDivs = document.getElementsByClassName("inputDiv");

    // Loop through all the input fields to make sure they are not empty
    for(var index = 0; index < inputDivs.length; index++) {
        var inputDiv = inputDivs[index];
        var inputField = inputDiv.children[0];

        if(inputField.value.length == 0) {
            // Add the error message
            inputDiv.children[2].innerHTML = `${inputDiv.dataset.fieldname} cannot be empty`;

            // Show the error
            inputDiv.classList.add("inputError");

            inputValid = false;
        } else {
            // Hide potential previous errors
            inputDiv.classList.remove("inputError");
        }
    }

    // Check if the email is valid
    var emailDiv = document.getElementById("inputDivEmail");

    // Make sure that there is not an error already
    if(!emailDiv.classList.contains("inputError")) {
        var emailAddress = document.getElementById("inputEmail").value;

        // Validate the email
        if(!validEmail(emailAddress)) {
            // Add the error message
            emailDiv.children[2].innerHTML = "Looks like this is not an email";

            // Show the error
            emailDiv.classList.add("inputError");
            
            inputValid = false;
        }
    }

    // If all the input was valid, log that the trial was started
    if(inputValid) {
        console.log("Trial started");

        // <-- Start a trial here
    }
}

// Function that checks if an email address is valid
function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}