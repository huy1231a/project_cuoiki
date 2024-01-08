import React from 'react'
interface Type {
  title: string
  icon?: any
  textColor?: string
  bg: string
  border?: string
  styleBorder?: string
}

const ButtonType2 = (type: Type) => {
  return (
    <>
      <button
        className={`h-11 ${type.textColor} ${type.bg} ${type.border} ${type.styleBorder} flex justify-center items-center text-base font-bold rounded-full`}
        style={{ padding: '14px 28px 10px 28px' }}>
        <div className='flex gap-3 items-center'>
          {type.icon}
          {type.title}
        </div>
      </button>
    </>
  )
}

export default ButtonType2
