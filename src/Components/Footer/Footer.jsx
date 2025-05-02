import React from "react";
import logo from "../../assets/SiteLogo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="py-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto">
      {/* Top Section: Call to Action */}
      <div className="blue-gradient font-Mrp text-white rounded-lg h-[250px] flex flex-col justify-center items-center p-6 text-center mb-10">
        <p className="text-3xl font-semibold mb-2">Ready to Hire Smarter?</p>
        <p className="text-base text-[#B9BDC7] mb-4">
          Unlock Exclusive Insights Subscribe to Our Newsletter
        </p>
        <button className="btn rounded-full bg-[#FCE38A] text-AiBtn">
          Join Now
        </button>
      </div>

      {/* Bottom Section: Footer Columns */}
      <div className="container mx-auto">
        <div className="footer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-center gap-8">
          {/* Logo Column */}
          <div className="space-y-4">
            <img src={logo} alt="" />
            <p className="text-sm text-AllParaText">
              SalesRadar AI: A comprehensive suite of AI-powered solutions to
              help you find expert professionals who can elevate every aspect of
              your business. From performance rankings and skill verification to
              industry benchmarking and real-time analytics, we provide the
              insights and tools to optimize your sales strategy and drive
              growth.
            </p>
            <div className="flex space-x-4 mt-4 text-xl">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FiTwitter />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-2 text-left md:justify-self-center ">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Agency
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* License Column */}
          <div className="space-y-2 text-left md:justify-self-center">
            <h3 className="text-lg font-semibold">License</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Copyright
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Email Address
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-2 md:justify-self-center">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+1800-123-4567"
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <span className="mr-2">📞</span> (800) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hey@salesradar.com"
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <span className="mr-2">📧</span> hey@salesradar.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center whitespace-normal"
                >
                  <span className="mr-2">📍</span> 2023 Westheimer Santa Ana,
                  Illinois 85485
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;