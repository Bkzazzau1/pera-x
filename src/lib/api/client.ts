// File: src/lib/api/client.ts
type Json = Record<string, unknown>;

export async function apiGet<T = Json>(path: string, token?: string): Promise<T> {
  const res = await fetch(path, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {})
    }
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GET ${path} failed: ${res.status} ${text}`);
  }

  return (await res.json()) as T;
}

export async function apiPost<T = Json>(
  path: string,
  body: unknown,
  token?: string
): Promise<T> {
  const res = await fetch(path, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`POST ${path} failed: ${res.status} ${text}`);
  }

  return (await res.json()) as T;
}
