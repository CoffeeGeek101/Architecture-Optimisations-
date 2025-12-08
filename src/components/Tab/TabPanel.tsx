// Component to render the tab content based on the mapped child passed to it.

import { type FC, type ReactNode } from 'react'

interface TabPanelI {
    children : ReactNode
}

const TabPanel : FC<TabPanelI> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default TabPanel