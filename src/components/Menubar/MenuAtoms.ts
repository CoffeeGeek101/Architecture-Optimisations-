import { atom } from "jotai";

export const activenodes = atom<string[]>([]);

export const updateActiveNodes = atom((get => {
    const activenodes_ = get(activenodes);
    return activenodes_;
}), (get, set, newNode : string) => {
    
    let currActiveNodes = get(activenodes);
    if(newNode){
        currActiveNodes.push(newNode);
        set(activenodes, currActiveNodes);
    }else{
        currActiveNodes.pop();
        set(activenodes, currActiveNodes);
    }
})