import { createStore, Provider } from 'jotai';
import React, { useEffect, useMemo, type FC, type ReactNode } from 'react'
import type { SetStateAction } from 'jotai';
import { configAtom } from './JotaiAtoms';

interface SwitchI {
    isDisabled ?: boolean;
    children : ReactNode;
    isSwitchOn ?: boolean;
    setIsSwitchOn ?: React.Dispatch<SetStateAction<boolean>>
}

const SwitchRoot : FC<SwitchI> = ({isDisabled=false, children, isSwitchOn, setIsSwitchOn}) => {

    // create a store and set the config 
    const store = useMemo(() => createStore(), []);

    useEffect(()=>{
        store.set(configAtom, {
            value : isSwitchOn,
            valueSetter : setIsSwitchOn,
            isDisable : isDisabled
        })
    },[isSwitchOn, setIsSwitchOn])

  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default SwitchRoot