// Login function
function login() {
    const username = document.getElementById('username').value.trim();
    if(username === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById('user-name').innerText = username;
    document.getElementById('login-form').style.display = "none";
    document.getElementById('dashboard').style.display = "block";
}

// Logout function
function logout() {
    document.getElementById('username').value = "";
    document.getElementById('dashboard').style.display = "none";
    document.getElementById('login-form').style.display = "block";
    document.getElementById('confirmation').innerText = "";
}

// Handle message form submission
document.getElementById('message-form').addEventListener('submit', function(e){
    e.preventDefault(); // prevent actual form submission
    const recipient = document.getElementById('recipient').value.trim();
    const message = document.getElementById('message').value.trim();

    if(recipient === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    document.getElementById('confirmation').innerText = `Your message to ${recipient} has been sent! 💌`;
    document.getElementById('recipient').value = "";
    document.getElementById('message').value = "";
});
