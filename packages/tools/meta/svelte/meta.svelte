<script lang="ts">

	import {
		MetaTags,
		deepMerge,
	} from 'svelte-meta-tags'

	import type { ComponentProps } from 'svelte'

	type MetaProps = ComponentProps<typeof MetaTags>
	type Props = MetaProps | MetaProps[]

	let meta: Props = $props()

	let metaTags = $derived.by( () => {

		if ( !meta ) return

		if ( !Array.isArray( meta ) ) return meta
		let allMeta: MetaProps = {}
		for ( const m of meta ) allMeta = deepMerge( allMeta, m )

		return allMeta

	} )

</script>

<MetaTags {...metaTags} />

