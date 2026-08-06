// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});


// Highlight navigation while scrolling

window.addEventListener('scroll', () => {

    const nav = document.querySelector('.navbar');

    if(window.scrollY > 50){

        nav.style.background = "#061324";

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    }

    else{

        nav.style.background = "transparent";

        nav.style.boxShadow = "none";

    }

});
