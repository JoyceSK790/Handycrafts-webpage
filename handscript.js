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


// ========== RESPONSIVE NAVIGATION MENU ==========
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Toggle menu when ☰ is clicked
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

  document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    // Collect input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const skill = document.getElementById("skill").value;
    const message = document.getElementById("message").value;

    // Your WhatsApp number (use international format without +)
    const phoneNumber = "2349130427939";

    // Create message text
    const text = `Hello! I want to join the Handcraft Haven Club.%0A
    Full Name: ${name}%0A
    Email: ${email}%0A
    Skill I want to acquire: ${skill}%0A
    Additional Info: ${message}`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  });
