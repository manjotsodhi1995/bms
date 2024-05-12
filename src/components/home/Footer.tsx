import p1 from "../../assets/home/partner/shopify.png"
function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full lg:px-[10%] px-[8vw] flex flex-col gap-4 md:py-[8vw] py-[16vw] items-center align-middle">
        <div className="flex justify-between md:flex-row flex-col md:text-left text-center w-full">
          <div>
            <div className="md:text-[2.5rem] 2xl:text-[3rem] text-[1.4rem]">
              Unlock the world of Events.
            </div>
            <div className="font-medium text-[1rem] md:text-[1.7rem] 2xl:text-[2rem]">
              Tickets Made Simple
            </div>
          </div>
          <div className="text-[3rem] font-bold">Logo.</div>
        </div>
      </div>
      <div className="w-full lg:px-[10%] px-[8vw] flex flex-col md:gap-16 gap-6 mb-16">
        <div className="font-semibold text-[2rem] text-[#A76169] flex justify-center">
          Our Partners
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 place-items-center">
          <img src={p1} alt="" />
          <img src={p1} alt="" />
          <img src={p1} alt="" />
          <img src={p1} alt="" />
          <img src={p1} alt="" />
        </div>
          </div>
          <div className="w-[80vw] bg-black h-[2px] mb-16"></div>
    </div>
  );
}

export default Footer;
