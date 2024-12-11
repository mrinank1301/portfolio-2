"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react"; // Ensure this is correct

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Menu className="md:hidden ml-14 size-10 shrink-0" />
      </button>

      {isOpen && (
        <div className=" fixed top-0 left-0 h-screen w-screen bg-white p-4 z-50">
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-4 p-10">Close</button>
          <ul className="flex flex-col items-center justify-center h-full gap-4 text-2xl">
           <Link href="/" className="mr-6">Home</Link>
              <Link href="/about" className="mr-6">About</Link>
              <Link href="/" className="mr-6">Blog</Link> 
              <Link href="/" className="mr-6">Contact</Link>
              <Link href="/services" className="mr-6">Services</Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
