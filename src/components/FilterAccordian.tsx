import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FilterAccordian({ categories, setFilters, filters }: any) {
  return (
    <div className="block sm:hidden space-y-3">
      <Accordion
        disableGutters
        sx={{
          boxShadow: "none",
          border: "none",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span className="font-medium text-xl">Day</span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="space-y-3 ">
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  checked={filters.day.includes("Today")}
                  onChange={(e) => {
                    setFilters((prev: any) => {
                      const updatedDay = e.target.checked
                        ? [...prev.day, "Today"]
                        : prev.day.filter((day: any) => day !== "Today");
                      return {
                        ...prev,
                        day: updatedDay,
                      };
                    });
                  }}
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Today</h2>
              </div>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  checked={filters.day.includes("Tomorrow")}
                  onChange={(e) => {
                    setFilters((prev: any) => {
                      const updatedDay = e.target.checked
                        ? [...prev.day, "Tomorrow"]
                        : prev.day.filter((day: any) => day !== "Tomorrow");

                      return {
                        ...prev,
                        day: updatedDay,
                      };
                    });
                  }}
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Tommorow</h2>
              </div>
            </div>
            <div className=" flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  checked={filters.day.includes("ThisWeek")}
                  onChange={(e) => {
                    setFilters((prev: any) => {
                      const updatedDay = e.target.checked
                        ? [...prev.day, "ThisWeek"]
                        : prev.day.filter((day: any) => day !== "ThisWeek");

                      return {
                        ...prev,
                        day: updatedDay,
                      };
                    });
                  }}
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>This Week</h2>
              </div>
            </div>
            <div className=" flex justify-between w-[200px]">
              <div className="flex mb-[20px]">
                <input
                  type="checkbox"
                  checked={filters.day.includes("ThisMonth")}
                  onChange={(e) => {
                    setFilters((prev: any) => {
                      const updatedDay = e.target.checked
                        ? [...prev.day, "ThisMonth"]
                        : prev.day.filter((day: any) => day !== "ThisMonth");

                      return {
                        ...prev,
                        day: updatedDay,
                      };
                    });
                  }}
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>This Month</h2>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        sx={{
          boxShadow: "none",
          border: "none",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span className="font-medium text-xl">Pricing</span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="space-y-3">
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  checked={filters.pricing.includes("Free")}
                  onChange={(e) => {
                    setFilters((prev: any) => {
                      const updatedPricing = e.target.checked
                        ? [...prev.pricing, "Free"]
                        : prev.pricing.filter((day: any) => day !== "Free");

                      return {
                        ...prev,
                        pricing: updatedPricing,
                      };
                    });
                  }}
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Free</h2>
              </div>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex mb-[20px]">
                <input
                  type="checkbox"
                  checked={filters.pricing.includes("Paid")}
                  onChange={(e) => {
                    setFilters((prev: any) => {
                      const updatedPricing = e.target.checked
                        ? [...prev.pricing, "Paid"]
                        : prev.pricing.filter((day: any) => day !== "Paid");

                      return {
                        ...prev,
                        pricing: updatedPricing,
                      };
                    });
                  }}
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Paid</h2>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        sx={{
          boxShadow: "none",
          border: "none",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <span className="font-medium text-xl">Category</span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="space-y-3">
            <div className="flex flex-col space-y-3">
              {categories.map((data: any) => (
                <div className="flex items-center" key={data.categoryId}>
                  <input
                    type="checkbox"
                    value={data.categoryId}
                    onChange={(e) => {
                      setFilters((prev: any) => {
                        const updatedCategory = e.target.checked
                          ? [...prev.category, e.target.value]
                          : prev.category.filter(
                              (categoryId: any) => categoryId !== e.target.value
                            );

                        return {
                          ...prev,
                          category: updatedCategory,
                        };
                      });
                    }}
                    className="mr-[10px] w-[17px] h-[17px] border-black"
                  />
                  <h2>{data.categoryName}</h2>
                </div>
              ))}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FilterAccordian;
