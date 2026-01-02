import { useEffect, useRef, type FC } from 'react'
import { useVirtualise } from './useVirtualisation'
import VirtualisedList from './VirtualisedList';

interface VirtualiseHolderI {
    data : {id : number}[];
}

const VirtualiseHolder : FC<VirtualiseHolderI> = ({data}) => {

    const viewportRef = useRef<HTMLDivElement|null>(null);
    const listRef = useRef<HTMLDivElement|null>(null);


    const {handleScroll, range} = useVirtualise({ data, buffer:5, rowheight:80 });

    const handleScrollP = () => {
        handleScroll(viewportRef);
    }

    useEffect(() => {
    handleScroll(viewportRef);
    }, [handleScroll]);
  
  return (
    <div ref={viewportRef} className='relative overflow-y-auto h-[500px] w-[300px] bg-amber-950' onScroll={handleScrollP}>
        <div ref={listRef} className='absolute left-0 top-0' style={{ transform: `translateY(${range.start * 80}px)` }}>
            <VirtualisedList range={range} data={data}/>
        </div>
    </div>
  )
}

export default VirtualiseHolder