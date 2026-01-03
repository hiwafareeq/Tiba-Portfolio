import { useEffect } from "react";

export default function useSectionBackground(ref, colorIn, colorOut = "black") {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = colorIn;
        } else {
          document.body.style.backgroundColor = colorOut;
        }
      },
      {
        threshold: 0.4, // triggers when ~40% visible
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, colorIn, colorOut]);
}
