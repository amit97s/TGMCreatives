import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#033047] to-[#021f2d] py-20 pb-5 flex justify-center">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-4xl border-l-0 pb-96 sm:pb-2 text-center border-2 border-[#C9F704]">
        <h2 className="text-2xl font-bold text-[#C9F704] mb-6">Let's Connect</h2>
        <form className="space-y-6">
          <div className="text-left">
            <label className="text-gray-300 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border-b-2 border-gray-400 text-white py-2 focus:outline-none focus:border-[#C9F704] transition"
            />
          </div>
          <div className="text-left">
            <label className="text-gray-300 text-sm">Your Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-transparent border-b-2 border-gray-400 text-white py-2 focus:outline-none focus:border-[#C9F704] transition"
            />
          </div>
          <div className="text-left">
            <label className="text-gray-300 text-sm">Your Message</label>
            <textarea
              placeholder="Type your message..."
              className="w-full bg-transparent border-b-2 border-gray-400 text-white py-2 h-20 focus:outline-none focus:border-[#C9F704] transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#C9F704] text-[#021f2d] font-semibold py-2 rounded-md hover:bg-[#b8e603] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
