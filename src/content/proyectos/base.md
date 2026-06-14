---

# =========================================================================
# 📝 CONFIGURACIÓN DE PORTAFOLIO: CAMPOS FRONTMATTER
# =========================================================================
# Esta es la configuración obligatoria para tu proyecto. 
# Recuerda remover o actualizar estos valores al duplicar esta plantilla.

title: "Caso de Estudio: [Título de Alto Impacto]" # Título del proyecto. Ej: "Nueva App Kidsbook" o "Tolivmarket"
client: "[Nombre del Cliente]"                      # Nombre del cliente o empresa. Ej: "Kidsbook"
description: "[Resumen breve del proyecto]"         # Texto corto (1-2 líneas) que se muestra en listados y tarjetas.
intro: "[Párrafo introductorio de 2-3 líneas]"     # Un resumen del reto y la solución para la cabecera.
year: 2026                                          # Año de desarrollo (numérico). Ej: 2026
duration: "[Duración del proyecto]"                 # Opcional. Ej: "3 meses", "1 año"
date: 2026-05-17                                    # Fecha de publicación (AAAA-MM-DD) usada para ordenar.
rol: "[Tu Rol Principal]"                           # Opcional. Ej: "Product Designer" o "UX/UI Designer"
type: "[Tipo de Proyecto]"                         # Opcional. Ej: "UX, UI", "Web App", "Branding"
url: "https://www.tusitioweb.com"                   # Opcional. Enlace al proyecto real.
image: "/assets/img/portafolio/tolivmarket.png"     # Opcional. Imagen principal del hero (Resolución recomendada: 1200x500px, 21:9)
thumb: "/assets/img/portafolio/tolivmarket.png"     # Opcional. Miniatura para tarjetas (Resolución recomendada: 600x400px, 3:2)
tags: ["UX", "UI", "Research"]                      # Opcional. Filtros/etiquetas asociadas.
featured: false                                     # true para destacarlo en la página de inicio.
private: false                                      # true para mostrar icono de candado (privado/NDA).
draft: true                                         # true para guardarlo como borrador (no visible en producción).
---


<!-- 
    =========================================================================
    🖼️ RECETA 1: GRILLA DE IMÁGENES RESPONSIVA (MOCKUPS & SCREENS)
    =========================================================================
    Usa esta estructura para mostrar múltiples pantallas simultáneamente con 
    excelente responsividad. Se adapta automáticamente en móviles y escritorio.
-->

<div class="grid gap-4 grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 grid-flow-row-dense mb-16">
  <!-- Pantalla 1: Cuadrícula normal (1 col) -->
  <img class="rounded-2xl border border-border/10 object-cover w-full h-full" src="/assets/img/portafolio/thumbs/base.png" alt="Pantalla de Inicio de la App" loading="lazy">
  
  <!-- Pantalla 2: Cuadrícula normal (1 col) -->
  <img class="rounded-2xl border border-border/10 object-cover w-full h-full" src="/assets/img/portafolio/thumbs/base.png" alt="Pantalla de Carrito de Compras" loading="lazy">
  
  <!-- Pantalla 3: Mockup Vertical Largo (Ocupa 1 col pero abarca 2 filas en pantallas grandes) -->
  <img class="rounded-2xl border border-border/10 row-start-1 sm:row-span-2 object-cover w-full h-full" src="/assets/img/portafolio/thumbs/base.png" alt="Flujo de pedido móvil" loading="lazy">
  
  <!-- Pantalla 4: Banner Horizontal Ancho (Ocupa 2 cols) -->
  <img class="rounded-2xl border border-border/10 sm:col-span-2 object-cover w-full h-full" src="/assets/img/portafolio/thumbs/base.png" alt="Vista del flujo de despacho" loading="lazy">
</div>

---

## 🚀 El Desafío

Describe el **problema central** del negocio o los usuarios en un lenguaje enérgico. Enfócate en el dolor del usuario y la oportunidad de diseño.

> **💡 Consejo de redacción:** Empieza con una frase impactante y añade datos concretos si los tienes. Explica por qué era difícil resolver el problema antes de que tú intervinieras.

### Ejemplo de caso real

Durante el auge del comercio digital, los negocios locales en zonas aisladas enfrentaban grandes barreras para digitalizarse: procesos logísticos manuales, altas tasas de rechazo en pagos y falta de canales eficientes para coordinar repartos de última milla.

---

## 🎯 Objetivos Clave

Define metas concretas para tu diseño, tanto para el negocio como para la experiencia del usuario.

* **Reducción de Fricción:** Simplificar el proceso de compra bajando los pasos del flujo de checkout de 7 a 3 pasos.
* **Logística Inteligente:** Habilitar un canal de comunicación e indicaciones en tiempo real para reducir los pedidos fallidos.
* **Diseño Inclusivo:** Crear una interfaz de alta accesibilidad para pantallas móviles de baja resolución y condiciones de alta luminosidad solar.
* **Adopción Digital:** Fomentar una interfaz tan intuitiva que requiera cero horas de capacitación de soporte al cliente.

---

## 🔍 Investigación y Estrategia

Aquí es donde demuestras tu pensamiento estratégico y de UX Research. Explica la metodología de investigación que usaste y los hallazgos clave.

### Metodologías Aplicadas

1. **Entrevistas de Contexto:** Conversamos con 15 comercios locales y 10 repartidores en terreno.
2. **Shadowing en Ruta:** Acompañamos a repartidores en Magallanes para entender el uso de la app bajo temperaturas extremas y guantes puestos.
3. **Evaluación Heurística:** Análisis del estado del arte en aplicaciones de delivery de última milla a nivel global.

> ### 💡 Hallazgo Clave (Insight)
>
> "Los despachos no fallaban porque el GPS estuviera apagado, sino porque las indicaciones escritas para condominios complejos no estaban visibles durante la navegación del mapa."

---

## 🎨 Decisiones de Diseño y UX

Explica el proceso creativo y las soluciones UI que implementaste. Puedes incluir detalles técnicos de accesibilidad o diseño visual.

Para este reto, diseñamos un sistema modular enfocado en la usabilidad en movimiento. Esto incluyó:

* **Tipografía de Alto Contraste:** Uso de tipografías seminegritas de gran tamaño para lectura rápida.
* **Zonas de Toque Optimizadas:** Botones principales ubicados en la zona inferior de fácil acceso para el pulgar.
* **Modo de Navegación Simplificado:** Un mapa limpio que oculta elementos innecesarios al iniciar la ruta.

<div class="cell p-6 rounded-2xl border border-border bg-white/[0.01] my-8">
  <h4 class="text-accent font-mono text-xs uppercase tracking-wider mb-2">💡 Nota técnica: Accesibilidad AAA</h4>
  <p class="text-xs text-muted leading-relaxed">
    Toda la gama cromática y las interfaces de despacho fueron rediseñadas para garantizar un ratio de contraste de 7:1 (nivel AAA de WCAG), garantizando su lectura total bajo la luz directa del sol.
  </p>
</div>

---

<!-- 
    =========================================================================
    🕹️ RECETA 2: CONTENEDOR DE PROTOTIPO INTERACTIVO (FIGMA / MARVEL)
    =========================================================================
    Utiliza esta envoltura para empotrar tus prototipos de alta fidelidad 
    y permitir al visitante jugar con tu app directamente desde el portfolio.
-->

## 🕹️ Prototipo Interactivo

Prueba la experiencia de usuario interactiva y en tiempo real navegando el flujo principal del producto a continuación:

<div class="prototype my-8 aspect-[16/9] w-full">
  <iframe style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px;" width="100%" height="640" src="https://marvelapp.com/prototype/b0gc69i?emb=1&iosapp=false&frameless=false" allowfullscreen></iframe>
</div>

> **💡 Nota:** Cambia la URL del `src` por el link embebido de tu Figma o Marvel App. Asegúrate de conservar el `width="100%"` para que sea 100% responsive.

---

## 📈 Impacto y Resultados

Muestra con orgullo los números y el éxito de tu diseño. El diseño no es solo estética, es resolver problemas de negocio.

* <span class="font-bold text-3xl mb-1 block">+45%</span> Incremento en la conversión total de ventas semanales.
* <span class="font-bold text-3xl mb-1 block">-30%</span> Disminución en reclamos de soporte por entregas demoradas.
* <span class="font-bold text-3xl mb-1 block">98.2%</span> Tasa de éxito en la confirmación de la última milla.
* **0 minutos** de capacitación técnica requerida para la inducción de comercios y repartidores.

---

<!-- 
    =========================================================================
    📥 RECETA 3: ENLACES A STORES Y DESCARGAS
    =========================================================================
    Si el producto está publicado en producción, inserta los badges 
    oficiales del App Store y Google Play con este layout alineado al centro.
-->

## 📥 Disponibilidad del Producto

El ecosistema digital se encuentra totalmente desplegado y disponible para el público general:

<div class="flex flex-wrap gap-3 mt-6">
  <a class="hover:scale-[1.02] active:scale-95 transition-all duration-200" href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
    <img class="h-10 w-auto" src="/assets/img/Google_Play.svg" alt="Disponible en Google Play" loading="lazy">
  </a>
  <a class="hover:scale-[1.02] active:scale-95 transition-all duration-200" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
    <img class="h-10 w-auto" src="/assets/img/App_Store.svg" alt="Disponible en el App Store" loading="lazy">
  </a>
</div>
