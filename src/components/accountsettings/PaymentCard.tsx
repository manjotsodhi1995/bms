import { FormEvent, useState } from "react";

const PaymentCard = () => {
  const [card, setCard] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("pass: " +password+","+lname+fname)
    setCard("");
    setName("");
    setCvc("");
    setExpiry("");
  };

  return (
    <div className="flex flex-col sm:items-start 2xl:items-center items-center sm:w-[75%] w-full lg:pl-[10%] sm:pl-[5%] mt-[50px] sm:m-0 bg-white 2xl:justify-center max-h-full">
      <h1 className="text-2xl font-medium mt-[60px] mb-[10px]">
        Payment Method
      </h1>
      <form onSubmit={formSubmitHandler} className="flex flex-col items-center sm:items-start">
        <h2 className="mt-[50px] text-lg font-medium">Add payment method</h2>
        <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-[20px]">
          Card Number
        </label>
        <input
          type="text"
          className="w-[80vw] sm:w-[50vw] max-w-[500px] mb-[10px] h-[35px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black text-sm"
          value={card}
          onChange={handleInputChange(setCard)}
        />
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-[10px]">
              Expiration
            </label>
            <input
              type="text"
              className="w-[40vw] sm:w-[24vw] max-w-[240px] mb-[10px] h-[35px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black mr-[5px] text-sm"
              value={expiry}
              onChange={handleInputChange(setExpiry)}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-[10px] ml-[5px]">
              CVC
            </label>
            <input
              type="password"
              className="w-[40vw] sm:w-[24vw] max-w-[240px] mb-[10px] h-[35px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black ml-[5px] text-sm"
              value={cvc}
              minLength={3}
              maxLength={3}
              onChange={handleInputChange(setCvc)}
            />
          </div>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-[10px]">
          Cardholder Name
        </label>
        <input
          type="text"
          className="w-[80vw] sm:w-[50vw] max-w-[500px] mb-[15px] h-[35px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black text-sm"
          value={name}
          onChange={handleInputChange(setName)}
        />
        <button
          type="submit"
          className="bg-black text-white rounded-md w-fit p-[5px] px-[20px] text-sm mx-auto my-[20px]"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default PaymentCard;
