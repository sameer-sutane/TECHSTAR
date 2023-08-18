// Trigger animations on scroll
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroPosition = hero.getBoundingClientRect().top;

    if (heroPosition < window.innerHeight / 2) {
        hero.classList.add('animate');
    }
});
