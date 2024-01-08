'use client'
import Image from 'next/image'
import React from 'react'
import '../slideShow/'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper/core'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import './style.css'

const img = [
  {
    id: 1,
    img: '/info1.png',
  },
  {
    id: 2,
    img: '/info1.png',
  },
  {
    id: 3,
    img: '/info1.png',
  },
  {
    id: 4,
    img: '/info1.png',
  },
]
const Slide = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore | null>(
    null
  )
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'>
        <SwiperSlide>
          <Image
            src={'/info1.png'}
            alt='2'
            width={560}
            height={598}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/info1.png'
            alt=''
            width={560}
            height={598}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/info1.png'
            alt=''
            width={560}
            height={598}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/info1.png'
            alt=''
            width={560}
            height={598}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/info1.png'
            alt=''
            width={560}
            height={598}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/info1.png'
            alt=''
            width={560}
            height={598}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/info1.png'
            alt=''
            width={560}
            height={598}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        <SwiperSlide>
          <Image
            src={'/info2.png'}
            alt='2'
            width={94}
            height={94}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/info3.png'}
            alt='2'
            width={94}
            height={94}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/info4.png'}
            alt='2'
            width={94}
            height={94}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/info5.png'}
            alt='2'
            width={94}
            height={94}
            className='rounded-2xl h-[598px]'
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default Slide
