"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({
  label = "Wróć",
}: Readonly<{ label?: string }>) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );
}
