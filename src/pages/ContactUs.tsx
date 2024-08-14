import msg from "../assets/contact/message.png";
import lc from "../assets/contact/location.png";
import ExpandableBox from "../components/Expandable";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import axios from "@/utils/middleware";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";

interface ContactData {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  message: string;
}

const ContactUs = observer(() => {
  const [firstName, setFirstName] = useState(""); // State for first name input
  const [lastName, setLastName] = useState(""); // State for last name input
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

  const uploadContactData = async (data: ContactData) => {
    await axios.post(
      "https://kafsbackend-106f.onrender.com/api/v1/contactform/submit",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const mutation = useMutation({
    mutationFn: uploadContactData,
    onSuccess: () => {
      toast.success("Thank you for contacting us!.");
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
    },
    // onError: () => {
    //   toast.error("Oops! Something went wrong. Please try again.");
    // }
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data: ContactData = {
      fname: firstName,
      lname: lastName,
      phone,
      email,
      message,
    };
    mutation.mutate(data, {
      onSettled: () => {
        setLoading(false);
      },
    });
  };

  return (
    <div>
      <div className="flex flex-col md:gap-0 gap-8">
        <div className="md:w-[46vw] pl-[5vw] pt-[5vh] flex flex-col gap-4">
          <div className="text-4xl font-bold">Contact Us</div>
          <div>
            Our customer service team is always available to answer your queries
            or to receive your feedback. Fillup the given form to get in touch
            with us and we’ll get back to you within 24 working hours!
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-[46vw] flex flex-col gap-4 justify-center items-center md:mt-[-100px]">
            <div className="flex md:w-[60%] w-[80%] items-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kafscoteam@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <img src={msg} alt="Email Logo" />
              </a>
              kafscoteam@gmail.com
            </div>
            <div className="flex md:w-[60%] w-[80%] items-center gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Summerhill,+Mountjoy,+Dublin,+Ireland"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <img src={lc} alt="Location Icon" />
              </a>
              123 Summerhill, Mountjoy, Dublin, Ireland
            </div>
          </div>
          <div className="">
            <div className=" text-center font-medium text-2xl">
              Ask Us Anything
            </div>
            <div className=" px-[10vw] h-full md:w-[54vw]">
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
                      placeholder="First name*"
                      className="w-full"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name*"
                      value={lastName}
                      className="w-full"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      type="number" // Use type="tel" for better phone number input
                      name="phone"
                      id="phone"
                      value={phone}
                      placeholder="Phone*"
                      className="w-full"
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email Address*"
                      id="email"
                      className="w-full"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="">
                    <textarea
                      name="message"
                      value={message}
                      placeholder="Message*"
                      id="message"
                      className="w-full h-[150px] text-start text-clip"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full text-[1rem] flex flex-col gap-1">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-4 bg-black w-full text-white font-bold py-2 px-4 rounded"
                  >
                    Send Message
                    {loading && <Loader2 className="size-4 animate-spin" />}
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
            title="I can't find my tickets"
            content={
              <>
                Check your Kafsco account :
                <a href="/login" className="underline">
                  {" "}
                  Log in
                </a>{" "}
                and go to{" "}
                <a href="/mytickets" className="underline">
                  My Tickets
                </a>
                . If you still can’t find your tickets or can’t log in, please{" "}
                <a href="/contactus" className="underline">
                  contact us
                </a>{" "}
                using the form on the contact page.
              </>
            }
          />
          <ExpandableBox
            title="How do I get a refund?"
            content="Events on Kafsco are hosted by third-party organizers who set their own refund policies. Read the refund policy on event page, if refund requests are allowed by the event organizer, you can request one by mentioning your email address and ticket number in the contact form.
"
          />
          <ExpandableBox
            title="Why have I been charged/charged twice, but have no ticket/only one ticket?
"
            content={
              <>
                In the first instance, please check your Kafsco account in case
                your tickets are stored there. You should also check your email
                to see if you have received a purchase confirmation. <br />{" "}
                <br />
                In some cases, it may appear that a transaction has gone through
                but in actual fact your bank has not charged you for this, so it
                is advisable to check with your bank. <br /> <br />
                If it still looks like you’ve been charged or charged twice but
                have no tickets , please contact us.
              </>
            }
          />
          <ExpandableBox
            title="How do I become a paid promoter for Kafsco?"
            content={
              <>
                Please{" "}
                <a href="/contactus" className="underline">
                  contact us
                </a>{" "}
                using the form on contact page and please include a few details
                like how do you plan to promote events and include any socials
                where promotions will take place.{" "}
              </>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default ContactUs;
