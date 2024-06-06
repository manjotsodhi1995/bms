import { useState,useEffect} from "react";
import img from "../assets/Auth/login.png";
import { GoogleLogin } from "@react-oauth/google";
import { Link,  useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
const Login = observer(() => {
    const [error, setError] = useState<string | null>(null);
   const navigate = useNavigate();
  const responseGoogle = (response:any) => {
    console.log("Google login response:", response);
  };
   const {
     root: { auth },
   } = useStore();
  useEffect(() => {
  if(auth.isAuthenticated)
navigate('/')
}, [])
 
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
 
  
const handleSubmit = async (event: any) => {
  event.preventDefault();
  try {
    await auth.fetchToken(email, password); 
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
      <div className="md:flex">
        <div className="md:w-[46vw]">
          <img src={img} className="h-screen w-full" alt="" />
        </div>
        <div className="h-screen">
          <div className="py-[7vh] 2xl:py-[12vh] px-[10vw] h-full md:w-[54vw]">
            <form
              onSubmit={handleSubmit}
              className="h-full p-4 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Login</h1>
                <h6 className="text-md">
                  Please enter your login details to sign in
                </h6>
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
                <div className="flex flex-col gap-1">
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    name="password"
                    id="password"
                    className="w-full"
                    onChange={handleInputChange}
                  />
                  <div className="text-[#8C3E87] text-end">
                    Forgot Password?
                  </div>
                </div>
              </div>

              <div className="w-full text-[1rem] flex flex-col gap-1">
                <button
                  type="submit"
                  className="bg-black w-full text-white font-bold py-2 px-4 rounded"
                >
                  Sign Up
                </button>
                <div className="text-red-600">{error}</div>
              </div>
              <div className="flex w-full justify-around gap-2 items-center">
                <div className="h-[2px] w-full bg-black"></div>
                <div className="text-center">or</div>
                <div className="w-full h-[2px] bg-black"></div>
              </div>
              <GoogleLogin onSuccess={responseGoogle}/>
              <div className="text-[0.9rem]">
                Dont have an account?
                <Link to="/register" className="text-[#8C3E87]">
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
      </div>
    </>
  );
});

export default Login;
