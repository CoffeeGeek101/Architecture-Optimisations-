import React, { type FC, type RefObject } from 'react'

interface ScrollableContentI {
    data : any,
    ref : RefObject<HTMLDivElement | null>
}

const ScrollableContent : FC<ScrollableContentI> = ({data,ref}) => {
  return (
    <div className='flex flex-col items-start justify-start gap-3'>
        {
        data.map((row : any) => (
            <div>{row.id}  {row.title}</div>
        ))    
        }
        <div ref={ref} className='h-1'>hello</div>
    </div>
  )
}

export default ScrollableContent