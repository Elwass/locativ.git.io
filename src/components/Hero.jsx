export default function Hero() {
  return (
    <main>
      <section className="relative mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-4 py-20 sm:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute left-2 top-16 text-brandYellow sm:left-8">
          ✦
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute right-8 top-32 text-brandYellow">
          ✦
        </div>
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-base">
            Dokumentasi Event Specialist
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            JASA DOKUMENTASI
            <br />
            EVENT FOTO &amp; VIDEO
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Menangani dokumentasi Professional foto dan video untuk berbagai jenis event Kamu.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              className="rounded-full bg-brandBlue px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-brandBlue focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
            >
              Booking Tim Dokumentasi
            </button>
            <button
              type="button"
              className="rounded-full border border-brandBlue px-7 py-3 text-sm font-semibold text-brandBlue transition hover:bg-brandBlue/10 focus:outline-none focus:ring-2 focus:ring-brandBlue focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
            >
              Pelajari Selengkapnya
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
