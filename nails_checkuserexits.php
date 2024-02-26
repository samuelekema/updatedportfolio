<?php
// Establish a connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "glissglow";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process user login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST["email"];
    $password = $_POST["password"];

    // SQL query to check if the user exists
    $sql = "SELECT * FROM clients WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User exists, display error message
        echo '<p style="color: red;">User already exists. Please choose a different email or login.</p>';
    } else {
        // User does not exist, proceed with login logic
        // You can add your login logic here
        // For example, check the password and set session variables
        echo "Login successful";
        header('location:nails.php');
    }
}

// Close the database connection
$conn->close();
?>