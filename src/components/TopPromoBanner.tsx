'use client';
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function TopPromoBanner() {
  return (
    <div id="top-promo-banner" className="bg-[#164475] text-white text-xs py-2.5 px-4 md:px-12 flex justify-between items-center font-medium tracking-wide overflow-hidden">
      {/* Social icons — hidden on small screens */}
      <div className="hidden sm:flex items-center space-x-3 text-white/80 flex-shrink-0">
        <Facebook className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
        <Twitter className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
        <Instagram className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
        <Linkedin className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
      </div>
      {/* Marquee text — always visible, full width on mobile */}
      <div className="flex-1 flex items-center text-white/95 overflow-hidden whitespace-nowrap min-w-0 mx-0 sm:mx-4">
        <div className="animate-marquee">
          <span className="px-4">Save up to 60% with code BLACKFRIDAY • Free shipping over $1000 •</span>
          <span className="px-4">Save up to 60% with code BLACKFRIDAY • Free shipping over $1000 •</span>
        </div>
      </div>
      {/* Language/currency — hidden on mobile */}
      <div className="hidden sm:flex items-center space-x-4 text-white/90 flex-shrink-0">
        <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-1">English <span className="text-[9px]">▼</span></span>
        <div className="hover:text-white cursor-pointer transition-colors flex items-center gap-1">
          <span>PKR $</span> <span className="text-[9px]">▼</span>
        </div>
      </div>
    </div>
  );
}
