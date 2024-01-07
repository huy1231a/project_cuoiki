import ButtonType from '@/app/common/Button/btn'
import { H1 } from '@/app/common/Font'
import Image from 'next/image'
import React from 'react'

const MidlePage = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='w-[1400px] h-[378px] bg-[#003459] rounded-2xl overflow-hidden'>
                    <div className='flex'>
                        <div>
                            <Image src={'/img2.png'} alt='logo' width={513} height={342} className='relative top-[36px]' />
                        </div>
                    </div>
                    <div className='flex justify-end relative'>
                        <div className='w-[782.292px] h-[635px] bg-[#FCEED5] rounded-[99px] relative transform rotate-45 bottom-[450px] left-[170px]'>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MidlePage