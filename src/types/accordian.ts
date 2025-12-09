import type React from "react"
import type { ReactNode, SetStateAction } from "react"
import type { BaseAccordingHeaderI } from "../components/Accordian/BaseAccordingHeader"

export type AccordianConfigT = {
    sortKey ?: number,
    id : string,
    header : (args : BaseAccordingHeaderI) => ReactNode,
    content : ReactNode
}

export interface AccordianHookI {
    activeCards ?: string[] | [],
    setActiveCards ?: React.Dispatch<SetStateAction<string[] | []>>,
    defaultOpen ?: boolean,
    defaultActive ?: string[] | [],
    isMulti ?: boolean
}
