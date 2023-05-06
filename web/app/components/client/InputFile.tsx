'use client';

import { useState } from "react";

export default function InputFile() {
  const [file, setFile] = useState<File>();

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = new FormData();
          form.append("book", file!);

          await fetch("/api/upload", {
            method: "post",
            body: form 
          })
        }}

      >
        <input
          className="block border p-2 rounded block text-sm text-late-500 file:mr-4 file:rounded-full file:border-0 file:p-2 file:bg-slate-900 file:text-slate-50"
          type="file"
          name="file"
          onChange={(e) => {
            if (e?.nativeEvent.target) {
              setFile(e.nativeEvent.target.files[0]);
            }
          }}
        />
        <button
          className="p-2 rounded bg-slate-900 text-slate-50"
          onClick={() => {
            console.log("Hello World");
          }}
        >Upload</button>
      </form>
    </>
  );
}
