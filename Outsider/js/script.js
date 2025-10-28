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


