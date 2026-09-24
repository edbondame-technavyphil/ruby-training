// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-6">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id/edit" element={<PostForm />} />
        </Routes>
      </main>
    </div>
  );
}