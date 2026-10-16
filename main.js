/**
 * ==============================================================================
 * AMONG US: EMERGENCY MEETING - JAVASCRIPT CONTROLLER
 * Vanilla JS covering countdown timer, form validation, color picker,
 * Emergency Meeting modal popup, mobile navigation, and scroll reveals.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initMobileNav();
  initColorPicker();
  initRegistrationForm();
  initEmergencyModal();
  initScrollAnimations();
});

/* ------------------------------------------------------------------------------
 * 1. LIVE COUNTDOWN TIMER
 * Counts down to: 17 October 2026, 5:00 PM (17:00:00)
 * ------------------------------------------------------------------------------ */
function initCountdown() {
  // Target event date: October 17, 2026 at 17:00:00 local time
  const targetDate = new Date('2026-10-17T17:00:00');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const statusEl = document.getElementById('countdown-status');
  const gridEl = document.getElementById('countdown-grid');

  function updateTimer() {
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();

    // Check if the event has arrived or passed
    if (timeDiff <= 0) {
      if (gridEl) gridEl.style.display = 'none';
      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.textContent = 'The meeting has started!';
      }
      return;
    }

    // Time unit conversions
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Render with 2-digit padding
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  // Initial calculation + 1s interval
  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ------------------------------------------------------------------------------
 * 2. MOBILE NAVIGATION & NAVBAR SCROLL BEHAVIOR
 * ------------------------------------------------------------------------------ */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('nav-open', !isExpanded);
    });

    // Close mobile menu when any nav item is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav-open');
      });
    });
  }

  // Add subtle shadow to navbar when scrolled down
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });
}

/* ------------------------------------------------------------------------------
 * 3. INTERACTIVE CREWMATE COLOR PICKER
 * ------------------------------------------------------------------------------ */
function initColorPicker() {
  const swatches = document.querySelectorAll('.color-swatch');
  const colorDisplay = document.getElementById('color-name-display');
  const hiddenInput = document.getElementById('suitColor');

  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      // Remove active from all
      swatches.forEach((s) => {
        s.classList.remove('active');
        s.setAttribute('aria-checked', 'false');
      });

      // Activate clicked
      swatch.classList.add('active');
      swatch.setAttribute('aria-checked', 'true');

      const colorName = swatch.getAttribute('data-color') || 'Red';
      if (colorDisplay) colorDisplay.textContent = colorName;
      if (hiddenInput) hiddenInput.value = colorName;
    });
  });
}

/* ------------------------------------------------------------------------------
 * 4. REGISTRATION FORM VALIDATION & MODAL DISPATCH
 * ------------------------------------------------------------------------------ */
function initRegistrationForm() {
  const form = document.getElementById('registration-form');
  if (!form) return;

  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  const nameError = document.getElementById('fullName-error');
  const emailError = document.getElementById('email-error');
  const phoneError = document.getElementById('phone-error');

  // Helper validation functions
  function validateName(value) {
    if (!value || value.trim().length === 0) {
      return 'Crewmate name is required to enter the ship!';
    }
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters.';
    }
    return '';
  }

  function validateEmail(value) {
    if (!value || value.trim().length === 0) {
      return 'Astronaut email address is required!';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
      return 'Please enter a valid email address (e.g., student@domain.com)';
    }
    return '';
  }

  function validatePhone(value) {
    // Phone is optional; only validate if not empty
    if (!value || value.trim().length === 0) {
      return '';
    }
    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    if (!phoneRegex.test(value.trim())) {
      return 'Please enter a valid telephone format or leave it blank.';
    }
    return '';
  }

  // Clear errors on input
  fullNameInput?.addEventListener('input', () => {
    fullNameInput.classList.remove('is-invalid');
    if (nameError) nameError.textContent = '';
  });

  emailInput?.addEventListener('input', () => {
    emailInput.classList.remove('is-invalid');
    if (emailError) emailError.textContent = '';
  });

  phoneInput?.addEventListener('input', () => {
    phoneInput.classList.remove('is-invalid');
    if (phoneError) phoneError.textContent = '';
  });

  // Handle Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Full Name
    const nameVal = fullNameInput ? fullNameInput.value : '';
    const nameErr = validateName(nameVal);
    if (nameErr) {
      isValid = false;
      if (fullNameInput) fullNameInput.classList.add('is-invalid');
      if (nameError) nameError.textContent = nameErr;
    }

    // Validate Email
    const emailVal = emailInput ? emailInput.value : '';
    const emailErr = validateEmail(emailVal);
    if (emailErr) {
      isValid = false;
      if (emailInput) emailInput.classList.add('is-invalid');
      if (emailError) emailError.textContent = emailErr;
    }

    // Validate Phone (optional)
    const phoneVal = phoneInput ? phoneInput.value : '';
    const phoneErr = validatePhone(phoneVal);
    if (phoneErr) {
      isValid = false;
      if (phoneInput) phoneInput.classList.add('is-invalid');
      if (phoneError) phoneError.textContent = phoneErr;
    }

    // If validation fails, focus the first invalid input
    if (!isValid) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Successful mock registration (DO NOT SEND DATA ANYWHERE)
    const suitColor = document.getElementById('suitColor')?.value || 'Red';
    openEmergencyModal(nameVal.trim(), suitColor);
    form.reset();

    // Reset color swatch to Red default
    const redSwatch = document.querySelector('.color-swatch[data-color="Red"]');
    if (redSwatch) redSwatch.click();
  });
}

/* ------------------------------------------------------------------------------
 * 5. EMERGENCY MEETING POPUP MODAL
 * ------------------------------------------------------------------------------ */
let activeModalKeyHandler = null;

function openEmergencyModal(userName, colorName) {
  const modal = document.getElementById('emergency-modal');
  const nameEl = document.getElementById('registered-name');
  const colorEl = document.getElementById('registered-color');
  const avatarUse = document.querySelector('#modal-crewmate-avatar use');

  if (!modal) return;

  if (nameEl) nameEl.textContent = userName;
  if (colorEl) colorEl.textContent = colorName;

  // Set modal crewmate suit color class
  if (avatarUse) {
    const colorClass = `crewmate-${colorName.toLowerCase()}`;
    avatarUse.setAttribute('class', colorClass);
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');

  // Lock background scroll
  document.body.style.overflow = 'hidden';

  // Handle ESC key to dismiss
  activeModalKeyHandler = (e) => {
    if (e.key === 'Escape') {
      closeEmergencyModal();
    }
  };
  window.addEventListener('keydown', activeModalKeyHandler);

  // Focus dismiss button
  const confirmBtn = document.getElementById('modal-confirm-btn');
  if (confirmBtn) setTimeout(() => confirmBtn.focus(), 100);
}

function closeEmergencyModal() {
  const modal = document.getElementById('emergency-modal');
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');

  // Restore background scroll
  document.body.style.overflow = '';

  if (activeModalKeyHandler) {
    window.removeEventListener('keydown', activeModalKeyHandler);
    activeModalKeyHandler = null;
  }
}

function initEmergencyModal() {
  const modal = document.getElementById('emergency-modal');
  const closeBtn = document.getElementById('modal-close');
  const confirmBtn = document.getElementById('modal-confirm-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeEmergencyModal);
  if (confirmBtn) confirmBtn.addEventListener('click', closeEmergencyModal);

  // Close when clicking directly on background backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeEmergencyModal();
      }
    });
  }
}

/* ------------------------------------------------------------------------------
 * 6. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
 * ------------------------------------------------------------------------------ */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach((el) => observer.observe(el));
}
