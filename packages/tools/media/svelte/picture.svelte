<script lang="ts">

	import { HTMLImgAttributes } from 'svelte/elements'

	let {
		src, ...rest
	}: HTMLImgAttributes & { src: string } = $props()

</script>

<enhanced:img
	src={src}
	{...rest}
/>
