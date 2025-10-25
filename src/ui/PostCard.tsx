import { Heart, MessageCircle, Send } from "lucide-react";
import type { CSSProperties } from "react";
import { Card } from "./base/Card";
import { IconButton } from "./base/IconButton";
import { cn } from "./lib/cn";

export type Post = {
  id: string;
  author: { name: string; avatarUrl: string };
  createdAt: string;
  content: string;
  moodEmoji?: string;
};

export default function PostCard({
  post,
  onAction,
  className,
  style,
}: {
  post: Post;
  onAction: (action: "like" | "comment" | "share" | "save") => void;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Card as="article" className={cn("p-2", className)}>
      <div
        className="rounded-2xl border shadow border-slate-200  bg-white p-2 animate-fade-in-up"
        style={style}
      >
        <header className="flex items-center gap-3 mb-2">
          <img
            src={post.author.avatarUrl}
            alt=""
            className="h-9 w-9 rounded-xl object-cover"
          />
          <div>
            <div className="text-sm font-medium">{post.author.name}</div>
            <div className="text-xs text-slate-500">5 mins ago</div>
          </div>
        </header>
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className=" inline-flex h-[28px] w-[28px] items-center justify-center rounded-full text-xl p-1 bg-zinc-100"
          >
            {post.moodEmoji}
          </span>
          <p className="text-[15px] leading-7 text-slate-700">{post.content}</p>
        </div>
      </div>
      <footer className="px-2 flex items-center gap-2 text-slate-600">
        <IconButton
          variant="ghost"
          className="hover:scale-110 transition-transform duration-200"
          onClick={() => onAction("like")}
          aria-label="Like"
        >
          <Heart className="h-5 w-5" />
        </IconButton>
        <IconButton
          variant="ghost"
          className="hover:scale-110 transition-transform duration-200"
          onClick={() => onAction("comment")}
          aria-label="Comment"
        >
          <MessageCircle className="h-5 w-5" />
        </IconButton>
        <IconButton
          variant="ghost"
          className="hover:scale-110 transition-transform duration-200"
          onClick={() => onAction("share")}
          aria-label="Share"
        >
          <Send className="h-5 w-5" />
        </IconButton>
      </footer>
    </Card>
  );
}
