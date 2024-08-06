document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const links = document.querySelector('.links');

    // Ensure menu is closed initially
    links.classList.remove('active');

    menuBtn.addEventListener('click', function() {
        links.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll('.links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            links.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!links.contains(event.target) && !menuBtn.contains(event.target)) {
            links.classList.remove('active');
        }
    });
});