import React, { type FC } from 'react'

export interface BaseAccordingHeaderI{
    isAction : boolean,
    label ?: string
}

const BaseAccordingHeader : FC<BaseAccordingHeaderI> = React.memo(({isAction, label}) => {
  return (
    <div className={`${isAction ? 'text-amber-600' : 'text-gray-800'}`}>
        {label}
    </div>
  )
})

export default BaseAccordingHeader