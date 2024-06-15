import bgImage from "./src/assets/home/img.png";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your React components
    "./index.html", // Include your main HTML file
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"], // Add Poppins here
    },

    extend: {
      boxShadow: {
        custom: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },

  // ... other Tailwind configurations
};
