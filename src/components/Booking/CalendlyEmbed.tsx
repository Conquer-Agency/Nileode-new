import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => setError(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600">
          Unable to load booking calendar. Please try again later.
        </p>
      </div>
    );
  }

  if (!isLoaded)
    return <div className="flex items-center justify-center">Loading</div>;

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ height: "600px" }}
    />
  );
}
