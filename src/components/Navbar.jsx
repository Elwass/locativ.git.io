import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0f0f0f] text-white">

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          py-2
          px-6
        "
      >

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[70px] mt-[40px]"
          />
        </div>

        {/* Menu + Button (Digabung) */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-5
            text-l
            font-medium
            -mt-[10px]
             mr-[200px]
             h-[70px] mt-[40px]
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
    </nav>
  );
}
