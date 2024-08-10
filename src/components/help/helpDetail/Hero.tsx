import { useEffect, useState } from "react";
import axios from "@/utils/middleware";
import ExpandableBox from "../../../components/Expandable";
import { useParams } from "react-router-dom";

interface QuestionAndAnswer {
  question: string;
  answer: string;
  _id: string;
}

interface Detail {
  title: string;
  questionAndAnswers: QuestionAndAnswer[];
  _id: string;
}

interface HelpCenterData {
  _id: string;
  title: string;
  description: string;
  details: Detail[];
  logo: string;
}

function Hero() {
  const [data, setData] = useState<HelpCenterData | null>(null);
  const { id } = useParams<{ id: string }>();

  console.log(data);

  const getData = async () => {
    const response = await axios.get(
      `https://kafsbackend-106f.onrender.com/api/v1/help-center/fetch/${id}`
    );
    setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] py-[7vh] flex flex-col gap-8">
      <div className="text-[1.5rem]">{data?.title}</div>
      <div className="p-8">
        <div className="flex flex-col gap-4">
          <div>
            <img src={data?.logo} alt="" className="" />
          </div>
          <div>
            <div className="text-[1.5rem] font-medium">{data?.title}</div>
            <div>{data?.description}</div>
          </div>
          <div className="w-full mt-8 bg-white border-2 border-[#B8B8B8] flex flex-col p-8 gap-4 items-center text-left rounded-xl">
            {data?.details.map((detail) => (
              <div key={detail._id} className="w-full">
                <div className="text-left w-full font-medium text-[1.3rem] px-2">
                  {detail.title}
                </div>
                <div className="w-full bg-[#B8B8B8] h-[2px] mb-4"></div>
                {detail.questionAndAnswers.map((qa) => (
                  <div
                    key={qa._id}
                    className="w-full flex justify-between py-2"
                  >
                    <ExpandableBox
                      title={qa.question}
                      content={qa.answer}
                      className="py-0 border-none shadow-none 2xl:text-xl text-lg"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
