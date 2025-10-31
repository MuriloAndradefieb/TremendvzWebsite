document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("modal-caption");
    const closeModal = document.getElementsByClassName("modal-close")[0];
    const prevButton = document.querySelector(".modal-nav.prev-img");
    const nextButton = document.querySelector(".modal-nav.next-img");
    
    const galleryItems = Array.from(document.querySelectorAll('.photo-item'));
    let currentIndex = 0;

    // --- 1. FUNÇÃO DE NAVEGAÇÃO ---
    const showImage = (index) => {
        if (index < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (index >= galleryItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const currentItem = galleryItems[currentIndex];
        
        modalImg.src = currentItem.getAttribute('data-img');
        captionText.innerHTML = currentItem.getAttribute('data-desc');
        
        // Exibir/Esconder botões de navegação se for o início/fim
        // Embora tenhamos navegação circular (loop), podemos manter desabilitado se quisermos parar.
        // nextButton.disabled = currentIndex === galleryItems.length - 1;
        // prevButton.disabled = currentIndex === 0;
    };
    
    // --- 2. ABRIR MODAL ---
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal.style.display = "block";
            showImage(index);
        });
    });

    // --- 3. FECHAR MODAL ---
    closeModal.onclick = () => {
        modal.style.display = "none";
    };
    
    // Fecha ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Fecha ao apertar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });

    // --- 4. NAVEGAR MODAL ---
    prevButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Previne que o clique feche o modal
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });
});
// Função para toggle do menu mobile
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Configurar o botão do menu hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Fechar menu ao clicar em um link (mobile)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                const nav = document.getElementById('main-nav');
                nav.style.display = 'none';
            }
        });
    });

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        const nav = document.getElementById('main-nav');
        if (window.innerWidth > 992) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });

    // --- CÓDIGO DO MODAL DE LIGHTBOX (se existir na página) ---
    const modal = document.getElementById("lightbox-modal");
    
    if (modal) {
        const modalImg = document.getElementById("modal-image");
        const captionText = document.getElementById("modal-caption");
        const closeModal = document.getElementsByClassName("modal-close")[0];
        const prevButton = document.querySelector(".modal-nav.prev-img");
        const nextButton = document.querySelector(".modal-nav.next-img");
        
        const galleryItems = Array.from(document.querySelectorAll('.photo-item'));
        let currentIndex = 0;

        // --- 1. FUNÇÃO DE NAVEGAÇÃO ---
        const showImage = (index) => {
            if (index < 0) {
                currentIndex = galleryItems.length - 1;
            } else if (index >= galleryItems.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            const currentItem = galleryItems[currentIndex];
            
            modalImg.src = currentItem.getAttribute('data-img');
            captionText.innerHTML = currentItem.getAttribute('data-desc');
        };
        
        // --- 2. ABRIR MODAL ---
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                modal.style.display = "block";
                showImage(index);
            });
        });

        // --- 3. FECHAR MODAL ---
        if (closeModal) {
            closeModal.onclick = () => {
                modal.style.display = "none";
            };
        }
        
        // Fecha ao clicar fora da imagem
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        // Fecha ao apertar ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && modal.style.display === "block") {
                modal.style.display = "none";
            }
        });

        // --- 4. NAVEGAR MODAL ---
        if (prevButton) {
            prevButton.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(currentIndex - 1);
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(currentIndex + 1);
            });
        }
    }
});