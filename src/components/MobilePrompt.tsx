'use client';

import { useState, useEffect } from 'react';

export default function MobilePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 768;
      setShowPrompt(isMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4">
        <div className="text-5xl mb-4">📱</div>
        <h2 className="text-2xl font-bold text-[#5a3a1a] mb-3">
          Better Experience
        </h2>
        <p className="text-base text-[#6b4423] mb-6 leading-relaxed">
          Please use this website in <b>desktop mode</b> for a better reading experience with the spiritual content.
        </p>
        <button
          onClick={() => setShowPrompt(false)}
          className="bg-[#da9d5b] hover:bg-[#c9894a] text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          I Understand
        </button>
      </div>
    </div>
  );
}
