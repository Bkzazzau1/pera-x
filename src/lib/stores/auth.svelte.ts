// File: src/lib/stores/auth.svelte.ts
export type AuthState = {
  token: string | null;
  user: { id: string; email: string } | null;
};

export const auth: AuthState = {
  token: null,
  user: null
};

export function setToken(token: string | null) {
  auth.token = token;
}

export function setUser(user: AuthState["user"]) {
  auth.user = user;
}
