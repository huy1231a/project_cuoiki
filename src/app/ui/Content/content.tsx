import ButtonType from '@/app/common/Button/btn'
import Image from 'next/image'
import React from 'react'

export const data = [
  {
    img: './image2.png',
    name: 'MO231 - Pomeranian White',
    sex: 'Male',
    age: '02 months',
    price: '6.900.000 VND',
  },
]
const Content = () => {
  return (
    <>
      <div className='w-full p-7'>
        <div className='flex justify-between p-5'>
          <div className='flex flex-col gap-1'>
            <span className='text-base font-medium leading-6 text-black'>
              What's New?
            </span>
            <h1 className='text-2xl font-bold leading-9 text-[#003459]'>
              Take a look at some of our pets
            </h1>
          </div>
          <div className='border border-[#003459] rounded-full w-[150px] flex items-center justify-center'>
            <ButtonType
              title='View More'
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <path
                    d='M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333'
                    stroke='#003459'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              }
            />
          </div>
        </div>
        <div className='grid grid-cols-4 gap-32 p-5'>
          <div className='bg-white-400 rounded-2xl w-[300px] h-[400px] shadow-lg'>
            <div className='flex justify-center mt-2'>
              <Image
                src={'/image2.png'}
                alt='img1'
                width={264}
                height={264}
                className='rounded-2xl border-none'
              />
            </div>
            <div className='p-5 flex flex-col gap-2'>
              <h1 className='items-stretch text-base leading-6 font-bold text-black'>
                MO231 - Pomeranian White
              </h1>
              <div className='flex gap-5'>
                <div>
                  <p className='font-normal text-xs leading-4 text-[#667479]'>
                    Gene:{' '}
                    <span className='font-bold text-xs leading-4 text-[#667479]'>
                      Male
                    </span>
                  </p>
                </div>
                <div className='font-normal text-xs leading-4 text-[#667479]'>
                  -
                </div>
                <div>
                  <p className='font-normal text-xs leading-4 text-[#667479]'>
                    Age:{' '}
                    <span className='font-bold text-xs leading-4 text-[#667479]'>
                      02 months
                    </span>
                  </p>
                </div>
              </div>
              <h1 className='font-bold text-base leading-5 text-black'>
                6.900.000 VND
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
