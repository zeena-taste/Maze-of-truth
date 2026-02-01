(function(){
  let scale = 1;
  const step = 0.1;
  const min = 0.5;
  const max = 2;
  const maze = document.getElementById('maze');
  function apply(){
    if(!maze) return;
    maze.style.transform = `scale(${scale})`;
    maze.style.transformOrigin = 'center center';
  }
  window.zoomIn = function(){ scale = Math.min(max, +(scale + step).toFixed(2)); apply(); };
  window.zoomOut = function(){ scale = Math.max(min, +(scale - step).toFixed(2)); apply(); };
  window.resetZoom = function(){ scale = 1; apply(); };
  window.addEventListener('load', apply);
  document.addEventListener('keydown', (e)=>{
    if(e.key === '+') zoomIn();
    if(e.key === '-') zoomOut();
    if(e.key === '0') resetZoom();
  });
})();
