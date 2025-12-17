window.addEventListener('DOMContentLoaded',()=>{

  // --- Scene1 fade-in teks ---
  const textSteps = document.querySelectorAll('.text-step');
  const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        textSteps.forEach((el,i)=> setTimeout(()=> el.classList.add('show'), i*1000));
        observer1.unobserve(entry.target);
      }
    });
  });
  observer1.observe(document.getElementById('scene1'));

  // --- Scene3 konstelasi: random posisi foto ---
  const photos = document.querySelectorAll('.star-photo');
  const gallery = document.querySelector('.constellation-gallery');
  photos.forEach(photo=>{
    const x=Math.random()*(gallery.clientWidth-80);
    const y=Math.random()*(gallery.clientHeight-80);
    photo.style.left=x+'px';
    photo.style.top=y+'px';
  });

  // --- Foto zoom tap ---
  photos.forEach(photo=>{
    let zoom=false;
    photo.addEventListener('touchstart',e=>{
      e.preventDefault();
      if(!zoom){photo.style.transform='scale(1.5)'; zoom=true;}
      else{photo.style.transform='scale(1)'; zoom=false;}
    });
    photo.addEventListener('click', ()=>{
      if(!zoom){photo.style.transform='scale(1.5)'; zoom=true;}
      else{photo.style.transform='scale(1)'; zoom=false;}
    });
  });

  // --- Parallax background semua scene ---
  const universeBg = document.querySelectorAll('.universe-bg');
  window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    universeBg.forEach(bg=>{
      bg.style.transform=`translateY(${scrolled*0.2}px)`;
    });
  });

  // --- Button Next antar scene ---
  const buttons = document.querySelectorAll('.next-btn');
  buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      targetEl.scrollIntoView({behavior:'smooth'});
    });
  });

});
