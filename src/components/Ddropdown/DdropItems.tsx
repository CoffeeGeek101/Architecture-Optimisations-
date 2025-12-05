// component which signifes each dropdown element of item in the Menu.

import React, { type FC } from 'react'

interface DdropItemsI {
    lable : string;
    value : string;
    isSelected : boolean;
}

const DdropItems : FC<DdropItemsI> = React.memo(({lable,value,isSelected}) => {
    console.log("rendering", lable)
  return (
    <div data-value={value}>
       {isSelected ? <span>😀 {lable}</span> : <span>{lable}</span>}
    </div>
  )
})

export default DdropItems