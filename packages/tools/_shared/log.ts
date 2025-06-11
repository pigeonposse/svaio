
export const logger = ( id: string ) => {

	const msg = ( id: string, type:string, m: string ) => ( type ) + `[${id}] ${m}`

	const formats = {
		warn    : ( m: string ) => msg( id, '⚠️', m ),
		info    : ( m: string ) => msg( id, 'i️', m ),
		success : ( m: string ) => msg( id, '🎉', m ),
		error   : ( m: string ) => msg( id, '⤫', m ),
		custom  : ( m: string, icon?: string ) => msg( id, icon || '', m ),
	}
	return {
		formats,
		warn    : ( m: string ) => console.warn( formats.warn( m ) ),
		info    : ( m: string ) => console.info( formats.info( m ) ),
		success : ( m: string ) => console.log( formats.success( m ) ),
		error   : ( m: string ) => console.error( formats.error( m ) ),
	}

}
