// this hook will handle the logical part for tooltip.

import { useEffect, useRef, useState, type SetStateAction } from "react";
import { useDebounce } from "../../hooks/useDebounce";

// Specs :
// - Open and Close w/ Controlled and Uncontrolled (Hybrid)
// - Rendering based on the bounding distance in the window


interface TooltipHookI {
    open ?: boolean;
    isOpen ?: React.Dispatch<SetStateAction<boolean>>
}


export const useTooltip = ({open=false, isOpen} : TooltipHookI) => {

    const [openInternal, setIsOpenInternal] = useState<boolean>(open);
    const tooltipRef = useRef<HTMLDivElement|null>(null);

    const handleTooltipOpen = useDebounce(() => {
        isOpen && isOpen(true)
        setIsOpenInternal(true)
    }, 250)
    const handleTooltipClose = useDebounce(() => {
        isOpen && isOpen(false)
        setIsOpenInternal(false)
    }, 250)

    useEffect(()=>{

        if(tooltipRef.current){
            tooltipRef.current.addEventListener('mouseover', handleTooltipOpen)
            tooltipRef.current.addEventListener('mouseout', handleTooltipClose)
        }

    },[])

    return {open:openInternal, tooltipRef }

}