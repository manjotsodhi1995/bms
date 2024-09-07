import { CircleAlert, CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
function Payment({ setDialogOpen }: any) {
  const [payment, setPayment] = useState("loading");
  //   setPayment("success");
  useEffect(() => {
    setPayment("success");
    setTimeout(setDialogOpen(false), 3000);
  }, []);
  return (
    <div>
      {" "}
      {payment === "success" && (
        <div className="w-full flex flex-col items-center justify-center gap-10 mt-4">
          <div className="flex flex-col items-center justify-center gap-10">
            <span className="text-2xl font-semibold">Payment successfull!</span>
            <CircleCheck className="size-32 text-green-500" />

            <div className="mt-2">
              <p className="underline text-sm mt-2">
                Thanks for choosing Kafsco. Check My Tickets Page to see your
                tickets. A ticket confirmation has been sent to your email as
                well!
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
