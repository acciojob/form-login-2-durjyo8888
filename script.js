//your JS code here. If required.
function displayFormData() {
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const phoneNumber = document.getElementById('phoneNumber').value;
	const email = document.getElementById('email').value;

	const formData = '
	
	First Name:${firstName}
	Last Name:${lastName}
	Phone Number:${phoneNumber}
	Email Id:${email}
	';
	alert(formData)
}
