import decor from "../assets/decor1-1.png";

export default function Hero() {
  return (
    <section 
     id="home"
    className="
  relative
  bg-[#0f0f0f]
  text-white
  overflow-hidden
  h-[calc(95vh-100px)]
  flex
  items-start
">


      {/* Decor */}
      <img
        src={decor}
        alt="Decor"
        className="
  absolute
  top-[280px]
  left-[230px]
  w-[60px]
  md:w-[100px]
  lg:w-[65px]
"

      />

      <img
        src={decor}
        alt="Decor"
        className="
  absolute
  top-[30px]
  right-[309px]
  w-[60px]
  md:w-[100px]
  lg:w-[30px]
"
      />

      <img
        src={decor}
        alt="Decor"
        className="
  absolute
  top-[338px]
  right-[405px]
  w-[60px]
  md:w-[100px]
  lg:w-[20px]
"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-0 py-0 text-center w-full">

        {/* Subtitle */}
        <p className="text-[24px] mb-4 mt-10 opacity-90">
          Dokumentasi Event Specialist
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          JASA DOKUMENTASI <br />
          EVENT FOTO & VIDEO
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          Menangani dokumentasi Professional foto dan video <br />
          untuk berbagai jenis event Kamu.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        
        <a href="https://wa.me/6285175394358">
   <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 font-semibold">
            Booking Tim Dokumentasi
          </button>
        </a>
       
<a href="https://wa.me/6285175394358">
  <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 font-semibold transition">
            Pelajari Selengkapnya
          </button>
</a>
        

        </div>

      </div>
    </section>
  );
}
