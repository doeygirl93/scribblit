"use client";

import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

export default function TLDrawEditor() {
  return (
    <div className="w-screen h-screen">
      <Tldraw />
    </div>
  );
}
