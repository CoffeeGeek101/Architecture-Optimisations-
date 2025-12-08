// this will take a function and adds a delay to it after return 

import { useCallback, useRef } from "react";


export const useDebounce = (fn : (...args : any[])=>void, delay : number) => {

    const timerRef = useRef<any>(null); // persisted over each re-render.
    const fnRef = useRef<any>(fn); // always update the function with new version (ref doesn't cause re-render, so it is safe).
    fnRef.current = fn;

    // useCallback will maintain the function identity from the initial render, keeping the closure stale here.
    // Here, useCallback is not required, as it is not changing after initial run.
    const debouncedFn = useCallback((...args: any[]) => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
            fnRef.current(...args)
        }, delay);
    },[])

    return debouncedFn
}

