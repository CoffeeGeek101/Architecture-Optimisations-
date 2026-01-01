import { createStore } from 'jotai';
import React, { useEffect, useMemo, useState, type FC, type MouseEvent, type ReactNode } from 'react'
import { activenodes } from './MenuAtoms';

interface MenuBarI {
    children : ReactNode
}
const MenuBar : FC<MenuBarI> = ({children}) => {

    // const menubarRegistry = useRef([]);
    const [activeStack, setActiveStack] = useState<string[]>([]);

    const handleClick = (e: MouseEvent) => {
        setActiveStack(prev => [...prev, (e.target as Element).id])
    }

    const store = useMemo(()=> createStore(), []);
    useEffect(()=>{
        store.set(activenodes, activeStack);
    },[])

  return (
    <div onClick={(e)=>handleClick(e)}>
        {children}
    </div>
  )
}

export default MenuBar