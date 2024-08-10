import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import axios from "axios";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import img from "../assets/Auth/login.jpg";

const Forgot = observer(() => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    root: { auth },
  } = useStore();

  useEffect(() => {
    if (auth.isAuthenticated) navigate("/");
  }, [auth.isAuthenticated, navigate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const validateEmail = (email: string) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendLink = async (email: string) => {
    const response = await axios.post(
      "https://kafsbackend-106f.onrender.com/api/v1/users/forgot-password",
      { email }
    );
    return response.data;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await sendLink(email);
      toast.success("Password reset email sent successfully!");
      setEmail("");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
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
                    className="w-full border p-2 rounded"
                    onChange={handleInputChange}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="w-full text-[1rem] flex flex-col gap-1">
                <button
                  type="submit"
                  className="bg-black w-full text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2"
                  disabled={loading}
                >
                  Send Link
                  {loading && <Loader2 className="size-4 animate-spin" />}
                </button>
              </div>
              <div className="flex w-full justify-around gap-2 items-center">
                <div className="h-[2px] w-full bg-black"></div>
                <div className="text-center">or</div>
                <div className="w-full h-[2px] bg-black"></div>
              </div>
              <div className="text-[0.9rem] text-center">
                Need Help?
                <Link to="/contactus" className="text-[#8C3E87]">
                  {" "}
                  Contact Us
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="md:block hidden w-[70vw] md:w-full">
          <img src={img} className="h-screen w-full object-cover" alt="" />
        </div>
      </div>
    </>
  );
});

export default Forgot;
