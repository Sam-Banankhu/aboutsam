import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQFlsU8IZ_99hA/profile-displayphoto-shrink_200_200/0/1670307795304?e=1712188800&v=beta&t=NoJhdHQsuaqaRiZpUdEv2kFx6ICtPxlWYnuxP1utDC4"
            alt="Profile"
            width={192}
            height={192}
            quality={100}
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
