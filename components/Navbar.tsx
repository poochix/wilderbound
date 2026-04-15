"use client"
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">

        {/* LEFT */}
        <div className="flex items-center gap-12">
          <span className="text-2xl font-bold tracking-tight">
            Wilderbound
          </span>

          <div className="hidden md:flex items-center gap-8">
            <a className="font-bold border-b-2 border-black pb-1">
              Explore
            </a>
            <a>Experiences</a>
            <a>About</a>
            <a>Community</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <button className="hidden lg:block font-semibold">
            List Your Experience
          </button>

          <button className="bg-black text-white px-6 py-2.5 rounded-full font-bold">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}