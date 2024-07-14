import React from "react";
import ps from "../../assets/organizer/payouts.png";
const PayoutsSection: React.FC = () => {
  return (
    <section
      className="payout-image min-h-screen flex items-center justify-center p-4 mb-20"
      style={{ backgroundImage: `url(${ps})` }}>
      <div className="max-w-screen-lg w-full">
        <h2 className="title text-4xl md:text-5xl font-bold mb-4 text-center">
          Payouts
        </h2>
        <section className="p-8 flex flex-row items-center text-left">
          <div className="w-1/2 pr-2 md:p-3">
            <p className="mb-4 text-center text-black text-sm md:text-lg">
              While we provide payouts 24 hours after your event, you can set
              preferences for how you receive notifications about your payouts.
            </p>
          </div>
          <div className="block w-px h-36 md:h-24 bg-black"></div>
          <div className="w-1/2 pl-4">
            <p className="mb-0 md:mb-3 text-center text-black text-sm md:text-lg">
              Under Payouts menu, choose from various payout options such as
              direct bank transfer, PayPal, or other available methods.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PayoutsSection;
