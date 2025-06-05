<script lang="ts">

	import { Seo } from '@svaio/meta/svelte'
	import { Head } from '@svaio/pwa/svelte'
	import { Utils } from '@svaio/unocss/svelte'

	import Header from './Header.svelte'
	import '../app.css'

	// import * as m from '$lib/paraglide/messages.js'

	let { children } = $props()

</script>

<Utils />
<Seo
	meta={{
		title       : 'holña',
		description : 'desc',
	}}
/>

<svelte:head>
	<Head />
</svelte:head>

<div class="app bg-red-400">

	<Header />
	<!-- <span>{m.homepage_title()}</span> -->

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
