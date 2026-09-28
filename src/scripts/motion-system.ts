import { animate, inView, scroll } from "motion";

/**
 * Sistema de movimiento del sitio — una sola fuente de verdad.
 *
 * Personalidad: precisa, sin overshoot ("instrumento de precisión").
 * Todos los springs son críticamente amortiguados (`bounce: 0`), así que
 * nunca oscilan. Este archivo reemplaza los scripts ad-hoc que antes vivían
 * en cada página con parámetros distintos (duraciones 0.5/0.55/0.6, offsets
 * 10/12/15/16/20, staggers 0.05/0.08/0.1) y umbrales de disparo incompatibles.
 *
 * Contrato de marcado:
 *   [data-reveal-load]  contenedor cuyos [data-reveal] aparecen al cargar, escalonados
 *   [data-reveal]       el elemento aparece por sí solo al entrar al viewport
 *   [data-reveal-list]  cada hijo directo aparece por sí solo al entrar al viewport
 *
 * El estado inicial oculto vive en global.css, pero solo bajo `html.js` y
 * `prefers-reduced-motion: no-preference`: sin JS o con movimiento reducido el
 * contenido siempre es visible.
 */

export const SPRING_SETTLE = {
	type: "spring",
	bounce: 0,
	visualDuration: 0.5,
} as const;

export const SPRING_SNAPPY = {
	type: "spring",
	bounce: 0,
	visualDuration: 0.3,
} as const;

const DISTANCE = 16;
const FADE_DURATION = 0.45;
const LOAD_STAGGER = 0.07;
const SCROLL_TRIGGER = { amount: 0.2, margin: "0px 0px -12% 0px" } as const;

let controls: Array<ReturnType<typeof animate>> = [];
let stops: Array<() => void> = [];
let scrollCleanup: (() => void) | null = null;
let initialized = false;

const prefersReducedMotion = () =>
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Revela un elemento: `y` con spring (movimiento físico) y opacidad con un
 * tween corto (los valores no numéricos no ganan nada con un spring).
 */
function reveal(element: Element, delay = 0) {
	controls.push(
		animate(
			element,
			{ opacity: [0, 1], y: [DISTANCE, 0] },
			{
				opacity: { duration: FADE_DURATION, ease: "easeOut", delay },
				y: { ...SPRING_SETTLE, delay },
			}
		)
	);
}

/** Revela cada elemento por separado, justo cuando entra al viewport. */
function revealOnScroll(elements: Iterable<Element>) {
	for (const element of elements) {
		stops.push(
			inView(element, () => reveal(element), { ...SCROLL_TRIGGER, once: true })
		);
	}
}

export function initMotion() {
	// Idempotente: en el primer load `initMotion()` puede correr antes que el
	// evento `astro:page-load` (carrera de módulos). Solo montamos una vez por
	// documento; `destroyMotion()` rearma el flag en cada navegación.
	if (initialized) return;
	destroyMotion();
	initialized = true;

	// El estado oculto inicial y "¿va a animar algo?" deben coincidir siempre.
	const reduced = prefersReducedMotion();
	document.documentElement.classList.toggle("js", !reduced);
	if (reduced) return;

	// 1. Entradas al cargar: grupos explícitos, escalonados.
	for (const group of document.querySelectorAll("[data-reveal-load]")) {
		group
			.querySelectorAll("[data-reveal]")
			.forEach((element, i) => reveal(element, i * LOAD_STAGGER));
	}

	// 2. Entradas al hacer scroll: cada marcador dispara por su cuenta.
	const scattered: Element[] = [];
	for (const element of document.querySelectorAll("[data-reveal]")) {
		if (element.closest("[data-reveal-load]")) continue;
		scattered.push(element);
	}
	revealOnScroll(scattered);

	// 3. Contenedores que piden revelar a sus hijos uno por uno (p. ej. prosa larga).
	for (const list of document.querySelectorAll("[data-reveal-list]")) {
		revealOnScroll(Array.from(list.children));
	}

	// 4. Barra de progreso de lectura (solo presente en páginas de proyecto).
	const progress = document.querySelector<HTMLElement>("[data-reading-progress]");
	if (progress) {
		scrollCleanup = scroll(
			animate(progress, { scaleX: [0, 1] }, { ease: "linear" })
		);
	}
}

export function destroyMotion() {
	initialized = false;

	for (const stop of stops) stop();
	stops = [];

	for (const animation of controls) animation.stop();
	controls = [];

	scrollCleanup?.();
	scrollCleanup = null;
}
