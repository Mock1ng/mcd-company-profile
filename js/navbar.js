const burgerButton = document.querySelector('.hamburger');
const menuWrapper = document.querySelector('.menu-wrapper');
const outLayer = document.querySelector('.outlayer');
const indicator = document.querySelector('.active-indicator');

const homeNavlink = document.querySelector('#home');
const aboutUsNavlink = document.querySelector('#about-us');
const programNavlink = document.querySelector('#program');
const pengajarNavlink = document.querySelector('#pengajar');
const blogNavlink = document.querySelector('#blog');

const menu = [homeNavlink, aboutUsNavlink, programNavlink, pengajarNavlink, blogNavlink];

const navbarMobile = () => {
    burgerButton.onclick = () => {
        menuWrapper.classList.toggle('nav-active');
        outLayer.classList.toggle('display-block');
    }
}

const slidingIndicator = () => {
    menuWrapper.onmouseover = e => {
        if (e.target.id == 'home') {
            indicator.style.transform = 'translateX(0)';
        } else if (e.target.id == 'about-us') {
            indicator.style.transform = 'translateX(120px)';
        } else if (e.target.id == 'program') {
            indicator.style.transform = 'translateX(240px)';
        } else if (e.target.id == 'pengajar') {
            indicator.style.transform = 'translateX(360px)';
        } else if (e.target.id == 'blog') {
            indicator.style.transform = 'translateX(480px)';
        }
    }


    let activated = indicator.style.transform;
    menuWrapper.onclick = e => {
        for (let i = 0; i < 5; i++) {
            menu[i].classList.remove('active');
        }

        if (e.target.id == 'home') {
            indicator.style.transform = 'translateX(0)';
            e.target.classList.add('active');
            activated = 'translateX(0)';
        } else if (e.target.id == 'about-us') {
            indicator.style.transform = 'translateX(120px)';
            e.target.classList.add('active');
            activated = 'translateX(120px)';
        } else if (e.target.id == 'program') {
            indicator.style.transform = 'translateX(240px)';
            e.target.classList.add('active');
            activated = 'translateX(240px)';
        } else if (e.target.id == 'pengajar') {
            indicator.style.transform = 'translateX(360px)';
            e.target.classList.add('active');
            activated = 'translateX(360px)';
        } else if (e.target.id == 'blog') {
            indicator.style.transform = 'translateX(480px)';
            e.target.classList.add('active');
            activated = 'translateX(480px)';
        }
    }

    menuWrapper.onmouseout = () => {
        indicator.style.transform = activated
    }
}

navbarMobile();
slidingIndicator();