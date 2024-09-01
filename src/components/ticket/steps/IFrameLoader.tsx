import { useRef, useEffect } from "react";
import { TicketStepsProps } from ".";

interface IFrameLoaderProps extends TicketStepsProps {
  // No additional props needed for this specific implementation
}

function IFrameLoader({ data }: IFrameLoaderProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      // Sanitize the data received from the backend
      const sanitizedData = data.replace(/<script[^>]*>.*?<\/script>/g, ""); // Remove potential script tags

      // Set the iframe's srcdoc attribute with the sanitized data
      iframeRef.current.srcdoc = sanitizedData;
    }
  }, [data, iframeRef]); // Update only when data or ref changes

  return (
    // <iframe
    //   ref={iframeRef}
    //   style={{ width: "100%", height: 500, border: "none" }}
    // />
    <>
      <form
        id="3ds-form"
        action="https://acs.3ds-pit.com/?method"
        method="POST"
      >
        {" "}
        <input
          type="hidden"
          key="threeDSMethodData"
          value="eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9rYWZzYmFja2VuZC0xMDZmLm9ucmVuZGVyLmNvbS9hcGkvdjEvcGF5bWVudHMvZGlyZWN0M2RzP3RocmVlRFNBY3NSZXNwb25zZT1tZXRob2QiLCJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjRkZDBjMzU2LWIyNjctNDgyYi1iNjY3LTRlMTNjYzQ0ZmIxZCJ9"
        />{" "}
        <input type="submit" value="Submit" />{" "}
      </form>
    </>
  );
}

export default IFrameLoader;
