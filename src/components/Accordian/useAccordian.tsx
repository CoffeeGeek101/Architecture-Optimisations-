// this hook is the control centre for maintaining and updating current state of accordian

import { useCallback, useState } from "react"
import type { AccordianHookI } from "../../types/accordian";

// Specs:
// - toggling of active accordians w/ controlled and uncontrolled mode.
// - supports single or multi accordians mode.
// - clicking outside the accordian close the active accordian.

export const useAccordian = ({activeCards=[],isMulti=false, setActiveCards} : AccordianHookI) => {

    const [activeCardInternal, setActiveCardInternal] = useState<string[]|[]>(activeCards);
    
    const toggle = useCallback((item : string) => {

        // if item is already present, pop. Else add
        if([...activeCardInternal].includes(item)){
            setActiveCards && setActiveCards(prev => prev.filter((card) => card !== item));
            setActiveCardInternal(prev => prev.filter((card) => card !== item));
        }else{
            // if isMulti, append the new item to the list. Else update the whole array.
            if(isMulti){
                setActiveCards && setActiveCards(prev => [...prev, item]);
                setActiveCardInternal(prev => [...prev, item])
            }else{
                setActiveCards && setActiveCards([item]);
                setActiveCardInternal([item]);
            }
        }
    },[activeCardInternal])

    return {activeCardInternal, toggle}

}