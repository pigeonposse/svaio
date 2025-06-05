<script lang="ts">
	import { Seo } from '@svaio/meta'
</script>

<svelte:head>
	<Seo
		jsonld={{ schema : {
			'@type'           : 'BreadcrumbList',
			'itemListElement' : [
				{
					'@type'    : 'ListItem',
					'position' : 1,
					'name'     : 'Books',
					'item'     : 'https://example.com/books',
				},
				{
					'@type'    : 'ListItem',
					'position' : 2,
					'name'     : 'Science Fiction',
					'item'     : 'https://example.com/books/sciencefiction',
				},
				{
					'@type'    : 'ListItem',
					'position' : 3,
					'name'     : 'Award Winners',
				},
			],
		} }}
	/>
</svelte:head>
