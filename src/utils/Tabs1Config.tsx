import type { TabsConfigI } from "../components/Tab/Tabs";
import BaseTabContent from "../pages/BaseTabContent";


// user can create this config on the base component where they want to a Tab Component, so that 
// all the TabPanel component gets the props required (but, only for controlled cases).
export const tabConfigs : TabsConfigI[] = [
    {id: "0", label: "Thing1", default:false, content: <BaseTabContent label="A"/>},
    {id: "1", label: "Thing2", default:true, content: <BaseTabContent label="B"/>},
    {id: "2", label: "Thing3", default:false, content: <BaseTabContent label="C"/>},
]