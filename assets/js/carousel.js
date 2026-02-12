const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const startImage = 2;
const endImage = 44;
let currentIndex = 0;

// 1. Criar as imagens
for (let i = startImage; i <= endImage; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = `certificados/${i}.png`;
   img.alt = `Certificados de Qualificação Profissional- Edison Riella ${i} - DeBocaEmBoca`;
   li.appendChild(img);
    track.appendChild(li);
}

// 2. Função que move o carrossel
function updateCarousel() {
    // Calculamos a largura do contêiner no momento exato da troca
    const slideWidth = document.querySelector('.carousel-track-container').offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// 3. Botões
nextBtn.addEventListener('click', () => {
    const totalSlides = endImage - startImage + 1;
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    const totalSlides = endImage - startImage + 1;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// 4. Troca automática (Auto-play)
setInterval(() => {
    const totalSlides = endImage - startImage + 1;
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 4000); // Troca a cada 4 segundos

// 5. Ajuste caso o usuário mude o tamanho da janela (ou gire o celular)
window.addEventListener('resize', updateCarousel);
// Força o alinhamento assim que a página carrega
window.addEventListener('load', updateCarousel);
