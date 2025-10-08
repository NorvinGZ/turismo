// TravelGo - Script principal con animaciones y funciones interactivas
// Autor: TravelGo Team
// Versión: 1.0.0

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initNavigation();
    initScrollAnimations();
    initHoverEffects();
    initFormValidation();
    initParallaxEffects();
    initCounters();
    initSmoothScrolling();
    initMobileMenu();
    initPackageSelection();
    initFloatingElements();
});

// ===== NAVEGACIÓN =====
function initNavigation() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Efecto de transparencia del header al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Resaltar enlace activo
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

// ===== ANIMACIONES DE SCROLL =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animación especial para tarjetas de destino
                if (entry.target.classList.contains('destination-card')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }, 100);
                }
                
                // Animación para elementos con data-aos
                if (entry.target.hasAttribute('data-aos')) {
                    const delay = entry.target.getAttribute('data-aos-delay') || 0;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos animables
    const animatedElements = document.querySelectorAll('.destination-card, .feature-item, .package-card, .service-card, .step, [data-aos]');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// ===== EFECTOS HOVER =====
function initHoverEffects() {
    // Efecto hover para tarjetas de destino
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.25)';
            
            // Efecto de brillo
            const overlay = this.querySelector('.card-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            
            const overlay = this.querySelector('.card-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });
    
    // Efecto hover para paquetes
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            
            // Efecto de pulso en el precio
            const price = this.querySelector('.package-price');
            if (price) {
                price.style.transform = 'scale(1.1)';
                price.style.color = '#F18F01';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            
            const price = this.querySelector('.package-price');
            if (price) {
                price.style.transform = 'scale(1)';
                price.style.color = '';
            }
        });
    });
    
    // Efecto hover para botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// ===== VALIDACIÓN DE FORMULARIOS =====
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validar campos requeridos
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    showFieldError(field, 'Este campo es obligatorio');
                    isValid = false;
                } else {
                    clearFieldError(field);
                }
            });
            
            // Validar email
            const emailField = this.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    showFieldError(emailField, 'Por favor ingresa un email válido');
                    isValid = false;
                }
            }
            
            // Validar teléfono
            const phoneField = this.querySelector('input[type="tel"]');
            if (phoneField && phoneField.value) {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
                    showFieldError(phoneField, 'Por favor ingresa un teléfono válido');
                    isValid = false;
                }
            }
            
            if (isValid) {
                showSuccessMessage('¡Formulario enviado correctamente! Te contactaremos pronto.');
                this.reset();
            }
        });
    });
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#e74c3c';
    field.style.boxShadow = '0 0 0 2px rgba(231, 76, 60, 0.2)';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            animation: slideInRight 0.3s ease-out;
        ">
            <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
            ${message}
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => successDiv.remove(), 300);
    }, 3000);
}

// ===== EFECTOS PARALLAX =====
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// ===== CONTADORES ANIMADOS =====
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 segundos
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// ===== SCROLL SUAVE =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== MENÚ MÓVIL =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animar las barras del hamburger
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (hamburger.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    bar.style.transform = '';
                    bar.style.opacity = '';
                }
            });
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const bars = hamburger.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = '';
                    bar.style.opacity = '';
                });
            });
        });
    }
}

// ===== SELECCIÓN DE PAQUETES =====
function initPackageSelection() {
    const packageButtons = document.querySelectorAll('.package-card .btn');
    
    packageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageCard = this.closest('.package-card');
            const packageName = packageCard.querySelector('h3').textContent;
            const packagePrice = packageCard.querySelector('.package-price').textContent;
            
            // Efecto visual de selección
            packageCard.style.transform = 'scale(1.05)';
            packageCard.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
            
            setTimeout(() => {
                packageCard.style.transform = '';
                packageCard.style.boxShadow = '';
            }, 300);
            
            // Mostrar modal de confirmación
            showPackageModal(packageName, packagePrice);
        });
    });
}

function showPackageModal(packageName, packagePrice) {
    const modal = document.createElement('div');
    modal.className = 'package-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>¡Excelente elección!</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Has seleccionado el <strong>${packageName}</strong></p>
                    <p>Precio: <strong>${packagePrice}</strong></p>
                    <p>¿Te gustaría proceder con la reserva?</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline modal-cancel">Cancelar</button>
                    <button class="btn btn-primary modal-confirm">Continuar</button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 2rem;
        max-width: 500px;
        margin: 10% auto;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: slideInUp 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners para cerrar modal
    const closeBtn = modal.querySelector('.modal-close');
    const cancelBtn = modal.querySelector('.modal-cancel');
    const overlay = modal.querySelector('.modal-overlay');
    
    [closeBtn, cancelBtn, overlay].forEach(element => {
        element.addEventListener('click', () => {
            modal.style.animation = 'fadeOut 0.3s ease-in forwards';
            setTimeout(() => modal.remove(), 300);
        });
    });
    
    // Confirmar reserva
    const confirmBtn = modal.querySelector('.modal-confirm');
    confirmBtn.addEventListener('click', () => {
        showSuccessMessage('¡Reserva iniciada! Te redirigiremos al formulario de contacto.');
        modal.style.animation = 'fadeOut 0.3s ease-in forwards';
        setTimeout(() => {
            modal.remove();
            window.location.href = 'contacto.html';
        }, 300);
    });
}

// ===== ELEMENTOS FLOTANTES =====
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Crear movimiento aleatorio
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            
            element.style.transform += ` translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                element.style.transform = element.style.transform.replace(/ translate\([^)]*\)/g, '');
            }, 2000);
        }, 3000 + (index * 1000));
    });
}

// ===== UTILIDADES =====
// Función para debounce (optimizar eventos)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Función para throttle (limitar frecuencia de eventos)
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ESTILOS DINÁMICOS =====
// Agregar estilos CSS dinámicos para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes slideInUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    }
    
    .field-error {
        color: #e74c3c;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
    
    .package-modal .modal-overlay {
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #999;
    }
    
    .modal-footer {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 2rem;
    }
`;
document.head.appendChild(style);

// ===== INICIALIZACIÓN FINAL =====
console.log('🚀 TravelGo - Script cargado correctamente');
console.log('✨ Animaciones y efectos interactivos activados');
