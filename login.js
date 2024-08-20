document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const ownerEmail = "owner@example.com"; // Replace with the owner's actual email

    if (email === ownerEmail) {
        localStorage.setItem('loggedIn', 'true'); // Set logged-in state
        window.location.href = 'owner.html'; // Redirect to the owner management page
    } else {
        localStorage.setItem('loggedIn', 'true'); // Set logged-in state
        window.location.href = 'store.html'; // Redirect to the regular store page
    }
});
