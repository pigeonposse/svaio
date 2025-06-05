<script lang="ts">

	import { JsonLd } from 'svelte-meta-tags'

	import Meta from './meta.svelte'

	import type { ComponentProps } from 'svelte'

	type MetaProps = ComponentProps<typeof Meta>
	type JsonLdProps = ComponentProps<typeof JsonLd>
	type Props = {
		meta?   : MetaProps
		jsonld? : JsonLdProps
	}

	let {
		meta,
		jsonld,
	}: Props = $props()

</script>

<Meta {...meta} />

<JsonLd {...jsonld} />
