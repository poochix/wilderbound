"use client";

import { Globe, HelpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f9f8] pt-20 ">
      <div className="max-w-full mx-auto ">

        {/* Main Footer Box */}
        <div className="bg-linear-to-r from-green-900 to-green-800 text-white rounded-t-3xl  px-8 py-12">

          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold font-jakarta mb-4">
                Wilderbound
              </h3>
              <p className="text-sm text-gray-300 font-manrope leading-relaxed">
                Defining the future of modern exploration. We curate experiences that connect you with the raw beauty of our planet.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-manrope font-semibold uppercase tracking-wide mb-4 text-gray-200">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-manrope">
                <li className="hover:text-white cursor-pointer">Sitemap</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-manrope font-semibold uppercase tracking-wide mb-4 text-gray-200">
                Social
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-manrope">
                <li className="hover:text-white cursor-pointer">Instagram</li>
                <li className="hover:text-white cursor-pointer">Facebook</li>
                <li className="hover:text-white cursor-pointer">Twitter</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-manrope font-semibold uppercase tracking-wide mb-4 text-gray-200">
                Newsletter
              </h4>
              <p className="text-sm text-gray-300 font-manrope mb-4">
                Get weekly inspiration and exclusive trip early-access.
              </p>

              <div className="flex items-center bg-green-800 rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent px-4 py-2 text-sm text-white placeholder-gray-300 outline-none w-full"
                />
                <button className="bg-white text-green-900 px-4 py-2 text-sm font-medium rounded-full m-1 hover:bg-gray-200 transition">
                  Join
                </button>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Left */}
            <p className="text-sm text-gray-400 font-manrope">
              © 2024 Wilderbound Adventures. All rights reserved.
            </p>

            {/* Right Icons */}
            <div className="flex items-center gap-4 text-gray-300">
              <button className="hover:text-white">
                <Globe size={18} />
              </button>
              <button className="hover:text-white">
                <HelpCircle size={18} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}