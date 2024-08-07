import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
import Button from './Button';


const Navbar = () => {
    return (
        <div className="flex justify-between fixed items-center p-4 w-screen h-[87.45px] z-50
        bg-gradient-to-b from-primary-200 to-primary-100 rounded-b-2xl border border-b-2 border-solid border-white">
            <div className="flex flex-row gap-2">
                <Image src="/image/logo.png" alt="logo1" width={156} height={50}/>
            </div>
            <div className="flex flex-row gap-8 justify-between text-white font-poppins text-lg ">
                <Link href={'/'} >Home</Link>
                <Link href={'/about'} >About</Link>
                <Link href={'/'} >Event</Link>


            </div>
            <div className="flex flex-row gap-5 text-white font-poppins">
                <Link href={'/'} className='justify-between pt-3'>Login</Link>
                <Button size='large' type='text' label='Register'/>

            </div>
        </div>
    );
}

export default Navbar;