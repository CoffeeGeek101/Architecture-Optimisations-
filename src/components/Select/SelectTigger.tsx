// renders the initial UI, which user will interact first

import React, { type FC } from 'react'
import type { SelectHookFunction } from './useSelect'

const SelectTigger : FC<SelectHookFunction> = ({...props}) => {
  return (
    <div onClick={props.toggle} >SelectTigger</div>
  )
}

export default SelectTigger