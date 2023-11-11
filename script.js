//your JS code here. If required.
function displayFormData() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var phoneNumber = document.getElementById('phoneNumber').value;
	var email = document.getElementById('email').value;

	var alertMessage = "First Name: " + firstName + "\n"
                             + "Last Name: " + lastName + "\n"
                             + "Phone Number: " + phoneNumber + "\n"
                             + "Email ID: " + email;
	alert(alertMessage)
}
