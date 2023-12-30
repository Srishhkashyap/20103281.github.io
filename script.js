function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert('Please enter a valid email address.');
      return;
    }
  

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain at least one uppercase letter, one number, and only @ as a special character.');
      return;
    }

    if (password === "SmartServTest@123") {
   
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid password. Please try again.');
    }
  
  }
 
function forgotPassword() {
  
    var emailSubject = encodeURIComponent("Password Reset Request");
    var emailBody = encodeURIComponent("Dear SmartServ Support,\n\nI have forgotten my password and would like to request a password reset. Please assist me.\n\nSincerely,\n[Your Name]");
    var mailtoLink = "mailto:support@smartserv.io?subject=" + emailSubject + "&body=" + emailBody;

 
    window.location.href = mailtoLink;
}  


  
  