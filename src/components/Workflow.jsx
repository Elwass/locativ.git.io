import iconBg from "../assets/element1-5.png";
import decorTop from "../assets/decor1-5.png";
import decorBottom from "../assets/decor2-5.png";

export default function Workflow() {
  return (
    <section className="relative bg-white py-[80px] overflow-hidden">

      {/* Decor Kiri Atas */}
      <img
        src={decorTop}
        alt="Decor Top"
        className="absolute top-[130px] left-[125px] w-[20px]"
      />

      {/* Decor Kanan Bawah */}
      <img
        src={decorBottom}
        alt="Decor Bottom"
        className="absolute bottom-[130px] right-[300px] w-[30px]"
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-[50px] font-bold mb-16">
          CARA KERJA KAMI
        </h2>

        {/* List */}
        <div className="space-y-8">

          {/* ITEM */}
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
            <div
              key={i}
              className="flex items-start gap-10"
            >

              {/* Icon + Number */}
             <div className="relative w-[180px] h-[70px ] flex-shrink-0 -ml-6">


                {/* Background Icon */}
                <img
                  src={iconBg}
                  alt="Icon"
                  className="w-full h-full object-contain"
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    text-lg
                  "
                >
                  {item.num}
                </span>

              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold  text-2xl md:text-3xl">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
