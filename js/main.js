/**
 * HOME CLEANING - Buleleng, Bali
 * Interactive Logic & Micro-interactions
 * Dial: MOTION 2 (Purposeful, choreographed, accessible)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Header State on Scroll
  const siteHeader = document.querySelector('.site-header');
  const handleScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Menu with Accessible States
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-menu-contact a');

  const openMobileMenu = () => {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeMobileMenu();
        mobileToggle.focus();
      }
    });
  }

  // 4. Interactive WhatsApp Consultation Message Builder
  const areaInputs = document.querySelectorAll('input[name="areaType"]');
  const timingInputs = document.querySelectorAll('input[name="timingPref"]');
  const notesInput = document.getElementById('builderNotes');
  const previewBox = document.getElementById('builderPreviewText');
  const sendBtn = document.getElementById('builderSendBtn');

  const updateWhatsAppMessage = () => {
    if (!previewBox || !sendBtn) return;

    let selectedArea = 'Home Cleaning (Umum)';
    areaInputs.forEach(input => {
      if (input.checked) {
        selectedArea = input.value;
      }
    });

    let selectedTiming = 'Secepatnya / Fleksibel';
    timingInputs.forEach(input => {
      if (input.checked) {
        selectedTiming = input.value;
      }
    });

    const customNotes = notesInput ? notesInput.value.trim() : '';

    let message = `Halo HOME CLEANING, saya ingin konsultasi layanan cleaning service di Buleleng, Bali.\n\n` +
      `• Kebutuhan: ${selectedArea}\n` +
      `• Rencana Jadwal: ${selectedTiming}\n`;

    if (customNotes) {
      message += `• Catatan Khusus: ${customNotes}\n`;
    }

    message += `\nMohon info ketersediaan jadwal dan estimasi layanannya. Terima kasih!`;

    // Update visible preview
    previewBox.textContent = message;

    // Update encoded WhatsApp link
    const waUrl = `https://wa.me/6282245758655?text=${encodeURIComponent(message)}`;
    sendBtn.setAttribute('href', waUrl);
  };

  if (areaInputs.length > 0 && previewBox && sendBtn) {
    areaInputs.forEach(input => input.addEventListener('change', updateWhatsAppMessage));
    timingInputs.forEach(input => input.addEventListener('change', updateWhatsAppMessage));
    if (notesInput) {
      notesInput.addEventListener('input', updateWhatsAppMessage);
    }
    updateWhatsAppMessage();
  }

  // 5. Back to Top Smooth Scroll
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // 6. Scroll Reveal Observer (Respects prefers-reduced-motion)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
});
