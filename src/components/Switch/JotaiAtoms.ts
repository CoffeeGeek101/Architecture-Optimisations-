import type { SetStateAction } from "jotai";
import { atom } from "jotai";

type configAtomT = {
    value ?: boolean;
    valueSetter ?: React.Dispatch<SetStateAction<boolean>>;
    isDisable : boolean;
}

// internal atom to store the uncontrolled value.
const internalAtom = atom(false)
// switch config atm to store the parent value , value setter , isDisabled
export const configAtom = atom<configAtomT>({isDisable:false});
// is thumb dragging
export const isDraggingAtom = atom(false);
// how much has been dragged
export const draggedAtom = atom(0); //px


// useSwitchAtom : use the config obj to determine if it controlled mode or not and 
export const useSwitchAtom = atom(get => {

    const {isDisable, value} = get(configAtom);
    if(isDisable) return;

    if(value === undefined){
        return get(internalAtom);
    }
    return value;

}, ((get, set, next : boolean) => {
    
    const {isDisable, value, valueSetter} = get(configAtom);
    if(isDisable) return;

    if(value === undefined){
        set(internalAtom, next);
        valueSetter?.(_ => next);  //maybe the parent value can be undefined is some cases.
    }
    if(valueSetter){
        valueSetter(_ => next);  //run the parent setter if available, it means it is controlled.
    }

}));
// run the update accordingly. 

// toogleSwitchAtom which triggers the wirte function inisde useSwitchAtom to update state.
export const toogleSwitchAtom = atom(null, (get, set) => (
    set(useSwitchAtom, !get(useSwitchAtom))
))

// on Drag start 
export const onDragStartAtom = atom(null, (_, set) => {
    set(isDraggingAtom, true);
    // set(draggedAtom, 0)
})

// on Drag move 
export const onDragMoveAtom = atom(null, (_, set, deltaX : number) => {
    set(draggedAtom, deltaX);
})

// on Drag End 
export const onDragEnd = atom(null, (get, set)=>{
    const delta = get(draggedAtom);
    const current = get(useSwitchAtom);

    const {isDisable} = get(configAtom);
    if(isDisable) return;

    const THRESHOLD = 12;
    let next = current;

    if(delta > THRESHOLD) next = true;
    if(delta < -THRESHOLD) next = false;

    set(useSwitchAtom, next!);

    // clean up
    set(isDraggingAtom, false);
    // set(draggedAtom, 0);
})