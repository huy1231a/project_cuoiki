import React from 'react'
interface Type {
  title: string
  icon: any
}

const ButtonType = (type: Type) => {
  return (
    <>
      <div className='flex gap-3 justify-center items-center cursor-pointer transition duration-300 ease-in-out hover:scale-110 px-2 py-3 w-[150px]'>
        <p className='text-base font-medium text-[#003459] leading-5'>
          {type.title}
        </p>
        {type.icon}
      </div>
    </>
  )
}

export default ButtonType
