"use client";

export default function ProjectVideo({
  youtubeId,
  fill = false,
}: Readonly<{ youtubeId: string; fill?: boolean }>) {
  const containerClass = fill
    ? "relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800"
    : "relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800";

  return (
    <div className={containerClass}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="Project demo video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
