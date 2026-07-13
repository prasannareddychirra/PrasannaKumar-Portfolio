import { useState, useEffect } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increased duration to allow for the full animation sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}