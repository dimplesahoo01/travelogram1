'use strict';

document.addEventListener("DOMContentLoaded", () => {
  /** NAVBAR TOGGLE **/
  const overlay = document.querySelector("[data-overlay]");
  const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  const navbar = document.querySelector("[data-navbar]");
  const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const navElements = [navOpenBtn, navCloseBtn, overlay, ...navLinks];

  navElements.forEach(elem => {
    elem?.addEventListener("click", () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  });

  /** HEADER STICKY + GO TO TOP **/
  const header = document.querySelector("[data-header]");
  const goTopBtn = document.querySelector("[data-go-top]");

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY >= 200;
    header.classList.toggle("active", isScrolled);
    goTopBtn.classList.toggle("active", isScrolled);
  });

  /** CAROUSEL INIT **/
  const cities = [
    "Delhi", "Amritsar", "Leh", "Srinagar", "Manali", "Chandigarh", "Gurugram", "Udaipur",
    "Haridwar", "Varanasi", "Bhubaneswar", "Sir Vijaya Puram", "Darjeeling", "Goa",
    "Mumbai", "Indore", "Hyderabad", "Hampi", "Kavaratti", "Cherapunjee", "Gangtok",
    "Agartala", "Mechukka"
  ];

  const carousel = document.getElementById('carousel');
  const dotContainer = document.getElementById('dotContainer');

  if (carousel && dotContainer) {
    let current = 0;

    cities.forEach((city, index) => {
      const slide = document.createElement('div');
      slide.className = `slide${index === 0 ? ' active' : ''}`;
      slide.style.backgroundImage = `url('destinationimg/image${index % 23}.jpeg')`;

      slide.innerHTML = `
        <div class="overlay"></div>
        <div class="top-text">
          <h1>DESTINATIONS</h1>
          <p>for every bucket list</p>
        </div>
        <div class="bottom-content">
          <div class="city-nav">
            <span class="arrow" onclick="changeSlide(-1)">&#8592;</span>
            <span class="city-name">${city}</span>
            <span class="arrow" onclick="changeSlide(1)">&#8594;</span>
          </div>
          <button>Discover more</button>
        </div>
      `;
      carousel.appendChild(slide);

      const dot = document.createElement('div');
      dot.className = `dot${index === 0 ? ' active' : ''}`;
      dot.onclick = () => goToSlide(index);
      dotContainer.appendChild(dot);
    });

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    window.changeSlide = (direction) => {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (current + direction + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    };

    window.goToSlide = (index) => {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    };

    // Auto-slide
    setInterval(() => window.changeSlide(1), 5000);

    // Keyboard support
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") window.changeSlide(1);
      if (event.key === "ArrowLeft") window.changeSlide(-1);
    });
  }
});
