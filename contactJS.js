<script>
// Get all the forms we want to validate
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
  form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
});

// Validation for First name field
var firstName = document.getElementById("validationCustom01");
firstName.addEventListener("input", function (event) {
  if (firstName.validity.patternMismatch) {
    firstName.setCustomValidity("Please enter at least 3 characters");
  } else {
    firstName.setCustomValidity("");
  }
});

// Validation for Last name field
var lastName = document.getElementById("validationCustom02");
lastName.addEventListener("input", function (event) {
  if (lastName.validity.valueMissing) {
    lastName.setCustomValidity("Please enter your last name");
  } else {
    lastName.setCustomValidity("");
  }
});

// Validation for Email field
var email = document.getElementById("validationCustomEmail");
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
});

// Validation for City field
var city = document.getElementById("validationCustom03");
city.addEventListener("input", function (event) {
  if (city.validity.valueMissing) {
    city.setCustomValidity("Please enter your city");
  } else {
    city.setCustomValidity("");
  }
});

// Validation for Zip field
var zip = document.getElementById("validationCustom04");
zip.addEventListener("input", function (event) {
  if (zip.validity.valueMissing) {
    zip.setCustomValidity("Please enter your zip code");
  } else {
    zip.setCustomValidity("");
  }
});
</script>
