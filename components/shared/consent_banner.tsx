"use client";

import { useState, useEffect } from "react";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      dir="rtl"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white px-4 py-4 shadow-lg"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-right leading-relaxed">
          אנו משתמשים בעוגיות (Cookies) כדי לשפר את חוויית הגלישה שלך ולהתאים תכנים ופרסומות.
          בהמשך השימוש באתר אתה/את מסכימ/ה לשימוש זה.{" "}
          <a
            href="https://nextcollege.co.il/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00D3C3] font-bold whitespace-nowrap"
          >
            מדיניות הפרטיות
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 bg-[#00D3C3] text-black font-bold text-[14px] px-6 py-2 hover:opacity-90 transition-opacity"
        >
          הבנתי, אני מסכימ/ה
        </button>
      </div>
    </div>
  );
}
