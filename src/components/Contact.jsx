import React, { useRef, useState } from "react";
import { aboutbg } from "../assets/assetsindex";
import { sendEmail } from "../EmailService";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendEmail(formRef);
    if (response.success) {
      setStatus("Message sent successfully!");
      formRef.current.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-4 text-white font-winky pt-20 pb-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
        }}></div>
      <div className="relative z-10 max-w-3xl mx-auto justify-center items-center  px-6 py-8 rounded-lg ">
        <h2 className="text-6xl font-bold text-black mb-4 text-center uppercase">
          Contact
        </h2>
        <div
          className=" rounded-full"
          style={{
            width: "0.8cm",
            height: "6px",
            backgroundColor: "#9929EA",
            margin: "0 auto",
          }}></div>
        <p className="mt-8 mb-8 text-gray-600 text-lg text-center">
          Feel free to reach out through this form. I'll try to get back to you
          as soon as possible.
        </p>
        <div className="bg-white text-black rounded-lg py-6 px-8 shadow-lg">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4">
            <label className="font-semibold text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="px-4 py-2 mb-3 rounded border-2 border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9929EA]"
              required
            />
            <label className="font-semibold text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded mb-3 border-2 border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9929EA]"
              required
            />
            <label className="font-semibold text-gray-600">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Your Message"
              className="px-4 py-2 rounded mb-3 border-2 border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9929EA]"
              required></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#9929EA] px-6 py-3 rounded text-white font-semibold hover:-translate-y-1 transition-transform duration-300 uppercase shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9929EA]">
                Send Message
              </button>
            </div>
          </form>
          {/* {status && <p className="mt-4 text-center text-black">{status}</p>} */}
        </div>
        <div className="mt-8 text-center">
          {status && <p className="mt-4 text-center text-black">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;