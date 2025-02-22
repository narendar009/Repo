// Basic JS for any future functionality, if needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Adding smooth scrolling to the navigation links
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
