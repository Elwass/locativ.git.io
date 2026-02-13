import logo1 from "../assets/element1-2.png"; // Maybank
import logo2 from "../assets/element2-2.png";
import logo3 from "../assets/element3-2.png";

export default function Clients() {
  const logos = [logo1, logo2, logo3];

  return (
    <section className="bg-white py-8 md:py-10 overflow-hidden">
      <div className="relative w-full">

        {/* Track */}
        <div className="flex w-max animate-scroll cursor-pointer">

          {/* Loop 2x biar seamless */}
          {[...logos, ...logos].map((logo, i) => {
            const isMaybank = logo === logo1;

            return (
              <div
                key={i}
                className="flex items-center justify-center min-w-[180px] md:min-w-[240px] lg:min-w-[300px] px-8 md:px-12 lg:px-16"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  className={`
                    object-contain
                    grayscale hover:grayscale-0 transition
                    ${isMaybank ? "h-16 md:h-24 lg:h-28" : "h-10 md:h-14 lg:h-16"}
                  `}
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
