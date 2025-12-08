import React, { type FC } from 'react'

interface BasTContentI{
    label : string
}

const BaseTabContent : FC<BasTContentI> = ({label}) => {
  return (
    <div>{label}</div>
  )
}

export default BaseTabContent