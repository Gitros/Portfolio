"use client";

export default function ProjectVideo({
  youtubeId,
}: Readonly<{ youtubeId: string }>) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="Project demo video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
