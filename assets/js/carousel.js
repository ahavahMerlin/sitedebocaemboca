const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Configurações: imagens de 2.png até 44.png
const startImage = 2;
const endImage = 44;
let currentIndex = 0;

// 1. Criar imagens dinamicamente
for (let i = startImage; i <= endImage; i++) {
    const li = document.createElement('li');
    li.style.minWidth = '100%'; // Garante que o slide ocupe 100% do espaço
    li.style.flex = '0 0 100%'; // Evita que os slides encolham
    
    const img = document.createElement('img');
    img.src = `certificados/${i}.png`; // Nome da pasta corrigido!
    img.alt = `Certificados ${i}`;
    img.style.width = '100%';
    img.style.display = 'block';
    
    li.appendChild(img);
    track.appendChild(li);
}

// 2. Função para mover o carrossel
function updateCarousel() {
    const container = document.querySelector('.carousel-track-container');
    if (container) {
        const slideWidth = container.offsetWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}

// 3. Botões de Navegação
nextBtn.addEventListener('click', () => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    const slides = track.querySelectorAll('li');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// 4. Autoplay e Ajustes de Janela
window.addEventListener('resize', updateCarousel);

// Executa após o carregamento total para garantir que o tamanho do container exista
window.addEventListener('load', () => {
    updateCarousel();
    setInterval(() => {
        const slides = track.querySelectorAll('li');
        if (slides.length > 0) {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }
    }, 5000);
});
