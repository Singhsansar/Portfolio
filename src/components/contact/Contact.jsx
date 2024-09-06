import React, { useEffect, useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Provide a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please provide a subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you, ${username}, your message has been sent successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  return (
    <section id="contact" className="border-b-[1px] border-b-black py-20">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full mt-10">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r bg-slate-950 border border-gray-600 flex flex-col gap-8 p-8 rounded-lg shadow-sm">
            <form className="w-full flex flex-col gap-6 py-2">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-sm text-center text-orange-500 text-base animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-sm text-center text-green-500 text-base animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4 text-white">
                  <p className="text-md  uppercase tracking-wide">Your name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`contactInput ${
                      errMsg === "Username is required!" && "border-red-500"
                    }`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-md  uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`contactInput ${
                      errMsg === "Phone number is required!" && "border-red-500"
                    }`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-md  uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`contactInput ${
                    errMsg === "Please provide your Email!" && "border-red-500"
                  }`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-md  uppercase tracking-wide">Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`contactInput ${
                    errMsg === "Please provide a subject!" && "border-red-500"
                  }`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-md  uppercase tracking-wide">Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`contactTextArea ${
                    errMsg === "Message is required!" && "border-red-500"
                  }`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-white rounded-lg uppercase text-lg text-black tracking-wider hover:text-white hover:border-[1px] hover:border-designColor duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
