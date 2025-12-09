// this is the base component which renders the all the accordian tabs

import React, { useCallback, type FC, type MouseEvent } from 'react'
import type { AccordianConfigT, AccordianHookI } from '../../types/accordian'
import { useAccordian } from './useAccordian'
import AccordianItem from './AccordianItem'

interface AccordianI extends AccordianHookI {
    config : AccordianConfigT[] | [],
}

const Accordian : FC<AccordianI> = ({...props}) => {

    const {toggle, activeCardInternal} = useAccordian({...props})

    const handleACard = useCallback((e : MouseEvent) => {
        const cardId = ((e.target as HTMLElement).closest("[data-card-id]") as HTMLElement).id;
        toggle(cardId);
    },[activeCardInternal])

  return (
    <div onClick={(e) => (handleACard(e))}>
        {
            props.config.map((card) => {

                const isActive = [...activeCardInternal].includes(card.id);

                return (
                    <AccordianItem 
                    id={card.id} 
                    header={card.header} 
                    content={card.content} 
                    isActive={isActive} 
                    key={card.id}
                    />
                )
            })
        }
    </div>
  )
}

export default Accordian