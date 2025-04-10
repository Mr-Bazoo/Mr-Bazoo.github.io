/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

let currentImageIndex = 0;
const images = [
    'assets/img/Deel1.png',
    'assets/img/Deel2.png',
    'assets/img/Deel3.png',
    'assets/img/Deel4.png',
    'assets/img/Deel5.png'
];

function showImage(src, index) {
    currentImageIndex = index;
    document.getElementById('modalImage').src = src;
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById('modalImage').src = images[currentImageIndex];
}

// Voeg event listeners toe voor de carousel afbeeldingen
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-image');
    carouselImages.forEach(img => {
        img.addEventListener('click', function() {
            showImage(this.src, images.indexOf(this.src));
        });
    });
});