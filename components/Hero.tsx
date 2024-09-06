import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col gap-14 h-screen md:flex-row justify-center items-center">
      {/* Left section */}
      <div className="w-1/2 flex justify-start flex-col gap-4 animate-slide-left ">
        <h2 className="lg:text-6xl md:text-5xl tracking-wide font-bold sm:text-4xl text-3xl">
          Find, book or rent a Car — Quickly and Easily
        </h2>
        <h5 className="text-gray-500  md:text-xl text-sm">
          Streamline your car rental experience with our effortless booking
          process
        </h5>
        <CustomButton
          title="Explore Now"
          containerStyles="w-fit"
          handleClick={() => {}}
        />
      </div>
      {/* Right Section */}
      <div className="w-1/2 animate-from-right ">
        <div className="relative">
          <div className="background-image" />
          <Image
            src="/hero.png"
            alt="main_image"
            height={1000}
            width={1000}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
