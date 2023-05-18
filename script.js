const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});


window.addEventListener('scroll', () => {
  const fromTop = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= fromTop + 200 &&
      section.offsetTop + section.offsetHeight > fromTop + 200
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
