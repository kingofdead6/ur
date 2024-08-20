

window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (window.scrollY > 100) {
        hero.classList.add('shrink');
    } else { 
        hero.classList.remove('shrink');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const loginStatus = document.getElementById('login-status');
    
    function updateLoginStatus() {
        if (localStorage.getItem('loggedIn') === 'true') {
            loginStatus.innerHTML = '<span id="logout-link">Logged In</span>';
        } else {
            loginStatus.innerHTML = '<a href="login.html">Login</a>';
        }
    }

    updateLoginStatus();

    // Add a click event to log out
    loginStatus.addEventListener('click', function() {
        if (localStorage.getItem('loggedIn') === 'true') {
            localStorage.removeItem('loggedIn'); // Clear login state
            updateLoginStatus(); // Update the UI to show "Login" link
            window.location.href = 'index.html'; // Redirect to homepage after logging out
        }
    });
});


/*window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.pageYOffset;


    let translateY = scrollPosition * 0.5;

    const heroHeight = document.querySelector('.hero').offsetHeight;
    const heroImageBottom = heroImage.offsetTop + heroImage.offsetHeight;

    translateY = Math.min(translateY, heroImageBottom - heroHeight);

    heroContent.style.transform = 'translateY(' + translateY + 'px)';
});*/

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            
            if (href.includes("#")) { // Check if 'href' contains '#'
                const [page, targetId] = href.split('#');

                if (page === "" || page === window.location.pathname.split("/").pop()) {
                    // If the link is to the same page, prevent default behavior and scroll
                    event.preventDefault();
                    
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        const targetTop = targetElement.offsetTop;
                        const scrollTo = targetTop - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);
                        window.scrollTo({
                            top: scrollTo,
                            behavior: 'smooth'
                        });
                    }
                } 
                // Otherwise, the browser will naturally navigate to the new page with the fragment
            }
        });
    });
});




const slider = document.querySelector('.shirt-slider');
const slides = document.querySelectorAll('.shirt-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;
const size = slides[0].clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter >= slides.length - 1) {
        counter = -1;  // Reset to -1 so when incremented, it becomes 0 (first slide)
    }
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = 'translateX(' + (-size * ++counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = slides.length;  // Set to slides.length so when decremented, it becomes slides.length-1 (last slide)
    }
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = 'translateX(' + (-size * --counter) + 'px)';
});
