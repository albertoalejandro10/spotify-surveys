export const getAccessToken = async (code: string, codeVerifier: string, clientId: string) => {
	const redirectUrl = 'http://localhost:4321/playlists'

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			client_id: clientId,
			grant_type: 'authorization_code',
			code,
			redirect_uri: redirectUrl,
			code_verifier: codeVerifier
		})
	})

	if (!response.ok) {
		throw new Error('Error al obtener el token de acceso')
	}

	return await response.json()
}
