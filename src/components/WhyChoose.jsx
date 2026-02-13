import personImg from "../assets/element1-4.png";
import checkIcon from "../assets/element2-4.jpg";
import decor from "../assets/decor1-4.jpg";

export default function WhyChoose() {
  return (
    <section
      className="relative bg-white py-[35px] md:py-[40px] lg:py-[45px] overflow-hidden border-t border-b border-gray-200 shadow-[0_-4px_8px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.05)]"
    >
      <img
        src={decor}
        alt="Decor"
        className="absolute bottom-[20px] right-[20px] md:right-[80px] lg:bottom-[50px] lg:right-[200px] w-[40px] md:w-[50px] lg:w-[60px] opacity-90"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-[80px]">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={personImg}
            alt="Person"
            className="w-[220px] md:w-[280px] lg:w-[350px] object-contain relative md:ml-[20px] lg:ml-[130px]"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-[30px] md:text-[36px] lg:text-[42px] font-bold leading-tight mb-6 md:mb-8">
            <span className="font-semibold block">Mengapa Event</span>
            <span className="block">
              <span className="font-extrabold">Percaya</span>{" "}
              <span className="font-semibold">pada</span>
            </span>
            <span className="font-semibold block">LOCATIVE.ID?</span>
          </h2>

          <ul className="space-y-2 md:space-y-1 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[18px] md:w-[20px] lg:w-[22px] mt-1" />
              <span>Spesialis dokumentasi event <br /> (bukan general vendor)</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[18px] md:w-[20px] lg:w-[22px] mt-1" />
              <span>Tim berpengalaman & paham <br /> flow acara</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[18px] md:w-[20px] lg:w-[22px] mt-1" />
              <span>Foto & video siap branding <br /> & publikasi</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[18px] md:w-[20px] lg:w-[22px] mt-1" />
              <span>Editing rapi, konsisten, dan <br /> profesional</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
