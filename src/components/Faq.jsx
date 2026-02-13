import { useState } from "react";

export default function Faq() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "Apakah bisa request konsep dokumentasi?",
      a: "Tentu bisa. Kami siap menyesuaikan konsep sesuai kebutuhan event kamu.",
    },
    {
      q: "Berapa lama proses editing?",
      a: "Proses editing biasanya memakan waktu 3–7 hari kerja tergantung kebutuhan.",
    },
    {
      q: "Apakah bisa cover event luar kota?",
      a: "Bisa. Kami melayani dokumentasi event di seluruh Indonesia.",
    },
    {
      q: "Apakah tersedia paket foto + video?",
      a: "Tersedia paket bundling foto dan video dengan harga lebih hemat.",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-6">
          FREQUENTLY ASKED QUESTION
        </h2>

        {/* LINE */}
        <div className="w-full h-[2px] bg-white mb-14" />

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            {faqs.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="flex items-start gap-4 mb-6 cursor-pointer"
              >

                {/* NUMBER */}
                <div
                  className={`
                    w-10 h-10 flex items-center justify-center font-bold
                    ${
                      active === i
                        ? "bg-blue-500 text-white"
                        : "bg-yellow-400 text-black"
                    }
                    transition-all duration-300
                  `}
                >
                  {String(i + 1).padStart(2, "0")}.
                </div>

                {/* QUESTION */}
                {active === i ? (
                  <div className="relative bg-yellow-400 text-black px-6 py-4 w-full font-semibold">

                    {/* WHITE LINE */}
                    <div className="absolute left-0 top-0 h-full w-[6px] bg-white" />

                    {item.q}

                  </div>
                ) : (
                  <p className="font-semibold leading-snug">
                    {item.q}
                  </p>
                )}

              </div>
            ))}

          </div>


          {/* RIGHT */}
          <div>

            {active !== null && (

              <div
                className="
                  bg-white text-black p-8 shadow-lg
                  animate-faq
                "
              >

                <p className="mb-4 text-lg">
                  {faqs[active].a}
                </p>

                <p className="font-bold text-lg flex items-center gap-2">
                  ▶ CTA Diletakkan di sini.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}
