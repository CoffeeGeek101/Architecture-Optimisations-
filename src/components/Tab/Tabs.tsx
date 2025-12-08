// This is the base component to merge all the child component and render it to parent.

// takes in a config and use it build the tab component tree. 

import { type FC,type ReactNode } from 'react'
import Tab from './Tab';
import { useTab } from './useTab';
import TabPanel from './TabPanel';

export interface TabsConfigI {
    label : string;
    id : string;
    content : ReactNode | string;
    default ?: boolean; 
}

interface TabsI {
    config : TabsConfigI[];
    onChange ?: () => void;
    selected ?: number | string;
}

const Tabs : FC<TabsI> = ({config}) => {

    const defaultTab = config.find((tab) => tab.default)?.id ?? config[0].id

    const {handleTabs, selectedInternal} = useTab(defaultTab);

    const activeTab = config.find((tab) => tab.id === selectedInternal)

  return (
    <div>
        <div className='flex justify-start items-start gap-2' onClick={(e) => handleTabs(e)}>
            {
                config.map((tab) => (
                    <Tab 
                    content
                    default={tab.default} 
                    id={tab.id} 
                    label={tab.label} 
                    key={tab.id} 
                    />
                ))
            }
        </div>
        <div>
            <TabPanel children={activeTab?.content ?? config[0].content} />
        </div>
    </div>
  )
}

export default Tabs