import { useState } from "react";
import img from "../assets/organizerAuth/OrganizerLogin.png";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
const OrganizerLogin=observer(()=> {
 const [firstName, setFirstName] = useState(""); // State for first name input
 const [lastName, setLastName] = useState(""); // State for last name input
 const [gender, setGender] = useState("male"); // State for gender
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const {root:{auth}} = useStore();
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

 const handleSubmit = async(event: any) => {
   event.preventDefault();
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
             className="h-full p-4 flex flex-col justify-around"
           >
             <div className="flex flex-col gap-2">
               <h1 className="text-3xl font-bold">Sign Up</h1>
               <h6 className="text-md">Create your account in seconds</h6>
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
               <input
                 type="tel" // Use type="tel" for better phone number input
                 name="phone"
                 id="phone"
                 value={phone}
                 placeholder="Phone"
                 className="w-full"
                 onChange={handleInputChange}
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

             <button
               type="submit"
               className="bg-black text-white font-bold py-2 px-4 rounded"
             >
               Continue
             </button>

             <div className="flex flex-col gap-1">
               <div className="h-[2px] bg-black"></div>
               <p className="text-center text-sm">
                 By registering, you agree to FIXIR's T&Cs and Privacy Policy.
               </p>
             </div>
           </form>
         </div>
       </div>
     </div>
   </>
 );
})

export default OrganizerLogin;
