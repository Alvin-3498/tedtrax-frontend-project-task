import React from 'react'
import vector4 from '@/app/assets/Vector4.png'
import vector5 from '@/app/assets/Vector5.png'
import vector6 from '@/app/assets/Vector6.png'
import logo from '@/app/assets/logo.png'
import linkedin from '@/app/assets/linkedin.png'
import facebook from '@/app/assets/facebook.png'
import x from '@/app/assets/x.png'
import github from '@/app/assets/github.png'
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'


const inter = Inter({
  subsets : ['cyrillic'],
  weight : ['400']
});

const opensans = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['400']
});

const opensans1 = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['700']
});

const Footer = () => {
    return (
        <div>

            {/* footer */}
            <div className='bg-black/90'>

                <div className='px-10 py-10 grid grid-cols-2 gap-5 md:grid-cols-4 xl:px-30 xl:py-15'>

                    {/* logo-and-para */}
                    <div className='flex flex-col gap-3 md:mt-1 lg:mt-2'>
                        <div className=''>
                            <Image className='w-30 h-10 object-cover bg-white rounded-xl lg:w-40 lg:h-13 2xl:w-50 2xl:h-18 2xl:rounded-2xl' src={logo} alt='logo' />
                        </div>
                        <div>
                            <p className={`${opensans} text-white text-[14px] leading-6 lg:text-[16px] xl:text-lg`}>Let's discuss how our IT solutions can help your business grow and succeed in the digital age.</p>
                        </div>
                    </div>

                    {/* services */}
                    <div className='flex flex-col gap-3'>
                        <div>
                            <p className={`${opensans1.className} text-white !font-bold text-[16px] lg:text-lg xl:text-xl`}>Services</p>
                        </div>

                        <div>
                            <div className='flex flex-col gap-1'>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>Cloud Solutions</p>
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>IT Support</p>
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>Custom Developement</p>
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>Security Services</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* company */}
                    <div className='flex flex-col gap-3'>
                        <div>
                            <p className={`${opensans1.className} text-white !font-bold text-[16px] lg:text-lg xl:text-xl`}>Company</p>
                        </div>

                        <div>
                            <div className='flex flex-col gap-1'>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>About Us</p>
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>Careers</p>
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>Blog</p>
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>Contact</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* contact-us */}
                    <div className='flex flex-col gap-1'>
                        <div>
                            <p className={`${opensans1.className} text-white !font-bold text-[16px] lg:text-lg xl:text-xl`}>Contact Us</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <div>
                                    <Image className='w-5 h-5 mt-1 md:w-4 md:h-4 xl:mt-2' src={vector4} alt='vector4' />
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>123 Tech Street, NY 10011</p>
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <div>
                                    <Image className='w-5 h-5 mt-1 md:w-4 md:h-4 xl:mt-2' src={vector5} alt='vector5' />
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <div>
                                    <Image className='w-5 h-5 mt-1 md:w-4 md:h-4 xl:mt-2' src={vector6} alt='vector6' />
                                </div>
                                <div>
                                    <p className={`${opensans.className} text-white text-[14px] lg:text-[16px] xl:text-lg`}>contact@tedtrax.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <hr className='border border-[#1F2937] w-[90%] ml-6 md:w-[90%] md:ml-10 lg:w-[92%] xl:w-[81%] xl:ml-30' />
                </div>

                {/* copyright-and-links */}
                <div className='mt-5 flex flex-col py-5 gap-3 md:flex-row md:justify-between'>
                    <div>
                        <p className={`${inter.className} text-[#8E8E8E] text-[14px] text-center md:pl-10 xl:text-[16px] xl:pl-30`}>© 2024 TechFirm. All rights reserved.</p>
                    </div>

                    <div className='flex gap-3 justify-center md:pr-10 xl:pr-38 2xl:pr-42'>
                        <div>
                            <Image src={linkedin} alt='linkedin' />
                        </div>
                        <div>
                            <Image src={x} alt='x' />
                        </div>
                        <div>
                            <Image src={facebook} alt='facebook' />
                        </div>
                        <div>
                            <Image src={github} alt='github' />
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Footer