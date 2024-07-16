document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (path.includes('/Accueil/')) {
      document.getElementById('nav-accueil').classList.add('active');
    } else if (path.includes('/wakanda/')) {
      document.getElementById('nav-wakanda').classList.add('active');
    } else if (path.includes('/Enigme/')) {
      document.getElementById('nav-enigme').classList.add('active');
    }
  });