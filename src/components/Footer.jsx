export default function Footer() {
  return (
    <section 
    id="contact"
    className="bg-white py-3 text-black border-t">

      <div className="max-w-4xl mx-auto px-1 ml-[20px]">
        {/* Container makin sempit */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-2">
          {/* gap horizontal = 0 */}

          {/* BRAND */}
          <div>
            <h3 className="font-bold text-xs mb-[1px]">
              LOCATIVE.ID
            </h3>

            <p className="text-[11px] leading-tight">
              Dokumentasi Event <br />
              Specialist
            </p>
          </div>


          {/* LOCATION */}
          <div>

            <div className="mb-2">
              <h3 className="font-bold text-xs mb-[1px]">
                Jakarta
              </h3>

              <p className="text-[11px] leading-tight">
                Available for Meeting <br />
                Centennial Tower, Gatot Subroto <br />
                Setiabudi, Jakarta 12930
              </p>
            </div>


            <div>
              <h3 className="font-bold text-xs mb-[1px]">
                Purwokerto
              </h3>

              <p className="text-[11px] leading-tight">
                Sapphire Mansion A4 <br />
                Karangrau, Sokaraja <br />
                Banyumas 53181
              </p>
            </div>

          </div>


          {/* LAYANAN + CONTACT */}
          <div>

            <div className="mb-1">
              <h3 className="font-bold text-xs mb-[1px]">
                Layanan
              </h3>

              <ul className="text-[11px] leading-tight space-y-0">
                <li>Dokumentasi Foto</li>
                <li>Dokumentasi Video</li>
                <li>After Movie</li>
                <li>Social Media Content</li>
              </ul>
            </div>


            <div>
              <h3 className="font-bold text-xs mb-[1px]">
                Contact
              </h3>

              <p className="text-[11px] leading-tight">
                No : <br />
                Email : <br />
                IG : <span className="font-semibold">locativ.id</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
