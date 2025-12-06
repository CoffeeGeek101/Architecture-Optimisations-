// the actual dialog box, which can be passed as a children.

import { type FC } from 'react'
import Ddropdown from '../Ddropdown/Ddropdown'
import type { ModalHookFunctions } from './useModal'

interface ModalContentI extends ModalHookFunctions {
// use if required later
}

const ModalContent : FC<ModalHookFunctions> = ({...props}) => {
  return (
    <div className='w-[30%] h-[30%] bg-yellow-50 flex items-center justify-center' role='dialog'>
        {props.isClosable && <button onClick={props.toggle}>close</button>}
        <Ddropdown controlled={false}/>
    </div>
  )
}

export default ModalContent