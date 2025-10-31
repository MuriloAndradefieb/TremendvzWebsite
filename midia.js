// Dados das galerias (adicione mais fotos para cada evento)
const galleries = {
    'event1': {
        title: 'Santa Breja // Capão Redondo, SP // Agosto 25, 2025',
        images: [
            'img/SantaBreja/TremendvzSantabreja3.JPG',
            'img/SantaBreja/TremendvzSantabreja2.JPG',
            'img/SantaBreja/TremendvzSantabreja8.JPG',
            'img/SantaBreja/TremendvzSantabreja.JPG',
            'img/SantaBreja/TremendvzSantabreja4.JPG',
            'img/SantaBreja/TremendvzSantabreja5.JPG',
            'img/SantaBreja/TremendvzSantabreja6.JPG',
            'img/SantaBreja/TremendvzSantabreja7.JPG',
            'img/SantaBreja/TremendvzSantabreja9.JPG',
            'img/SantaBreja/TremendvzSantabreja10.JPG',
            'img/SantaBreja/TremendvzSantabreja11.JPG',
            'img/SantaBreja/TremendvzSantabreja12.JPG',
            'img/SantaBreja/TremendvzSantabreja13.JPG',
            'img/SantaBreja/TremendvzSantabreja14.JPG',
            'img/SantaBreja/TremendvzSantabreja15.JPG',
            'img/SantaBreja/TremendvzSantabreja16.JPG',
            'img/SantaBreja/TremendvzSantabreja17.JPG',
            'img/SantaBreja/TremendvzSantabreja18.JPG',
            'img/SantaBreja/TremendvzSantabreja19.JPG',
            'img/SantaBreja/TremendvzSantabreja20.JPG',
            'img/SantaBreja/TremendvzSantabreja21.JPG',
            'img/SantaBreja/TremendvzSantabreja22.JPG',
            'img/SantaBreja/TremendvzSantabreja23.JPG',
            'img/SantaBreja/TremendvzSantabreja24.JPG',
            'img/SantaBreja/TremendvzSantabreja25.JPG',
            'img/SantaBreja/TremendvzSantabreja26.JPG',
            'img/SantaBreja/TremendvzSantabreja27.JPG',
            'img/SantaBreja/TremendvzSantabreja28.JPG'
        ]
    },
    'event2': {
        title: 'Silsi Rock Bar // Jardim das Camélias, SP // Maio 17, 2025',
        images: [
            'img/SilsiRockBar/Silsi2.jpg',
            'img/SilsiRockBar/Silsi3.jpg',
            'img/SilsiRockBar/Silsi4.jpg',
            'img/SilsiRockBar/Silsi5.jpg',
            'img/SilsiRockBar/Silsi6.jpg',
            'img/SilsiRockBar/Silsi7.jpg',
            'img/SilsiRockBar/Silsi8.jpg',
            'img/SilsiRockBar/Silsi9.jpg',
            'img/SilsiRockBar/Silsi10.jpg',
            'img/SilsiRockBar/Silsi11.jpg',
            'img/SilsiRockBar/Silsi12.jpg',
            'img/SilsiRockBar/Silsi13.jpg',
            'img/SilsiRockBar/Silsi14.jpg',
            'img/SilsiRockBar/Silsi15.jpg',
            'img/SilsiRockBar/Silsi16.jpg',
            'img/SilsiRockBar/Silsi17.jpg',
            'img/SilsiRockBar/Silsi18.jpg',
            'img/SilsiRockBar/Silsi19.jpg',
            'img/SilsiRockBar/Silsi20.jpg',
            'img/SilsiRockBar/Silsi21.jpg',
        ]
    },
    'event3': {
        title: 'Festhalle // Germany // June 19, 2025',
        images: [
            'https://via.placeholder.com/800x600/1a1a2a/fac72d?text=Show+3+-+Foto+1',
            'https://via.placeholder.com/800x600/2a1a2a/fac72d?text=Show+3+-+Foto+2',
            'https://via.placeholder.com/800x600/1a2a3a/fac72d?text=Show+3+-+Foto+3',
            'https://via.placeholder.com/800x600/2a2a2a/fac72d?text=Show+3+-+Foto+4',
        ]
    },
    'event4': {
        title: 'Rock in Rio // Brazil // September 15, 2025',
        images: [
            'https://via.placeholder.com/800x600/2a1a1a/fac72d?text=Rock+in+Rio+-+Foto+1',
            'https://via.placeholder.com/800x600/3a1a1a/fac72d?text=Rock+in+Rio+-+Foto+2',
            'https://via.placeholder.com/800x600/2a2a1a/fac72d?text=Rock+in+Rio+-+Foto+3',
        ]
    },
    'event5': {
        title: 'Download Festival // UK // June 12, 2025',
        images: [
            'https://via.placeholder.com/800x600/1a2a1a/fac72d?text=Download+-+Foto+1',
            'https://via.placeholder.com/800x600/2a2a1a/fac72d?text=Download+-+Foto+2',
            'https://via.placeholder.com/800x600/1a3a1a/fac72d?text=Download+-+Foto+3',
        ]
    },
    'event6': {
        title: 'Knotfest // São Paulo // May 30, 2025',
        images: [
            'https://via.placeholder.com/800x600/1a1a3a/fac72d?text=Knotfest+-+Foto+1',
            'https://via.placeholder.com/800x600/2a1a3a/fac72d?text=Knotfest+-+Foto+2',
            'https://via.placeholder.com/800x600/1a2a3a/fac72d?text=Knotfest+-+Foto+3',
        ]
    }
};

let currentGallery = [];
let currentImageIndex = 0;

// Menu toggle
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// Abrir lightbox
function openLightbox(imageSrc, imageTitle, galleryImages) {
    currentGallery = galleryImages;
    currentImageIndex = galleryImages.indexOf(imageSrc);
    
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox-info').textContent = imageTitle;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fechar lightbox
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navegar no lightbox
function changeLightboxImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = currentGallery.length - 1;
    } else if (currentImageIndex >= currentGallery.length) {
        currentImageIndex = 0;
    }
    
    document.getElementById('lightbox-img').src = currentGallery[currentImageIndex];
}

// Abrir modal da galeria completa
function openGalleryModal(eventId) {
    const gallery = galleries[eventId];
    const modal = document.getElementById('gallery-modal');
    const grid = document.getElementById('modal-gallery-grid');
    
    document.getElementById('modal-event-title').textContent = gallery.title;
    
    grid.innerHTML = '';
    
    // Cria os elementos com placeholder, sem carregar as imagens ainda
    gallery.images.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-modal-item';
        
        // Usa data-src ao invés de src para não carregar imediatamente
        item.innerHTML = `
            <img data-src="${img}" alt="Foto do evento" class="lazy-modal-img">
            <div class="modal-img-placeholder"></div>
        `;
        
        item.onclick = () => openLightbox(img, gallery.title, gallery.images);
        grid.appendChild(item);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Inicia o carregamento lazy após abrir o modal
    setTimeout(() => {
        lazyLoadModalImages();
    }, 100);
}

// Lazy loading inteligente com Intersection Observer
function lazyLoadModalImages() {
    const lazyImages = document.querySelectorAll('.lazy-modal-img');
    
    // Verifica se o navegador suporta Intersection Observer
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const placeholder = img.nextElementSibling;
                    
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-modal-img');
                    img.classList.add('loaded-modal-img');
                    
                    img.onload = () => {
                        if (placeholder) placeholder.style.display = 'none';
                    };
                    
                    observer.unobserve(img);
                }
            });
        }, {
            root: document.getElementById('gallery-modal'),
            rootMargin: '50px' // Começa a carregar 50px antes de aparecer
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores antigos - carrega tudo
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded-modal-img');
        });
    }
}

// Fechar modal da galeria
function closeGalleryModal() {
    document.getElementById('gallery-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading para imagens
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
            this.parentElement.classList.add('image-loaded');
        });
        
        // Se a imagem já está carregada (cache)
        if (img.complete) {
            img.classList.add('loaded');
            img.parentElement.classList.add('image-loaded');
        }
    });

    // Botões "Ver Mais"
    const viewMoreButtons = document.querySelectorAll('.view-more');
    viewMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            openGalleryModal('event' + (index + 1));
        });
    });

    // Clique nas imagens principais
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const eventId = 'event' + (index + 1);
            const gallery = galleries[eventId];
            openLightbox(gallery.images[0], gallery.title, gallery.images);
        });
    });

    // Fechar modais com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
            closeGalleryModal();
        }
    });

    // Navegar no lightbox com setas
    document.addEventListener('keydown', function(e) {
        if (document.getElementById('lightbox').classList.contains('active')) {
            if (e.key === 'ArrowLeft') changeLightboxImage(-1);
            if (e.key === 'ArrowRight') changeLightboxImage(1);
        }
    });

    // Fechar lightbox clicando fora da imagem
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

    // Fechar modal clicando fora
    document.getElementById('gallery-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeGalleryModal();
        }
    });

    // Fecha o menu mobile ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                document.getElementById('main-nav').style.display = 'none';
            }
        });
    });
});