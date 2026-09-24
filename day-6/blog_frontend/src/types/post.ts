// src/types/post.ts
// Mirrors the JSON shape returned by Api::PostsController.
// Mongo's `_id` is a string ObjectId, not a number — that's the main thing
// that differs from a typical ActiveRecord/Postgres API type.

export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// Shape of the payload the frontend sends when creating/editing a post.
export type PostInput = Pick<Post, "title" | "author" | "content">;
