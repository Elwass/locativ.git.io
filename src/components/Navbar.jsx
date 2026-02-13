import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0f0f0f] text-white relative">

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          py-2
          px-4 md:px-6
        "
      >

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[48px] mt-2 md:h-[60px] md:mt-4 lg:h-[70px] lg:mt-[40px]"
          />
        </div>

        <button
          className="md:block lg:hidden text-white text-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu + Button (Digabung) */}
        <ul
          className="
            hidden
            lg:flex
            items-center
            gap-5
            text-l
            font-medium
            lg:-mt-[10px]
            lg:mr-[200px]
            lg:h-[70px] lg:mt-[40px]
          "
        >
          <li>
    <a
      href="#home"
      className="hover:text-blue-400 cursor-pointer"
    >
      HOME
    </a>
  </li>

  <li>
    <a
      href="#reasons"
      className="hover:text-blue-400 cursor-pointer"
    >
      LAYANAN
    </a>
  </li>

  <li>
    <a
      href="#projects"
      className="hover:text-blue-400 cursor-pointer"
    >
      PORTOFOLIO
    </a>
  </li>

  <li>
    <a
      href="#services"
      className="hover:text-blue-400 cursor-pointer"
    >
      PAKET
    </a>
  </li>

          {/* Button Kontak */}
          <li>
          <a href="#contact">
 <button
              className="
                bg-blue-500
                hover:bg-blue-600
                text-white
                px-8
                py-2
                text-sm
                font-semibold
                ml-4
              "
            >
              KONTAK
            </button>

          </a>
           
          </li>
        </ul>

      </div>

      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li><a href="#home" className="hover:text-blue-400 cursor-pointer">HOME</a></li>
            <li><a href="#reasons" className="hover:text-blue-400 cursor-pointer">LAYANAN</a></li>
            <li><a href="#projects" className="hover:text-blue-400 cursor-pointer">PORTOFOLIO</a></li>
            <li><a href="#services" className="hover:text-blue-400 cursor-pointer">PAKET</a></li>
            <li>
              <a href="#contact">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 text-sm font-semibold">
                  KONTAK
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
