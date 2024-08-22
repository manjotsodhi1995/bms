import React from "react";
import { TicketStepsProps } from ".";

interface IFrameLoaderProps extends TicketStepsProps {
  // Add any additional props needed for the form
}

function IFrameLoader({ data }: IFrameLoaderProps) {
  const hiddenInputValue =
    "eyJ0aHJlZURTTWV0aG9kTm90aWZpY2F0aW9uVVJMIjoiaHR0cHM6Ly9rYWZzYmFja2VuZC0xMDZmLm9ucmVuZGVyLmNvbS9hcGkvdjEvcGF5bWVudHMvZGlyZWN0M2RzP3RocmVlRFNBY3NSZXNwb25zZT1tZXRob2QiLCJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImNiZDliNmRkLTlmNDItNGUzYy1hZDk1LTMyYTY5OTkzNGRmNCJ9"; // Update with actual value

  return (
    <form action="https://acs.3ds-pit.com/?method" method="POST">
      <input
        type="hidden"
        name="threeDSMethodData"
        value={hiddenInputValue} // Set the hidden input value
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default IFrameLoader;
