import HomeContainerCard from "../HomeContainerCard";

function Payouts() {
  return (
    <HomeContainerCard className="h-[35vh] col-span-2 md:col-span-1">
      <div className="flex gap-1 items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="15.5"
            stroke="black"
          />
          <path
            d="M25.5625 21.6263H7.1875C7.08437 21.6263 7 21.7107 7 21.8138V23.1263C7 23.2295 7.08437 23.3138 7.1875 23.3138H25.5625C25.6656 23.3138 25.75 23.2295 25.75 23.1263V21.8138C25.75 21.7107 25.6656 21.6263 25.5625 21.6263ZM8.25859 18.692L9.18906 19.6178C9.26172 19.6904 9.38125 19.6904 9.45391 19.6178L14.9547 14.1357L17.2422 16.4162C17.3831 16.5558 17.5735 16.6342 17.7719 16.6342C17.9703 16.6342 18.1606 16.5558 18.3016 16.4162L24.4938 10.2474C24.5664 10.1748 24.5664 10.0552 24.4938 9.98259L23.5633 9.05447C23.528 9.01957 23.4805 9 23.4309 9C23.3813 9 23.3337 9.01957 23.2984 9.05447L17.7742 14.5623L15.4844 12.2818C15.3434 12.1422 15.1531 12.0638 14.9547 12.0638C14.7563 12.0638 14.5659 12.1422 14.425 12.2818L8.25859 18.4271C8.24106 18.4444 8.22714 18.4651 8.21764 18.4878C8.20814 18.5105 8.20325 18.5349 8.20325 18.5595C8.20325 18.5842 8.20814 18.6086 8.21764 18.6313C8.22714 18.654 8.24106 18.6747 8.25859 18.692Z"
            fill="black"
          />
        </svg>

        <h1>Payouts</h1>
      </div>

      <div className="py-8">
        <div>
          <p>Previous Payout</p>
          <div className="flex items-center gap-6">
            <h1 className="text-[32px]">$43,000</h1>
            <span className="text-xs p-1 bg-green-300 rounded-md text-green-600">
              paid
            </span>
          </div>
        </div>
        <p>Next Payout</p>
        <div className="flex items-center gap-6">
          <h1 className="text-[32px]">$43,000</h1>
          <span className="text-xs p-1 bg-red-200  text-red-600 rounded-md">
            pending
          </span>
        </div>
      </div>
    </HomeContainerCard>
  );
}

export default Payouts;
