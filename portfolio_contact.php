<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from the client
    $postData = json_decode(file_get_contents('php://input'), true);
    $name = $postData['name'];
    $email = $postData['email'];
    $message = $postData['message'];

    // Admin email (replace with your admin email address)
    $adminEmail = 'ekema3212@gmail.com';

    // Subject and message for the email
    $subject = 'New Contact Form Submission';
    $messageBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Send email
    $success = mail($adminEmail, $subject, $messageBody);

    // Return a response to the client
    if ($success) {
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
    }
} else {
    // Handle the case when the request method is not POST
    http_response_code(405);
    echo 'Method Not Allowed';
}
?>