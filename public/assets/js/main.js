const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mousemove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty('--mouse-x', `${x}%`);
    hero.style.setProperty('--mouse-y', `${y}%`);
  });
}

const counters = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const finalValue = parseInt(element.dataset.counter, 10);
    let current = 0;
    const increment = Math.ceil(finalValue / 120);
    const updateCounter = () => {
      current += increment;
      if (current >= finalValue) {
        element.textContent = finalValue.toLocaleString();
        return;
      }
      element.textContent = current.toLocaleString();
      requestAnimationFrame(updateCounter);
    };
    updateCounter();
    observer.unobserve(element);
  });
}, { threshold: 0.6 });

counters.forEach((counter) => counterObserver.observe(counter));

const parallaxItems = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  parallaxItems.forEach((item) => {
    const depth = item.dataset.parallax || 12;
    item.style.transform = `translateY(${scroll / depth}px)`;
  });
});

const stickyCTA = document.querySelector('.sticky-cta');
if (stickyCTA) {
  const toggleSticky = () => {
    if (window.innerWidth < 720) {
      stickyCTA.classList.add('visible');
    } else {
      stickyCTA.classList.remove('visible');
    }
  };
  toggleSticky();
  window.addEventListener('resize', toggleSticky);
}
