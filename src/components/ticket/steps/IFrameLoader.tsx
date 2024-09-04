import { useRef, useEffect, useState } from "react";
import { TicketStepsProps } from ".";
import axios from "axios";
interface IFrameLoaderProps extends TicketStepsProps {
  // No additional props needed for this specific implementation
}

function IFrameLoader({ data }: IFrameLoaderProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [formData, setFormData] = useState({
    threeDSMethodData: data.value,
    // Add other form fields if needed
  });

  // const handleChange = (event: any) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const encodedData = new URLSearchParams(formData);

    try {
      const response = await axios.post(data.url, encodedData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      // Handle successful response
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };
  return (
    // <iframe
    //   ref={iframeRef}
    //   style={{ width: "100%", height: 500, border: "none" }}
    // />
    <div className="flex flex-col justify-center items-center w-full gap-8 min-h-[80vh]">
      <p>Click here to Continue your transaction securely</p>
      <button
        className="bg-black text-white font-medium px-4 py-2 rounded-lg"
        onClick={() => handleSubmit}
      >
        Continue
      </button>
    </div>
  );
}

export default IFrameLoader;
