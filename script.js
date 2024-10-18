document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (fullName && email && password) {
        alert("Sign Up Successful!");
        // Add more actions here like sending the data to a server.
    } else {
        alert("Please fill in all the fields.");
    }
});
