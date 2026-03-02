document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
        appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Subtle bokeh movement on mouse move
    const circles = document.querySelectorAll('.bokeh-circle');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        circles.forEach((circle, index) => {
            const speed = (index + 1) * 15;
            const moveX = (x * speed) - (speed / 2);
            const moveY = (y * speed) - (speed / 2);
            circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // CTA Button subtle effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            ctaButton.innerText = "Sent with a smile 🙂";
            ctaButton.style.backgroundColor = "rgba(251, 195, 188, 0.6)";
            ctaButton.style.color = "white";
            ctaButton.style.cursor = "default";
            ctaButton.disabled = true;
        });
    }

    // Hide scroll-down indicator after first scroll
    const scrollDown = document.querySelector('.scroll-down');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollDown.style.opacity = '0';
            scrollDown.style.pointerEvents = 'none';
        } else {
            scrollDown.style.opacity = '1';
            scrollDown.style.pointerEvents = 'all';
        }
    });
});
