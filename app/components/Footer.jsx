import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      {/* Logo and Email */}
      <div className="text-center mb-10">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max mx-auto flex items-center gap-2">
          <Image src={assets.mail_icon} alt="" className="w-5" />
          <span className="text-sm">upadhyayashutosh423@gmail.com</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mx-[10%] py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ashutosh Upadhyay. All rights
          reserved.
        </p>

        <ul className="flex items-center gap-8 mt-4 sm:mt-0 text-sm">
          <li>
            <a
              href="https://github.com/Ashutoshupadhyay23"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashutosh-upadhyay23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Ashutosh7237"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Ashutosh7237"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
