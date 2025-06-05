declare module '*?enhanced' {
	const src: string
	export default src
}

// src/app.d.ts o src/types/imagetools.d.ts

declare module '*.png?*' {
	const src: string
	export default src
}

declare module '*.jpg?*' {
	const src: string
	export default src
}

declare module '*.jpeg?*' {
	const src: string
	export default src
}

declare module '*.svg?*' {
	const src: string
	export default src
}

declare module '*?w=*&h=*&format=webp' {
	const src: string
	export default src
}

// <reference types="@sveltejs/enhanced-img/types/ambient.d.ts" />
