import { Avatar } from "@mui/material";
import { Pencil } from "lucide-react";
import { FormEvent, useState } from "react";
import pfp from "@/assets/test/pfpbig.png";

const AccSettings = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("pass: " +password+","+lname+fname)
    setFname("");
    setLname("");
    setEmail("");
    setMobile("");
    setDob("");
    setPassword("");
    setGender("");
  };

  return (
    // flex flex-col sm:items-start 2xl:items-center items-center w-[80vw] mx-[5px] sm:w-[75%] lg:pl-[10%] sm:pl-[5%] bg-white mt-[50px]
    <div className="flex flex-col sm:items-start 2xl:items-center items-center sm:w-[75%] w-full lg:pl-[10%] sm:pl-[5%] mt-[50px] bg-white 2xl:justify-center max-h-full">
      <h1 className="text-2xl font-medium my-2">Account Settings</h1>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col items-center sm:items-start"
      >
        <h2 className="mt-[20px] text-lg font-medium">Edit Profile</h2>

        <p className="mt-2 flex w-full justify-center gap-2 items-center">
          <Avatar src={pfp} sx={{ width: 100, height: 100 }} />
          <Pencil className="size-4" />
        </p>
        <input
          type="text"
          className="w-[80vw] md:max-w-[500px] sm:w-[50vw] my-2 mb-[15px] h-[30px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black"
          placeholder="First Name"
          value={fname}
          onChange={handleInputChange(setFname)}
        />
        <input
          type="text"
          className="w-[80vw] md:max-w-[500px] sm:w-[50vw] my-2 mb-[15px] h-[30px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black"
          placeholder="Last Name"
          value={lname}
          onChange={handleInputChange(setLname)}
        />
        <input
          type="text"
          className="w-[80vw] md:max-w-[500px] sm:w-[50vw] my-2 mb-[15px] h-[30px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black"
          placeholder="Email Address"
          value={email}
          onChange={handleInputChange(setEmail)}
        />
        <input
          type="text"
          className="w-[80vw] md:max-w-[500px] sm:w-[50vw]   my-2 mb-[15px] h-[30px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black"
          placeholder="Mobile Number"
          value={mobile}
          onChange={handleInputChange(setMobile)}
        />
        <input
          type="text"
          className="w-[80vw] md:max-w-[500px] sm:w-[50vw]  my-2 mb-[15px] h-[30px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black"
          placeholder="Date of Birth"
          value={dob}
          onChange={handleInputChange(setDob)}
        />
        <input
          type="password"
          className="w-[80vw] md:max-w-[500px] sm:w-[50vw]   my-2 mb-[15px] h-[30px] border-gray-700 focus:outline-[0.25px] focus:placeholder:invisible placeholder:text-black"
          placeholder="Change Password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
        <div className="flex flex-col items-start mt-1">
          <label className="flex items-center space-x-2 text-md mb-[5px]">
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
              className="form-radio text-black checked:text-black focus:ring-black"
            />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2 text-md mb-[5px]">
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
              className="form-radio text-black checked:text-black focus:ring-black"
            />
            <span>Female</span>
          </label>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="bg-black text-white rounded-md w-fit p-[5px] px-[10px] text-sm mx-auto mt-2 sm:my-0 my-[20px]"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccSettings;
