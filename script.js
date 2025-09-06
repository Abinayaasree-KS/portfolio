// Function to open PDF in new tab
function openPDF() {
  window.open('assets/ABINAYAA_SREE_K_S_71762131002.pdf', '_blank');
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');

  body.classList.toggle('dark-theme');

  // Change icon after toggle
  themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
}


document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('nav a');
  const heroSection = document.getElementById('home');
  // const themeToggle = document.getElementById('themeToggle');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const aboutTexts = document.querySelectorAll('.about-text .animated-text, .about-highlights .highlight-badge');
  const menuToggle = document.getElementById('menuToggle');
  const navLinksContainer = document.getElementById('navLinks');
  const body = document.body;

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('show');
    });
  }


  // About text animation
  const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  aboutTexts.forEach(el => aboutObserver.observe(el));

  // Slide-in animation for education cards
  const educationCards = document.querySelectorAll('.education-card');
  const eduObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  educationCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    eduObserver.observe(card);
  });

  // Smooth scroll
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const headerHeight = header ? header.offsetHeight : 0;
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight,
          behavior: 'smooth'
        });
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Highlight nav on scroll
  const sections = document.querySelectorAll('section[id]');
  function highlightNavLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - header.offsetHeight;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', highlightNavLink);
  highlightNavLink();

  // Footer year
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Scroll-to-top
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function () {
      scrollToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

//   // Theme toggle
// if (themeToggle) {
//   themeToggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark-theme");
//     themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";

//     // Make sure cursor color changes too
//     updateCursorColor(); 
//   });
// }


  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Optional: set current year in footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Animate sections on view
  const animatableSections = document.querySelectorAll('.about-me, .skills-section, .projects-section, .contact-section');
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatableSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    sectionObserver.observe(section);
  });

  // Skills animation
  const skillCategories = document.querySelectorAll('.skill-category');
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  skillCategories.forEach((category, index) => {
    category.style.opacity = 0;
    category.style.transform = 'translateY(30px)';
    category.style.transition = `opacity 0.7s ease-out ${index * 0.15}s, transform 0.7s ease-out ${index * 0.15}s`;
    skillObserver.observe(category);
  });

  // Project cards
  const projectCards = document.querySelectorAll('.project-card');
  const projectObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  projectCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.7s ease-out ${index * 0.15}s, transform 0.7s ease-out ${index * 0.15}s`;
    projectObserver.observe(card);
  });

  // Experience cards
  const experienceCards = document.querySelectorAll('.experience-card');
  const expObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  experienceCards.forEach(card => expObserver.observe(card));

  // Hero animation
  const heroContentText = heroSection.querySelector('.text-content');
  const heroContentImage = heroSection.querySelector('.image-content');
  if (heroContentText && heroContentImage) {
    heroContentText.style.opacity = 0;
    heroContentText.style.transform = 'translateY(20px)';
    heroContentImage.style.opacity = 0;
    heroContentImage.style.transform = 'scale(0.9)';
    setTimeout(() => {
      heroContentText.style.opacity = 1;
      heroContentText.style.transform = 'translateY(0)';
    }, 300);
    setTimeout(() => {
      heroContentImage.style.opacity = 1;
      heroContentImage.style.transform = 'scale(1)';
    }, 600);
  }

  // Cursor Tail
  const cursorTailContainer = document.createElement('div');
  cursorTailContainer.classList.add('cursor-tail-container');
  document.body.appendChild(cursorTailContainer);

  const tailLength = 12;
  const tailDots = [];

  for (let i = 0; i < tailLength; i++) {
    const dot = document.createElement('div');
    dot.classList.add('cursor-dot');
    const size = 16 - i;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.borderRadius = '50%';
    dot.style.position = 'fixed';
    dot.style.pointerEvents = 'none';
    dot.style.opacity = `${1 - i * 0.06}`;
    dot.style.zIndex = 9999 - i;
    cursorTailContainer.appendChild(dot);
    tailDots.push({ el: dot, x: 0, y: 0 });
  }

  function updateCursorColor() {
    const isDark = document.body.classList.contains('dark-theme');
    tailDots.forEach(dot => {
      dot.el.style.background = isDark ? 'rgba(223, 125, 242, 0.8)' : 'rgba(89, 6, 103, 0.8)';
    });
  }

  updateCursorColor();

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateTail() {
    let x = mouseX, y = mouseY;
    tailDots.forEach((dot, i) => {
      dot.x += (x - dot.x) * 0.22;
      dot.y += (y - dot.y) * 0.22;
      dot.el.style.left = `${dot.x}px`;
      dot.el.style.top = `${dot.y}px`;
      x = dot.x;
      y = dot.y;
    });
    requestAnimationFrame(animateTail);
  }
  animateTail();

  // Project Popup Modal
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('popup-modal');
      modal.innerHTML = `
        <div class="popup-content">
          <span class="close-btn">&times;</span>
          ${card.innerHTML}
        </div>
      `;
      document.body.appendChild(modal);
      document.querySelector('.close-btn').onclick = () => modal.remove();
      modal.onclick = e => {
        if (e.target === modal) modal.remove();
      };
    });
  });

  // Floating background blobs
  const floatingContainer = document.getElementById('floatingBackground');
  if (floatingContainer) {
    for (let i = 0; i < 25; i++) {
      const blob = document.createElement('div');
      blob.classList.add('floating-blob');
      blob.style.left = `${Math.random() * 100}vw`;
      blob.style.animationDelay = `${Math.random() * 10}s`;
      blob.style.animationDuration = `${15 + Math.random() * 10}s`;
      floatingContainer.appendChild(blob);
    }
  }

  // Click orb effect
  document.addEventListener('click', e => {
    const orb = document.createElement('div');
    orb.className = 'click-orb';
    orb.style.left = `${e.clientX}px`;
    orb.style.top = `${e.clientY}px`;
    document.body.appendChild(orb);
    orb.addEventListener('animationend', () => orb.remove());
  });

  // Additional floating blobs background
  const bgContainer = document.querySelector('.floating-bg');
  if (bgContainer) {
    for (let i = 0; i < 30; i++) {
      const blob = document.createElement('div');
      blob.classList.add('floating-blob');
      const size = Math.random() * 50 + 30;
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;
      blob.style.left = `${Math.random() * 100}vw`;
      blob.style.animationDelay = `${Math.random() * 20}s`;
      blob.style.animationDuration = `${15 + Math.random() * 15}s`;
      bgContainer.appendChild(blob);
    }
  }
});