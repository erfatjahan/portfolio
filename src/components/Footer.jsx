export default function Footer({ monogram = "ej." }) {
  return (
    <footer className="border-t border-white/10 bg-[#06090f] py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 text-sm text-slate-400">
        <p className="flex flex-wrap items-center justify-center gap-2 text-center">
          <span>©{new Date().getFullYear()}</span>
          <span className="font-serif text-lg italic text-amber-200">{monogram}
          </span>
          <span>All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}