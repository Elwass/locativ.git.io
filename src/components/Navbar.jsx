const menuItems = ['HOME', 'LAYANAN', 'PORTOFOLIO', 'PAKET'];

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a href="#" className="text-xl font-extrabold tracking-[0.2em] sm:text-2xl">
          <span className="text-brandYellow">LOCA</span>
          <span className="text-brandBlue">TIV</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium tracking-wide text-white/80 md:flex">
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#" className="transition hover:text-white">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full bg-brandBlue px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-brandBlue focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
        >
          KONTAK
        </button>
      </nav>
    </header>
  );
}
