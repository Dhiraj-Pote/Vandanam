"use client";

const menuItems = [
  { id: 'mangalacaran', label: 'MangalaCharan' },
  { id: 'bhagavatam', label: 'Bhagavatam' },
  { id: 'siksastakam', label: 'Śikṣāṣṭakam' },
  { id: 'offenses', label: '10 Offenses' }
];

export default function Sidebar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-[#da9d5b] shadow-xl z-50 flex flex-col">
      <div className="p-6 border-b border-[#b8864d]">
        <h1 className="text-3xl font-bold text-[#3a2010] mb-2">Vandanam</h1>
        <p className="text-sm text-[#5a3a1a] tracking-wide">Spiritual Library</p>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map(({ id, label }) => (
            <li key={id}>
              <button 
                onClick={() => scrollToSection(id)} 
                className="w-full text-left px-4 py-3 text-xl text-[#3a2010] bg-white/5 border border-white/10 hover:bg-black/10 rounded-lg transition-all font-semibold"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-[#b8864d]">
        <p className="text-xs text-[#5a3a1a] text-center">© 2024 Vandanam</p>
      </div>
    </aside>
  );
}