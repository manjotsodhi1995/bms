import { FormCard } from "@/components/dashboard/CardForm";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

const PaymentMethod = () => {
  const handleSaveChanges = () => {};
  return (
    <div className="flex p-2 w-full  gap-8 justify-start">
      <Sidebar />
      <div className="w-full max-w-[1300px] mx-auto flex gap-8 flex-col">
        <TopBar />

        <div className="flex flex-col gap-8 mt-8">
          <h1 className="text-3xl font-medium">Manage Account</h1>
          <h3 className="text-2xl">Payment details</h3>

          <FormCard
            title="Add payment method"
            onSaveChanges={handleSaveChanges}
          >
            <label htmlFor="holder-name">
              Full name of the account holder
              <input
                id="holder-name"
                placeholder="Account holder name"
                className="w-full p-2 mt-6 border border-gray-800 rounded-md bg-transparent"
              />
            </label>

            <select
              id="currency"
              className="w-full p-2 mt-4 border border-gray-800 rounded-md bg-transparent"
            >
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>

            <h3 className="text-2xl font-semibold">Account details</h3>

            <label htmlFor="holder-name">
              IFSC code
              <input
                id="holder-name"
                placeholder="0000"
                className="w-full p-2 mt-2 border border-gray-800 bg-transparent rounded-md"
              />
            </label>

            <label htmlFor="account-no">
              Account number
              <input
                id="account-no"
                placeholder="Account number"
                className="w-full p-2 mt-2 border border-gray-800 bg-transparent rounded-md"
              />
            </label>
          </FormCard>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
