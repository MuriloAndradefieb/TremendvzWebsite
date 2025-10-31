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