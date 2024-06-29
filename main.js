var typed = new Typed("#text", {
  strings:["Desenvolvedor Front-End"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
})

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});