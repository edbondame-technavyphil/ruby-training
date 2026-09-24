// src/components/PostDetail.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { postsApi } from "../api/client";
import type { Post } from "../types/post";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    postsApi.get(id).then(setPost).catch((err) => setError(err.message));
  }, [id]);

  const handleDelete = async () => {
    if (!id || !confirm("Delete this post?")) return;
    await postsApi.remove(id);
    navigate("/");
  };

  if (error) return <p className="px-6 py-10 text-red-700">{error}</p>;
  if (!post) return <p className="px-6 py-10 text-ink/60">Loading…</p>;

  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <Link to="/" className="text-sm text-moss underline">
        ← Back to all posts
      </Link>

      <h1 className="mt-4 font-display text-4xl">{post.title}</h1>
      <p className="mt-2 text-sm text-ink/60">
        by {post.author} · {new Date(post.created_at).toLocaleDateString()}
      </p>

      <p className="mt-8 whitespace-pre-wrap leading-relaxed">{post.content}</p>

      <div className="mt-10 flex gap-4 border-t border-ink/10 pt-6 text-sm">
        <Link to={`/posts/${post.id}/edit`} className="text-moss underline">
          Edit
        </Link>
        <button onClick={handleDelete} className="text-red-700 underline">
          Delete
        </button>
      </div>
    </article>
  );
}
