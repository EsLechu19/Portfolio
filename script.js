// Script to handle sidebar interactivity and animations

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // Mobile Menu Toggle Logic
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // Scroll reveal effect for elements present in the page
    const revealElements = document.querySelectorAll('.project-card, .skill-card, .about-container, .hero-content, .skill-item');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    if (revealElements.length > 0) {
        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
        });

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check
    }

    // Skills Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');

                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked button and target content
                btn.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
                
                // Re-initialize reveal for the newly visible items
                revealOnScroll();
            });
        });
    }
});
/* ===== LOADER ===== */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1500); // tiempo en milisegundos
});
