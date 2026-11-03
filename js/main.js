/**
 * Portfolio Main JavaScript
 * Handles initial setup, theme toggling, navigation highlights, and dynamic content hydration.
 */

(function () {
  'use strict';

  // State & Preferences
  const THEME_KEY = 'portfolio_theme';
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentYearSpan = document.getElementById('current-year');

  /**
   * Initialize Theme (Dark/Light mode)
   */
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  /**
   * Set dynamic current year in footer
   */
  function initFooterYear() {
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }
  }

  /**
   * Active Navigation Link Observer
   */
  function initNavigationObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /**
   * Hydrate Content from portfolioData (if loaded from data/content.js)
   */
  function hydrateContent() {
    if (typeof portfolioData === 'undefined') return;

    // Optional dynamic sync with data/content.js
    const heroName = document.getElementById('hero-name');
    const heroHeadline = document.getElementById('hero-headline');
    const heroBio = document.getElementById('hero-bio');

    if (portfolioData.profile) {
      if (heroName && portfolioData.profile.name) {
        heroName.textContent = portfolioData.profile.name;
      }
      if (heroHeadline && portfolioData.profile.headline) {
        heroHeadline.textContent = portfolioData.profile.headline;
      }
      if (heroBio && portfolioData.profile.shortBio) {
        heroBio.textContent = portfolioData.profile.shortBio;
      }
    }
  }

  /**
   * App Bootstrap
   */
  function init() {
    initTheme();
    initFooterYear();
    initNavigationObserver();
    hydrateContent();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
