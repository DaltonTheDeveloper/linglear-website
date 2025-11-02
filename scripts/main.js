const rippleSection = document.querySelector('.hero');
if (rippleSection) {
  const activateRipple = () => {
    rippleSection.classList.add('ripple-active');
    clearTimeout(window.__rippleTimeout);
    window.__rippleTimeout = setTimeout(() => {
      rippleSection.classList.remove('ripple-active');
    }, 600);
  };

  rippleSection.addEventListener('mousemove', activateRipple);
  rippleSection.addEventListener('touchstart', activateRipple);
}

const counters = document.querySelectorAll('[data-count]');
const animateCounter = (counter) => {
  const target = Number(counter.dataset.count || '0');
  const duration = 2000;
  const startTime = performance.now();

  const step = (timestamp) => {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * target);
    counter.textContent = value.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

if (counters.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const tabs = document.querySelectorAll('[data-tab-group]');
tabs.forEach((tabGroup) => {
  const buttons = tabGroup.querySelectorAll('[data-tab-target]');
  const panels = tabGroup.querySelectorAll('[data-tab-panel]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tabTarget;
      buttons.forEach((btn) => btn.classList.remove('active'));
      panels.forEach((panel) => {
        if (panel.dataset.tabPanel === target) {
          panel.hidden = false;
          panel.classList.add('active');
        } else {
          panel.hidden = true;
          panel.classList.remove('active');
        }
      });
      button.classList.add('active');
    });
  });

  const firstButton = buttons[0];
  if (firstButton) {
    firstButton.click();
  }
});

const stickyCta = document.querySelector('.sticky-cta');
if (stickyCta) {
  const handleScroll = () => {
    if (window.innerWidth > 768) {
      stickyCta.classList.remove('visible');
      return;
    }
    if (window.scrollY > 360) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}
