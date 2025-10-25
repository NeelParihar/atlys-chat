import { useState } from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Smile,
  Image,
  Link as LinkIcon,
  Trash2,
  Paperclip,
  Send,
} from "lucide-react";

export default function PostEditor({
  placeholder,
  onPublish,
  onNotImplemented,
}: {
  placeholder: string;
  onPublish: (text: string) => void;
  onNotImplemented: () => void;
}) {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="flex items-center gap-2 p-2 border-b border-slate-200">
        <select className="text-xs rounded-md border border-slate-200 px-2 py-1 bg-white">
          <option>Paragraph</option>
          <option>Heading</option>
        </select>
        <button className="icon-btn" onClick={onNotImplemented}>
          <Bold className="h-4 w-4" />
        </button>
        <button className="icon-btn" onClick={onNotImplemented}>
          <Italic className="h-4 w-4" />
        </button>
        <button className="icon-btn" onClick={onNotImplemented}>
          <List className="h-4 w-4" />
        </button>
        <button className="icon-btn" onClick={onNotImplemented}>
          <ListOrdered className="h-4 w-4" />
        </button>
        <div className="ml-auto flex items-center gap-1">
          <span className="text-xs text-slate-500">99</span>
          <button className="icon-btn" onClick={onNotImplemented}>
            <code className="text-[10px]">{"</>"}</code>
          </button>
          <button className="icon-btn text-red-500" onClick={() => setText("")}>
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="flex items-start gap-2">
          <Smile className="h-5 w-5 text-slate-400 mt-1" />
          <textarea
            className="min-h-[80px] w-full resize-none outline-none bg-transparent placeholder:text-slate-400"
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-slate-200 px-2 py-2">
        <button className="icon-btn" onClick={onNotImplemented}>
          <Paperclip className="h-4 w-4" />
        </button>
        <button className="icon-btn" onClick={onNotImplemented}>
          <Image className="h-4 w-4" />
        </button>
        <button className="icon-btn" onClick={onNotImplemented}>
          <LinkIcon className="h-4 w-4" />
        </button>
        <div className="ml-auto" />
        <button className="btn btn-primary" onClick={() => onPublish(text)}>
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
