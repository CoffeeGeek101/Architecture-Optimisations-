// We will add all the logic here as a custom hook.

import { useEffect, useRef, useState } from "react";

// Specs :
// - Controlled / UnControlled switch - done
// - Toggle Open/Close - done
// - Select and UnSelect Options - done
// - Close on Clicking outside of component - done
// - isMulti (boolean) - done
// - A11y (to close, navigate and select items) [for v2]


export interface DropdownHookI {
    controlled : boolean,
    value ?: string[],
    open ?: boolean,
    setUserSelectedValue ?: React.Dispatch<React.SetStateAction<string[] | []>>;
    setIsOpen ?: React.Dispatch<React.SetStateAction<boolean>>;
    isMulti ?: boolean
}

export interface DropdownHookFunctions {
    toggler ?: () => void;
    selectDrops ?: (item: string) => void;
    isOpenUC ?: boolean;
    valuesUC ?: string[];
    menuRef ?: React.RefObject<HTMLDivElement | null>
}

// THIS IS PURE CONTROLLED OR UNCONTROLLED COMPONENT
// THIS CAN BE MADE HYBRID, BY REMOVING controlled PROP AND USE SETTERS AS FLAGS.
export const useDdropdown = ({controlled=false, open=false, setIsOpen, setUserSelectedValue, value=[], isMulti=false} : DropdownHookI) : DropdownHookFunctions => {

    const [isOpenUC, setIsOpenUC] = useState<boolean>(open);
    const [valuesUC, setValuesUC] = useState<string[] | []>(value);
    const menuRef = useRef<HTMLDivElement|null>(null);

    
    const toggler = () => {
        if(controlled){
            setIsOpen!(prev => !prev);
            setIsOpenUC(prev => !prev);
        }else{
            setIsOpenUC(prev => !prev);
        }
    }

    const setSelectedValue_internal = (setterFn : React.Dispatch<React.SetStateAction<string[] | []>>, item : string) => {
        if(isMulti){
            // can be optimised by sorting and binary search here O(log n)
            setterFn(prev => [...prev].includes(item) ? prev.filter((val) => val != item) : [...prev, item]);
        }else{
            setterFn([item]);
        }
    } 

    const selectDrops = (item : string) => {
        if(controlled){
            setSelectedValue_internal(setUserSelectedValue!, item)
            setSelectedValue_internal(setValuesUC, item)
        }else{
            setSelectedValue_internal(setValuesUC, item)
        }
    }

    useEffect(()=> {

        if(!isOpenUC){
            return;
        }
        
        const handleOutsideClick = (e : MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(e.target as Node)){
                setIsOpen && setIsOpen((prev : boolean) => !prev);
                setIsOpenUC(prev => !prev);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);

        () => document.addEventListener('mousedown', handleOutsideClick)

    },[isOpenUC])

    // we can create a function that takes in a function and triggers a operation (save to global state/store) with values selected, 
    // Only for Uncontrolled/can be used by controlled.

    return {toggler, selectDrops, isOpenUC, valuesUC, menuRef}
}