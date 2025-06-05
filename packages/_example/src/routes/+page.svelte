<script lang="ts">

	// import welcomeFallback from '$lib/images/svelte-welcome.png'
	// import welcome from '$lib/images/svelte-welcome.webp'

	import { getCreateMediaPaths } from '@svaio/media/svelte'

	import Counter from './Counter.svelte'
	import welcomeImage from '$lib/images/svelte-welcome.png?enhanced'

	const createImagePath = getCreateMediaPaths()
	console.log( createImagePath, createImagePath['og'] )
</script>

<section>
	<h1>
		<enhanced:img
			style="width:100%; height:100%; object-fit:cover"
			alt="some alt text"
			src={welcomeImage}
		/>
		<img
			style="width:100%; height:100%; object-fit:cover"
			alt="some alt text"
			src={createImagePath['og']}
		/>
		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
