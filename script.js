document.addEventListener("DOMContentLoaded", function () {
    // 1. Scroll Reveal Observer
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Slightly higher threshold for deliberate reveal
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // 2. Parallax Effect for Hero Image
    // We only enable this on Desktop to save mobile battery/performance
    if (window.innerWidth > 900) {
        document.addEventListener('mousemove', (e) => {
            const targets = document.querySelectorAll('.parallax-target');
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            targets.forEach(target => {
                const speed = target.getAttribute('data-speed') || 0.05;
                const moveX = x * speed * 20;
                const moveY = y * speed * 20;
                target.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }

    // 3. Smooth Scroll correction for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const headerOffset = 90;

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
