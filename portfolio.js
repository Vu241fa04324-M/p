// Mobile menu

function showMenu() {
    const menu = document.getElementById("navLinks");

    menu.classList.toggle("show");
}


// Contact form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been received.");

    document.getElementById("contactForm").reset();

});


// Current year

document.getElementById("year").textContent = new Date().getFullYear();