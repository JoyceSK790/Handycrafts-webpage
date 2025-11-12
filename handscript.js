// ========== SMOOTH SCROLL NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ========== FORM VALIDATION ==========
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default reload

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const skill = form.querySelector('input[type="text"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (name === '' || email === '' || message === '' || skill === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simple email pattern check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If all is good:
  alert('Thank you, ' + name + '! Your message has been sent successfully.');
  form.reset();
});

// ========== SCROLL REVEAL ANIMATION ==========
const revealElements = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
});





