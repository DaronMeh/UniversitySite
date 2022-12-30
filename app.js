
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenItems = document.querySelectorAll('.hidden');
hiddenItems.forEach((it) => observer.observe(it));



const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobileNav.classList.toggle('is-open');
});