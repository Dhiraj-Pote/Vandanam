"use client";
import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 bg-nav-bg shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-8">
        <Link href="/" className="text-[#5a3a1a] hover:text-[#3a2010] transition-all duration-300">
          <h1 className="text-2xl font-bold">Mangalacarana</h1>
          <p className="text-xs tracking-wide">Spiritual Library</p>
        </Link>
        <div className="flex gap-10 text-lg font-semibold">
          <button onClick={() => scrollToSection('mangalacaran')} className="text-[#5a3a1a] hover:text-[#3a2010] hover:scale-110 transition-all duration-300">
            MangalaCharan
          </button>
          <button onClick={() => scrollToSection('bhagavatam')} className="text-[#5a3a1a] hover:text-[#3a2010] hover:scale-110 transition-all duration-300">
            Bhagavatam
          </button>
          <button onClick={() => scrollToSection('siksastakam')} className="text-[#5a3a1a] hover:text-[#3a2010] hover:scale-110 transition-all duration-300">
            Śikṣāṣṭakam
          </button>
          <button onClick={() => scrollToSection('offenses')} className="text-[#5a3a1a] hover:text-[#3a2010] hover:scale-110 transition-all duration-300">
            10 Offenses
          </button>
        </div>
      </div>
    </nav>
  );
}