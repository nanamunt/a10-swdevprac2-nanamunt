"use client";
import styles from "./banner.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/image/cover.jpg",
    "/image/cover2.jpg",
    "/image/cover3.jpg",
    "/image/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session?.user.token);

  return (
    <div
      className="relative w-screen h-[50vh]"
      onClick={() => {
        setIndex((prev) => (prev + 1) % covers.length);
      }}
    >
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-1/2 w-full text-center">
      <div className="w-full py-1">
      <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Where Every Event Finds Its Venue
      </h1>
      </div>
      </div>
      {session ? (
        <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
          Hello {session.user?.name}
        </div>
      ) : null}

      <button
        className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </div>
  );
}
