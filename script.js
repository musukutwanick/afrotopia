// Example placeholder for interactivity
console.log("Afrotopis Café landing page loaded.");


function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}


// Add functionality if needed, e.g. open modals or link to bookings
document.querySelectorAll(".event-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    alert("This could open a booking form or more info.");
  });
});


document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your reservation request has been submitted.");
});

function showMenu(category) {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.menu-items');

  // Remove active class from all tabs
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add active class to the clicked tab
  tabs.forEach(tab => {
    if (tab.textContent.toLowerCase() === category) {
      tab.classList.add('active');
    }
  });

  // Show only the selected category
  sections.forEach(section => {
    if (section.dataset.category === category) {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
}

// === SCROLL ANIMATION LOGIC ===
function animateOnScroll() {
  const animatedEls = document.querySelectorAll('.animate, .animate-fade-in, .animate-slide-up, .animate-fade-left, .animate-fade-right');
  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  animatedEls.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', animateOnScroll);
