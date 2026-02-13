import decorLeft from "../assets/decor2-3.png";
import decorCenter from "../assets/decor1-3.png";
import decorRight from "../assets/decor3-3.png";
import crossIcon from "../assets/element1-3.png";

export default function Reasons() {
  return (
    <section 
     id="reasons" 
    className="relative bg-white py-24 overflow-hidden">

      {/* Decor Kiri */}
      <img
        src={decorLeft}
        alt="Decor Left"
          className="  absolute
    top-[75px]
    left-[100px]
    w-[30px]"
      />

      {/* Decor Tengah */}
      <img
        src={decorCenter}
        alt="Decor Center"
        className="   absolute
    top-1/2
    right-[15%]
    -translate-y-1/2
    w-[390px]
    opacity-90"
      />

      {/* Decor Kanan */}
      <img
        src={decorRight}
        alt="Decor Right"
        className="absolute top-[125px] -right-[55px] w-20 md:w-28"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="md:pl-40 pl-10">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">

  <span className="block font-semibold">
    Alasan Kenapa
  </span>

  {/* Baris 2: Kamu + Butuh sejajar */}
  <div className="flex gap-3">
    <span className="font-semibold">
      Kamu
    </span>

    <span className="font-extrabold">
      Butuh
    </span>
  </div>

  {/* Baris 3 */}
  <span className="block font-semibold">
    Dokumentasi
  </span>
          </h2>

          {/* List */}
          <ul className="space-y-5 text-gray-800">

            <li className="flex items-start gap-4">
              <img src={crossIcon} className="w-5 mt-1" />
              <span>Momen penting event terlewat</span>
            </li>

            <li className="flex items-start gap-4">
              <img src={crossIcon} className="w-5 mt-1" />
              <span>Foto & video kurang profesional</span>
            </li>

            <li className="flex items-start gap-4">
              <img src={crossIcon} className="w-5 mt-1" />
              <span>
                Hasil dokumentasi tidak layak dipakai untuk promosi
              </span>
            </li>

            <li className="flex items-start gap-4">
              <img src={crossIcon} className="w-5 mt-1" />
              <span>
                Tim datang tapi tidak paham alur event
              </span>
            </li>

            <li className="flex items-start gap-4">
              <img src={crossIcon} className="w-5 mt-1" />
              <span>
                Dokumentasi selesai, tapi ceritanya tidak terasa
              </span>
            </li>

          </ul>
        </div>

        {/* Right Space (Kosong biar decor keliatan) */}
        <div></div>

      </div>

    </section>
  );
}
