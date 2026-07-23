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
})();
