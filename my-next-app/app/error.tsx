"use client";
import React from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-black">
        <div className="max-w-xl rounded-lg border p-8 bg-white/90 dark:bg-[#0b0b0b]/90">
          <h1 className="mb-2 text-2xl font-bold">Something went wrong</h1>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">An unexpected error occurred.</p>
          <pre className="mb-4 max-h-48 overflow-auto rounded bg-gray-100 p-3 text-xs text-red-600 dark:bg-gray-900 dark:text-red-400">{String(error?.message)}</pre>
          <div className="flex gap-3">
            <button
              onClick={() => reset()}
              className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Try again
            </button>
            <a href="/" className="rounded border px-4 py-2 text-sm">Go home</a>
          </div>
        </div>
      </body>
    </html>
  );
}
