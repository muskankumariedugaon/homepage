import React from "react";

export default function Designer({
  name = "Priya Sharma",
  title = "Graphic Designer",
  email = "priya.designs@example.com",
  phone = "+91 98765 43210",
  location = "Patna, India",
}) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-100 p-6">
      <div className="relative w-full max-w-sm bg-neutral-950 text-stone-100 rounded-none overflow-hidden shadow-2xl">
        {/* Accent geometric block */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400 rounded-full opacity-90" />
        <div className="absolute -top-6 -right-24 w-40 h-40 bg-rose-500 rounded-full opacity-80" />

        <div className="relative px-8 pt-10 pb-8">
          {/* Monogram */}
          <div className="w-14 h-14 flex items-center justify-center border border-stone-100/30 text-2xl font-serif mb-8">
            {initial}
          </div>

          {/* Name + title */}
          <h1 className="font-serif text-4xl leading-tight tracking-tight mb-1">
            {name}
          </h1>
          <p className="text-amber-400 font-sans text-sm mb-10">{title}</p>

          {/* Divider */}
          <div className="w-10 h-px bg-stone-100/30 mb-6" />

          {/* Contact details */}
          <div className="space-y-2 font-sans text-sm text-stone-300">
            <p>{email}</p>
            <p>{phone}</p>
            <p>{location}</p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="bg-stone-100 text-neutral-950 font-sans text-xs px-8 py-3 flex justify-between">
          <span>Brand &amp; visual design</span>
          <span>Portfolio available</span>
        </div>
      </div>
    </div>
  );
}