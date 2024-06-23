import EventCard from "../components/EventCard";
function Filter() {
  const eventData = [
    {
      title: "Saved By The 90s - Dublin",
      description: "10 Wellington Quay, Dublin 8, D02 VX36, Ireland",
      imageUrl:
        "https://fixr-cdn.fixr.co/images/event/2024-05/4b89154a7a7a4d66b901a06c664a596c.jpeg",
      date: "DEC 24",
      location: "Dublin 8",
    },
    {
      title: "Fairport Convention",
      description: "Mulehouse Rd, Sheffield, S10 1TD, United Kingdom",
      imageUrl:
        "https://fixr-cdn.fixr.co/images/event/2024-04/f67d560e4861485abee2ee327823e265.jpeg",
      date: "DEC 24",
      location: "Sheffield",
    },
    {
      title: "Summer Garden Party!",
      description: "26 Wexford St, Dublin 2, D02 HX93, Ireland",
      imageUrl:
        "https://fixr-cdn.fixr.co/images/event/2024-02/c7834a06b2da429bb25a37e80c4614e1.jpeg",
      date: "DEC 24",
      location: "Dublin 2",
    },
    {
      title: "Bird Workshop for Kids",
      description: "The Boilerhouse Main Street D09 HK58 Ballymun Ireland",
      imageUrl:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F779473109%2F202697254659%2F1%2Foriginal.20240530-130519?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1000%2C500&s=1ef110bf7facd194dc8f15d1c39196b5",
      date: "DEC 24",
      location: "Dublin",
    },
  ];
  return (
    <div className="lg:pr-[2.5%] xl:pr-[3.5%] sm:pr-[4vw] min-h-[80vh] flex justify-between flex-col sm:flex-row">
      <div className="lg:w-[25vw] sm:w-[35vw] w-[100vw]  min-h-[80vh] backdrop-blur-md bg-white/50 flex flex-col mt-[10px] pt-[40px] rounded-tr-xl rounded-br-xl border-gray-400 border h-fit min-w-max">
        {" "}
        {/* Fixed positioning and overflow */}
        <div className="border-gray-400 border-b mb-[30px] pl-[30px]">
          <h2 className="text-lg font-medium mt-[10px] mb-[20px]">
            Filter By:
          </h2>
        </div>
        <div className="border-gray-600 border-b mb-[50px] pl-[30px]">
          <h3 className="font-medium mb-[20px]">Day</h3>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Today</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Tommorow</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>This Week</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex mb-[20px]">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>This Month</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
        </div>
        <div className="border-gray-600 border-b mb-[50px] pl-[30px]">
          <h3 className="font-medium mb-[20px]">Pricing</h3>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Free</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex mb-[20px]">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Paid</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
        </div>
        <div className="border-gray-600 border-b mb-[50px] pl-[30px]">
          <h3 className="font-medium mb-[20px]">Categories</h3>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Music</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Comedy</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Sports</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Food & Drinks</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Theater</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Dance</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Art</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex mb-[20px]">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Other</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
        </div>
        <div className="mb-[100px] pl-[30px]">
          <h3 className="font-medium mb-[20px]">Near By Cities</h3>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Ahmedabad</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Gandhinagar</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
          <div className="flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Surat</h2>
            </div>
            <h2 className="text-gray-600">32</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pb-10 lg:w-[75vw] w-[60vw]">
        {" "}
        {/* Adjusted margin-left */}
        <div className="flex w-screen justify-center mt-4 sm:justify-normal">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem] sm:ml-[50px]">
            Events
          </div>
        </div>
        <div className="justify-center sm:w-full w-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 p-4 ">
          {eventData.map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
