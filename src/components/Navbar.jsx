export default function Navbar({ brandName, onOpenConnect }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b12]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center">
          <span className="text-lg font-semibold tracking-tight text-white">
            {brandName}
            <span className="text-amber-200"></span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
            <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#capabilities" className="transition hover:text-white">
            Capabilities
          </a>
        </nav>

        <button
          onClick={onOpenConnect}
          className="rounded-full bg-[#e6ccb2] px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-[#edd7c2]"
        >
          Get in Touch
        </button>
      </div>
    </header>
  );
}