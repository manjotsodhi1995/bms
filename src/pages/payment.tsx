import { CircleAlert, CircleCheck } from "lucide-react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Payment({ setDialogOpen, dialogOpen }: any) {
  const query = useQuery();
  const paymentStatus = query.get("status");
  console.log(dialogOpen + "dialog");

  setDialogOpen(false);

  return (
    <div className="mt-0 pt-20">
      {" "}
      {paymentStatus === "succesful" && (
        <div className="w-full flex flex-col items-center justify-center gap-10 mt-4">
          <div className="flex flex-col items-center justify-center gap-10">
            <span className="text-2xl font-semibold">Payment successfull!</span>
            <CircleCheck className="size-32 text-green-500" />

            <div className="mt-2">
              <p className="underline text-sm mt-2 text-center">
                Check My Tickets Page to see your tickets.
                <br /> A ticket confirmation has been sent to your email!
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
      {paymentStatus === "failed" && (
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
    </div>
  );
}

export default Payment;
