// Full-width auto-marquee for case-study screen sliders.
(function(){
  function initSlider(track){
    var slider = track.closest('.cs-slider');
    if(!slider || track.dataset.marquee) return;
    track.dataset.marquee = '1';
    slider.classList.add('is-marquee');
    // duplicate the set of phones once for a seamless loop
    var originals = Array.prototype.slice.call(track.children);
    originals.forEach(function(node){ track.appendChild(node.cloneNode(true)); });
    // duration scales with content width so speed stays consistent
    var setDur = function(){
      var w = 0; originals.forEach(function(n){ w += n.getBoundingClientRect().width + 32; });
      track.style.setProperty('--csdur', Math.max(18, Math.round(w/70)) + 's');
    };
    setDur();
    window.addEventListener('resize', setDur, {passive:true});
  }
  function boot(){ document.querySelectorAll('.cs-slider-track').forEach(initSlider); }
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', boot); }
  else { boot(); }
})();
