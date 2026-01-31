// File: src/lib/utils/guards.ts
export function requireAuth(token: string | null) {
  if (!token) throw new Error("Not authenticated");
}
