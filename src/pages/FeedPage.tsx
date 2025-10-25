import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "../ui/Navbar";
import PostEditor from "../ui/PostEditor";
import PostCard from "../ui/PostCard";
import type { Post } from "../ui/PostCard";
import AuthModal from "../ui/AuthModal";
import { useAuth } from "../state/AuthContext";

export default function FeedPage() {
  const { isAuthenticated } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: {
        name: "Theresa Webb",
        avatarUrl: "https://i.pravatar.cc/64?img=48",
      },
      createdAt: new Date().toISOString(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "2",
      author: {
        name: "John Doe",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
      },
      createdAt: new Date().toISOString(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  function handlePublish(text: string) {
    if (!isAuthenticated) {
      setShowAuth(true);
      return;
    }
    if (!text.trim()) return;
    const newPost: Post = {
      id: String(Date.now()),
      author: { name: "You", avatarUrl: "https://i.pravatar.cc/64?img=67" },
      createdAt: new Date().toISOString(),
      content: text.trim(),
    };
    setPosts((p) => [newPost, ...p]);
  }

  function gated(action: () => void) {
    if (!isAuthenticated) {
      setShowAuth(true);
      return;
    }
    action();
  }

  return (
    <div className="min-h-full bg-background">
      <Navbar onLoginClick={() => setShowAuth(true)} />

      <main className="mx-auto max-w-2xl py-8 px-4">
        <section className="card p-3 sm:p-4 mb-4">
          <PostEditor
            placeholder="How are you feeling today?"
            onPublish={handlePublish}
            onNotImplemented={() => alert("function not implemented")}
          />
        </section>

        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onAction={(name) =>
                gated(() => alert(`${name} - function not implemented`))
              }
            />
          ))}
        </div>
      </main>

      <AuthModal
        open={showAuth && !isAuthenticated}
        onClose={() => setShowAuth(false)}
      />
    </div>
  );
}
