import { useEffect } from "react";

interface UseScrollDetectorProps {
  handleNearBottom: () => void;
  threshold?: number;
}

export const useScrollDetector = ({
  handleNearBottom,
  threshold = 100,
}: UseScrollDetectorProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight;
      const visibleHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      const distanceToBottom = totalHeight - (currentScroll + visibleHeight);

      if (distanceToBottom < threshold) {
        handleNearBottom();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleNearBottom, threshold]);
};
