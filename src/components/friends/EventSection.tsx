import bg from "../../assets/friends/event.png";
import { Button } from "@mui/material";

const EventSection = () => {
  return (
    <section
      className="flex justify-center items-center bg-cover bg-no-repeat bg-center mb-20 md:mb-40"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="text-center max-w-6xl pb-20 md:pb-40">
        <h1 className="title text-xl md:text-5xl font-medium text-white mb-4 pt-20 md:pt-36">
          Check out events available for Representation
        </h1>
        <Button
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            padding: "10px 50px",
            fontSize: "16px",
            color: "white",
            backgroundColor: "rgba(96, 118, 157, 1)",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}>
          Click Here
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ marginLeft: "8px", width: "20px", height: "20px" }}>
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default EventSection;
