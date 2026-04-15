import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** On route change: scroll to top, or to #id when the URL includes a hash. */
export default function ScrollToTop() {
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    const state = location.state as { backgroundLocation?: unknown } | null;
    if (state?.backgroundLocation) return;

    const id = hash.replace(/^#/, "");
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash, location.state]);

  return null;
}
