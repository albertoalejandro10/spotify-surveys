import type { Profile } from "../interfaces/Profile";


export const getProfile = async (id: string, token: string): Promise<Profile> => {
  const url = `https://api.spotify.com/v1/users/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  if (!response.ok) {
    throw new Error("Error al obtener el token de acceso");
  }

  const data: Profile = await response.json();
  return data;
};

export const getProfiles = async (ids: string[], token: string): Promise<Profile[]> => {
  const profilePromises = [];
  for (const id of ids) {
    const profilePromise = getProfile(id, token);
    profilePromises.push(profilePromise);
  }
  // Esperar a que todas las promesas se resuelvan
  return await Promise.all(profilePromises);
};