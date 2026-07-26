import api from "@/lib/api";

export type AuthTokens = {
  access: string;
  refresh: string;
};

export type AuthUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
};

export type UserProfile = {
  id: number;
  blood_group: string;
  age: number | null;
  weight_kg: string | null;
  height_cm: string | null;
  medical_history: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  avatar: string | null;
};

export type AuthSession = {
  message: string;
  user: AuthUser;
  profile?: UserProfile | null;
  tokens?: AuthTokens | null;
};

export async function register(payload: {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}) {
  const response = await api.post<AuthSession>("/auth/register/", payload);
  return response.data;
}

export async function login(payload: { email: string; password: string }) {
  const response = await api.post<AuthSession>("/auth/login/", payload);
  return response.data;
}

export async function refreshToken(refresh: string) {
  const response = await api.post<AuthTokens>("/auth/refresh/", { refresh });
  return response.data;
}

export async function logout(refresh: string) {
  await api.post("/auth/logout/", { refresh });
}

export async function getProfile(accessToken: string) {
  const response = await api.get<{ user: AuthUser; profile: UserProfile }>("/profile/me/", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}

export async function updateProfile(accessToken: string, payload: Partial<UserProfile>) {
  const response = await api.patch<{ user: AuthUser; profile: UserProfile }>("/profile/me/", payload, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
}