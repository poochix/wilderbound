"use client";

import { useState } from "react";
import Image from "next/image";
import { Mountain, Tent, Waves, Calendar, TreePine } from "lucide-react";


const getIcon = (id: string) => {

  switch (id) {
    case "trekking":
      return <Mountain size={16} />;

    case "camping":
      return <Tent size={16} />;

      case "adventure":
        return <Waves size={16} />;

        case "weekend":
          return <Calendar size={16} />;

          case "eco" :
            return <TreePine size={16} />;

  }

}


type Category = "trekking" | "camping" | "adventure" | "weekend" | "eco";

type Experience = {
  title: string;
  desc: string;
  image: string;
  tag?: string;
};


// Tabs
const tabs: { id: Category; label: string }[] = [
  { id: "trekking", label: "Trekking" },
  { id: "camping", label: "Camping" },
  { id: "adventure", label: "Adventure" },
  { id: "weekend", label: "Weekend Trips" },
  { id: "eco", label: "Eco-Tours" },
];

// Data
const experiences: Record<Category, Experience[]> = {
  trekking: [
    {
      title: "Summit of the Lost World",
      desc: "A 5-day expedition through the peaks.",
      image: "/trek-1.jpg",
      tag: "High Altitude Experience",
    },
    {
      title: "Forest Sanctuary",
      desc: "Stay in the heart of nature.",
      image: "/trek-2.jpg",
    },
    {
      title: "Alpine Mirror Lakes",
      desc: "Kayaking through crystal waters.",
      image: "/trek-3.jpg",
    },
  ],

  camping: [
    {
      title: "Desert Nights",
      desc: "Camp under stars.",
      image: "/camp1.jpg",
      tag: "Stars up ahead"
    },
    {
      title: "Nights in Mountains",
      desc: "Camping in mountains.",
      image: "/camp2.jpg",
    },
    {
      title: "Lake Camping",
      desc: "Group camping near lakes.",
      image: "/camp3.jpg",
    },
  ],

  adventure: [
    {
      title: "River Rafting",
      desc: "Adrenaline rush.",
      image: "/images/adv1.jpg",
    },
  ],

  weekend: [],   // ✅ IMPORTANT
  eco: [],       // ✅ IMPORTANT
};

export default function FeaturedExperiences() {
  const [active, setActive] = useState<Category>("trekking");

  const data = experiences[active] || [];
  const hasData = data.length > 0;

  return (
    <section className="w-full bg-[#f9f9f8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tabs */}
        <div className="w-full flex justify-center mb-12">
          <div className="flex items-center gap-2 bg-[#f1f1ef] p-2 rounded-full shadow-md">

            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-manrope
          
          ${active === tab.id
                    ? "bg-green-900 text-white shadow"
                    : "text-gray-600 hover:bg-white"
                  }
        `}
              >
                {/* ICON */}
                <span className="text-lg">
                  {getIcon(tab.id)}
                </span>

                {tab.label}
              </button>
            ))}

          </div>
        </div>

        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <div className="">
            <p className="text-sm font-manrope tracking-widest text-gray-500 uppercase">
              Handpicked for you
            </p>
            <h2 className="text-3xl font-jakarta md:text-6xl font-bold text-green-900">
              Featured Experiences
            </h2>
          </div>

          <button className="text-sm text-green-800 hover:underline font-manrope">
            View All →
          </button>
        </div>

        {/* Content */}
        <div key={active} className="transition-all duration-500 ease-in-out">
          {hasData ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Main Card */}
              {data[0] && (
                <div className="relative col-span-2 h-105 rounded-2xl overflow-hidden group">
                  <Image
                    src={data[0].image || "/fallback.jpg"}
                    alt={data[0].title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 p-6 text-white">
                    {data[0].tag && (
                      <span className="font-manrope text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                        {data[0].tag}
                      </span>
                    )}

                    <h3 className="text-2xl font-jakarta font-bold mt-3">
                      {data[0].title}
                    </h3>

                    <p className="font-manrope text-sm opacity-90 mt-1 max-w-md">
                      {data[0].desc}
                    </p>

                    <button className="mt-4 font-manrope bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                      Book Expedition
                    </button>
                  </div>
                </div>
              )}

              {/* Side Cards */}
              <div className="flex flex-col gap-6">
                {data.slice(1).map((item, i) => (
                  <div
                    key={i}
                    className="relative h-50 rounded-2xl overflow-hidden group"
                  >
                    <Image
                      src={item.image || "/fallback.jpg"}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                    <div className="absolute bottom-0 p-4 text-white">
                      <h4 className="font-semibold font-jakarta">{item.title}</h4>
                      <p className="text-xs opacity-90 font-manrope">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <div className="h-75 flex items-center justify-center text-gray-500 font-manrope">
              No experiences available yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}