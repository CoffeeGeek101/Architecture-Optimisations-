// this the hook for all the functionality and for maintain the sync between the controlled/uncontroled states.

import { useEffect, useRef, useState } from "react";

// Specs:
// Toggler - open/close pop-up
// isClosable - boolean (can the modal be closed without any action)
// closable by clicking on the backdrop
// scroll lock, while open

export interface ModalHookI {
    isOpen ?: boolean;
    isSetOpen ?: React.Dispatch<React.SetStateAction<boolean>>;
    isClosable ?: boolean;
}

export interface ModalHookFunctions {
    isOpenInternal ?: boolean,
    toggle ?: () => void,
    dialogRef ?: React.RefObject<HTMLDivElement | null>,
    isClosable : boolean
}

export const useModal = ({isClosable=true, isOpen=false, isSetOpen} : ModalHookI) => {

    const [isOpenInternal, setIsOpenInternal] = useState<boolean>(isOpen);
    const dialogRef = useRef<HTMLDivElement|null>(null);

    const toggle = () => {
        if(isSetOpen){
            isSetOpen(prev => !prev);
            setIsOpenInternal(prev => !prev);
        }else{
            setIsOpenInternal(prev => !prev);
        }
    }

    useEffect(()=>{
        // console.log(dialogRef.current)
        if(!isOpenInternal){
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";
        const handleBackDropClick = (e : MouseEvent) => {
            if(e.target === dialogRef.current && isClosable){
                toggle();
            }
        }
        const handleEscapeClose = (e : KeyboardEvent) => {
            if(e.key === "Escape" && isClosable){
                toggle();
            }
        }
        if(dialogRef.current){
            dialogRef.current.addEventListener('mousedown', handleBackDropClick);
        }
        document.addEventListener('keydown', handleEscapeClose);
        return () => {
            dialogRef.current?.removeEventListener('mousedown', handleBackDropClick)
            document.removeEventListener('keydown', handleEscapeClose);
            document.body.style.overflow = "";
        }   

    },[isOpenInternal])


    
    return {isOpenInternal, toggle, dialogRef, isClosable}
}