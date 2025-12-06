// this the base component to render the sub-components.

import { type FC, type ReactNode } from 'react'
import type { ModalHookFunctions } from './useModal'
import { createPortal } from 'react-dom'

interface ModalI extends ModalHookFunctions {
    children : ReactNode
}

const Modal : FC<ModalI> = ({children, ...props}) => {

    if(!props.isOpenInternal){
        return null
    }

  return (
    <>
    {
    createPortal(
            <div
            ref={props.dialogRef} 
            className='w-screen h-screen bg-amber-950/20 flex items-center justify-center fixed top-0 left-0'
            >
                {children}
            </div>, document.body
        )
    }
    </>
  )
}

export default Modal