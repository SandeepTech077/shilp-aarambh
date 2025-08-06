'use client';

import React from 'react';
import Image from 'next/image';

import titleLogo from "../../../public/SVG/contact-logo.svg";
import callIcon from "../../../public/SVG/call.svg";
import emailIcon from "../../../public/SVG/mail.svg";
import locationIcon from "../../../public/SVG/location.svg";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="bg-[#FFEBEB] p-6 rounded">
        <div className="my-8">
          <Image src={titleLogo} alt="Contact Us" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Address */}
          <div className="bg-white p-4 border border-gray-200 rounded shadow-sm flex flex-col justify-start">
            <div className="space-y-4">
              <Image src={locationIcon} alt="Location Icon" width={30} height={30} />
              <div>
                <h3 className="text-red-500 font-semibold mb-5">Address</h3>
                <p className="text-sm mt-1 text-gray-700">
                  SHILP 3, 3rd Floor, Rajpath Rangoli Rd,<br />
                  opposite Rajpath Club, Bodakdev,<br />
                  Ahmedabad, Gujarat – 380054
                </p>
              </div>
            </div>
          </div>

          {/* Email + Phone stacked on right */}
          <div className="md:col-span-2 grid grid-rows-2 gap-4">
            {/* Email */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow-sm flex items-start gap-3">
              <Image src={emailIcon} alt="Email Icon" width={30} height={30} />
              <div>
                <h3 className="text-red-500 font-semibold">Email ID</h3>
                <p className="text-sm mt-1 text-gray-700">snehshilpfoundation@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow-sm flex items-start gap-3">
              <Image src={callIcon} alt="Call Icon" width={30} height={30} />
              <div>
                <h3 className="text-red-500 font-semibold">Contact us</h3>
                <p className="text-sm mt-1 text-gray-700">+91 90544 91237</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="my-10 grid gap-8 text-[#003777]">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name *" className="border p-3 w-full rounded" required />
          <input type="email" placeholder="Email ID *" className="border p-3 w-full rounded" required />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="tel" placeholder="Phone Number *" className="border p-3 w-full rounded" required />
          <select className="border p-3 w-full rounded" required>
            <option value="">Select Subject *</option>
            <option value="general">General Inquiry</option>
            <option value="event">Event Registration</option>
            <option value="support">Support</option>
          </select>
        </div>
        <textarea
          placeholder="Your Message (optional)"
          className="border p-3 w-full rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-[#003777] text-white px-8 py-3 font-semibold rounded w-max hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
