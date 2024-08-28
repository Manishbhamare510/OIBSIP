function clearForm() {
  document.getElementById("registrationForm").reset();
}

function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  let fullName = document.getElementById("fullName").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let courses = document.getElementsByName("course");

  // Full Name Validation
  if (fullName === "") {
    alert("Full Name should not be empty.");
    return false;
  }

  // Mobile Number Validation
  let mobilePattern = /^[6-9]\d{9}$/;
  if (!mobilePattern.test(mobile)) {
    alert(
      "Mobile number should be a 10-digit number starting with 6, 7, 8, or 9."
    );
    return false;
  }

  // Email Validation
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Course Selection Validation
  let isCourseSelected = false;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].checked) {
      isCourseSelected = true;
      break;
    }
  }
  if (!isCourseSelected) {
    alert("Please select at least one course.");
    return false;
  }

  alert("Form submitted successfully!");
  document.getElementById("registrationForm").submit();
}
