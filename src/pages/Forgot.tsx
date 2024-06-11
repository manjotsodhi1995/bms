import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
const Forgot = observer(() => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const {
    root: { auth },
  } = useStore();
  useEffect(() => {
    if (auth.isAuthenticated) navigate("/");
  }, []);

  const [email, setEmail] = useState("");
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
    //   await auth.fetchToken(email);
      navigate("/");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An error occurred during login. Please try again later.");
        console.error("Login error:", error);
      }
    }
  };

  return (
    <>
      <div className="md:flex w-full justify-between">
        <div className="h-screen flex justify-center w-full bg-white">
          <div className="flex justify-center h-full w-full">
            <form
              onSubmit={handleSubmit}
              className="h-full flex flex-col justify-center gap-6 w-[25rem]"
            >
              <div className="flex flex-col gap-2 text-center items-center">
                <h1 className="text-3xl font-bold">Forgot Password?</h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email Address"
                    id="email"
                    className="w-full"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="w-full text-[1rem] flex flex-col gap-1">
                <button
                  type="submit"
                  className="bg-black w-full text-white font-bold py-2 px-4 rounded"
                >
                  Send Link
                </button>
                <div className="text-red-600">{error}</div>
              </div>
              <div className="flex w-full justify-around gap-2 items-center">
                <div className="h-[2px] w-full bg-black"></div>
                <div className="text-center">or</div>
                <div className="w-full h-[2px] bg-black"></div>
              </div>
              <div className="text-[0.9rem]">
                Need Help?
                <Link to="/contactus" className="text-[#8C3E87]">
                  {" "}
                  Contact Us
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="md:block hidden w-[100vw]">
          <img
            src="https://s3-alpha-sig.figma.com/img/47e4/b820/4111f62d6918498ca268c0d1d066f374?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMqM74Ji7T8K39bZt6UcuwSwVpEjDyDdXeNnc-nmeMwy3bCWCbZ7LlTnVkrjo-oWDnezdXJx0llWheOOOOQEihsXnQceBq16~EpHUojEoFTYQ0uCBCmJVIRmBnjMul7prExsD7U60qm2EOdsvFIouG-KbR3EpPtq4WmI5mZp86gZs8Xll9DhP2vl7SdZS0f~sLZwjI~zWQb7ZiW-nP1qVdf5P2lwM43OBhpQxdSYtzd19azaJH2RUM8xdg-l7uMaOnEnZ-dYM6JPZ1lXh3av1ChXzwlbmf6RKGYyOm4wFoUCNXsoauqdan70Q5-O2AMKz76ok5uJlI2AJefzAAvihw__"
            className="h-screen w-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
});

export default Forgot;
