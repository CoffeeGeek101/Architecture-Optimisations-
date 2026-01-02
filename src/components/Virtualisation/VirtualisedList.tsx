import React, { type FC } from 'react'

interface VirtualisedListI {
    range : {start : number, end : number},
    data : {id : number}[]
}

const VirtualisedList : FC<VirtualisedListI> = ({range, data}) => {
  return (
    <div>
        {
            data.slice(range.start, range.end).map((item) => (
                <p className='h-20 bg-amber-500' key={item.id}>{item.id}</p>
            ))
        }
    </div>
  )
}

export default VirtualisedList