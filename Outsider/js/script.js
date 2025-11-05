// Navbar transparente -> blanca al hacer scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("is-scrolled");
    } else {
        navbar.classList.remove("is-scrolled");
    }
});

// Toggle del menú hamburguesa en móviles
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.querySelector("#navbarMenu");

    if (burger && menu) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("is-active");
            menu.classList.toggle("is-active");
        });
    }

    // Boton NewCollection
    const btnNewCollection = document.getElementById('btnNewCollection');
    if (btnNewCollection) {
        btnNewCollection.addEventListener('click', () => {
            const section = document.getElementById('new-collection');
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });
    document.querySelectorAll(".fade-in").forEach((el) => fadeInObserver.observe(el));

    // Menu hamburguesa cierra al tocar una opcion
    document.querySelectorAll('.navbar-item').forEach(item => {
        item.addEventListener('click', () => {
            const menu = document.querySelector('#navbarMenu');
            const burger = document.querySelector('.navbar-burger');

            if (menu && burger && menu.classList.contains('is-active')) {
                menu.classList.remove('is-active');
                burger.classList.remove('is-active');
            }
        });
    });

    let videoCarouselInstance = null;
// multimedia
    if (typeof bulmaCarousel !== "undefined") {
        const carousels = bulmaCarousel.attach("#video-carousel", {
            slidesToScroll: 2,
            slidesToShow: 2,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000,
            centerMode: false,
            pagination: false,
            breakpoints: [
                {
                    changePoint: 768,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            ]
        });
        
        if (carousels.length > 0) {
            videoCarouselInstance = carousels[0];
        }
    }

    window.addEventListener('resize', () => {
        if (videoCarouselInstance) {
            videoCarouselInstance.reset();
        }
    });

    // Mostrar automáticamente el año actual en el footer
    const yearSpan = document.getElementById("anio");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Animacion de expansion del logo en el footer
    const img = document.querySelector(".img-expand");
    const footer = document.querySelector("footer");

    // CORRECCIÓN: Renombrado a "footerObserver"
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                img.classList.add("show");
            }
        });
    }, { threshold: 0.4 });

    if (footer && img) { // Asegurarse que ambos existan
        footerObserver.observe(footer);
    }

});


// Efecto parallax al mover el mouse (hero section)
const hero = document.querySelector(".hero-content");
if (hero) {
    document.addEventListener("mousemove", (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// Movimiento lateral del carrusel de PRODUCTOS
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-nav.is-prev");
const nextBtn = document.querySelector(".carousel-nav.is-next");
const verColeccionBtn = document.getElementById("ver-coleccion");

if (track && verColeccionBtn && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -300, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: 300, behavior: "smooth" });
    });
}