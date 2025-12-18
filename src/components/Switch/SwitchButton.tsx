
import  { type FC, type ReactNode } from 'react'

interface SwitchButtonI{
    children : ReactNode
}

const SwitchButton : FC<SwitchButtonI> = ({children}) => {

  // add handleClick func on v2!
  return (
    <div 
    // onClick={()=>handleToggle_()} 
    className={`p-2 w-20 rounded-4xl flex items-center bg-emerald-300 text-emerald-950 shadow-2xs cursor-pointer justify-start`}
    >
      {children}
    </div>
  )
}

export default SwitchButton