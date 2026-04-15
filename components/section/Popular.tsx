"use client";

import Image from "next/image";
import { Heart, Star, MapPin, ArrowRight } from "lucide-react";

type Place = {
  title: string;
  image: string;
  rating: number;
  time: string;
  price: number;
};

const places: Place[] = [
  {
    title: "Silver Lake Retreat",
    image: "/silver-lake.jpg",
    rating: 4.9,
    time: "2.5 hours away",
    price: 120,
  },
  {
    title: "Zen Forest Trail",
    image: "/zen-forest.jpg",
    rating: 4.8,
    time: "1.2 hours away",
    price: 45,
  },
  {
    title: "Cascade Valley",
    image: "/cascade-valley.jpg",
    rating: 5.0,
    time: "3.1 hours away",
    price: 85,
  },
  {
    title: "Starlight Glamping",
    image: "/starlight-glamp.jpg",
    rating: 4.7,
    time: "4.0 hours away",
    price: 210,
  },
];

export default function Popular() {
  return (
    <section className="w-full bg-[#f9f9f8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 font-jakarta">
            Popular Near You
          </h2>
          <p className="text-gray-500 mt-2 font-manrope">
            Discover hidden gems just a few hours away.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {places.map((place, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              {/* Image */}
              <div className="relative h-55">
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Wishlist Icon */}
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full">
                  <Heart size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800 font-jakarta">
                    {place.title}
                  </h3>
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    {place.rating}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <MapPin size={14} />
                  {place.time}
                </div>

                <hr className="my-3" />

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400">Starting from</p>
                    <p className="text-lg font-bold text-green-900">
                      ${place.price}
                      <span className="text-sm font-normal text-gray-500">
                        /day
                      </span>
                    </p>
                  </div>

                  <button className="bg-green-900 text-white p-2 rounded-full hover:bg-green-800 transition">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-linear-to-r from-green-900 to-green-700 text-white rounded-3xl py-16 px-6 text-center">

            <h2 className="text-3xl md:text-5xl font-bold font-jakarta">
              Ready for your next <br /> great adventure?
            </h2>

            <p className="mt-4 text-gray-200 max-w-2xl mx-auto font-manrope">
              Join over 50,000+ explorers finding their path with Wilderbound every single month. Your journey starts here.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button className="bg-white text-green-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Start Planning
              </button>

              <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-green-900 transition">
                Learn More
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}