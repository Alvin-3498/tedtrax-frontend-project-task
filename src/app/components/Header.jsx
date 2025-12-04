import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/app/assets/logo.png'
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Open_Sans } from 'next/font/google'
import chainlink from '@/app/assets/Group3.png'


const Opensans = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['600']
})

const Header = () => {

  const [Menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!Menu);
  }

  useEffect(() => {
    if (Menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [Menu]);

  return (
    <div className='relative m-0 p-0 box-border'>
      {/* header-container */}
      <div className='w-full max-h-30 flex justify-between'>
        <div className='ml-2 -mt-5 lg:ml-8 xl:ml-25 xl:-mt-15'>
          <Image className='w-40 h-40 xl:w-60 xl:h-60' src={logo} alt='logo' />
        </div>

        {/* navlinks */}
        <div className=' hidden md:flex md:gap-12 md:mr-5 lg:mr-12 xl:gap-20 xl:mr-35'>
          <div className='flex gap-6 mt-12 xl:gap-10'>
            <div><Link href={''} className={`${Opensans.className} text-[14px] transition-all duration-300 hover:text-blue-600 lg:text-[16px] xl:text-[18px]`}>Home</Link></div>
            <div><Link href={''} className={`${Opensans.className} text-[14px] transition-all duration-300 hover:text-blue-600 lg:text-[16px] xl:text-[18px]`}>Services</Link></div>
            <div><Link href={''} className={`${Opensans.className} text-[14px] transition-all duration-300 hover:text-blue-600 lg:text-[16px] xl:text-[18px]`}>About Us</Link></div>
            <div><Link href={''} className={`${Opensans.className} text-[14px] transition-all duration-300 hover:text-blue-600 lg:text-[16px] xl:text-[18px]`}>Blog</Link></div>
            <div><Link href={''} className={`${Opensans.className} text-[14px] transition-all duration-300 hover:text-blue-600 lg:text-[16px] xl:text-[18px]`}>Contact</Link></div>
          </div>

          <div className='flex gap-5 xl:gap-10'>
            <div className='mt-12'>
              <Link href={''} className={`${Opensans.className} text-[14px] bg-[#2186F6] px-3 py-2 rounded-lg text-white transition-all duration-300 hover:bg-green-500 lg:text-[16px] xl:text-[18px] xl:py-3`}>Letr's Talk</Link>
            </div>
            <div className='mt-11 lg:mt-10'>
              <Image src={chainlink} alt='chainlink' className='w-9 h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12'/>
            </div>
          </div>
        </div>

        <div className='flex mt-11 mr-5 md:hidden'>
          <Bars3BottomRightIcon onClick={handleMenu} className='w-8 h-8' />
        </div>

        {/* sidebar */}
        <div className={`${Menu ? "translate-y-0" : "-translate-y-500"} z-9999 transition-all duration-600 absolute flex flex-col gap-15 w-full h-screen bg-gray-200`}>

          <div className='-mt-26 -ml-15 p-20'>
            <Image className='w-40 h-40' src={logo} alt='logo' />
          </div>

          <div className='flex flex-col gap-10 -mt-35 ml-10'>
            <div><Link href={''} className={`${Opensans.className} text-lg transition-all duration-300 hover:text-blue-600`}>Home</Link></div>
            <div><Link href={''} className={`${Opensans.className} text-lg transition-all duration-300 hover:text-blue-600`}>Services</Link></div>
            <div><Link href={''} className={`${Opensans.className} text-lg transition-all duration-300 hover:text-blue-600`}>About Us</Link></div>
            <div><Link href={''} className={`${Opensans.className} text-lg transition-all duration-300 hover:text-blue-600`}>Blog</Link></div>
            <div><Link href={''} className={`${Opensans.className} text-lg transition-all duration-300 hover:text-blue-600`}>Contact</Link></div>
          </div>

          <div className='flex flex-col gap-8'>
            <div>
              <Link href={''} className={`${Opensans.className} text-lg ml-10 bg-[#2186F6] text-white px-4 py-1.5 rounded-lg transition-all duration-300 hover:bg-green-400`}>Letr's Talk</Link>
            </div>
            <div>
              <Image className='w-10 h-10 ml-10' src={chainlink} alt='chainlink' />
            </div>
          </div>

          <div className='absolute right-10 top-10'>
            <XMarkIcon onClick={handleMenu} className='w-8 h-8' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header