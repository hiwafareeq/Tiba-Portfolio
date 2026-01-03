import { useEffect, useState } from "react";

export default function useTypewriter(text, speed = 30, start = false) {
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!start) return;

    let i = 0;
    setDisplayedText("");
    setIsFinished(false);

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return { text: displayedText, isFinished };
}
