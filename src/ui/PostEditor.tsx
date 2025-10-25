import { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Smile,
  Image,
  Link as LinkIcon,
  Trash2,
  Paperclip,
  Mic,
  AtSign,
  Send,
} from "lucide-react";
import { ToolbarButton } from "./base/ToolbarButton";
import { Badge } from "./base/Badge";
import { IconButton } from "./base/IconButton";
import { Button } from "./base/Button";

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
    <div className="rounded-xl border border-slate-200">
      {/* Top toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-200 bg-white rounded-t-xl">
        <select
          id="post-format"
          className="text-xs rounded-md border border-slate-200 px-2 py-1 bg-white"
        >
          <option>Paragraph</option>
          <option>Heading</option>
        </select>
        <div className="h-5 w-px bg-slate-200" />
        <ToolbarButton
          className="bg-white border border-slate-200 shadow-soft"
          onClick={onNotImplemented}
          aria-pressed="true"
          aria-label="Bold"
        >
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={onNotImplemented}>
          <Italic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={onNotImplemented}>
          <Underline className="h-4 w-4" />
        </ToolbarButton>
        <div className="h-5 w-px bg-slate-200" />
        <ToolbarButton onClick={onNotImplemented}>
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={onNotImplemented}>
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>
        <div className="ml-auto flex items-center gap-2">
          <Badge>99</Badge>
          <ToolbarButton onClick={onNotImplemented} aria-label="Code">
            <code className="text-[10px]">{"</>"}</code>
          </ToolbarButton>
          <ToolbarButton
            className="bg-red-50 text-red-600 hover:bg-red-100"
            onClick={() => setText("")}
            aria-label="Clear"
          >
            <Trash2 className="h-4 w-4" />
          </ToolbarButton>
        </div>
      </div>

      {/* Editor area */}
      <div className="bg-white px-4 py-3">
        <div className="flex items-start gap-2">
          <Smile className="h-5 w-5 text-black-400 mt-1" />
          <textarea
            className="min-h-[96px] w-full resize-none outline-none bg-transparent placeholder:text-slate-400"
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      {/* Bottom actions */}
      <div className="flex items-center gap-1 border-t border-slate-200 bg-white px-2 py-2 rounded-b-xl">
        <IconButton onClick={onNotImplemented}>
          <Paperclip className="h-4 w-4" />
        </IconButton>
        <IconButton onClick={onNotImplemented}>
          <Image className="h-4 w-4" />
        </IconButton>
        <IconButton onClick={onNotImplemented}>
          <LinkIcon className="h-4 w-4" />
        </IconButton>
        <IconButton onClick={onNotImplemented}>
          <Mic className="h-4 w-4" />
        </IconButton>
        <IconButton onClick={onNotImplemented}>
          <AtSign className="h-4 w-4" />
        </IconButton>
        <div className="ml-auto" />
        <Button
          variant="primary"
          size="icon"
          className="shadow-soft"
          onClick={() => onPublish(text)}
          aria-label="Publish"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
