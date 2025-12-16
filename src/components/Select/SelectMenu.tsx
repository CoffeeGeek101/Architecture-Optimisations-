// menu dropdown for the list

import { useCallback, type FC } from 'react'
import type { SelectHookFunction } from './useSelect'
import SelectItems from './SelectItems'

interface SelectMenuI extends SelectHookFunction{
    options : {label: string, value: string}[]
}

const SelectMenu : FC<SelectMenuI> = ({...props}) => {

  const isSelected = useCallback((option : string, selectedItem : string[]) => {
    return selectedItem.includes(option);
  },[]);

  return (
    <div onClick={(e) => props.handleSelect!(e)} ref={props.selectMenuRef}>
        {
            props.options.map((opt) => (
                <SelectItems label={opt.label} value={opt.value} isSelected={isSelected(opt.value, props.selectedInternal!)}/>
            ))
        }
    </div>
  )
}

export default SelectMenu