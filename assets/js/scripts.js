// Contraste
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
  
  // Atualizar carrossel se existir
  if (window.bannerCarousel) {
    window.bannerCarousel.refreshCarousel();
  }
}

// Tamanho da fonte
let fontSize = 1;
function adjustFontSize(delta) {
  fontSize += delta * 0.1;
  document.body.style.fontSize = fontSize + "em";
}

// Carrossel do Banner
class BannerCarousel {
  constructor() {
    this.currentSlide = 0;
    this.slides = [];
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5 segundos
    this.isHovered = false;
    this.isHighContrast = false;
    
    // Imagens do banner por modo
    this.normalImages = [
      'assets/img/banner/banner-azul.jpg',
      'assets/img/banner/banner-sepia.jpg'
    ];
    
    this.contrastImages = [
      'assets/img/banner/banner-azul-contrast.jpg',
      'assets/img/banner/banner-sepia-contrast.jpg'
    ];
    
    this.init();
  }
  
  init() {
    this.checkContrastMode();
    this.createSlides();
    this.createIndicators();
    this.startAutoPlay();
    this.addEventListeners();
  }
  
  checkContrastMode() {
    this.isHighContrast = document.body.classList.contains('high-contrast');
  }
  
  getCurrentImages() {
    return this.isHighContrast ? this.contrastImages : this.normalImages;
  }
  
  createSlides() {
    const slidesContainer = document.getElementById('carouselSlides');
    if (!slidesContainer) return;
    
    // Limpar slides existentes
    slidesContainer.innerHTML = '';
    
    const currentImages = this.getCurrentImages();
    
    currentImages.forEach((imageSrc, index) => {
      const slide = document.createElement('div');
      slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
      slide.style.backgroundImage = `url('${imageSrc}')`;
      
      slidesContainer.appendChild(slide);
    });
    
    this.slides = slidesContainer.querySelectorAll('.carousel-slide');
  }
  
  createIndicators() {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!indicatorsContainer) return;
    
    // Limpar indicadores existentes
    indicatorsContainer.innerHTML = '';
    
    const currentImages = this.getCurrentImages();
    
    currentImages.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
      indicator.addEventListener('click', () => this.goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
  }
  
  refreshCarousel() {
    const previousSlide = this.currentSlide;
    this.checkContrastMode();
    this.createSlides();
    this.createIndicators();
    
    // Manter posição do slide se possível
    const currentImages = this.getCurrentImages();
    if (previousSlide < currentImages.length) {
      this.goToSlide(previousSlide);
    } else {
      this.goToSlide(0);
    }
  }
  
  goToSlide(index) {
    // Remover classe active do slide atual
    this.slides[this.currentSlide].classList.remove('active');
    document.querySelectorAll('.carousel-indicator')[this.currentSlide].classList.remove('active');
    
    // Adicionar classe active ao novo slide
    this.currentSlide = index;
    this.slides[this.currentSlide].classList.add('active');
    document.querySelectorAll('.carousel-indicator')[this.currentSlide].classList.add('active');
  }
  
  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }
  
  previousSlide() {
    const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      if (!this.isHovered) {
        this.nextSlide();
      }
    }, this.autoPlayDelay);
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  addEventListeners() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
      // Pausar auto-play ao passar mouse
      carouselContainer.addEventListener('mouseenter', () => {
        this.isHovered = true;
      });
      
      carouselContainer.addEventListener('mouseleave', () => {
        this.isHovered = false;
      });
    }
  }
}

// Funções globais para controles de navegação
function nextSlide() {
  if (window.bannerCarousel) {
    window.bannerCarousel.nextSlide();
  }
}

function previousSlide() {
  if (window.bannerCarousel) {
    window.bannerCarousel.previousSlide();
  }
}

// Inicializar carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se existe elemento do carrossel na página
  if (document.getElementById('carouselSlides')) {
    window.bannerCarousel = new BannerCarousel();
  }
});
