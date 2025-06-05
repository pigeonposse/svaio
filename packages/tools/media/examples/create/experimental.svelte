<script>

	import { getCreateMediaPaths } from '@svaio/media/svelte'

	const createImagePath = getCreateMediaPaths()

</script>

<img
	style="width:100%; height:100%; object-fit:cover"
	alt="some alt text"
	src={createImagePath['og']}
/>
