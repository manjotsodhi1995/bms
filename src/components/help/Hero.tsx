import { Link } from "react-router-dom";
import axios from "../../utils/middleware";
import { useEffect, useState } from "react";

interface DataTypes {
  logo: string;
  _id: string;
  title: string;
  description: string;
}
function Hero() {
  const [data, setData] = useState<DataTypes[]>([]);

  const getData = async () => {
    const response = await axios.get(
      "https://kafsbackend-106f.onrender.com/api/v1/help-center"
    );
    // console.log(response.data.data[0]._id);

    setData(response.data.data);
    return response.data.data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] py-[7vh]">
      <div className="text-[1.5rem]">How can we help?</div>
      <div className="grid lg:grid-rows-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  items-center justify-center place-items-center mt-8">
        {data.map((d) => (
          <div className="text-center flex flex-col items-center p-2 gap-4 py-8 rounded-3xl hover:shadow-xl transform transition-all duration-300  lg:w-[25vw] ">
            <img src={d.logo} alt="" />
            <div className="text-[1.5rem] font-medium">{d.title}</div>
            <div>{d.description}</div>
            <div>
              <Link
                to={`/helpdetails/${d._id}`}
                className="flex justify-between font-medium"
              >
                <div>Learn More</div> <div>→</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
