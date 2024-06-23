import { useState } from "react";
import applepay from "@/assets/paymethods/applepay.png"
import googlepay from "@/assets/paymethods/googlepay.png"
import visa from "@/assets/paymethods/visa.png"

// const [isHovered, setIsHovered] = useState(false);
// return (
//   <div
//     className="place-self-center rounded-3xl shadow:lg transition-transform duration-300 ease-in-out  bg-white pb-2 md:w-[25vw] lg:w-[20vw]  max-w-[350px] border-[#BCBCBC36] border-2 cursor-pointer relative"
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//     style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}

const PaymentMethod = () => {
  const [method, setMethod] = useState<string>("visa");
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="flex flex-col sm:items-start 2xl:items-center items-center sm:w-[75%] w-full lg:pl-[10%] sm:pl-[5%] mt-[50px] sm:m-0 bg-white 2xl:justify-center max-h-full">
      <h1 className="text-2xl font-medium mt-[40px] mb-[10px]">
        Payment Method
      </h1>
      <div className="flex flex-col items-center sm:items-start gap-y-5 sm:mb-0 mb-5">
        <h2 className="mt-[30px] text-lg font-medium">Current payment method</h2>
        <div className="flex h-[90px] items-center border-2 border-black w-[80vw] sm:w-[50vw] max-w-[400px] rounded-xl hover:shadow-lg hover:cursor-pointer transition-transform duration-200 ease-in-out" onClick={()=> setMethod("visa")}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          style={{ transform: isHovered1 ? "scale(1.02)" : "scale(1)" }}>
        <div className="w-[20vh] h-full flex items-center justify-center p-5">
        <img src={visa} className="w-[5vh] lg:w-[7vh] h-fit ml-[2vh]"/>
        </div>
        <div className="flex flex-col w-[50vh]">
          <p className="font-medium text-md">Visa ending with 3541</p>
          <p className="text-gray-500 text-xs">More than 380GB cloud space</p>
        </div>
        <div className="w-[20vh] flex justify-center">
          <input type="radio" checked={method==="visa"}/>
        </div>
        </div>
        <div className="flex h-[90px] items-center border-2 border-black w-[80vw] sm:w-[50vw] max-w-[400px] rounded-xl hover:shadow-lg hover:cursor-pointer transition-transform duration-200 ease-in-out" onClick={()=> setMethod("apple")}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style={{ transform: isHovered2 ? "scale(1.02)" : "scale(1)" }}>
        <div className="w-[20vh] h-full flex items-center justify-center p-5">
        <img src={applepay} className="w-[5vh] lg:w-[7vh] h-fit ml-[2vh]"/>
        </div>
        <div className="flex flex-col w-[50vh]">
          <p className="font-medium text-md">Apple Pay</p>
          <p className="text-gray-500 text-xs">Split payment in 12 months</p>
        </div>
        <div className="w-[20vh] flex justify-center">
          <input type="radio" checked={method==="apple"}/>
        </div>
        </div>
        <div className="flex h-[90px] items-center border-2 border-black w-[80vw] sm:w-[50vw] max-w-[400px] rounded-xl hover:shadow-lg hover:cursor-pointer transition-transform duration-200 ease-in-out" onClick={()=> setMethod("google")}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          style={{ transform: isHovered3 ? "scale(1.02)" : "scale(1)" }}>
        <div className="w-[20vh] h-full flex items-center justify-center p-5">
        <img src={googlepay} className="w-[5vh] lg:w-[7vh] h-fit ml-[2vh]"/>
        </div>
        <div className="flex flex-col w-[50vh]">
          <p className="font-medium text-md">Google Pay</p>
          <p className="text-gray-500 text-xs">Split payment in 12 months</p>
        </div>
        <div className="w-[20vh] flex justify-center">
          <input type="radio" checked={method==="google"}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
