import type { Playlist } from "../interfaces/Playlist";

export const getPlaylist = async (playlist_id: string, token: string): Promise<Playlist> => {
  const url = `https://api.spotify.com/v1/playlists/${playlist_id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al obtener la lista de playlist");
  }

  // Aquí es donde especificas el tipo de dato esperado
  const data: Playlist = await response.json();
  return data;
};