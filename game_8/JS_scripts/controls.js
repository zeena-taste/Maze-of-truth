// Shared controls for on-screen direction buttons and zoom buttons
(function(){
  function sendKeyEvent(type,key){
    const ev = new KeyboardEvent(type,{key,keyCode:key && key.length===1?key.charCodeAt(0):0,bubbles:true});
    document.dispatchEvent(ev);
  }

  function onPointerDown(e){
    const key = this.dataset.key;
    if(!key) return;
    sendKeyEvent('keydown', key);
    this.classList && this.classList.add('active');
  }
  function onPointerUp(e){
    const key = this.dataset.key;
    if(!key) return;
    sendKeyEvent('keyup', key);
    this.classList && this.classList.remove('active');
  }

  window.addEventListener('load', ()=>{
    document.querySelectorAll('.dir-btn[data-key]').forEach(btn=>{
      btn.addEventListener('pointerdown', onPointerDown);
      btn.addEventListener('pointerup', onPointerUp);
      btn.addEventListener('pointerleave', onPointerUp);
      btn.addEventListener('touchend', onPointerUp);
    });

    // zoom buttons: call zoom functions if available
    const zin = document.getElementById('ui-zoom-in');
    const zout = document.getElementById('ui-zoom-out');
    const zreset = document.getElementById('ui-zoom-reset');
    if(zin) zin.addEventListener('click', ()=>{ if(typeof window.zoomIn==='function') window.zoomIn(); });
    if(zout) zout.addEventListener('click', ()=>{ if(typeof window.zoomOut==='function') window.zoomOut(); });
    if(zreset) zreset.addEventListener('click', ()=>{ if(typeof window.resetZoom==='function') window.resetZoom(); });
  });
})();
