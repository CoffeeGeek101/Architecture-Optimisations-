// this hook handle all the logical parts of the component

import { useCallback, useEffect, useRef, useState, type MouseEvent, type RefObject, type SetStateAction } from "react";

// Specs : 
// Hybrid controlled/uncontorlled component.
// single select + multi-select.

export interface SelectHookI {
    selectedval ?: string[] | [];
    setSelectedval ?: React.Dispatch<SetStateAction<string[] | []>>;
    isSelectOpen ?: boolean;
    setIsSelectOpen ?: React.Dispatch<SetStateAction<boolean>>;
    isMulti ?: boolean
}

export interface SelectHookFunction {
    selectedInternal ?: string[] | [],
    isOpenInternal ?: boolean,
    selectMenuRef ?: RefObject<HTMLDivElement | null>,
    toggle ?: () => void,
    handleSelect ?: (e : MouseEvent) => void
}

export const useSelect = ({selectedval, setSelectedval, isSelectOpen, setIsSelectOpen, isMulti=false} : SelectHookI) => {

    const [selectedInternal, setSelectedInternal] = useState<string[] | []>(selectedval ? selectedval : []);
    const [isOpenInternal, setIsOpenInternal] = useState<boolean>(isSelectOpen ? isSelectOpen : false);
    const selectMenuRef = useRef<HTMLDivElement | null>(null);

    const toggle = useCallback(() => {
        setIsOpenInternal(prev => !prev);
        setIsSelectOpen && setIsSelectOpen(prev => !prev);
    },[]);

    const handleSelect = useCallback((e : MouseEvent) => {

        const item = ((e.target as HTMLElement).closest("[data-select-val]") as HTMLElement).dataset.selectVal;

        if(isMulti){
            setSelectedInternal(prev => [...prev].includes(item!) ? [...prev].filter((selectedItem) => selectedItem != item) : [...prev, item!])
        }else{
            setSelectedInternal(_ => [item!]);
            setSelectedval && setSelectedval(_ => [item!]);
            toggle();
        }
    },[]);

    useEffect(()=>{
        
        if(!isOpenInternal){
            return
        }
        const handleOutside = (e : MouseEvent) => {
            if(selectMenuRef.current && !selectMenuRef.current.contains(e.target as Node)){
                toggle();
            }
        }
        // @ts-ignore
        document.addEventListener('mousedown', handleOutside);
        
        // @ts-ignore
        return () => document.removeEventListener('mousedown', handleOutside)
    },[isOpenInternal])

    return {selectedInternal, isOpenInternal, selectMenuRef, toggle, handleSelect};
}