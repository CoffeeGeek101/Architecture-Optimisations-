import { useState } from "react"
import Ddropdown from "../components/Ddropdown/Ddropdown"


const Starter = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedVals, setSelectedVals] = useState<string[]>([]);
    
  return (
    <div>
        <Ddropdown 
        controlled={true} 
        isMulti={true} 
        open={isOpen} 
        setIsOpen={setIsOpen} 
        value={selectedVals} 
        setUserSelectedValue={setSelectedVals}
        />
      <p>Controlled Sync: {selectedVals}</p>
    </div>
  )
}

export default Starter