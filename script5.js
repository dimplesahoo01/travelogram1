const cities = [
    "Delhi", "Amritsar", "Leh", "Srinagar", "Manali","Chandigarh" ,"Gurugram", "Udaipur", "Haridwar", "Varanasi",
    "Bhubaneswar", "Sir Vijaya Puram", "Darjeeling", "Goa", "Mumbai", "Indore", "Hyderabad", "Hampi", "Kavaratti", "Cherapunjee",
    "Gangtok", "Agartala", "Mechukka"
  ];

  const carousel = document.getElementById('carousel');
  const dotContainer = document.getElementById('dotContainer');

  cities.forEach((city, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    if (index === 0) slide.classList.add('active');
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
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(index);
    dotContainer.appendChild(dot);
  });

  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function changeSlide(direction) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (current + direction + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  setInterval(() => changeSlide(1), 5000);