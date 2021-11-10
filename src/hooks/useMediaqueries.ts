import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listenerFn = () => setMatches(media.matches);
    window.addEventListener("resize", listenerFn);

    return () => window.removeEventListener("resize", listenerFn);
  }, [matches, query]);
  return matches;
};

export default useMediaQuery;
// EXAMPLE : const isMobil = !useMediaQuery('(min-width: 960px)');
