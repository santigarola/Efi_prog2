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
document.getElementById('btnNewCollection').addEventListener('click', () => {
    const section = document.getElementById('new-collection');
    section.scrollIntoView({ behavior: 'smooth' });
});

  // Animaciones de entrada
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        }
    });
    });


    // Menu hamburguesa cierra al tocar una opcion
document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', () => {
    const menu = document.querySelector('#navbarMenu');
    const burger = document.querySelector('.navbar-burger');

    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
        burger.classList.remove('is-active');
    }
    });
});


document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  // Carrusel (si existe el componente)
    if (typeof bulmaCarousel !== "undefined") {
    bulmaCarousel.attach("#video-carousel", {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    }

  // Mostrar automáticamente el año actual en el footer
    const yearSpan = document.getElementById("anio");
    if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
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


// Movimiento lateral del carrusel
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
