import type { Playlist } from '../interfaces/Playlist'

export const getPlaylist = async (playlistId: string, token: string): Promise<Playlist> => {
	try {
		const url = `https://api.spotify.com/v1/playlists/${playlistId}`
		let response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error(`HTTP error status: ${response.status}`)
		}

		const data: Playlist = await response.json()

		// Fetching tracks recursively until there are no more pages
		const fetchTracks = async () => {
			const nextPageUrl = data.tracks.next
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
			data.tracks.items.push(...nextData.items)
			data.tracks.next = nextData.next
			await fetchTracks() // Recursively call fetchTracks to handle pagination
		}

		await fetchTracks() // Start fetching tracks

		return data
	} catch (error) {
		console.error(error)
		throw error // Rethrow the error to allow calling functions to handle it
	}
}
