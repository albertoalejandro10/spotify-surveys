import crypto from 'crypto'

export const sha256 = async (plain) => {
  const data = new TextEncoder().encode(plain)
  return await crypto.subtle.digest('SHA-256', data)  
};