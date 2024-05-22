import type { Profile } from "../interfaces/Profile";

export const getUserData = async (token: string): Promise<Profile> => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  if (!response.ok) {
    throw new Error("Error al obtener datos de usuario");
  }

  // Aquí es donde especificas el tipo de dato esperado
  const data = await response.json();
  return data;
};