import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import axios from "axios";
import img from "../assets/Auth/login.jpg";

const ResetPassword = observer(() => {
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const {
    root: { auth },
  } = useStore();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const changePassword = async (password: any) => {
    const response = await axios.post(
      `https://kafsbackend-106f.onrender.com/api/v1/users/reset-password`,
      {
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    if (auth.isAuthenticated) navigate("/");
  }, [auth.isAuthenticated, navigate]);

  console.log("password", password);
  console.log("confirmPassword", confirmPassword);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    if (!password || !confirmPassword) {
      setError("Both fields are required*.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      await changePassword(confirmPassword);
      toast.success("password changed successfully");
      navigate("/login");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError("Invalid request. Please try again.");
      } else {
        setError(
          "An error occurred during the password reset. Please try again later."
        );
        console.error("Password reset error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:flex w-full justify-between">
      <div className="h-screen flex justify-center w-full bg-white">
        <div className="flex justify-center h-full w-full">
          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-center gap-6 w-[25rem]"
          >
            <div className="flex flex-col gap-2 text-center items-center">
              <h1 className="text-3xl font-bold">Reset Password</h1>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password *"
                  id="password"
                  className="w-full border p-2 rounded"
                  onChange={handleInputChange}
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password *"
                  id="confirmPassword"
                  className="w-full border p-2 rounded"
                  onChange={handleInputChange}
                  disabled={loading}
                />
              </div>
              {error && <div className="text-red-600 text-sm">{error}</div>}
            </div>
            <div className="text-[1rem] w-full flex flex-col gap-1 justify-center items-center">
              <button
                type="submit"
                disabled={loading}
                className="flex w-[100%] items-center justify-center gap-4 bg-black text-white font-bold py-2 px-4 rounded"
              >
                Continue
                {loading && <Loader2 className="size-4 animate-spin" />}
              </button>
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
      <div className="md:block hidden w-[70vw] md:w-full">
        <img src={img} className="h-screen w-full object-cover" alt="" />
      </div>
    </div>
  );
});

export default ResetPassword;
