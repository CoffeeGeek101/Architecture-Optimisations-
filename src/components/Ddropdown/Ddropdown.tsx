// base component to render all the sub components together

import { type FC } from 'react'
import DdropTrigger from './DdropTrigger'
import DdropMenu from './DdropMenu'
import { useDdropdown, type DropdownHookI } from './useDdropdonw'

const Ddropdown : FC<DropdownHookI> = ({...props}) => {

    const {isOpenUC, selectDrops, toggler, valuesUC, menuRef} = useDdropdown(props)

    return (
    <div>
        <DdropTrigger toggler={toggler}>
            {/* renders Menu as a child (better for Styling purpose) */}
            <DdropMenu isOpenUC={isOpenUC} valuesUC={valuesUC} selectDrops={selectDrops} menuRef={menuRef} toggler={toggler}/>
        </DdropTrigger>
        <span>Selected : {valuesUC}</span>
    </div>
  )
}

export default Ddropdown