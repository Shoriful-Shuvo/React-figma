import React from 'react'

const Menu = ({className,Menuname}) => {
  return (
    <ul>
        <li className={`font-[DM] text-[#767676] text-[14px] hover:text-[#262626] hover:font-bold ${className}`} >{Menuname}</li>
        
    </ul>
  )
}

export default Menu