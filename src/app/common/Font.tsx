interface Data {
  title: string
  textColor: string
}

export const HeaderOne: React.FC<Data> = ({ title, textColor }) => {
  return (
    <span className={`font-bold text-base leading-6 ${textColor} `}>
      {title}
    </span>
  )
}

export const H1: React.FC<Data> = ({ title, textColor }) => {
  return (
    <span
      className={`font-extrabold leading-[68px] text-[60px] capitalize ${textColor} transition duration-300 ease-in-out hover:scale-110 `}>
      {title}
    </span>
  )
}

export const H2: React.FC<Data> = ({ title, textColor }) => {
  return (
    <span
      className={`font-bold leading-[60px] text-[46px] capitalize ${textColor} `}>
      {title}
    </span>
  )
}
