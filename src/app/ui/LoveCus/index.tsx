import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

const Love = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='cursor-pointer '>
        <SwiperSlide>
          <Image
            src={'/love/img1.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/love/img4.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/love/img3.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/love/img4.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/love/img5.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110 '
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/love/img6.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/love/img1.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/love/img1.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/love/img1.png'}
            alt=''
            width={328}
            height={500}
            className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Love
