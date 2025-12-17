// script.js — animasi lembut bertema semesta
'use strict';

// Fade in text step by step (scene 1)
const steps = document.querySelectorAll('.text-step');
let index = 0;

function showSteps() {
  if (index < steps.length) {
    steps[index].style.opacity = 1;
    index++;
    setTimeout(showSteps, 1000);
  }
}

// Jalankan saat halaman dibuka
window.addEventListener('load', showSteps);

// Efek sentuh foto (tap zoom)
const photos = document.querySelectorAll('.star-photo');

photos.forEach(photo => {
  photo.addEventListener('touchstart', () => {
    photo.style.transform = 'scale(1.4)';
    photo.style.transition = '0.3s';
  });

  photo.addEventListener('touchend', () => {
    photo.style.transform = 'scale(1)';
  });
});

// Scroll lembut ke scene berikutnya (opsional)
const scenes = document.querySelectorAll('.scene');
let currentScene = 0;

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0 && currentScene < scenes.length - 1) {
    currentScene++;
    scenes[currentScene].scrollIntoView({ behavior: 'smooth' });
  } else if (e.deltaY < 0 && currentScene > 0) {
    currentScene--;
    scenes[currentScene].scrollIntoView({ behavior: 'smooth' });
  }
});
