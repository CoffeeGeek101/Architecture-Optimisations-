import React, { useId, useRef, type ReactNode } from 'react'

const Menu = ({children} : { children : ReactNode}) => {

    const MenuRef = useRef(null);
    const id = useId();

  return (
    <div ref={MenuRef} id={id}>{children}</div>
  )
}

export default Menu