import Navbar from "../components/Navbar"
function Home() {
  const items = [
    {
      title: "Kolkata Knight Riders",
      imageUrl: "https://example.com/kkr-logo.png",
    },
    {
      title: "Chennai Super Kings",
      imageUrl: "https://example.com/csk-logo.png",
    },
    { title: "Mumbai Indians", imageUrl: "https://example.com/mi-logo.png" },
    {
      title: "Royal Challengers Bangalore",
      imageUrl: "https://example.com/rcb-logo.png",
    },
    // ... more teams
  ];
  return (
    <div><Navbar />
    </div>
  )
}

export default Home