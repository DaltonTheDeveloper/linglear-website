const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty('--mouse-x', `${x}%`);
    hero.style.setProperty('--mouse-y', `${y}%`);
  });
}

const counterElements = document.querySelectorAll('[data-counter]');
if (counterElements.length) {
  const options = {
    threshold: 0.6,
  };
  const animateCounter = (element) => {
    const finalValue = parseInt(element.dataset.counter, 10);
    const duration = 1800;
    const start = performance.now();

    const update = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * finalValue);
      element.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, options);

  counterElements.forEach((element) => observer.observe(element));
}

const parallaxSections = document.querySelectorAll('[data-parallax]');
if (parallaxSections.length) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    parallaxSections.forEach((section) => {
      section.style.backgroundPosition = `center ${-offset * 0.1}px`;
    });
  });
}

const accordions = document.querySelectorAll('[data-accordion] button');
accordions.forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const content = button.nextElementSibling;
    button.setAttribute('aria-expanded', !expanded);
    content.hidden = expanded;
  });
});
