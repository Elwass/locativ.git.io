import personImg from "../assets/element1-4.png";
import checkIcon from "../assets/element2-4.jpg";
import decor from "../assets/decor1-4.jpg";

export default function WhyChoose() {
  return (
    <section className=" relative
    bg-white
    py-[45px]
    overflow-hidden

    border-t
    border-b
    border-gray-200

    shadow-[0_-4px_8px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.05)]
  ">

      {/* Decor kanan bawah */}
      <img
        src={decor}
        alt="Decor"
        className="
          absolute
          bottom-[50px]
          right-[200px]
          w-[60px]
          opacity-90
        "
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center gap-[80px]">

        {/* KIRI - FOTO */}
        <div className="w-1/2 flex justify-center">
          <img
            src={personImg}
            alt="Person"
            className="
              w-[350px]
              object-contain
             relative ml-[130px]
            "
          />
        </div>

        {/* KANAN - CONTENT */}
        <div className="w-1/2">

          {/* Title */}
          <h2 className="text-[42px] font-bold leading-tight mb-8">
  {/* Baris 1 */}
  <span className="font-semibold block">
    Mengapa Event
  </span>

  {/* Baris 2 */}
  <span className="block">
    <span className="font-extrabold">Percaya</span>{" "}
    <span className="font-semibold">pada</span>
  </span>

  {/* Baris 3 */}
  <span className="font-semibold block">
    LOCATIVE.ID?
  </span>
          </h2>

          {/* List */}
          <ul className="space-y-1 text-[17px] text-gray-800">

            {/* Item 1 */}
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[22px] mt-1" />
              <span>
                Spesialis dokumentasi event <br />
                (bukan general vendor)
              </span>
            </li>

            {/* Item 2 */}
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[22px] mt-1" />
              <span>
                Tim berpengalaman & paham <br />
                flow acara
              </span>
            </li>

            {/* Item 3 */}
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[22px] mt-1" />
              <span>
                Foto & video siap branding <br />
                & publikasi
              </span>
            </li>

            {/* Item 4 */}
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[22px] mt-1" />
              <span>
                Editing rapi, konsisten, dan <br />
                profesional
              </span>
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
}
