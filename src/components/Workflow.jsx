import iconBg from "../assets/element1-5.png";
import decorTop from "../assets/decor1-5.png";
import decorBottom from "../assets/decor2-5.png";

export default function Workflow() {
  return (
    <section className="relative bg-white py-[50px] md:py-[65px] lg:py-[80px] overflow-hidden">
      <img
        src={decorTop}
        alt="Decor Top"
        className="absolute top-[90px] left-[25px] md:left-[60px] lg:top-[130px] lg:left-[125px] w-[14px] md:w-[18px] lg:w-[20px]"
      />

      <img
        src={decorBottom}
        alt="Decor Bottom"
        className="absolute bottom-[70px] right-[20px] md:right-[100px] lg:bottom-[130px] lg:right-[300px] w-[20px] md:w-[24px] lg:w-[30px]"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-center text-[32px] md:text-[42px] lg:text-[50px] font-bold mb-10 md:mb-14 lg:mb-16">
          CARA KERJA KAMI
        </h2>

        <div className="space-y-8">
          {[
            {
              num: "01.",
              title: "Brief & Kebutuhan Event",
              desc: "Diskusi konsep, rundown, dan tujuan dokumentasi.",
            },
            {
              num: "02.",
              title: "Execution Day",
              desc: "Dokumentasi rapi tanpa mengganggu jalannya acara.",
            },
            {
              num: "03.",
              title: "Editing & Delivery",
              desc: "Hasil sesuai brief, siap digunakan.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 lg:gap-10">
              <div className="relative w-[130px] sm:w-[160px] lg:w-[180px] h-[56px] sm:h-[62px] lg:h-[70px] flex-shrink-0 sm:-ml-2 lg:-ml-6">
                <img src={iconBg} alt="Icon" className="w-full h-full object-contain" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-base lg:text-lg">
                  {item.num}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xl text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
