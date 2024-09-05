import { useRef, useEffect, useState } from "react";
import { TicketStepsProps } from ".";

interface IFrameLoaderProps extends TicketStepsProps {
  // No additional props needed for this specific implementation
}

function IFrameLoader({ data }: IFrameLoaderProps) {
  // const iframeRef = useRef<HTMLIFrameElement>(null);

  // const [formData, setFormData] = useState({
  //   threeDSMethodData: data.value,

  // });

  // const handleChange = (event: any) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   const encodedData = new URLSearchParams(formData);

  //   try {
  //     const response = await axios.post(data.url, encodedData, {
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     });
  //     // Handle successful response
  //     console.log(response.data);
  //   } catch (error) {
  //     // Handle errors
  //     console.error(error);
  //   }
  // };
  return <iframe srcDoc={data} width={"100%"} height={500}></iframe>;
}

export default IFrameLoader;
