window.onload = function() {
    ScrollReveal().reveal('.class1', {
        delay: 500,
        distance: '200px',
        origin: 'left',
        opacity: .1,
        desktop: true,
    });
    ScrollReveal().reveal('.class2', {
        delay: 500,
        rotate: {
            x: 0,
            y: 0,
            z: 180,
        },
        scale: 0.5,
        desktop: true,
    });
    ScrollReveal().reveal('.class3', {
        delay: 550,
        distance: '50px',
        origin: 'right',
        desktop: true,
    });
    ScrollReveal().reveal('.class4', {
        delay: 550,
        scale: 0.8,
        rotate: {
            x: 0,
            y: 0,
            z: 45,
        },
        desktop: true,
    });
    ScrollReveal().reveal('.class5', {
        delay: 550,
        scale: 0.2,
        opacity: .1,
        desktop: true,
    });
};
