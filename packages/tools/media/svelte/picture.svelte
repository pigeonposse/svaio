<script lang="ts">

	import type { PictureProps } from './types'

	let {
		src, ...rest
	}: PictureProps = $props()

</script>

<enhanced:img
	src={src}
	{...rest}
/>
