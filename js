document.addEventListener('DOMContentLoaded', () => {
    // Session Check
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isAuthPage = currentPage === 'auth.html';
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn && !isAuthPage) {
        window.location.href = 'auth.html';
        return;
    }

    // Navigation Scroll Effect
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // Active Link Highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--accent)';
            link.style.fontWeight = '600';
        }
    });

    // Mobile Menu (Simple placeholder)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            alert('Mobile menu feature coming soon!');
        });
    }

    // Scroll reveal implementation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// Auth Helpers
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'auth.html';
}

