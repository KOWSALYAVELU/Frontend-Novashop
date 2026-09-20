var sidenav= document.querySelector(".side-navbar")


function showNavbar()
{
 sidenav.style.left="0";
}


function closeNavbar()
{
 sidenav.style.left="-60%"
}


var contactForm = document.getElementById("contactForm");
var successMessage = document.getElementById("successMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        successMessage.textContent = "Message sent successfully!";
        successMessage.style.color = "green";

        contactForm.reset();

    });

}