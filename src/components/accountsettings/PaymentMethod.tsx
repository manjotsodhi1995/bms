import { FormEvent, useState } from "react";


const PaymentMethod = () => {
  const [card, setCard] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    <div className="flex flex-col items-start sm:w-[75%] w-full sm:pl-[80px] mt-[50px] m-5 sm:m-0">
      <h1 className="text-2xl font-medium mt-[60px] mb-[10px]">Payment Method</h1>
      <form onSubmit={formSubmitHandler} className="flex flex-col">
        <h2 className="mt-[50px] text-lg font-medium">Add payment method</h2>
        <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-[20px]">Card Number</label>
        <input
          type="text"
          className="w-screen max-w-[500px] mb-[10px] h-[35px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black text-sm"
          value={card}
          onChange={handleInputChange(setCard)}
        />
        <div className="flex justify-between">
          <div className="flex flex-col">
          <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-[10px]">Expiration</label>
        <input
          type="text"
          className="w-screen max-w-[240px] mb-[10px] h-[35px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black mr-[5px] text-sm"
          value={expiry}
          onChange={handleInputChange(setExpiry)}
        />
        </div>
        <div className="flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-[10px] ml-[5px]">CVC</label>
        <input
          type="password"
          className="w-screen max-w-[240px] mb-[10px] h-[35px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black ml-[5px] text-sm"
          value={cvc}
          minLength={3}
          maxLength={3}
          onChange={handleInputChange(setCvc)}
        />
        </div>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-[10px]">Cardholder Name</label>
        <input
          type="text"
          className="w-screen max-w-[500px] mb-[15px] h-[35px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black text-sm"
          value={name}
          onChange={handleInputChange(setName)}
        />
        <button type="submit" className="bg-black text-white rounded-md w-fit p-[5px] px-[20px] text-sm mx-auto mt-[50px]">SAVE</button>
      </form>
    </div>
  );
};


export default PaymentMethod