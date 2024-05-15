"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function MobileMenu() {
  const closeMenu = () => {
    console.log("close", document.getElementById("menu-check").checked);
    document.getElementById("menu-check").checked = false;
  };
  return (
    <div className="flex fixed z-20 w-full bg-[#f9f8f6] md:hidden">
      <img src="/tayibah-logo.jpg" className="w-28" />
      <div id="menuToggle" className="flex md:hidden z-50 uppercase font-bold">
        <input id="menu-check" type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a href="#about" onClick={closeMenu}>
            <li>About</li>
          </a>
          <a href="#gallery" onClick={closeMenu}>
            <li>Gallery</li>
          </a>
          <a href="#contact" onClick={closeMenu}>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
