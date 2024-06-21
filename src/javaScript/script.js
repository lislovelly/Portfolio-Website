document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll('.navbar a');

    // Array de strings para exibir em rotação
    var typed = new Typed(".multiple-text", {
        strings: ["Software Development", "Backend Developer", "Security Analyst"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        
    }
 });

 window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        } 
        else {
            sec.classList.remove('show-animate');
        }  
    });
    
    const header = document.querySelector("header");
    
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}