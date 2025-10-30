// script.js - Para o site ultra profissional do Tremendvz
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site do Tremendvz carregado com sucesso!");

    // Exemplo de Animação de Entrada (usando um framework real como GSAP seria melhor)
    const heroTitle = document.querySelector('#hero-ep h1');
    if (heroTitle) {
        // Adiciona uma classe para animar o título após um pequeno delay
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Simulação de navegação suave (para o botão "Ouvir Agora")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Para um projeto complexo, o JS gerenciaria sliders, formulários e interações da loja.
// script.js - Funções de Interatividade
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site do Tremendvz carregado com sucesso!");

    // 1. ANIMAÇÃO DE ENTRADA E SCROLL SUAVE (JÁ EXISTENTE)
    const heroTitle = document.querySelector('#hero-ep h1');
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. FUNCIONALIDADE DO MENU RESPONSIVO (HAMBURGUER)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Alterna a exibição do menu no mobile
            const isMenuOpen = mainNav.style.display === 'flex';
            mainNav.style.display = isMenuOpen ? 'none' : 'flex';
            
            // Opcional: Altera o ícone do menu
            menuToggle.innerHTML = isMenuOpen ? '&#9776;' : '&#10005;'; 
        });

        // Opcional: Fecha o menu se um link for clicado (no mobile)
        document.querySelectorAll('#main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    mainNav.style.display = 'none';
                    menuToggle.innerHTML = '&#9776;';
                }
            });
        });
    }
});