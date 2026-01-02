import type React from "react"
import { useCallback, useState } from "react"

type virtualisePropT = {
    rowheight : number,
    buffer : number,
    data : {id : number}[],
}

export const useVirtualise = ({buffer, rowheight, data} : virtualisePropT) => {

    const [range, setRange] = useState(()=>({start : 0, end : 0}));


    const handleScroll = useCallback((viewportRef: React.RefObject<HTMLDivElement|null>) => {
        if(!viewportRef.current) return;

        let start = Math.max(0, Math.floor(viewportRef.current.scrollTop/rowheight - buffer));
        let visibleIndex = Math.floor(viewportRef.current.clientHeight/rowheight);
        let end = Math.min(data.length, (start + visibleIndex + buffer*2));

        setRange(_ => ({start : start, end : end}));
    },[buffer, rowheight, data.length]);

    return {range, handleScroll};

}