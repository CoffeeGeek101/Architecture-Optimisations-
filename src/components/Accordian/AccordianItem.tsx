// this component takes in the content and track it with the clickable header.

import React, { type FC } from 'react'
import type { AccordianConfigT } from '../../types/accordian'

interface AccordianItemI extends AccordianConfigT {
    isActive : boolean,

}

const AccordianItem : FC<AccordianItemI> = React.memo(({...props}) => {
  return (
    <div id={props.id} data-card-id={props.id}>
        <div> 
            {/* {props.header({isAction: props.isActive})} */}
            <props.header isAction={props.isActive}/>
        </div>
        {props.isActive && <div>{props.content}</div>}
    </div>
  )
})

export default AccordianItem