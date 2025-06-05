export const getGoogleFontData = async ( font: string, weight: number = 400 ) => {

	const url      = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`
	const css      = await ( await fetch( url ) ).text()
	const resource = css.match( /src: url\((.+)\) format\('(opentype|truetype)'\)/ )

	if ( resource ) {

		const response = await fetch( resource[1] )
		if ( response.status == 200 )
			return await response.arrayBuffer()

	}

	throw new Error( 'failed to load font data' )

}

