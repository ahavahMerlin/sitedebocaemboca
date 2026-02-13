const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const container = document.querySelector('.carousel-track-container');

let currentIndex = 0;
let slideWidth = 0;

// Cria imagens (2.png até 44.png)
track.innerHTML = '';
for (let i = 2; i <= 44; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = `certificados/${i}.png`;
   img.alt = `Certificados de Qualificação Profissional- Edison Riella ${i} - DeBocaEmBoca`;
   img.onerror = () => console.log(`Erro carregando ${i}.png`);
    li.appendChild(img);
    track.appendChild(li);
}

function initCarousel() {
    if (container) {
        slideWidth = container.offsetWidth;
        updateCarousel();
    }
}

function updateCarousel() {
    if (track && slideWidth) {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}

// Botões
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % track.children.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + track.children.length) % track.children.length;
    updateCarousel();
});

// Auto e init
window.addEventListener('load', initCarousel);
setInterval(() => {
    currentIndex = (currentIndex + 1) % track.children.length;
    updateCarousel();
}, 4000);
