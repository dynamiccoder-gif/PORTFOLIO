// Intersection Observer to detect when the heading is in view
const heading = document.querySelector('.name2');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heading.classList.add('show');
    }
  });
});

observer.observe(heading);
