const apiBaseUrl = import.meta.env.VITE_API_URL ?? "";

export async function saveContactMessage(message: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  const response = await fetch(`${apiBaseUrl}/api/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    const result = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;
    throw new Error(result?.message || `Request failed (${response.status}).`);
  }
}
