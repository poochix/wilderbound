"use client"

import Image from "next/image"
import { DayPicker } from "../DayPicker"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-20 bg-[#f9f9f8]"
    >
      <div className="px-1 w-full">

        <div className="max-w-screen-2xl min-h-[80vh] mx-auto w-full px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Tag */}
            <div className="px-2 md:px-4">
              <h4 className="md:px-4 font-manrope bg-[#C1ECD4] inline-flex items-center gap-2 rounded-full py-1 text-sm">
                <span className="w-2.5 h-2.5 bg-black rounded-full inline-block"></span>
                PREMIUM OUTDOOR CURATIONS
              </h4>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-jakarta font-extrabold leading-tight mb-6">
              Nature is your <br />
              <span className="italic font-light">playground.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg mb-8 font-manrope">
              Discover the raw beauty of India.
            </p>

            {/* SEARCH BAR */}
            <div className="bg-white rounded-xl shadow-lg p-3 flex flex-col md:flex-row items-center gap-3">

              <input
                placeholder="Where do you want to explore?"
                className="flex-1 w-full p-3 outline-none font-manrope text-sm"
              />

              <div className="w-full md:w-auto">
                <DayPicker />
              </div>

              <button className="bg-black text-white px-6 py-3 rounded-xl font-manrope w-full md:w-auto hover:bg-gray-800 transition">
                Search
              </button>

            </div>

            {/* Stats */}
            <div className="py-5 px-1 font-manrope text-sm text-gray-500">
              50k+ explorers joined this month
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 sm:w-80 md:w-60  aspect-square">

              {/* MAIN IMAGE */}  
              <Image
                src="/hero1.png"
                fill
                alt="hero"
                className="rounded-3xl shadow-2xl object-cover rotate-3 border-4 border-white"
              />

              {/* FLOATING IMAGE */}
              <Image
                src="/hero2.png"
                width={220}
                height={220}
                alt="hero"
                className="rounded-3xl shadow-2xl absolute 
                -bottom-6 -left-6 
                sm:-bottom-8 sm:-left-8 
                md:-bottom-10 md:-left-10 
                -rotate-6 border-4 border-white"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 SCROLL TO EXPLORE (BOTTOM FIXED) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center font-manrope">

        <button
          onClick={() => {
            document.getElementById("explore")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-black transition"
        >
          <span className="text-xs tracking-widest uppercase">
            Scroll To Explore
          </span>

          {/* Arrow */}
          <span className="animate-bounce text-lg">↓</span>
        </button>

      </div>
    </section>
  )
}