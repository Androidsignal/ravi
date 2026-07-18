// Custom cursor + pointer-following background glow. Shared across all portfolio pages.
// 60fps: rAF-driven, translate3d only, no layout reads in the loop. Auto-disables on touch/reduced-motion.
(function(){
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && matchMedia('(pointer: fine)').matches;
  if(reduce || !fine) return;

  var glow = document.createElement('div'); glow.className = 'cursor-glow';
  var dot = document.createElement('div'); dot.className = 'cursor-dot';
  var ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.appendChild(glow); document.body.appendChild(ring); document.body.appendChild(dot);

  var mx = innerWidth/2, my = innerHeight/2;      // target (mouse)
  var gx = mx, gy = my, rx = mx, ry = my;          // eased positions
  var visible = false;

  addEventListener('mousemove', function(e){
    mx = e.clientX; my = e.clientY;
    if(!visible){ visible = true; document.body.classList.add('cursor-on'); }
  }, {passive:true});
  addEventListener('mouseleave', function(){ visible = false; document.body.classList.remove('cursor-on'); });

  // hover-grow over interactive elements
  addEventListener('mouseover', function(e){
    if(e.target.closest('a,button,.pcard,image-slot,[role=button]')) document.body.classList.add('cursor-hot');
  }, {passive:true});
  addEventListener('mouseout', function(e){
    if(e.target.closest('a,button,.pcard,image-slot,[role=button]')) document.body.classList.remove('cursor-hot');
  }, {passive:true});
  addEventListener('mousedown', function(){ document.body.classList.add('cursor-down'); });
  addEventListener('mouseup', function(){ document.body.classList.remove('cursor-down'); });

  function tick(){
    // dot snaps, ring + glow trail with easing
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    gx += (mx - gx) * 0.08; gy += (my - gy) * 0.08;
    dot.style.transform  = 'translate3d(' + mx + 'px,' + my + 'px,0) translate(-50%,-50%)';
    ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0) translate(-50%,-50%)';
    glow.style.transform = 'translate3d(' + gx + 'px,' + gy + 'px,0) translate(-50%,-50%)';
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
