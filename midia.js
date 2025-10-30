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
        // Navegação circular
        if (index < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (index >= galleryItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const currentItem = galleryItems[currentIndex];
        
        // Usa o atributo data-img (grande) para a visualização no modal
        modalImg.src = currentItem.getAttribute('data-img');
        // Usa o atributo data-desc (legenda longa) para a descrição
        captionText.innerHTML = currentItem.getAttribute('data-desc');
    };
    
    // --- 2. ABRIR MODAL ---
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal.style.display = "block";
            // Adiciona a classe 'modal-open' ao body para evitar o scroll de fundo
            document.body.classList.add('modal-open'); 
            showImage(index);
        });
    });

    // --- 3. FECHAR MODAL ---
    const closeLightbox = () => {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }
    
    closeModal.onclick = closeLightbox;
    
    // Fecha ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // Fecha ao apertar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeLightbox();
        }
    });

    // --- 4. NAVEGAR MODAL ---
    prevButton.addEventListener('click', (e) => {
        e.stopPropagation(); 
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });
});