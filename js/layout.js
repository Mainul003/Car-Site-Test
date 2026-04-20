// Shared layout injector
function injectLayout(activePage) {
  const nav = `
  <nav>
    <a href="index.html" class="nav-logo">AUTO<span>APEX</span></a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="inventory.html" ${activePage==='inventory'?'class="active"':''}>Inventory</a></li>
      <li><a href="finance.html" ${activePage==='finance'?'class="active"':''}>Finance</a></li>
      <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
      <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
    </ul>
    <a href="contact.html" class="nav-cta">Get a Quote</a>
    <div class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>`;

  const footer = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">AUTO<span style="color:var(--red)">APEX</span></div>
        <p>Dhaka's premier destination for luxury and performance vehicles. Trusted since 2008.</p>
      </div>
      <div class="footer-col">
        <h4>Inventory</h4>
        <ul>
          <li><a href="inventory.html">New Arrivals</a></li>
          <li><a href="inventory.html">Luxury Cars</a></li>
          <li><a href="inventory.html">SUVs & 4WDs</a></li>
          <li><a href="inventory.html">Sports Cars</a></li>
          <li><a href="inventory.html">Electric Vehicles</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="finance.html">Car Finance</a></li>
          <li><a href="contact.html">Trade-In</a></li>
          <li><a href="contact.html">Test Drive</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Careers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+8801700000000">+880 1700-000000</a></li>
          <li><a href="mailto:info@autoapex.com.bd">info@autoapex.com.bd</a></li>
          <li><a href="#">Gulshan-2, Dhaka</a></li>
          <li><a href="#">Sat–Thu: 9AM–7PM</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 AutoApex Bangladesh. All rights reserved.</span>
      <span>Privacy Policy · Terms of Use</span>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Hamburger toggle after injecting
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
}
