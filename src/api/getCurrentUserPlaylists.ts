import type { Playlists } from '../interfaces/Playlists'

export const getCurrentUserPlaylists = async (token: string): Promise<Playlists> => {
	try {
		const url = `https://api.spotify.com/v1/me/playlists`
		let response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error(`HTTP error status: ${response.status}`)
		}

		const data = await response.json()

		// Fetching tracks recursively until there are no more pages
		const fetchFullyPlaylists = async () => {
			const nextPageUrl = data.next
			if (!nextPageUrl) return

			response = await fetch(nextPageUrl, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})

			if (!response.ok) {
				throw new Error(`HTTP error fetching tracks status: ${response.status}`)
			}

			const nextData = await response.json()
			data.items.push(...nextData.items)
			data.next = nextData.next
			await fetchFullyPlaylists() // Recursively call fetchFullyPlaylists to handle pagination
		}

		await fetchFullyPlaylists() // Start fetching tracks
		return data
	} catch (error) {
		console.error(error)
		throw error // Rethrow the error to allow calling functions to handle it
	}
}
