import BaseAccordingHeader, { type BaseAccordingHeaderI } from "../components/Accordian/BaseAccordingHeader";
import BaseTabContent from "../pages/BaseTabContent";
import type { AccordianConfigT } from "../types/accordian";

export const AccordianConfig : AccordianConfigT[] = [
    {
    content : <BaseTabContent label="Some accordian data 1"/>,
    header : ({isAction}:BaseAccordingHeaderI) => <BaseAccordingHeader isAction={isAction} label="Something 1"/>,
    id : "0",
    },
    {
    content : <BaseTabContent label="Some accordian data 2"/>,
    header : ({isAction}:BaseAccordingHeaderI) => <BaseAccordingHeader isAction={isAction} label="Something 2"/>,
    id : "1",
    },
    {
    content : <BaseTabContent label="Some accordian data 3"/>,
    header : ({isAction}:BaseAccordingHeaderI) => <BaseAccordingHeader isAction={isAction} label="Something 3"/>,
    id : "2",
    }
]

// for ref : header is a callback fucntion here. 
// () => fn()  where fn() is an FC which returns a JSX.