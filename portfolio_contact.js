function submitForm() {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('user-message').value;

    // Send data to the server
    fetch('send-email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the response as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
}