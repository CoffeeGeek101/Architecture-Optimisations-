// Component to handle the Tablist 

import React, { type FC } from 'react'
import type { TabsConfigI } from './Tabs'


const Tab : FC<TabsConfigI> = React.memo(({ content="" ,...props}) => {
    return (
    <div data-tab-id={props.id} id={props.id}>{props.label}</div>
  )
})

export default Tab