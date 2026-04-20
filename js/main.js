// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Active nav link
  const links = document.querySelectorAll('.nav-links a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.car-card, .why-item, .testimonial, .team-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Sidebar checkbox filter (listing page)
  const checkboxes = document.querySelectorAll('.sidebar-option input[type="checkbox"]');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      // In a real app, filter car cards here
      const cards = document.querySelectorAll('.car-card');
      cards.forEach(card => { card.style.display = 'block'; });
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#22c55e';
      setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
    });
  }

  // Finance calculator
  const calcPrice = document.getElementById('calcPrice');
  const calcDown = document.getElementById('calcDown');
  const calcTerm = document.getElementById('calcTerm');
  const calcResult = document.getElementById('calcResult');

  function calculatePayment() {
    if (!calcPrice || !calcResult) return;
    const price = parseFloat(calcPrice.value) || 0;
    const down = parseFloat(calcDown.value) || 0;
    const term = parseInt(calcTerm?.value) || 60;
    const rate = 0.069 / 12;
    const loan = price - down;
    if (loan <= 0) { calcResult.textContent = '$0 / mo'; return; }
    const monthly = loan * rate / (1 - Math.pow(1 + rate, -term));
    calcResult.textContent = '$' + monthly.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' / mo';
  }

  [calcPrice, calcDown, calcTerm].forEach(el => {
    if (el) el.addEventListener('input', calculatePayment);
  });
  calculatePayment();
});
