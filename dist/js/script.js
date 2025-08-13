AOS.init(),document.addEventListener("DOMContentLoaded",function(){let a=document.getElementById("countdown"),d=new Date("March 11, 2026 19:00:00").getTime();function n(){var n,e,o,t=(new Date).getTime(),t=d-t;t<0?a.innerHTML="<p>Evento já começou!</p>":(n=Math.floor(t/864e5),e=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4),t=Math.floor(t%6e4/1e3),a.innerHTML=`
      <div class="countdown-box"><span>${n}</span>Days</div>
      <div class="countdown-box"><span>${e}</span>Hours</div>
      <div class="countdown-box"><span>${o}</span>Min</div>
      <div class="countdown-box"><span>${t}</span>Seg</div>
    `)}n(),setInterval(n,1e3)});