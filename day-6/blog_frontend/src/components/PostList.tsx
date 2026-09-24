// src/components/PostList.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postsApi } from "../api/client";
import type { Post } from "../types/post";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    postsApi
      .list()
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="px-6 py-10 text-ink/60">Loading posts…</p>;
  if (error) return <p className="px-6 py-10 text-red-700">{error}</p>;

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center text-ink/60">
        <p>No posts yet.</p>
        <Link to="/new" className="text-moss underline">
          Write the first one
        </Link>
      </div>
    );
  }

  return (
    <ul className="mx-auto max-w-3xl divide-y divide-ink/10 px-6">
      {posts.map((post) => (
        <li key={post.id} className="py-8">
          <Link to={`/posts/${post.id}`} className="group block">
            <h2 className="font-display text-2xl group-hover:text-moss">
              {post.title}
            </h2>
            <p className="mt-1 text-sm text-ink/60">
              by {post.author} · {new Date(post.created_at).toLocaleDateString()}
            </p>
            <p className="mt-3 line-clamp-2 text-ink/80">{post.content}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
