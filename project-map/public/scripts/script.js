// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  // Example functionality
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log(`Link clicked: ${link.href}`);
    });
  });
});
