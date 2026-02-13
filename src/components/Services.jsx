import card1 from "../assets/element1-7.png";
import card2 from "../assets/element2-7.png";

export default function Services() {
  return (
    <section 
     id="services"
    className="w-full bg-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="relative">

            {/* Background Image */}
            <img
              src={card1}
              alt="Video"
              className="w-[300px]"
            />

            {/* Number */}
           <div className=" absolute top-[10px] left-[15px] text-white font-bold text-lg">
              01.
            </div>

            {/* Text */}
            <div className="absolute bottom-8 left-8 right-8">

              <h3 className="text-xl font-bold mb-[95px] mr-[50px] text-white text-center">
                Video <br /> Documentation
              </h3>

             <ul className="text-sm space-y-2 list-disc pl-5 mb-[50px]">
                <li>After Movie Event</li>
                <li>Highlight & Recap</li>
                <li>Teaser & Reels Event</li>
                <li>Video Personal Highlight</li>
              </ul>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative">

            <img
              src={card2}
              alt="Photo"
              className="w-[300px]"
            />

          <div className=" absolute top-[10px] left-[15px] text-white font-bold text-lg">
              02.
            </div>

            <div className="absolute bottom-8 left-8 right-8">

             <h3 className="text-xl font-bold mb-[105px] mr-[50px] text-white text-center">
                Photo <br />
                 Documentation
              </h3>

              <ul className="text-sm space-y-2 list-disc pl-5 mb-[70px]">
                <li>Candid & Formal</li>
                <li>Detail Event & Ambience</li>
                <li>Talent & Audience Moment</li>
              </ul>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative">

            <img
              src={card1}
              alt="Social"
              className="w-[300px]"
            />

          <div className=" absolute top-[10px] left-[15px] text-white font-bold text-lg">
              03.
            </div>

            <div className="absolute bottom-8 left-8 right-8">

             <h3 className="text-xl font-bold mb-[85px] mr-[50px] text-white text-center">
                Social Media <br /> Content
              </h3>

              <ul className="text-sm space-y-2 list-disc pl-5 mb-[60px]">
                <li>After Movie Event</li>
                <li>Highlight & Recap</li>
                <li>Teaser & Reels Event</li>
                <li>Video Personal Highlight</li>
              </ul>

            </div>
          </div>

        </div>

        {/* Button */}
      <div className="mt-10 text-center">

 <div className="inline-flex items-center justify-center bg-black text-white px-[300px] py-[12px] text-[30px] font-semibold whitespace-nowrap mr-[60px]">
  MULAI DARI{" "}
  <span className="font-extrabold mx-1">200 RIBUAN</span>{" "}
  AJA!
</div>


</div>

      </div>

    </section>
  );
}
