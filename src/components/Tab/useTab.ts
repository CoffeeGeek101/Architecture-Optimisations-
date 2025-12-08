// this is logical controll point for Tab

import { useCallback, useState, type MouseEvent, type SetStateAction } from "react";

// Specs : 
// - handles the selected state w/ controlled and uncontrolled mode

// interface TabHookI {
//     selected ?: number;
//     setSelected ?: () => void;
// }

export const useTab = (selected ?: string, setSelected ?: React.Dispatch<SetStateAction<string>>) => {

    const [selectedInternal, setSelectedInternal] = useState<string>(selected ? selected : "0");
    // const tabRef = useRef<HTMLDivElement | null>(null);

    const handleTabs = useCallback((e : MouseEvent)=>{
        // takes in an event with the tab key and set the state with the key.
        const tabId = ((e.target as HTMLElement).closest("[data-tab-id]") as HTMLElement).id
        // console.log(tabId)
        setSelected && setSelected(tabId);
        setSelectedInternal(tabId);
    },[])

    return {handleTabs, selectedInternal}
}