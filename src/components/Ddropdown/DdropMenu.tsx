// component to trigger selects and render the dropdown items

import { type FC } from 'react'
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

    const handleDropSelect = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const selectValue = ((e.target as HTMLDivElement).closest("[data-value]") as HTMLElement).dataset.value;
        props.selectDrops!(selectValue!)
    }

    const isSelected = (option : string, selected : string[]) : boolean => {
        return selected.includes(option)
    }

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