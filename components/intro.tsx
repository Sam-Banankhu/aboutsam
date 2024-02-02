import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="/public/PXL_20221205_070951353.jpg"
            alt="Profile"
            width={192}
            height={192}
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
