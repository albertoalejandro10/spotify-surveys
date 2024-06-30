import type { Profile } from '../interfaces/Profile';

export const getProfile = async (id: string, token: string): Promise<Profile | null> => {
	try {
		const url = `https://api.spotify.com/v1/users/${id}`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			throw new Error(`Error al obtener el perfil: ${response.statusText}`);
		}

		const data: Profile = await response.json();
		return data;
	} catch (error) {
		console.error("Error al realizar la petición:", error);
		return null; // Devuelve null en caso de error
	}
};

export const getProfiles = async (ids: string[], token: string): Promise<(Profile | null)[]> => {
	const profilePromises = [];
	for (const id of ids) {
		const profilePromise = getProfile(id, token);
		profilePromises.push(profilePromise);
	}
	// Esperar a que todas las promesas se resuelvan
	return await Promise.all(profilePromises);
};
