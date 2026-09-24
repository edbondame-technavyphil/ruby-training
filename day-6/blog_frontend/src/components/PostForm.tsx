// src/components/PostForm.tsx
// One form, two jobs: creating a new post and editing an existing one.
// When `id` is present in the URL (via useParams) we load that post first
// and switch the submit handler from `create` to `update`.

import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postsApi } from "../api/client";
import type { PostInput } from "../types/post";

export default function PostForm() {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState<PostInput>({
    title: "",
    author: "",
    content: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    postsApi.get(id).then((post) =>
      setForm({ title: post.title, author: post.author, content: post.content })
    );
  }, [id]);

  const handleChange =
    (field: keyof PostInput) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const saved = isEditing && id
        ? await postsApi.update(id, form)
        : await postsApi.create(form);
      navigate(`/posts/${saved.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="font-display text-3xl">
        {isEditing ? "Edit post" : "Write a new post"}
      </h1>

      {error && <p className="mt-4 text-red-700">{error}</p>}

      <label className="mt-8 block text-sm text-ink/70">
        Title
        <input
          value={form.title}
          onChange={handleChange("title")}
          required
          className="mt-1 w-full rounded-md border border-ink/20 bg-transparent px-3 py-2 focus:border-moss focus:outline-none"
        />
      </label>

      <label className="mt-6 block text-sm text-ink/70">
        Author
        <input
          value={form.author}
          onChange={handleChange("author")}
          required
          className="mt-1 w-full rounded-md border border-ink/20 bg-transparent px-3 py-2 focus:border-moss focus:outline-none"
        />
      </label>

      <label className="mt-6 block text-sm text-ink/70">
        Content
        <textarea
          value={form.content}
          onChange={handleChange("content")}
          required
          rows={10}
          className="mt-1 w-full rounded-md border border-ink/20 bg-transparent px-3 py-2 focus:border-moss focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={saving}
        className="mt-8 rounded-full bg-moss px-6 py-2.5 text-paper transition-colors hover:bg-ink disabled:opacity-50"
      >
        {saving ? "Saving…" : isEditing ? "Save changes" : "Publish"}
      </button>
    </form>
  );
}
