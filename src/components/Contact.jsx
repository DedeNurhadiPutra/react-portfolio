import React, { useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
// emailjs
import emailjs from "@emailjs/browser";
// alert
import Alert from "./ToastAlert";

const Contact = () => {
  // for title
  useEffect(() => {
    document.title = "Contact | Portfolio Dede Nurhadi Putra";
  }, []);

  // for emailjs
  const form = useRef();

  const styles = {
    background: "#ffc107",
    color: "red",
    fontSize: "20px",
    padding: "10px",
    borderRadius: "4px",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_008spf2",
      "template_76pmacd",
      form.current,
      "bNWEleIou45iELWr1"
    );
    Alert.success("Successfully created!", styles);
    e.target.reset();
  };
  // end emailjs

  return (
    <div className="text-center w-5/6 mt-10 mb-12 mx-auto md:pt-2 md:pb-10 md:w-[70%]">
      <h5 className="text-xs md:text-base">Get In Touch</h5>
      <h2 className="text-2xl mt-1 text-blue-500 font-bold md:text-2xl">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 gap-4 mt-6 md:mt-8">
        <div>
          <article className="group w-5/6 mx-auto bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl py-7 hover:bg-indigo-900 ease-in-out duration-500 md:py-10">
            <AiOutlineMail className="inline-block mb-2 text-4xl ease-in-out duration-500 group-hover:scale-125 group-hover:fill-red-500 md:my-4 md:text-5xl" />
            <h4>Email</h4>
            <h5 className="text-sm mt-1 mb-4">denurhadiputra@gmail.com</h5>
            <a
              href="mailto:denurhadiputra@gmail.com"
              target="__blank"
              className="text-sm text-GoldenPoppy hover:text-yellow-600 ease-in-out duration-300"
            >
              Send a message <AiOutlineSend className="inline-block" />
            </a>
          </article>
          <article className="group w-5/6 my-4 mx-auto bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl py-7 hover:bg-indigo-900 ease-in-out duration-500 md:py-10">
            {/* gradient for insta */}
            <svg width="0" height="0">
              <linearGradient
                id="insta-gradient"
                x1="25%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop stopColor="#FFDC80" offset="0%" />
                <stop stopColor="#F77737" offset="25%" />
                <stop stopColor="#C13584" offset="50%" />
                <stop stopColor="#833AB4" offset="100%" />
              </linearGradient>
            </svg>
            {/* end gradient for insta */}
            <AiOutlineInstagram className="inline-block mb-2 text-4xl ease-in-out duration-500 group-hover:scale-150 group-hover:fill-[url(#insta-gradient)] md:my-4 md:text-5xl" />
            <h4>Instagram</h4>
            <h5 className="text-sm mt-1 mb-4">@denurhadiputra</h5>
            <a
              href="https://www.instagram.com/denurhadiputra/"
              target="__blank"
              className="text-sm text-GoldenPoppy hover:text-yellow-600 ease-in-out duration-300"
            >
              Send a message <AiOutlineSend className="inline-block" />
            </a>
          </article>
          <article className="group w-5/6 mx-auto bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl py-7 hover:bg-indigo-900 ease-in-out duration-500 md:py-10">
            <FaWhatsapp className="inline-block mb-2 text-4xl ease-in-out duration-500 group-hover:scale-125 group-hover:fill-[#25D366] md:my-4 md:text-5xl" />
            <h4>Whatsapp</h4>
            <h5 className="text-sm mt-1 mb-4">+6282167500197</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+6282167500197"
              target="__blank"
              className="text-sm text-GoldenPoppy hover:text-yellow-600 ease-in-out duration-300"
            >
              Send a message <AiOutlineSend className="inline-block" />
            </a>
          </article>
        </div>

        <form ref={form} autoComplete="on" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            className="w-5/6 p-4 mt-10 bg-transparent border-solid border-[1px] border-blue-500 rounded-lg focus:border-GoldenPoppy focus:outline-none md:mt-6"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-5/6 p-4 my-6 border-solid border-[1px] border-blue-500 rounded-lg bg-transparent focus:border-GoldenPoppy focus:outline-none"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="w-5/6 block mx-auto p-4 bg-transparent border-solid border-[1px] border-blue-500 rounded-lg focus:border-GoldenPoppy focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-6 mb-10 px-6 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-blue-500 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
