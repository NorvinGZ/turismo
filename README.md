# 🌍 TravelGo - Sitio Web de Turismo

![TravelGo Logo](https://img.shields.io/badge/TravelGo-Turismo-blue?style=for-the-badge&logo=airplane)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Descripción

**TravelGo** es un sitio web moderno y responsivo dedicado al turismo y viajes. Diseñado con HTML5 semántico, CSS3 moderno y JavaScript puro, ofrece una experiencia de usuario excepcional con animaciones suaves, efectos interactivos y un diseño completamente responsivo.

### ✨ Características Principales

- 🎨 **Diseño Moderno**: Colores frescos (azules, verdes, blancos) con gradientes atractivos
- 📱 **Totalmente Responsivo**: Optimizado para escritorio, tablet y móvil
- ⚡ **Animaciones Suaves**: Efectos de scroll, hover y transiciones fluidas
- 🎯 **Interactividad**: Formularios con validación, modales y efectos dinámicos
- 🚀 **Rendimiento Optimizado**: Código limpio y eficiente
- ♿ **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🏗️ Estructura del Proyecto

```
turismo/
├── index.html              # Página de inicio con destinos destacados
├── servicios.html          # Página de servicios y paquetes turísticos
├── contacto.html           # Página de contacto con formulario
├── style.css              # Hoja de estilos global
├── script.js              # Animaciones y funciones interactivas
├── README.md              # Documentación del proyecto
├── .gitignore             # Archivos a ignorar en Git
└── .github/workflows/     # GitHub Actions
    ├── html-lint.yml      # Linting de HTML
    ├── deploy.yml         # Despliegue automático
    └── notify-juan.yml    # Notificaciones
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/NorvinGZ/turismo.git
   cd turismo
   ```

2. **Abrir en el navegador**
   - Opción 1: Abrir `index.html` directamente en el navegador
   - Opción 2: Usar un servidor local:
     ```bash
     # Con Python
     python -m http.server 8000
     
     # Con Node.js
     npx serve .
     
     # Con PHP
     php -S localhost:8000
     ```

3. **Acceder al sitio**
   - Navegador: `http://localhost:8000`
   - O simplemente abrir `index.html` en el navegador

## 📄 Páginas del Sitio

### 🏠 Página de Inicio (`index.html`)
- **Hero Section**: Presentación impactante con animaciones
- **Destinos Destacados**: Grid de destinos con efectos hover
- **Características**: Servicios principales con iconos animados
- **Footer**: Enlaces y información de contacto

### 🛍️ Página de Servicios (`servicios.html`)
- **Paquetes Turísticos**: 3 niveles (Básico, Premium, VIP)
- **Servicios Adicionales**: 6 servicios complementarios
- **Proceso de Reserva**: 4 pasos explicativos
- **Efectos Interactivos**: Hover effects y modales

### 📞 Página de Contacto (`contacto.html`)
- **Información de Contacto**: Datos completos de la empresa
- **Formulario Avanzado**: Validación en tiempo real
- **FAQ**: Preguntas frecuentes con acordeón
- **Mapa**: Ubicación de las oficinas

## 🎨 Características Técnicas

### HTML5 Semántico
- Estructura semántica correcta
- Meta tags optimizados
- Atributos de accesibilidad
- SEO friendly

### CSS3 Moderno
- Variables CSS personalizadas
- Flexbox y Grid Layout
- Animaciones y transiciones
- Media queries responsivas
- Gradientes y sombras

### JavaScript Puro
- Sin dependencias externas
- Animaciones de scroll
- Validación de formularios
- Efectos interactivos
- Menú móvil responsive

## 🎯 Funcionalidades JavaScript

### Animaciones
- **Scroll Animations**: Elementos aparecen al hacer scroll
- **Hover Effects**: Efectos al pasar el mouse
- **Parallax**: Elementos flotantes con movimiento
- **Transiciones**: Cambios suaves entre estados

### Interactividad
- **Formularios**: Validación en tiempo real
- **Modales**: Ventanas emergentes para paquetes
- **Menú Móvil**: Navegación responsive
- **FAQ**: Acordeón interactivo

### Utilidades
- **Debounce/Throttle**: Optimización de eventos
- **Intersection Observer**: Detección de elementos visibles
- **Smooth Scrolling**: Navegación suave
- **Error Handling**: Manejo de errores

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

### Características Móviles
- Menú hamburguesa
- Grid adaptativo
- Texto optimizado
- Botones táctiles
- Imágenes responsivas

## 🚀 GitHub Actions

### HTML Lint (`html-lint.yml`)
- Validación de HTML5
- Verificación de accesibilidad
- Análisis de SEO

### Deploy (`deploy.yml`)
- Despliegue automático a GitHub Pages
- Build y optimización
- Notificaciones de estado

### Notify Juan (`notify-juan.yml`)
- Notificaciones personalizadas
- Alertas de cambios
- Reportes de estado

## 🎨 Paleta de Colores

```css
:root {
    --primary-color: #2E86AB;      /* Azul principal */
    --secondary-color: #A23B72;    /* Rosa secundario */
    --accent-color: #F18F01;       /* Naranja de acento */
    --success-color: #4CAF50;      /* Verde de éxito */
    --text-dark: #2c3e50;          /* Texto oscuro */
    --text-light: #7f8c8d;         /* Texto claro */
    --white: #ffffff;              /* Blanco */
    --light-bg: #f8f9fa;           /* Fondo claro */
}
```

## 📊 Rendimiento

### Optimizaciones Implementadas
- **CSS Minificado**: Estilos optimizados
- **JavaScript Eficiente**: Código optimizado
- **Imágenes Responsivas**: Carga adaptativa
- **Lazy Loading**: Carga diferida de elementos
- **Debounce/Throttle**: Optimización de eventos

### Métricas Objetivo
- **Lighthouse Score**: > 90
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 4s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Personalización

### Variables CSS
Modifica las variables en `:root` para cambiar colores, espaciados y efectos:

```css
:root {
    --primary-color: #tu-color;
    --border-radius: 12px;
    --transition: all 0.3s ease;
}
```

### Contenido
- **Destinos**: Edita las tarjetas en `index.html`
- **Paquetes**: Modifica los precios en `servicios.html`
- **Contacto**: Actualiza la información en `contacto.html`

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Las animaciones no funcionan**
   - Verificar que JavaScript esté habilitado
   - Comprobar la consola del navegador

2. **El formulario no valida**
   - Verificar que todos los campos requeridos estén completos
   - Revisar el formato del email

3. **Problemas de responsive**
   - Limpiar caché del navegador
   - Verificar viewport meta tag

## 📈 Roadmap Futuro

### Próximas Características
- [ ] Integración con APIs de reservas
- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] Chat en vivo
- [ ] Integración con redes sociales
- [ ] PWA (Progressive Web App)

### Mejoras Técnicas
- [ ] TypeScript migration
- [ ] Webpack bundling
- [ ] Service Workers
- [ ] Offline support
- [ ] Performance monitoring

## 🤝 Contribuciones

### Cómo Contribuir
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- HTML5 semántico
- CSS3 moderno con variables
- JavaScript ES6+
- Comentarios claros
- Código limpio y organizado

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autores

**NorvinGZ**
- GitHub: [@NorvinGZ](https://github.com/NorvinGZ)
- Email: contacto@travelgo.com

## 🙏 Agradecimientos

- **Unsplash** por las imágenes de alta calidad
- **Font Awesome** por los iconos
- **Google Fonts** por la tipografía Poppins
- **Comunidad de desarrolladores** por las mejores prácticas

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- 📧 Email: soporte@travelgo.com
- 💬 GitHub Issues: [Crear un issue](https://github.com/NorvinGZ/turismo/issues)
- 📱 Teléfono: +1 (555) 123-4567

---

<div align="center">

**¡Gracias por usar TravelGo! 🌍✈️**

*Haciendo realidad tus sueños de viaje desde 2024*

[![GitHub stars](https://img.shields.io/github/stars/NorvinGZ/turismo?style=social)](https://github.com/NorvinGZ/turismo/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/NorvinGZ/turismo?style=social)](https://github.com/NorvinGZ/turismo/network)
[![GitHub watchers](https://img.shields.io/github/watchers/NorvinGZ/turismo?style=social)](https://github.com/NorvinGZ/turismo/watchers)

</div>
