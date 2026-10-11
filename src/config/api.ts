export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://3.210.213.228.sslip.io"
).replace(/\/$/, "");

export type AuthResponse = {
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
  };
  access: string;
  refresh: string;
};
