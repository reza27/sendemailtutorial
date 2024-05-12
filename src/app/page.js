"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const images = ["farm-1.jpg", "farm-2.jpg"];

  const slider = useRef(null);
  const currentSlideIndex = useRef(0);

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        subject,
        message,
      }),
    });
    console.log(await response.json());
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:px-32 px-5">
      <div id="about" className="pt-16">
        <h2 className="text-2xl">About us</h2>
        <p className="py-6 text-sm ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div id="gallery" className="w-full overflow-hidden pt-10 relative">
        <h2 className="text-2xl">Gallery</h2>
        <div className="relative">
          <div
            className="w-full py-8 flex relative transition-all duration-300"
            style={{ width: 100 * images.length + "%" }}
            ref={slider}
          >
            {images.map((image, index) => (
              <div
                className="h-[500px] w-full bg-cover"
                key={"image" + index}
                style={{
                  backgroundImage: "url(" + image + ")",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>
          <div
            className="w-12 h-12  bg-[#333] absolute top-0 bottom-0 left-1 m-auto z-50 cursor-pointer hover:bg-black rounded-full"
            onClick={() => {
              if (Math.abs(currentSlideIndex.current) < images.length - 1) {
                currentSlideIndex.current = currentSlideIndex.current - 1;
                slider.current.style.left =
                  100 * currentSlideIndex.current + "%";
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-white w-6 absolute left-0 right-0 top-0 bottom-0 m-auto "
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div
            className="w-12 h-12 bg-[#333] absolute top-0 bottom-0 m-auto right-1 z-50 cursor-pointer  hover:bg-black rounded-full"
            onClick={() => {
              if (currentSlideIndex.current < 0) {
                currentSlideIndex.current = currentSlideIndex.current + 1;
              }
              slider.current.style.left = 100 * currentSlideIndex.current + "%";
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-white w-6 absolute left-0 right-0 top-0 bottom-0 m-auto"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </div>
      </div>
      <div id="contact" className="w-full py-10">
        <h2 className="text-2xl">Contact</h2>
        <form onSubmit={sendMail} className="h-full w-full py-6">
          <div className="relative flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-light text-gray-500 w-full"
            >
              Subject
            </label>
            <input
              name="title"
              type="text"
              id="title"
              required
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="Subject"
              className=" border border-gray-300 p-2 text-gray-500 w-full  text-sm"
            />
          </div>
          <div className="relative flex flex-col space-y-1 py-4">
            <label
              htmlFor="title"
              className="text-sm font-light text-gray-500 w-full"
            >
              Message
            </label>
            <textarea
              name="description"
              id="description"
              required
              cols={10}
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Message"
              className="border border-gray-300 p-2 text-gray-500 w-full text-sm"
            />
          </div>
          <button
            type="submit"
            className="ml-auto flex w-50 px-10 items-center justify-center space-x-3 bg-gray-800 p-2 text-white hover:shadow-md"
          >
            <span>Send</span>
          </button>
        </form>
      </div>
    </main>
  );
}
