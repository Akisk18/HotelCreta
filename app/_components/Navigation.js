"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function Navigation({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="lg:hidden relative flex justify-end items-center w-full z-50 text-[#34495e] ">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Bars3Icon className="w-16 h-16" />
        </button>
      </nav>

      {isOpen && (
        <div className="fixed w-[50%] md:w-[25%] h-[17%] top-20 right-4 bottom-0 overflow-hidden bg-white z-50 transition-all border-2 border-[#34495e] ">
          <XMarkIcon
            className="w-10 h-10 text-[#34495e]"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className=" flex flex-col">
            <ul className="flex flex-col justify-center items-center text-lg font-semibold text-[#34495e] gap-3 ">
              <li>
                <Link onClick={() => setIsOpen(!isOpen)} href="/rooms">
                  ROOMS
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(!isOpen)} href="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                {session?.user.image ? (
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/logout"
                    className="mr-12 flex items-center gap-4"
                  >
                    <img
                      className=" h-8 rounded-full"
                      src={session.user.image}
                      alt={session.user.image}
                      referrerPolicy="no-referrer"
                    />
                    <span>LOG OUT</span>
                  </Link>
                ) : (
                  <Link href="/login">LOG IN</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}

      <ul className="hidden lg:flex flex-row items-center justify-end gap-12 w-full mr-12 text-lg font-semibold text-[#34495e] z-50">
        <li className="hover:text-[#348adb] transition-all duration-300">
          <Link href="/rooms">ROOMS</Link>
        </li>
        <li className="hover:text-[#348adb] transition-all duration-300">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="hover:text-[#348adb] transition-all duration-300">
          {session?.user.image ? (
            <Link href="/logout" className="flex items-center gap-4">
              <img
                className=" h-8 rounded-full"
                src={session.user.image}
                alt={session.user.image}
                referrerPolicy="no-referrer"
              />
              <span>LOG OUT</span>
            </Link>
          ) : (
            <Link href="/login">LOG IN</Link>
          )}
        </li>
      </ul>
    </>
  );
}
