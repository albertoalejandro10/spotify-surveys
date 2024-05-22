import type { Playlists } from "../interfaces/Playlists";

export const getCurrentUserPlaylists = async (token: string): Promise<Playlists> => {
  const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  if (!response.ok) {
    throw new Error("Error al conseguir los playlists");
  }

  // Aquí es donde especificas el tipo de dato esperado
  const data = await response.json();
  return data;
};