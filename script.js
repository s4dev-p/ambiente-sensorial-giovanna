// This file is ready for any future JavaScript functionality.
console.log("Ambiente Sensorial site loaded.");

document.addEventListener('DOMContentLoaded', () => {

    // --- Header shadow on scroll ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });
    }

    // --- Mobile menu handler ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    if (mobileMenu) {
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- Vision Drawer handler ---
    const drawerContainer = document.getElementById('vision-drawer-container');
    const drawer = document.getElementById('vision-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const visionTriggers = document.querySelectorAll('.vision-trigger');

    const openDrawer = () => {
        if (!drawerContainer || !drawer) return;
        
        drawerContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        requestAnimationFrame(() => {
            drawer.classList.remove('translate-y-full');
        });
    };

    const closeDrawer = () => {
        if (!drawerContainer || !drawer) return;

        drawer.classList.add('translate-y-full');
        
        const onTransitionEnd = () => {
            drawerContainer.classList.add('hidden');
            document.body.style.overflow = '';
            drawer.removeEventListener('transitionend', onTransitionEnd);
        };
        
        drawer.addEventListener('transitionend', onTransitionEnd);
    };

    visionTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openDrawer();
        });
    });

    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener('click', closeDrawer);
    }

    if (drawerContainer) {
        // Close drawer when clicking on the overlay background
        drawerContainer.addEventListener('click', (e) => {
            if (e.target === drawerContainer) {
                closeDrawer();
            }
        });
    }

    // --- Swipe down to close drawer on mobile ---
    let touchStartY = 0;
    let touchCurrentY = 0;
    const swipeThreshold = 50; // Minimum pixel distance for a swipe

    if (drawer) {
        const handle = drawer.querySelector('.cursor-grab');

        const onTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
            drawer.style.transition = 'none'; // Disable transition for smooth dragging
        };

        const onTouchMove = (e) => {
            touchCurrentY = e.touches[0].clientY;
            const diffY = touchCurrentY - touchStartY;
            if (diffY > 0) { // Only allow dragging down
                drawer.style.transform = `translateY(${diffY}px)`;
            }
        };

        const onTouchEnd = (e) => {
            const diffY = e.changedTouches[0].clientY - touchStartY;
            drawer.style.transition = ''; // Re-enable transition
            drawer.style.transform = ''; // Reset transform
            
            if (diffY > swipeThreshold) {
                closeDrawer();
            }
        };

        if (handle) {
            handle.addEventListener('touchstart', onTouchStart, { passive: true });
            handle.addEventListener('touchmove', onTouchMove, { passive: true });
            handle.addEventListener('touchend', onTouchEnd, { passive: true });
        }
    }
});