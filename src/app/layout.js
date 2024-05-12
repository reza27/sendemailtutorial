import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className="flex items-center uppercase text-sm lg:px-32 px-5">
            {" "}
            <img src="/tayibah-logo.jpg" className="w-52 relative -left-11" />
            <div className="ml-auto flex">
              <a className="pl-5 cursor-pointer hover:text-black" href="#about">
                About
              </a>
              <a
                className="pl-5 cursor-pointer hover:text-black"
                href="#gallery"
              >
                Gallery
              </a>
              <a
                className="pl-5 cursor-pointer hover:text-black"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="w-full bg-gray-200 text-center">
          <p className="pt-20 uppercase text-sm">#Tayibahfarms</p>
          <p className="p-2 pb-24 text-center text-sm text-gray-400">
            &#169; 2024
          </p>
        </footer>
      </body>
    </html>
  );
}
