import decorLeft from "../assets/decor2-3.png";
import decorCenter from "../assets/decor1-3.png";
import decorRight from "../assets/decor3-3.png";
import crossIcon from "../assets/element1-3.png";

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <img
        src={decorLeft}
        alt="Decor Left"
        className="absolute top-[75px] left-[20px] md:left-[50px] lg:left-[100px] w-[20px] md:w-[26px] lg:w-[30px]"
      />

      <img
        src={decorCenter}
        alt="Decor Center"
        className="absolute top-1/2 right-[-20%] md:right-[2%] lg:right-[15%] -translate-y-1/2 w-[220px] md:w-[300px] lg:w-[390px] opacity-90"
      />

      <img
        src={decorRight}
        alt="Decor Right"
        className="absolute top-[100px] -right-[30px] md:-right-[40px] lg:-right-[55px] w-14 md:w-20 lg:w-20"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
        <div className="pl-2 md:pl-10 lg:pl-40">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8 leading-tight">
            <span className="block font-semibold">Alasan Kenapa</span>

            <div className="flex gap-3">
              <span className="font-semibold">Kamu</span>
              <span className="font-extrabold">Butuh</span>
            </div>

            <span className="block font-semibold">Dokumentasi</span>
          </h2>

          <ul className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-800">
            <li className="flex items-start gap-3 md:gap-4">
              <img src={crossIcon} className="w-4 md:w-5 mt-1" />
              <span>Momen penting event terlewat</span>
            </li>
            <li className="flex items-start gap-3 md:gap-4">
              <img src={crossIcon} className="w-4 md:w-5 mt-1" />
              <span>Foto & video kurang profesional</span>
            </li>
            <li className="flex items-start gap-3 md:gap-4">
              <img src={crossIcon} className="w-4 md:w-5 mt-1" />
              <span>Hasil dokumentasi tidak layak dipakai untuk promosi</span>
            </li>
            <li className="flex items-start gap-3 md:gap-4">
              <img src={crossIcon} className="w-4 md:w-5 mt-1" />
              <span>Tim datang tapi tidak paham alur event</span>
            </li>
            <li className="flex items-start gap-3 md:gap-4">
              <img src={crossIcon} className="w-4 md:w-5 mt-1" />
              <span>Dokumentasi selesai, tapi ceritanya tidak terasa</span>
            </li>
          </ul>
        </div>

        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
