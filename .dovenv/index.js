import { defineConfig } from '@dovenv/core'
import {
	pigeonposseMonorepoTheme,
	getWorkspaceConfig,
} from '@dovenv/theme-pigeonposse'

export default defineConfig(
	pigeonposseMonorepoTheme( {
		core : await getWorkspaceConfig( {
			metaURL  : import.meta.url,
			path     : '../',
			corePath : './packages/core',
		} ),
		docs : {
			styles : { color : {
				primary   : '#ef4b25',
				secondary : '#fcd00f',
				terciary  : '#ef4b25',
				fourth    : '#fcd00f',
			} },
			vitepress : {
				ignoreDeadLinks : true,
				themeConfig     : { outline: { level: [ 2, 3 ] } },
				metaChunk       : true,
			},
			twoslash : false,
		},
	} ),
)
