import React, { useRef } from 'react'
import ScrollableContent from './ScrollableContent'
import { useScroll } from './useScroll'

const ScrollClient = () => {
    
    const viewportRef = useRef<HTMLDivElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);
    const {data} = useScroll(viewportRef, sentinelRef);

  return (
    <div 
    ref={viewportRef}
    className='flex flex-row w-60 h-96 bg-amber-200 overflow-y-scroll'
    // onScroll={handleScroll}
    >
        <ScrollableContent data={data} ref={sentinelRef}/>
        {/* <div ref={sentinelRef} className='h-1'>hello</div> */}
    </div>
  )
}

export default ScrollClient