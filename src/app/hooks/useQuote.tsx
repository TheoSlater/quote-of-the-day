import { useState, useEffect } from "react";

export const useQuote = (apiUrl: string) => {
  const [quote, setQuote] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuote(data.quote);
      } catch (error: any) {
        console.error("Error fetching the quote:", error);
        setError("Failed to load quote.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [apiUrl]);

  return { quote, loading, error };
};
