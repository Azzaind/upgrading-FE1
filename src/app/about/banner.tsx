import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <div className="relative overflow-hidden w-full h-screen">
            <Image src='/image/header.png' alt='banner' fill className="absolute z-[-1]"/>
            <Image src='/image/gradient.svg' alt='gradient' width={1440} height={720} className="absolute bottom-0"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="font-sirukota text-10xl w-screen text-bold">Teknik Fisika</h1>
                <p className="font-poppins font-bold text-4xl">Institut Teknologi Sepuluh Nopember</p>
        </div>

        </div>

    );
}

export default Banner;