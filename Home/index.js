document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar a");
    const loginPrompt = document.getElementById("loginPrompt");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            loginPrompt.style.display = "block";
            setTimeout(() => {
                loginPrompt.style.display = "none";
            }, 3000); // Hide the message after 3 seconds
        });
    });
});
