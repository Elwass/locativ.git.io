import logo from "../assets/element1-6.png";

import img1 from "../assets/element2-6.png";
import img2 from "../assets/element3-6.png";
import img3 from "../assets/element4-6.png";
import img4 from "../assets/element5-6.png";
import img5 from "../assets/element6-6.png";

export default function Projects() {
  return (
    <section
    id="projects"
    className="bg-white w-full min-h-screen overflow-hidden">


      {/* Grid Full */}
      <div className="grid grid-cols-3 grid-rows-2 w-full h-full">

        {/* Kiri Atas */}
        <div className="relative">
          <img
            src={img1}
            alt="Corporate"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-xl md:text-2xl font-extrabold tracking-wide
">
            Corporate
          </div>
        </div>

        {/* Tengah Atas */}
        <div className="flex flex-col items-center justify-center text-center bg-white">

          <img
            src={logo}
            alt="Logo"
            className="w-30 mb-1"
          />

          <h2 className="text-5xl font-bold leading-tight mb-5">
            PROJEK <br /> KAMI
          </h2>


        </div>

        {/* Kanan Atas */}
        <div className="relative">
          <img
            src={img2}
            alt="Brand"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-xl md:text-2xl font-extrabold tracking-wide
">
            Brand
          </div>
        </div>

        {/* Kiri Bawah */}
        <div className="relative">
          <img
            src={img3}
            alt="Private Event"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full bg-yellow-400 text-black text-center py-3 text-xl md:text-2xl font-extrabold tracking-wide
">
            Private Event
          </div>
        </div>

        {/* Tengah Bawah */}
        <div className="relative">
          <img
            src={img4}
            alt="Organization"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-xl md:text-2xl font-extrabold tracking-wide
">
            Organization
          </div>
        </div>

        {/* Kanan Bawah */}
        <div className="relative">
          <img
            src={img5}
            alt="Sport"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full bg-yellow-400 text-black text-center py-3 text-xl md:text-2xl font-extrabold tracking-wide
">
            Sport
          </div>
        </div>

      </div>

    </section>
  );
}
