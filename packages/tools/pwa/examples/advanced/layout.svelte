<script lang="ts">

	import { pwaAssetsHead } from 'virtual:pwa-assets/head'
	import { pwaInfo } from 'virtual:pwa-info'

</script>

{@html pwaInfo ? pwaInfo.webManifest.linkTag : ''}
{#if pwaAssetsHead.themeColor}
	<meta
		name="theme-color"
		content={pwaAssetsHead.themeColor.content}
	/>
{/if}
{#each pwaAssetsHead.links as link}
	<link {...link} />
{/each}

