function Profile() {
  return (
    <div className="w-full lg:px-[10%] px-[8vw] flex flex-col gap-4 back md:py-[10vw] py-[16vw] text-white bg-cover">
      <div className="font-medium text-[1.4rem] md:text-left text-center">
        Firm Profile
      </div>
      <div className="flex gap-16 md:gap-4 xl:gap-8 lg:flex-row flex-col">
        <div className="md:text-left text-center flex flex-col gap-2">
          <div className="font-medium text-[1.7rem] 2xl:text-[2rem]">
            $320 Billion
          </div>
          <div className="text-[1.2rem] 2xl:text-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur. Enim nunc gravida quis mi
            egestas rutrum lorem molestie et.{" "}
          </div>
        </div>
        <div className="md:text-left text-center flex flex-col gap-2">
          <div className="font-medium text-[1.7rem] 2xl:text-[2rem]">
            55% Employee Owned
          </div>
          <div className="text-[1.2rem] 2xl:text-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur. Enim nunc gravida quis mi
            egestas rutrum lorem molestie et.{" "}
          </div>
        </div>
        <div className="md:text-left text-center flex flex-col gap-2">
          <div className="font-medium text-[1.7rem] 2xl:text-[2rem]">
            2,200+ Professionals
          </div>
          <div className="text-[1.2rem] 2xl:text-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur. Enim nunc gravida quis mi
            egestas rutrum lorem molestie et.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
