// import { useAtomValue } from "jotai"
// import { useSwitchAtom } from "./JotaiAtoms"

import { useRef, type PointerEvent } from "react"
import { draggedAtom, isDraggingAtom, onDragEnd, onDragMoveAtom, onDragStartAtom, useSwitchAtom } from "./JotaiAtoms";
import { useAtomValue, useSetAtom } from "jotai";

const SwitchTumb = () => {
  const initalPosition = useRef(0);
  const onDragStart = useSetAtom(onDragStartAtom);
  const onDragging = useSetAtom(onDragMoveAtom);
  const onDragEndd = useSetAtom(onDragEnd);
  const pointerDragged = useAtomValue(draggedAtom);
  const isDragging = useAtomValue(isDraggingAtom);
  const switchflag = useAtomValue(useSwitchAtom);

  const MAX_X = 40; 
  const startOffset = useRef(0);
  const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const x = isDragging
  ? clamp(pointerDragged, 0, MAX_X)
  : switchflag
    ? MAX_X
    : 0;

  // const x = isDragging ? pointerDragged : switchflag ? MAX_X : 0;

  const handleDragStart = (e : PointerEvent) => {
    startOffset.current = switchflag ? MAX_X : 0;
    initalPosition.current = e.clientX;
    onDragStart();
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  const handleDragging = (e : PointerEvent) => {
    if (!isDragging) return;
     
    const delta = e.clientX - initalPosition.current;
    onDragging(startOffset.current + delta);
  }

  const handleDragEnd = (e : PointerEvent) => {
    if (!isDragging) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    onDragEndd();
  }


  return (
    <div className="h-5 w-5 bg-amber-50 rounded-3xl shadow-2xs transition-all antialiased" 
    style={{
        transform: `translateX(${x}px)`
      }}
    onPointerDown={(e) => handleDragStart(e)}
    onPointerMove={(e) => handleDragging(e)}
    onPointerUp={(e) => handleDragEnd(e)}
    />
  )
}

export default SwitchTumb