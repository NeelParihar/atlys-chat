import { Heart, MessageCircle, Share, Bookmark } from "lucide-react";

export type Post = {
  id: string;
  author: { name: string; avatarUrl: string };
  createdAt: string;
  content: string;
};

export default function PostCard({
  post,
  onAction,
}: {
  post: Post;
  onAction: (action: "like" | "comment" | "share" | "save") => void;
}) {
  return (
    <article className="card p-4">
      <header className="flex items-center gap-3 mb-3">
        <img
          src={post.author.avatarUrl}
          alt=""
          className="h-9 w-9 rounded-lg object-cover"
        />
        <div>
          <div className="text-sm font-medium">{post.author.name}</div>
          <div className="text-xs text-slate-500">5 mins ago</div>
        </div>
      </header>
      <p className="text-sm text-slate-700 leading-6">{post.content}</p>
      <footer className="mt-4 flex items-center gap-2 text-slate-600">
        <button
          className="icon-btn"
          onClick={() => onAction("like")}
          aria-label="Like"
        >
          <Heart className="h-5 w-5" />
        </button>
        <button
          className="icon-btn"
          onClick={() => onAction("comment")}
          aria-label="Comment"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
        <button
          className="icon-btn"
          onClick={() => onAction("share")}
          aria-label="Share"
        >
          <Share className="h-5 w-5" />
        </button>
        <button
          className="icon-btn"
          onClick={() => onAction("save")}
          aria-label="Save"
        >
          <Bookmark className="h-5 w-5" />
        </button>
      </footer>
    </article>
  );
}
