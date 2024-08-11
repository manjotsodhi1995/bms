import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "@/utils/middleware";
import { API } from "@/api";
import { useRef, useEffect, useState } from "react";
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
  const [categoryWidth, setCategoryWidth] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const { data: categories } = useQuery({
    queryKey: ["categoriesQuery"],
    queryFn: fetchCategories,
  });
  const { categoryId } = useParams();

  const { data } = useQuery({
    queryKey: ["categories", categoryId, "fetchAllEvents"],
    queryFn: () => fetchEvents(categoryId),
  });
  useEffect(() => {
    if (categoryRef.current) {
      setCategoryWidth(categoryRef.current.offsetWidth + 16); // Add gap between items
    }
  }, [categories]);

  // Effect to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [categories]);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -categoryWidth,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: categoryWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const categoryRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] min-h-[80vh]">
      <div className="flex flex-col gap-2 pb-10">
        {" "}
        <div className="relative w-full">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            disabled={isAtStart}
            className={`absolute -left-7 top-0 bottom-0 z-10 bg-white shadow-md h-full px-2 opacity-75 hover:opacity-100 ${
              isAtStart ? "hidden" : ""
            }`}
            style={{ zIndex: 1 }}
          >
            &lt;
          </button>

          {/* Scrollable Categories */}
          <div
            ref={scrollContainerRef}
            className="flex w-full gap-4 overflow-x-auto hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories &&
              categories.map((category, index) => (
                <a
                  key={category.categoryId}
                  href={`/categories/${category.categoryId}`}
                  ref={index === 0 ? categoryRef : null} // Reference only the first category
                  className={`text-center whitespace-nowrap min-w-[9rem] h-10 py-2 px-4 rounded-full font-medium border-2 bg-[white] text-gray-800 transition-colors duration-200 hover:bg-[#60769e] hover:text-white max-w-[280px] ${
                    category.categoryId == categoryId
                      ? "bg-[#60769e] text-white "
                      : ""
                  }`}
                >
                  {category.categoryName}
                </a>
              ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className={`absolute -right-7 top-0 bottom-0 z-10 bg-white shadow-md h-full px-2 opacity-75 hover:opacity-100 ${
              isAtEnd ? "hidden" : ""
            }`}
            style={{ zIndex: 1 }}
          >
            &gt;
          </button>
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
