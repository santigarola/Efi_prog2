document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle del navbar burger en móviles
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    // Animaciones de entrada 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    bulmaCarousel.attach('#video-carousel', {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});

// Efecto parallax al mover el mouse
const hero = document.querySelector(".hero-content");
document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
    hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Navbar transparente -> blanca al hacer scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
    navbar.classList.add("is-scrolled");
    } else {
    navbar.classList.remove("is-scrolled");
    }
});

// Añadimos clase para mobile cuando navbar es transparente
const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {
    if (window.scrollY > 50) {
    navbar.classList.remove("is-transparent-mobile");
    navbar.classList.add("is-scrolled");
    } else {
    navbar.classList.add("is-transparent-mobile");
    navbar.classList.remove("is-scrolled");
    }
}

window.addEventListener("scroll", handleNavbarScroll);
document.addEventListener("DOMContentLoaded", handleNavbarScroll);


// Activar el menú hamburguesa en Bulma
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('#navbarMenu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});

