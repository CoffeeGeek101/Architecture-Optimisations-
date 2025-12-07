// component to trigger selects and render the dropdown items

import { useCallback, type FC } from 'react'
import { options } from '../../utils/DropdownOptions'
import DdropItems from './DdropItems'
import type { DropdownHookFunctions } from './useDdropdonw'

interface DdropMenu extends DropdownHookFunctions {
    // later add if needed 
}

const DdropMenu : FC<DropdownHookFunctions> = ({...props}) => {
  
    if(!props.isOpenUC){
        return null;
    }

    const handleDropSelect = useCallback((e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const selectValue = ((e.target as HTMLDivElement).closest("[data-value]") as HTMLElement).dataset.value;
        props.selectDrops!(selectValue!)
    },[])

    const isSelected = useCallback((option : string, selected : string[]) : boolean => {
        return selected.includes(option) //can be optimised to O(1) using a set
    },[])

    return (
        <div onClick={(e) => handleDropSelect(e)} ref={props.menuRef}>
            {
                options.map((opt, idx) => (
                    <DdropItems key={idx} lable={opt.label} value={opt.value} isSelected={isSelected(opt.value, props.valuesUC!)}/>
                ))
            }
        </div>
  )
}

export default DdropMenu