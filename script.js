// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling para links internos
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Funcionalidade dos botões do hero
    const saibaMaisBtn = document.querySelector('.hero .btn-primary');
    const conhecaPlanos = document.querySelector('.hero .btn-secondary');
    
    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll('.about');
        });
    }
    
    if (conhecaPlanos) {
        conhecaPlanos.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll('.pricing');
        });
    }

    // Animação de entrada dos cards quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animação aos cards de funcionalidades
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Aplicar animação aos cards de preços
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Funcionalidade dos botões de planos
    const comecarGratis = document.querySelector('.pricing-card .btn-outline');
    const assinarAgora = document.querySelector('.pricing-card .btn-primary');
    const comeceAgora = document.querySelector('.final-cta .btn-light');

    if (comecarGratis) {
        comecarGratis.addEventListener('click', function(e) {
            e.preventDefault();
            showModal('Plano Gratuito', 'Você será redirecionado para criar sua conta gratuita no OnSailing!');
        });
    }

    if (assinarAgora) {
        assinarAgora.addEventListener('click', function(e) {
            e.preventDefault();
            showModal('Plano Pro', 'Você será redirecionado para assinar o plano Pro com 14 dias grátis!');
        });
    }

    if (comeceAgora) {
        comeceAgora.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll('.pricing');
        });
    }

    // Função para mostrar modal simples
    function showModal(title, message) {
        // Criar modal dinamicamente
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 40px;
            border-radius: 12px;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transform: scale(0.9);
            transition: transform 0.3s ease;
        `;

        modalContent.innerHTML = `
            <h3 style="color: #1e3a8a; margin-bottom: 20px; font-size: 24px;">${title}</h3>
            <p style="color: #6b7280; margin-bottom: 30px; line-height: 1.6;">${message}</p>
            <button style="
                background: #1e3a8a;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
            ">Entendi</button>
        `;

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Animar entrada
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);

        // Fechar modal
        const closeBtn = modalContent.querySelector('button');
        closeBtn.addEventListener('click', function() {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.9)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        });

        // Fechar ao clicar fora
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeBtn.click();
            }
        });
    }

    // Adicionar efeito hover aos botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Scroll suave para o topo quando clicar no logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        logo.style.cursor = 'pointer';
    }

    // Adicionar classe ativa baseada no scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            
            if (scrollPos >= top && scrollPos < top + height) {
                section.classList.add('active');
            }
        });
    });

    console.log('OnSailing - Site carregado com sucesso! 🚢');
});

