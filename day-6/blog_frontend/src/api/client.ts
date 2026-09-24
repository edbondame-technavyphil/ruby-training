// src/api/client.ts
// One place that knows how to talk to the Rails API — components never call
// fetch() directly, they call these functions instead.

import type { Post, PostInput } from "../types/post";

const BASE_URL = "http://localhost:3000/api";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message = body.errors?.join(", ") || body.error || res.statusText;
    throw new Error(message);
  }
  // 204 No Content (DELETE) has no body to parse.
  if (res.status === 204) return undefined as T;
  return res.json();
}

export const postsApi = {
  list: (): Promise<Post[]> =>
    fetch(`${BASE_URL}/posts`).then((res) => handleResponse(res)),

  get: (id: string): Promise<Post> =>
    fetch(`${BASE_URL}/posts/${id}`).then((res) => handleResponse(res)),

  create: (input: PostInput): Promise<Post> =>
    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: input }),
    }).then((res) => handleResponse(res)),

  update: (id: string, input: PostInput): Promise<Post> =>
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: input }),
    }).then((res) => handleResponse(res)),

  remove: (id: string): Promise<void> =>
    fetch(`${BASE_URL}/posts/${id}`, { method: "DELETE" }).then((res) =>
      handleResponse(res)
    ),
};
