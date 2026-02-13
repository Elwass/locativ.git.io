import logo from "../assets/element1-6.png";

import img1 from "../assets/element2-6.png";
import img2 from "../assets/element3-6.png";
import img3 from "../assets/element4-6.png";
import img4 from "../assets/element5-6.png";
import img5 from "../assets/element6-6.png";

export default function Projects() {
  return (
    <section id="projects" className="bg-white w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        <div className="relative h-[260px] md:h-[300px] lg:h-auto">
          <img src={img1} alt="Corporate" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide">
            Corporate
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center bg-white h-[220px] md:h-[300px] lg:h-auto py-8">
          <img src={logo} alt="Logo" className="w-20 md:w-24 lg:w-30 mb-1" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            PROJEK <br /> KAMI
          </h2>
        </div>

        <div className="relative h-[260px] md:h-[300px] lg:h-auto">
          <img src={img2} alt="Brand" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide">
            Brand
          </div>
        </div>

        <div className="relative h-[260px] md:h-[300px] lg:h-auto">
          <img src={img3} alt="Private Event" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-yellow-400 text-black text-center py-3 text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide">
            Private Event
          </div>
        </div>

        <div className="relative h-[260px] md:h-[300px] lg:h-auto">
          <img src={img4} alt="Organization" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide">
            Organization
          </div>
        </div>

        <div className="relative h-[260px] md:h-[300px] lg:h-auto">
          <img src={img5} alt="Sport" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-yellow-400 text-black text-center py-3 text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide">
            Sport
          </div>
        </div>
      </div>
    </section>
  );
}
