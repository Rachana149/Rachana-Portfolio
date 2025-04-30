// Function to send an email
function sendEmail(subject, message) {
    const to = "rachanamahato24@gmail.com"; // Fixed recipient email
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    // Add integration with an email service like Nodemailer or an API here
}

// Export the function for use in other files
module.exports = {
    sendEmail
};
