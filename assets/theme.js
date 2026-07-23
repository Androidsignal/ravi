// Theme toggle — persists light/dark across all portfolio pages.
(function(){
  function apply(t){ document.documentElement.setAttribute('data-theme', t); }
  function current(){ return document.documentElement.getAttribute('data-theme') || 'dark'; }
  document.addEventListener('click', function(e){
    var b = e.target.closest('.theme-toggle'); if(!b) return;
    var next = current()==='light' ? 'dark' : 'light';
    apply(next);
    try{ localStorage.setItem('rv-theme', next); }catch(err){}
  });
  // Mobile nav toggle — works on every page that has #burger + #nav.
  document.addEventListener('click', function(e){
    var nav = document.getElementById('nav'); if(!nav) return;
    if(e.target.closest('.burger')){ nav.classList.toggle('nav-open'); return; }
    if(nav.classList.contains('nav-open') && e.target.closest('.nav-links a')){ nav.classList.remove('nav-open'); }
  });
})();
