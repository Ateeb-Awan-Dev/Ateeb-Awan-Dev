import { useState } from "react";
import { clientAvatarUrl } from "@/lib/clientAvatar";

const fallbackSvg = (name: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;

type ClientAvatarProps = {
  name: string;
  src?: string;
  className?: string;
  size?: number;
};

/** Portrait with automatic fallback if remote URL fails to load. */
export function ClientAvatar({ name, src, className = "", size = 44 }: ClientAvatarProps) {
  const [broken, setBroken] = useState(false);
  const primary = src?.trim() || clientAvatarUrl(name);
  const url = broken ? fallbackSvg(name) : primary;

  return (
    <img
      src={url}
      alt={name}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => {
        if (!broken) setBroken(true);
      }}
    />
  );
}
