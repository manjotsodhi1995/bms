import msg from "../assets/contact/message.png"
import phn from "../assets/contact/phone (2).png";
import lc from "../assets/contact/location.png";
import ExpandableBox from "../components/Expandable";
import { observer } from "mobx-react-lite";
import { useState } from "react";
const ContactUs = observer(() => {
     const [firstName, setFirstName] = useState(""); // State for first name input
     const [lastName, setLastName] = useState(""); // State for last name input
     const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleInputChange = (event: any) => {
      const { name, value } = event.target;
      switch (name) {
        case "firstName":
          setFirstName(value);
          break;
        case "lastName":
          setLastName(value);
          break;
        case "phone":
          setPhone(value);
          break;
        case "email":
          setEmail(value);
              break;
          case "message":
              setMessage(value);
              break;
        default:
          break;
      }
    };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="flex flex-col md:gap-0 gap-8">
        <div className="md:w-[46vw] pl-[5vw] pt-[5vh] flex flex-col gap-4">
          <div className="text-4xl font-bold">Contact Us</div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Pulvinar ut commodo a vel
            auctor tincidunt purus.
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-[46vw] flex flex-col gap-4 justify-center items-center md:mt-[-100px]">
            <div className="flex md:w-[60%] w-[80%] items-center gap-4">
              <img src={msg} alt="" />
              example@gmail.com
            </div>
            <div className="flex md:w-[60%] w-[80%] items-center gap-4">
              <img src={phn} alt="" />
              +1 (208)- 555-0112
            </div>
            <div className="flex md:w-[60%] w-[80%] items-center gap-4">
              <img src={lc} alt="" />
              1901 Thornridge Cir. Shiloh, Hawaii 81063
            </div>
          </div>
          <div className="">
            <div className="py-[7vh] 2xl:py-[12vh] px-[10vw] h-full md:w-[54vw]">
              <form
                onSubmit={handleSubmit}
                className="h-full p-4 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-4">
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
                    <textarea
                      name="message"
                      value={message}
                      placeholder="Message"
                      id="message"
                      className="w-full h-[150px] text-start text-clip"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full text-[1rem] flex flex-col gap-1">
                  <button
                    type="submit"
                    className="bg-black w-full text-white font-bold py-2 px-4 rounded"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[5vw] pt-[5vh] w-full flex flex-col items-center gap-8">
        <div className="font-bold text-4xl">Frequently Asked Questions</div>
        <div className="w-[90%] flex flex-col gap-3 py-8">
          <ExpandableBox
            title="What is the Yapsody Affiliate Program?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
          <ExpandableBox
            title="Who Can Join?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
          <ExpandableBox
            title="How do i qualify for the affiliate program?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
          <ExpandableBox
            title="I am Yapsody Event Presenter can i apply for the Affiliate Program?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
          <ExpandableBox
            title="How are affiliate commissions processed?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
        </div>
      </div>
    </div>
  );
});

export default ContactUs;
