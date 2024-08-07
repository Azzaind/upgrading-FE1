import Image from "next/image";
import React from "react";

const Laboratory = () => {
    return(
        <div className="bg-primary-200">
            <div className="mb-5 font-sirukota text-6xl text-white text-center justify-center">
                Laboratory
            </div>
            <div className="relative flex flex-row justify-center gap-5">
                <div className="bg-white rounded-xl w-[236.55px] h-[309.44] py-5 px-5">
                <h1 className="mt-6 font-righteous text-primary-400 w-[188.5px] h-[101px] text-left">Laboratorium Instrumentasi, Kontrol, dan Optimisasi</h1>
                <p className="mb-6 font-poppins text-primary-400 text-xs">Lorem ipsum dolor sit amet consectetur. Id quis erat tristique habitasse non purus at mattis nunc. Massa magna lacus fringilla feugiat tristique. Urna egestas sed fames diam venenatis pellentesque.</p>
                </div>
                <div className="bg-white rounded-xl w-[236.55px] h-[309.44] py-5 px-5">
                <h1 className="mt-6 font-righteous text-primary-400 w-[188.5px] h-[101px] text-left">Laboratorium Rekayasa Energi dan Pengkondisian Lingkungan</h1>
                <p className="mb-6 font-poppins text-primary-400 text-xs">Lorem ipsum dolor sit amet consectetur. Id quis erat tristique habitasse non purus at mattis nunc. Massa magna lacus fringilla feugiat tristique. Urna egestas sed fames diam venenatis pellentesque.</p>
                </div>
                <div className="bg-white rounded-xl w-[236.55px] h-[309.44] py-5 px-5">
                <h1 className="mt-6 font-righteous text-primary-400 w-[188.5px] h-[101px] text-left">Laboratorium Material Fungsional Maju</h1>
                <p className="mb-6 font-poppins text-primary-400 text-xs">Lorem ipsum dolor sit amet consectetur. Id quis erat tristique habitasse non purus at mattis nunc. Massa magna lacus fringilla feugiat tristique. Urna egestas sed fames diam venenatis pellentesque.</p>
                </div>
            </div>
            <div className="relative flex flex-row justify-center gap-5 pt-5">
                <div className="bg-white rounded-xl w-[236.55px] h-[309.44] py-5 px-5">
                    <h1 className="mt-6 font-righteous text-primary-400 w-[188.5px] h-[101px] text-left">Laboratorium Rekayasa Fotonika</h1>
                    <p className="mb-6 font-poppins text-primary-400 text-xs">Lorem ipsum dolor sit amet consectetur. Id quis erat tristique habitasse non purus at mattis nunc. Massa magna lacus fringilla feugiat tristique. Urna egestas sed fames diam venenatis pellentesque.</p>
                </div>
                <div className="bg-white rounded-xl w-[236.55px] h-[309.44] py-5 px-5">
                    <h1 className="mt-6 font-righteous text-primary-400 w-[188.5px] h-[101px] text-left">Laboratorium Rekayasa Fotonika</h1>
                    <p className="mb-6 font-poppins text-primary-400 text-xs">Lorem ipsum dolor sit amet consectetur. Id quis erat tristique habitasse non purus at mattis nunc. Massa magna lacus fringilla feugiat tristique. Urna egestas sed fames diam venenatis pellentesque.</p>
                </div>
                <div className="bg-white rounded-xl w-[236.55px] h-[309.44] py-5 px-5">
                    <h1 className="mt-6 font-righteous text-primary-400 w-[188.5px] h-[101px] text-left">Laboratorium Sistem Tertanam dan Siber-Fisik</h1>
                    <p className="mb-6 font-poppins text-primary-400 text-xs">Lorem ipsum dolor sit amet consectetur. Id quis erat tristique habitasse non purus at mattis nunc. Massa magna lacus fringilla feugiat tristique. Urna egestas sed fames diam venenatis pellentesque.</p>
                </div>
            </div>
            <div className="flex flex-grow">
            <Image src="/image/solar.svg" alt="solar" width={513} height={513} className="" />
            <Image src="/image/solar.svg" alt="solar" width={513} height={513} className=""/>
            </div>


        </div>

    );
}

export default Laboratory;