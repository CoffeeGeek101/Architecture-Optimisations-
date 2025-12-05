// component which will trigger the opening/closing of Menu

import { type FC, type ReactNode } from 'react'
import type { DropdownHookFunctions } from './useDdropdonw'

interface DdropTriggerI extends DropdownHookFunctions{
  children : ReactNode
}

const DdropTrigger : FC<DdropTriggerI> = ({children, ...props}) => {

  return (
    <>
      <div onClick={props.toggler}>Placeholder for tigger</div>
      {children}
    </>
  )
}

export default DdropTrigger