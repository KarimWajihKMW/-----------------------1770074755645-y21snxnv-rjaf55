console.log('Akwadra Super Builder Initialized');

document.addEventListener('DOMContentLoaded', () => {
    // --- EXISTING FUNCTIONALITY (PRESERVED) ---
    const card = document.querySelector('.card');
    if (card) {
        card.addEventListener('click', () => {
            console.log('تم النقر على البطاقة!');
            alert('أهلاً بك في عالم البناء بدون كود!');
        });
    }
    // ------------------------------------------

    // --- NEW LANDING PAGE FEATURES ---

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Scroll Effect (Glassmorphism on scroll)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.querySelector('.glass-effect').classList.add('bg-white/90');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.querySelector('.glass-effect').classList.remove('bg-white/90');
        }
    });

    // Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Form Submission Handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = signupForm.querySelector('input[type="email"]');
            const btn = signupForm.querySelector('button');
            const originalBtnText = btn.innerText;

            // Simulate loading state
            btn.innerText = 'جاري التسجيل...';
            btn.disabled = true;
            btn.classList.add('opacity-75');

            setTimeout(() => {
                // Success State
                btn.innerText = 'تم التسجيل بنجاح! 🎉';
                btn.classList.remove('bg-slate-900', 'hover:bg-slate-800');
                btn.classList.add('bg-green-600', 'hover:bg-green-500');
                
                emailInput.value = '';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    btn.innerText = originalBtnText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-75', 'bg-green-600', 'hover:bg-green-500');
                    btn.classList.add('bg-slate-900', 'hover:bg-slate-800');
                }, 3000);
            }, 1500);
        });
    }
});