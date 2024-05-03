"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const images = ["farm-1.jpg", "farm-2.jpg"];

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
    <main className="flex min-h-screen flex-col items-center justify-center px-16">
      <div id="about" className="pt-16">
        <h2 className="text-xl">About us</h2>
        <p className="py-6 text-sm">
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
      <div id="gallery" className="w-full overflow-hidden pt-10">
        <h2 className="text-xl">Gallery</h2>
        <div
          className="w-full py-8 flex "
          style={{ width: 100 * images.length + "%" }}
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
      </div>
      <div id="contact" className="w-full py-10">
        <h2 className="text-xl">Contact</h2>
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
