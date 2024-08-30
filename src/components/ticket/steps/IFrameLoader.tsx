import React from "react";
import { TicketStepsProps } from ".";

interface IFrameLoaderProps extends TicketStepsProps {
  // Add any additional props needed for the form
}

function IFrameLoader({ data }: IFrameLoaderProps) {
  return <>{data}</>;
}

export default IFrameLoader;
