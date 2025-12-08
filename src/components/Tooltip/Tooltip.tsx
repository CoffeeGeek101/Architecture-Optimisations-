// this component will render the tooltip component, this is the base

import { type FC, type ReactNode } from 'react'
import { useTooltip } from './useTooltip'

interface TooltipI {
    children : ReactNode
}

const Tooltip : FC<TooltipI> = ({children}) => {

    const {open, tooltipRef} = useTooltip({})

  return (
    <div ref={tooltipRef}>
        {children}
        {open && <div className='transition-all'>Hell yeah</div>}
    </div>
  )
}

export default Tooltip