// renders the whole select component

import type { FC } from "react"
import { useSelect, type SelectHookI } from "./useSelect"
import SelectTigger from "./SelectTigger"
import SelectMenu from "./SelectMenu"
import { options } from "../../utils/DropdownOptions"

interface SelectI extends SelectHookI {
    options : {label : string, value : string}[]
}

const Select : FC<SelectI> = ({...props}) => {

  const selectUtility = useSelect({...props});
   
  return (
    <>
    <SelectTigger toggle={selectUtility.toggle}/>
    { selectUtility.isOpenInternal ? <SelectMenu {...selectUtility} options={options}/> : null } 
    </>
  )
}

export default Select