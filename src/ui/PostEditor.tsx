import { useState } from "react";
import {
  Italic,
  Underline,
  List,
  ListOrdered,
  Smile,
  Trash2,
  Mic,
  QuoteIcon,
  BoldIcon,
  SendHorizonalIcon,
  PlusIcon,
  Camera,
} from "lucide-react";
import { ToolbarButton } from "./base/ToolbarButton";
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
    <div className="rounded-2xl border border-slate-200 shadow-md">
      {/* Top toolbar */}
      <div className="flex items-center gap-2 px-3 py-3 bg-white rounded-t-2xl ">
        <div className=" flex gap-2 bg-zinc-100 p-1 rounded-md">
          <select
            id="post-format"
            className="text-xs rounded-md px-2 py-2 bg-white shadow"
          >
            <option>Paragraph</option>
            <option>Heading</option>
          </select>

          <ToolbarButton
            className=""
            onClick={onNotImplemented}
            aria-pressed="true"
            aria-label="Bold"
          >
            <BoldIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={onNotImplemented}>
            <Italic className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={onNotImplemented}>
            <Underline className="h-4 w-4" />
          </ToolbarButton>
          <div className="h-8 w-px bg-zinc-200" />
          <ToolbarButton onClick={onNotImplemented}>
            <List className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={onNotImplemented}>
            <ListOrdered className="h-4 w-4" />
          </ToolbarButton>
          <div className="h-8 w-px bg-zinc-200" />
          <ToolbarButton onClick={onNotImplemented}>
            <QuoteIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={onNotImplemented} aria-label="Code">
            <code className="text-[10px]">{"</>"}</code>
          </ToolbarButton>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <ToolbarButton
            className="bg-red-200 text-red-600 hover:!bg-red-200 p-2"
            onClick={() => setText("")}
            aria-label="Clear"
          >
            <Trash2 className="h-4 w-4 text-red-600" />
          </ToolbarButton>
        </div>
      </div>

      {/* Editor area */}
      <div className="bg-white px-3 py-1">
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
      <div className="flex items-center border-t border-slate-200 bg-white px-2 py-2 rounded-b-2xl">
        <IconButton onClick={onNotImplemented}>
          <PlusIcon className="h-4 w-4" />
        </IconButton>

        <IconButton onClick={onNotImplemented}>
          <Mic className="h-4 w-4" />
        </IconButton>
        <IconButton onClick={onNotImplemented}>
          <Camera className="h-4 w-4" />
        </IconButton>
        <div className="ml-auto" />
        <Button
          variant="ghost"
          size="icon"
          className="hover:scale-110 transition-transform duration-200"
          onClick={() => onPublish(text)}
          aria-label="Publish"
        >
          <SendHorizonalIcon
            fill="#6366F1"
            className="h-6 w-6 text-indigo-500"
          />
        </Button>
      </div>
    </div>
  );
}
