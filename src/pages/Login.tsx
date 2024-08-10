import { useState, useEffect } from "react";
import img from "../assets/Auth/login.jpg";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
const Login = observer(() => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    root: { auth },
  } = useStore();
  useEffect(() => {
    if (auth.isAuthenticated) navigate("/");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const responseGoogle = async (response: CredentialResponse) => {
    try {
      setLoading(true);
      if (!response.credential) {
        throw new Error("Google login failed. No credentials received.");
      }
      await auth.googleLogin(response.credential);
      navigate("/");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during Google login. Please try again later.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      await auth.fetchToken(email, password);
      navigate("/");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = error.response?.data?.message;
      if (statusCode === 400) {
        toast.error("Invalid email or password. Please try again.");
      } else if (statusCode === 401) {
        toast.error("Unauthorized access. Please check your credentials.");
      } else if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="md:flex h-screen w-full justify-between max-sm:p-4 min-w-screen">
        <div className="md:block hidden w-[70vw] md:w-full">
          <img src={img} className="h-screen w-full object-cover" alt="" />
        </div>
        <div className="h-full flex justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-4"
          >
            <div className="flex flex-col gap-2 items-center">
              <img
                src="/logo-nobg.png"
                alt="logo"
                className="max-h-[10vh] max-w-[40vw]"
              />
              <h1 className="text-3xl font-bold">User Login</h1>
              {/* <h6 className="text-md">
                  Please enter your login details to sign in
                </h6> */}
            </div>
            <div className="flex flex-col gap-4 w-full justify-center items-center">
              <input
                type="email"
                name="email"
                required
                value={email}
                placeholder="Email Address"
                id="email"
                className="w-[100%]"
                onChange={handleInputChange}
              />
              <input
                type="password"
                value={password}
                required
                placeholder="Password"
                name="password"
                id="password"
                className="w-[100%]"
                onChange={handleInputChange}
              />
              <div className="text-[#8C3E87] text-end hover:text-[#763572] font-bold place-self-end">
                <Link to="/forgot">Forgot Password ?</Link>
              </div>
            </div>

            <div className="text-[1rem] w-full flex flex-col gap-1 justify-center items-center">
              <button
                type="submit"
                className="flex w-[100%] items-center justify-center gap-4 bg-black text-white font-bold py-2 px-4 rounded"
              >
                Sign In
                {loading && <Loader2 className="size-4 animate-spin" />}
              </button>
            </div>
            <div className="w-full items-center flex justify-center">
              <GoogleLogin
                onSuccess={responseGoogle}
                size="large"
                width="330px"
              />
            </div>
            <div className="flex w-full justify-around gap-2 items-center">
              <div className="h-[2px] w-full bg-black"></div>
              <div className="text-center">or</div>
              <div className="w-full h-[2px] bg-black"></div>
            </div>

            <div className="text-[0.9rem] flex justify-center gap-1 font-semibold">
              <Link to="/register" className="text-[#8C3E87]">
                {" "}
                Create an account
              </Link>
            </div>
            {/* <div className="flex flex-col gap-4">
                <div className="h-[2px] bg-black"></div>
                <button className="bg-black w-full text-white font-semibold py-2 px-4 rounded">
                  <Link to="/organizer/login">I'm an organizer</Link>
                </button>
              </div> */}
          </form>
        </div>
      </div>
    </>
  );
});

export default Login;
