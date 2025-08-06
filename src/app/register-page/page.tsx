import Image from "next/image";
import React from "react";
import { RegisterData } from "@/data/common/Common";

export default function RegisterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      {/* Title Image */}
      <div className="mb-8">
        <Image
          src={RegisterData.titleImage}
          alt="Register Title Logo"
          className="mx-auto"
        />
      </div>

      {/* Banner Image */}
      <div className="mb-6">
        <Image
          src={RegisterData.Banner}
          alt="Register Banner"
          className="w-full h-auto rounded-lg shadow"
        />
      </div>

      {/* Title Text */}
      <h2 className="text-xl font-semibold text-red-700">
        {RegisterData.title}
      </h2>
    </div>
  );
}
