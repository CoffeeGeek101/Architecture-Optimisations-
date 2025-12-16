// menu items for select items

import React from "react"

const SelectItems = React.memo((opt : {label : string, value : string, isSelected : boolean}) => {
  return (
    <div data-select-val={opt.value}><p>{opt.isSelected ? '✅' : null}</p> {opt.label}</div>
  )
})

export default SelectItems