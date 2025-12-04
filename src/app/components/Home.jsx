import React from 'react'
import Header from './Header'
import Image from 'next/image'
import heropic from '@/app/assets/heroimage.jpg'
import { Roboto } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import vector from '@/app/assets/Vector.png'
import vector1 from '@/app/assets/Vector1.png'
import vector2 from '@/app/assets/Vector2.png'
import vector3 from '@/app/assets/Vector3.png'
import aboutusimage from '@/app/assets/aboutusimage.jpg'
import story1 from '@/app/assets/story1.jpg'
import story2 from '@/app/assets/story2.jpg'
import story3 from '@/app/assets/story3.jpg'
import star from '@/app/assets/star.png'
import Footer from './Footer'


const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['600']
});

const roboto1 = Roboto({
  subsets: ['cyrillic'],
  weight: ['400']
});

const opensans = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['400']
});

const opensans1 = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['700']
});


const Home = () => {

  return (

    <div id='tedtrax-wrapper'>
      <div id='tedtrax-cotent'>

        <Header />


        {/* herosection */}
        <div id='tedtrax-wrapper' className='relative'>
          {/* herosection-image */}
          <div className='w-full'>
            <Image className='w-full h-full xl:max-h-[600px] xl:object-cover 2xl:max-h-[660px] 2xl:object-cover' src={heropic} alt='heropic' />
          </div>

          {/* overlay-colour */}
          <div className='absolute top-0 bg-blue-500 w-full h-[214px] opacity-40 md:h-[512px] lg:h-[683px] xl:h-[600px] 2xl:h-[660px]' />

          {/* herosection-content */}
          <div className='absolute top-0 py-10 md:py-30 lg:py-50'>
            <div className='flex flex-col gap-2'>
              <div className='md:-ml-20'>
                <p id='main-title' className={`${roboto.className} text-lg text-white font-semibold pl-5 md:text-3xl md:pl-25 lg:pl-32 lg:text-4xl xl:text-5xl xl:pl-50 2xl:pl-52`}>Innovative IT Solutions for <br />
                  Your Business</p>
              </div>
              <div>
                <p id='sub-title' className={`${opensans.className} text-[12px] text-white pl-5 md:text-[15px] md:pl-5 lg:pl-12 lg:text-lg xl:pl-30 2xl:pl-32`}>Helping businesses thrive with modern technology solutions.</p>
              </div>

              <div className='flex gap-5 ml-5 mt-3 md:ml-5 lg:ml-12 xl:ml-30 2xl:ml-32'>
                <div>
                  <button id='button1' className='text-[12px] text-blue-500 bg-white px-2 py-1 font-semibold rounded-xs cursor-pointer md:text-[15px] md:px-5 md:py-2 lg:text-[16] xl:text-lg'>Learn More</button>
                </div>
                <div>
                  <button id='button2' className='text-[12px] bg-[#0066FF] text-white font-semibold px-2 py-1 rounded-xs ring-1 ring-white cursor-pointer md:text-[15px] md:px-5 md:py-2 lg:text-[16px] xl:text-lg'>Get in Touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* perfect-solution-section */}
        <div className='bg-gray-100'>
          <div className='py-20'>
            <div className='px-5 lg:px-10 xl:px-30'>
              <div>
                <p className={`${roboto.className} text-blue-500 text-[12px] md:text-[16px] lg:text-[17px] xl:text-lg 2xl:text-xl`}>What We Do</p>
              </div>
              <div>
                <p className={`${roboto.className} text-[16px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}>Perfect Solution For Your Business</p>
              </div>
            </div>

            {/* cards */}
            <div className='grid grid-cols-1 gap-5 justify-evenly ml-3 mt-5 md:grid-cols-3 md:gap-5 md:-ml-5 md:px-5 lg:grid-cols-4 lg:px-10 lg:-ml-5 xl:grid-cols-5 xl:gap-60 xl:px-25 xl:mt-5 xl:ml-0 2xl:px-35 2xl:-ml-10'>

              {/* individual cards */}
              <div className='w-[230px] h-[240px] rounded-xl bg-white ml-5 p-5 flex flex-col gap-7 ring-2 ring-gray-200 xl:h-[350px] xl:w-[280px]'>
                <div>
                  <Image className='w-8 h-8 xl:w-12 xl:h-12' src={vector} alt='vector' />
                </div>
                <div>
                  <p className={`${roboto.className} font-bold text-[13px] md:text-[15px] xl:text-xl`}>Cloud Solutions</p>
                </div>
                <div>
                  <p className={`${opensans.className} text-[11px] text-[#414141] md:text-[12px] xl:text-lg`}>Scalable cloud infrastructure and migration services for your growing business needs.</p>
                </div>

                <div className='flex gap-2'>
                  <div>
                    <p className={`${opensans.className} text-[12px] !font-semibold text-blue-500 md:text-[13px] xl:text-lg`}>Learn More</p>
                  </div>
                  <div className='mt-1'>
                    <ArrowRightIcon className='w-3 h-3 !font-semibold text-blue-500 mt-0 xl:w-5 xl:h-5 xl:mt-0.5' />
                  </div>
                </div>
              </div>

              {/* individual cards */}
              <div className='w-[230px] h-[240px] rounded-xl bg-white ml-5 p-5 flex flex-col gap-7 ring-2 ring-gray-200 xl:h-[350px] xl:w-[280px]'>
                <div>
                  <Image className='w-8 h-8 xl:w-12 xl:h-12' src={vector1} alt='vector' />
                </div>
                <div>
                  <p className={`${roboto.className} !font-bold text-[13px] md:text-[15px] xl:text-xl`}>Cyber Security</p>
                </div>
                <div>
                  <p className={`${opensans.className} text-[11px] text-[#414141] md:text-[12px] xl:text-lg`}>Comprehensive security solutions to protect your valuable business data and assets.</p>
                </div>

                <div className='flex gap-2'>
                  <div>
                    <p className={`${opensans.className} text-[12px] !font-semibold text-blue-500 md:text-[13px] xl:text-lg`}>Learn More</p>
                  </div>
                  <div className='mt-1'>
                    <ArrowRightIcon className='w-3 h-3 !font-semibold text-blue-500 mt-0 xl:w-5 xl:h-5 xl:mt-0' />
                  </div>
                </div>
              </div>

              {/* individual cards */}
              <div className='w-[230px] h-[240px] rounded-xl bg-white ml-5 p-5 flex flex-col gap-7 ring-2 ring-gray-200 xl:h-[350px] xl:w-[280px]'>
                <div>
                  <Image className='w-8 h-8 xl:w-12 xl:h-12' src={vector2} alt='vector' />
                </div>
                <div>
                  <p className={`${roboto.className} !font-bold text-[13px] md:text-[15px] xl:text-xl`}>Custom Software</p>
                </div>
                <div>
                  <p className={`${opensans.className} text-[11px] text-[#414141] md:text-[12px] xl:text-lg`}>Tailored software solutions designed to meet your specific business requirements.</p>
                </div>

                <div className='flex gap-2'>
                  <div>
                    <p className={`${opensans.className} text-[12px] !font-semibold text-blue-500 md:text-[13px] xl:text-lg`}>Learn More</p>
                  </div>
                  <div className='mt-1'>
                    <ArrowRightIcon className='w-3 h-3 !font-semibold text-blue-500 mt-0 xl:w-5 xl:h-5 xl:mt-0' />
                  </div>
                </div>
              </div>

              {/* individual cards */}
              <div className='w-[230px] h-[240px] rounded-xl bg-white ml-5 p-5 flex flex-col gap-7 ring-2 ring-gray-200 xl:h-[350px] xl:w-[280px]'>
                <div>
                  <Image className='w-8 h-8 xl:w-12 xl:h-12' src={vector3} alt='vector' />
                </div>
                <div>
                  <p className={`${roboto.className} !font-bold text-[13px] md:text-[15px] xl:text-xl`}>IT Infrastructure</p>
                </div>
                <div>
                  <p className={`${opensans.className} text-[11px] text-[#414141] md:text-[12px] xl:text-lg`}>Robust IT infrastructure setup and maintenance for optimal performance.</p>
                </div>

                <div className='flex gap-2 xl:mt-5'>
                  <div>
                    <p className={`${opensans.className} text-[12px] !font-semibold text-blue-500 md:text-[13px] xl:text-lg`}>Learn More</p>
                  </div>
                  <div className='mt-1'>
                    <ArrowRightIcon className='w-3 h-3 !font-semibold text-blue-500 mt-0 xl:w-5 xl:h-5 xl:mt-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* aboutus-section */}
        <div className='bg-white px-8 py-15 flex flex-col gap-10 md:px-5 lg:flex-row xl:px-37 xl:-ml-13 2xl:px-50 2xl:-ml-25'>
          <div className='flex flex-col gap-8 lg:px-5'>
            {/* about-us */}
            <div className='flex flex-col gap-3'>
              <div>
                <p className={`${roboto.className} text-[16px] lg:text-lg xl:text-2xl`}>About Us</p>
              </div>
              <div>
                <p className={`${opensans.className} text-[#3B3B3B] text-[14px] lg:text-[15px] xl:text-lg`}>At TEDTRAX, we believe in empowering businesses through cutting-edge technology solutions. Our mission is to provide innovative, scalable, and secure IT services tailored to the evolving needs of modern enterprises. With a passionate team of experts, we specialize in delivering seamless digital experiences that drive business growth.</p>
              </div>
            </div>

            {/* our-vision */}
            <div className='flex flex-col gap-3'>
              <div>
                <p className={`${roboto.className} text-[16px] lg:text-lg xl:text-2xl`}>Our Vision</p>
              </div>
              <div>
                <p className={`${opensans.className} text-[#3B3B3B] text-[14px] lg:text-[15px] xl:text-lg`}>To be a global leader in IT solutions, enabling businesses to thrive in the digital era through innovative, secure, and scalable technology.</p>
              </div>
            </div>

            {/* core-values */}
            <div className='flex flex-col gap-3'>
              <div>
                <p className={`${roboto.className} text-[16px] lg:text-lg xl:text-2xl`}>Core Values</p>
              </div>
              <div className='ml-5'>
                <ul>
                  <li className={`${opensans.className} text-[#3B3B3B] text-[14px] list-disc text-[15px] xl:text-lg`}><span className='font-extrabold'>Innovation:</span> Constantly evolving to stay ahead of industry trends.</li>
                  <li className={`${opensans.className} text-[#3B3B3B] text-[14px] list-disc text-[15px] xl:text-lg`}><span className='font-extrabold'>Integrity:</span> Constantly evolving to stay ahead of industry trends.</li>
                  <li className={`${opensans.className} text-[#3B3B3B] text-[14px] list-disc text-[15px] xl:text-lg`}><span className='font-extrabold'>Customer-Centric:</span> Solutions built with the user in mind</li>
                  <li className={`${opensans.className} text-[#3B3B3B] text-[14px] list-disc text-[15px] xl:text-lg`}><span className='font-extrabold'>Security-Focused:</span>  Prioritizing safety in every digital transformation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* image */}
          <div>
            <Image className='w-full h-full object-cover rounded-lg lg:object-cover' src={aboutusimage} alt='aboutusimage' />
          </div>
        </div>

        {/* success-stories */}
        <div className='bg-gray-100 px-8 py-10 md:px-5 lg:pl-10 xl:px-30 2xl:px-35 2xl:-ml-6'>
          <div>
            <p className={`${roboto.className} font-bold text-[16px] md:text-lg lg:text-xl xl:text-2xl`}>Success Stories</p>
          </div>

          {/* story-cards */}
          <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-18 xl:gap-1 2xl:gap-0'>

            {/* individual-cards */}
            <div className='w-[250px] h-[240px] bg-white ring-2 ring-gray-200 rounded-2xl md:w-[230px] md:h-[260px] lg:w-[270px] lg:h-[260px] xl:w-[380px] xl:h-[360px] xl:rounded-3xl'>
              {/* image */}
              <div className='w-full h-[45%] xl:h-[50%]'>
                <Image className='rounded-tl-2xl rounded-tr-2xl w-full h-full object-cover xl:rounded-tl-3xl xl:rounded-tr-3xl' src={story1} alt='story1' />
              </div>
              {/* content */}
              <div className='w-full h-[55%] px-6 py-3 bg-[#FEFEFE] rounded-bl-2xl rounded-br-2xl xl:h-[50%] xl:rounded-bl-3xl xl:rounded-br-3xl'>
                <div className='flex flex-col gap-2 xl:gap-4'>
                  <div>
                    <p className={`${roboto.className} font-semibold text-[15px] md:text-[16px] lg:text-lg xl:text-xl`}>DataSecure Inc</p>
                  </div>
                  <div>
                    <p className={`${opensans.className} text-[12px] lg:text-[14px] xl:text-[16px]`}>Security Infrastructure Setup</p>
                  </div>
                  <div>
                    <p className={`${opensans.className} text-blue-500 !font-semibold text-[12px] lg:text-[14px] xl:text-[16px]`}>Zero security breaches in 2 years</p>
                  </div>
                </div>

                <div className='flex gap-2 mt-2'>
                  <div>
                    <p className={`${opensans1.className} text-blue-600 !font-bold text-[12px] lg:text-[14px] xl:text-[16px]`}>Read Case Study</p>
                  </div>
                  <div>
                    <ArrowRightIcon className='w-3 h-3 text-blue-600 !font-bold mt-1 lg:w-5 lg:h-5' />
                  </div>
                </div>
              </div>
            </div>

            {/* individual-cards */}
            <div className='w-[250px] h-[240px] bg-white ring-2 ring-gray-200 rounded-2xl md:w-[230px] md:h-[260px] lg:w-[270px] lg:h-[260px] xl:w-[380px] xl:h-[360px] xl:rounded-3xl'>
              {/* image */}
              <div className='w-full h-[40%] lg:h-[38%] xl:h-[50%]'>
                <Image className='rounded-tl-2xl rounded-tr-2xl w-full h-full object-cover xl:rounded-tl-3xl xl:rounded-tr-3xl' src={story2} alt='story1' />
              </div>
              {/* content */}
              <div className='w-full h-[55%] px-6 py-3 bg-[#FEFEFE] rounded-bl-2xl rounded-br-2xl lg:h-[60%] xl:h-[50%] xl:rounded-bl-3xl xl:rounded-br-3xl'>
                <div className='flex flex-col gap-2 xl:gap-4'>
                  <div>
                    <p className={`${roboto.className} font-semibold text-[15px] md:text-[16px] lg:text-lg xl:text-xl`}>TechCorp Solutions</p>
                  </div>
                  <div>
                    <p className={`${opensans.className} text-[12px] lg:text-[14px] xl:text-[16px]`}>Cloud Infrastructure Migration</p>
                  </div>
                  <div>
                    <p className={`${opensans.className} text-blue-500 !font-semibold text-[12px] lg:text-[14px] xl:text-[16px]`}>50% reduction in operational costs</p>
                  </div>
                </div>

                <div className='flex gap-2 mt-2 md:mt-5 lg:mt-2'>
                  <div>
                    <p className={`${opensans1.className} text-blue-600 !font-bold text-[12px] lg:text-[14px] xl:text-[16px]`}>Read Case Study</p>
                  </div>
                  <div>
                    <ArrowRightIcon className='w-3 h-3 text-blue-600 !font-bold mt-1 lg:w-5 lg:h-5' />
                  </div>
                </div>
              </div>
            </div>

            {/* individual-cards */}
            <div className='w-[250px] h-[240px] bg-white ring-2 ring-gray-200 rounded-2xl md:w-[230px] md:h-[260px] lg:w-[270px] lg:h-[260px] xl:w-[380px] xl:h-[360px] xl:rounded-3xl'>
              {/* image */}
              <div className='w-full h-[45%] xl:h-[50%]'>
                <Image className='rounded-tl-2xl rounded-tr-2xl w-full h-full object-cover xl:rounded-tl-3xl xl:rounded-tr-3xl' src={story3} alt='story1' />
              </div>
              {/* content */}
              <div className='w-full h-[55%] px-6 py-3 bg-[#FEFEFE] rounded-bl-2xl rounded-br-2xl xl:h-[50%] xl:rounded-bl-3xl xl:rounded-br-3xl'>
                <div className='flex flex-col gap-2 xl:gap-4'>
                  <div>
                    <p className={`${roboto.className} font-semibold text-[15px] md:text-[16px] lg:text-lg xl:text-xl`}>Global Innovations</p>
                  </div>
                  <div>
                    <p className={`${opensans.className} text-[12px] lg:text-[14px] xl:text-[16px]`}>Custom Software Development</p>
                  </div>
                  <div>
                    <p className={`${opensans.className} text-blue-500 !font-semibold text-[12px] lg:text-[14px] xl:text-[16px]`}>200% increase in productivity</p>
                  </div>
                </div>

                <div className='flex gap-2 mt-2 md:mt-6 lg:mt-2'>
                  <div>
                    <p className={`${opensans1.className} text-blue-600 !font-bold text-[12px] lg:text-[14px] xl:text-[16px]`}>Read Case Study</p>
                  </div>
                  <div>
                    <ArrowRightIcon className='w-3 h-3 text-blue-600 !font-bold mt-1 lg:w-5 lg:h-5' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* clients-review */}
        <div className='bg-blue-100 px-8 py-10 md:px-5 lg:pl-10 xl:pl-30'>
          {/* title */}
          <div>
            <p className={`${roboto.className} text-[16px] md:text-lg lg:text-xl xl:text-2xl`}>What Our Clients Say</p>
          </div>

          {/* reviews-containers */}
          <div className='mt-5 flex flex-col gap-5 md:flex-row lg:gap-7'>

            {/* individual-review */}
            <div className='max-w-[250px] h-content bg-white p-4 flex flex-col gap-5 rounded-xl md:max-w-[360px] lg:max-w-[500px] lg:p-6 xl:max-w-[580px] 2xl:max-w-[590px]'>
              <div>
                <p className={`${opensans.className} text-[12px] md:text-[14px] xl:text-[16px]`}><i>Working with TechFirm has transformed our business operations. Their expertise in cloud solutions has been invaluable.</i></p>
              </div>

              <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
                <div>
                  <p className={`${opensans1.className} font-bold text-[14px] md:text-[16px] xl:text-lg`}>Sara Johnson</p>
                  <p className={`${opensans.className} text-[12px] md:text-[16px] xl:text-lg`}>CTO, Innovation Labs</p>
                </div>
                <div className='flex gap-1 lg:mt-5'>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                </div>
              </div>
            </div>


            {/* individual-review */}
            <div className='max-w-[250px] h-content bg-white p-4 flex flex-col gap-5 rounded-xl md:max-w-[360px] lg:max-w-[500px] lg:p-6 xl:max-w-[580px] 2xl:max-w-[590px]'>
              <div>
                <p className={`${opensans.className} text-[12px] md:text-[14px] xl:text-[16px]`}><i>The level of technical expertise and professional support we received was exceptional. Highly recommended!</i></p>
              </div>

              <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
                <div>
                  <p className={`${opensans1.className} font-bold text-[14px] md:text-[16px] xl:text-lg`}>Michael Chen</p>
                  <p className={`${opensans.className} text-[12px] md:text-[16px] xl:text-lg`}>CEO, Digital Ventures</p>
                </div>
                <div className='flex gap-1 lg:mt-5'>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                  <div>
                    <Image className='w-4 h-4 xl:w-5 xl:h-5' src={star} alt='star' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* schedule-consultation */}
        <div className='w-full max-h-[300px] bg-[#3B82F6] px-5 py-10 flex flex-col gap-5'>
          <div>
            <p className={`${roboto.className} font-bold text-white text-center text-[16px] md:text-lg lg:text-xl xl:text-2xl`}>Ready to Transform Your Business?</p>
          </div>
          <div>
            <p className={`${roboto1.className} text-white text-center text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px]`}>Let's discuss how our IT solutions can help your business grow and succeed in the digital age.</p>
          </div>
          <div className='flex justify-center'>
            <button className='text-blue-500 text-[12px] font-bold bg-white px-5 py-2 rounded-md lg:text-[14px] xl:text-[16px]'>Schedule a Consultation</button>
          </div>
        </div>


        <Footer />

      </div>
    </div>

  )
}

export default Home