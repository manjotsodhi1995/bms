import { useState, useEffect } from "react";
import img from "../assets/Auth/register.jpg";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { MuiTelInput } from "mui-tel-input";
import { AxiosError } from "axios";

const Register = observer(() => {
  const [firstName, setFirstName] = useState(""); // State for first name input
  const [lastName, setLastName] = useState(""); // State for last name input
  const [gender, setGender] = useState("male"); // State for gender
  const [phone, setPhone] = useState("");
  const [actualPhone, setActualPhone] = useState<string | null>("");
  const [country, setCountry] = useState<string | null>("");
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    root: { auth },
  } = useStore();
  const navigate = useNavigate();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "phone":
        setPhone(value);
        break;
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
      setLoading(true);
      if (password.length < 6) {
        setError("Password must be more than 6 letters");
        return;
      }

      await auth.register(
        email,
        password,
        firstName,
        lastName,
        gender,
        actualPhone,
        country
      );
      navigate("/");
    } catch (error: any) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      } else {
        setError("An error occurred during login. Please try again later.");
        console.error("Login error:", error);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (auth.isAuthenticated) navigate("/");
  }, []);
  return (
    <>
      <div className="md:flex">
        <div className="md:w-[46vw] md:block hidden">
          <img src={img} className="h-screen w-full" alt="" />
        </div>
        <div className="h-screen">
          <div className="py-[7vh] 2xl:py-[12vh] px-[10vw] h-full md:w-[54vw]">
            <form
              onSubmit={handleSubmit}
              className="h-full p-4 flex flex-col justify-around w-[27rem]"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-center items-center">
                  Sign Up
                </h1>
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  placeholder="First name"
                  className="w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last name"
                  value={lastName}
                  className="w-full"
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex w-full gap-8 custom-radio">
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleInputChange}
                  />
                  Male
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleInputChange}
                  />
                  Female
                </label>
              </div>

              <div className="">
                <MuiTelInput
                  value={phone}
                  onChange={(v, info) => {
                    setPhone(v);
                    setActualPhone(info.nationalNumber);
                    setCountry(`+${info.countryCallingCode}`);
                  }}
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  defaultCountry="US"
                  variant="outlined"
                  className="w-full"
                />
              </div>

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

              <div className="">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="w-full"
                  onChange={handleInputChange}
                />
              </div>

              <div className="w-full text-[1rem] flex flex-col gap-1">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-4 bg-black w-full text-white font-bold py-2 px-4 rounded"
                >
                  Sign Up
                  {loading && <Loader2 className="size-4 animate-spin" />}
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <div className="h-[2px] bg-black"></div>
                <p className="text-center text-sm">
                  By registering, you agree to KAFSCO's{" "}
                  <a href="/terms" className="text-blue-600">
                    T&Cs
                  </a>{" "}
                  and <a href="/privacy">Privacy Policy.</a>
                </p>
                <div>
                  <div className="text-red-500">{error}</div>
                  Already a member ?{" "}
                  <Link to="/login" className="text-[#8C3E87]">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

export default Register;
