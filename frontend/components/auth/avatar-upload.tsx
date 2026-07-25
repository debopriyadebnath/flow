"use client";

import { useState } from "react";

export function AvatarUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="space-y-3 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-pink-100 to-violet-100">
        {preview ? <img alt="Avatar preview" src={preview} className="h-full w-full object-cover" /> : null}
      </div>
      <label className="inline-flex cursor-pointer items-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-slate-700">
        Upload avatar
        <input
          className="hidden"
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            setPreview(URL.createObjectURL(file));
          }}
        />
      </label>
    </div>
  );
}