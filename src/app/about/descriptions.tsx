import Image from "next/image";
import React from "react";

const Description = () => {
    return (
        <div className="bg-primary-200">
            <Image src="/image/stars.svg" alt="rasiBintang" width={1440} height={720}
                className="" />

            <div className="flex flex-row justify-between items-center p-4 w-screen">
                <div className=" ml-10 gap-5">
                    <h1 className="font-righteous text-white text-2xl">Tentang Teknik Fisika</h1>
                    <p className="mt-5 relative w-[359px] text-justify font-poppins text-white text-base">
                    Pendidikan Teknik Fisika merupakan pendidikan keteknikan yang memadukan konsep-konsep keteknikan / rekayasa (engineering) dengan penguasaan dasar ilmu fisika dan matematika yang kuat untuk menghasilkan aplikasi kreatif dan inovatif. Teknik Fisika lahir untuk menjawab tantangan perkembangan sains dan teknologi dalam berbagai bidang yang membutuhkan engineer dengan dasar sains teoritis yang kuat disertai kemampuan bekerja dalam multi-disiplin ilmu.

                    Diasosiasikan sebagai sebuah disiplin ilmu yang menghubungkan antara basic science dengan engineering, Teknik Fisika memiliki cakupan ilmu yang sangat luas mulai dari hulu hingga hilir, meliputi segala proses sejak konsep hingga terciptalah suatu produk teknologi. Pengajaran Teknik Fisika meliputi lmu sains dasar seperti matematika, fisika, kimia, dan statistika yang dikombinasikan dengan materi-materi keteknikan dari berbagai bidang (teknik elektro, teknik mesin, teknik material, dan teknik kimia). </p>
                </div>
                <div className="gap-5 justify-between">
                <Image src="/image/logotf.png" alt="logo TF" width={372} height={372} className="gap-2 items-center"/>
                </div>
                <div className="gap-5 mr-10 ">
                    <h1 className="font-righteous text-white text-2xl">Tentang Teknik Fisika</h1>
                    <div className="font-poppins h-[63.64px] w-[375px]"> 
                        <li className="py-4 px-2 border rounded-full text-center text-xl relative w-[359px] font-poppins text-white">Instrumentasi dan Kontrol</li>
                        <li className="py-4 px-2 border rounded-full text-center text-xl relative w-[359px] font-poppins text-white">Rekayasa Energi dan Pengondisian Lingkungan</li>
                        <li className="py-4 px-2 border rounded-full text-center text-xl relative w-[359px] font-poppins text-white">Rekayasa Bahan</li>
                        <li className="py-4 px-2 border rounded-full text-center text-xl relative w-[359px] font-poppins text-white">Vibrastik dan Akustik</li>
                        <li className="py-4 px-2 border rounded-full text-center text-xl relative w-[359px] font-poppins text-white">Rekayasa Fotonika</li>

                        </div>
    
                    

                </div>
            </div>
        </div>

    );
}

export default Description;
