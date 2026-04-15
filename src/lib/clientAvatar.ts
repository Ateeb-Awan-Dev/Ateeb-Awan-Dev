import { projects } from "@/data/projects";

const byName = new Map<string, string>();
for (const p of projects) {
  byName.set(p.client.name.trim(), p.client.avatarUrl);
}

/** Portrait URL from `projects` data; falls back to generated avatar if name is unknown. */
export function clientAvatarUrl(name: string): string {
  const key = name.trim();
  return (
    byName.get(key) ??
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(key)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
  );
}
