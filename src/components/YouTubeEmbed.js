import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function getYouTubeId(input) {
  if (!input) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || null;
    }

    const v = url.searchParams.get("v");
    if (v) return v;

    const parts = url.pathname.split("/").filter(Boolean);
    const embedIndex = parts.indexOf("embed");
    if (embedIndex >= 0 && parts[embedIndex + 1]) return parts[embedIndex + 1];

    const shortsIndex = parts.indexOf("shorts");
    if (shortsIndex >= 0 && parts[shortsIndex + 1])
      return parts[shortsIndex + 1];

    return null;
  } catch {
    return null;
  }
}

export default function YouTubeEmbed({ video, title, className = "" }) {
  const id = getYouTubeId(video);
  const [isLoading, setIsLoading] = useState(true);

  if (!id) return null;

  return (
    <div className={`relative h-full w-full ${className}`}>
      {isLoading && <Skeleton className="h-full w-full" />}
      <iframe
        title={title || "YouTube video"}
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export { getYouTubeId };
