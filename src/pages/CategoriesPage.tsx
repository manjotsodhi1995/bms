import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "@/utils/middleware";
import { API } from "@/api";
interface Category {
  categoryId: string;
  categoryName: string;
}
const fetchEvents = async (id?: string) => {
  const response = await axios.get(
    `${API.events.fetchAllEvents}?category=${id}`
  );
  return response.data.data;
};
const fetchCategories = async () => {
  const response = await axios.get(API.categories.getAllCategories);
  return response.data.data as Category[];
};
function CategoriesPage() {
  const { data: categories } = useQuery({
    queryKey: ["categoriesQuery"],
    queryFn: fetchCategories,
  });
  const { categoryId } = useParams();

  const { data } = useQuery({
    queryKey: ["categories", categoryId, "fetchAllEvents"],
    queryFn: () => fetchEvents(categoryId),
  });

  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] min-h-[80vh]">
      <div className="flex flex-col gap-2 pb-10">
        {" "}
        <div className="flex flex-col gap-3">
          <div className="flex w-full gap-4 overflow-x-auto mt-4">
            {categories &&
              categories.slice(0, 10).map((category) => (
                <a
                  key={category.categoryId}
                  href={`/categories/${category.categoryId}`}
                  className={`text-center whitespace-nowrap w-full h-10 py-2 px-4 rounded-full font-medium border-2 ${
                    category.categoryId === categoryId
                      ? "bg-[#60769D] text-white"
                      : "bg-[#EBEBEBB2] text-gray-800"
                  } transition-colors duration-200 hover:bg-[#60769D] hover:text-white`}
                >
                  {category.categoryName}
                </a>
              ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem] flex items-center gap-4">
            {" "}
            <Link to="/filter">
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M14.6663 3.8335H7.16634M9.66634 12.1668H2.16634M9.66634 12.1668C9.66634 13.5475 10.7856 14.6668 12.1663 14.6668C13.5471 14.6668 14.6663 13.5475 14.6663 12.1668C14.6663 10.7861 13.5471 9.66683 12.1663 9.66683C10.7856 9.66683 9.66634 10.7861 9.66634 12.1668ZM6.33301 3.8335C6.33301 5.21421 5.21372 6.3335 3.83301 6.3335C2.4523 6.3335 1.33301 5.21421 1.33301 3.8335C1.33301 2.45278 2.4523 1.3335 3.83301 1.3335C5.21372 1.3335 6.33301 2.45278 6.33301 3.8335Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Link>
            Events
          </div>
        </div>
        <div className="justify-center w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {data &&
            data.upcomingEvents.map((card: any, index: number) => (
              <EventCard key={index} {...card} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
