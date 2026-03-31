const isMobile = window.innerWidth < 768;

const sr = ScrollReveal({
    distance: isMobile ? '0px' : '60px',
    duration: isMobile ? 0 : 1200,
    delay: 100,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: isMobile ? 1 : 0,
    scale: isMobile ? 1 : 0.98,
    reset: false,
    mobile: false,
    viewFactor: 0.2
});

sr.reveal('#home', {
    origin: 'top',
    duration: 1400
});

sr.reveal('.server-info, .ranking', {
    origin: 'top',
    delay: 200
});


sr.reveal(
    '.home-classic, .home-title, .home-subtitle, .home-buttons',
    {
        origin: 'left',
        interval: 150,
        distance: '70px'
    }
);


sr.reveal('.news-scroll', {
    origin: 'bottom',
    delay: 250,
    distance: '80px'
});

sr.reveal('.rank-scroll', {
    origin: 'right',
    interval: 120
});

sr.reveal('.playhere-scroll', {
    origin: 'right',
    delay: 200,
});
