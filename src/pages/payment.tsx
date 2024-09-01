import { useNavigate } from "react-router-dom";
import { CircleAlert, CircleCheck, Loader } from "lucide-react";
import { useState } from "react";
import { Loader2 } from "lucide-react";
function Payment() {
  const [payment, setPayment] = useState("failed");
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      {payment === "success" && (
        <div className="w-full flex flex-col items-center justify-center gap-10 mt-4">
          <div className="flex flex-col items-center justify-center gap-10">
            <span className="text-2xl font-semibold">Payment successfull!</span>
            <CircleCheck className="size-32 text-green-500" />

            <div className="mt-2">
              <button
                className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"
                onClick={() => {
                  navigate("/mytickets");
                }}
              >
                View Ticket
              </button>

              <p className="underline text-sm mt-2">
                A ticket conformation has been sent to your email
              </p>
            </div>

            {/* <div className="flex w-full gap-4 font-thin text-sm"> */}
            {/*   <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"> */}
            {/*     Add to groupchat */}
            {/*   </button> */}
            {/*   <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"> */}
            {/*     Rep this event */}
            {/*   </button> */}
            {/* </div> */}
          </div>
        </div>
      )}{" "}
      {payment === "failed" && (
        <div className="w-full flex flex-col items-center justify-center gap-10 mt-4">
          <div className="flex flex-col items-center justify-center gap-10">
            <span className="text-2xl font-semibold">Payment Failed</span>
            <CircleAlert className="size-32 text-red-500" />

            <div className="mt-2">
              <button
                className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to Home
              </button>

              <p className="text-sm mt-2">
                Payment has failed due to some error. Please try again!
              </p>
            </div>

            {/* <div className="flex w-full gap-4 font-thin text-sm"> */}
            {/*   <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"> */}
            {/*     Add to groupchat */}
            {/*   </button> */}
            {/*   <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"> */}
            {/*     Rep this event */}
            {/*   </button> */}
            {/* </div> */}
          </div>
        </div>
      )}
      {payment === "loading" && (
        <div className="w-full flex flex-col items-center justify-center gap-10 mt-4">
          <div className="flex flex-col items-center justify-center gap-10">
            <span className="text-2xl font-semibold">
              Processing Payment...
            </span>

            <div className="mt-2 flex flex-col justify-center items-center">
              <Loader2 size={100} className="animate-spin" />
              <p className="text-sm mt-8">Please wait for some moment..</p>
            </div>

            {/* <div className="flex w-full gap-4 font-thin text-sm"> */}
            {/*   <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"> */}
            {/*     Add to groupchat */}
            {/*   </button> */}
            {/*   <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"> */}
            {/*     Rep this event */}
            {/*   </button> */}
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
