import Modal from "../components/Modal/Modal";
import { useModal } from "../components/Modal/useModal";
import ModalContent from "../components/Modal/ModalContent";
import Tooltip from "../components/Tooltip/Tooltip";
import Tabs from "../components/Tab/Tabs";
import { tabConfigs } from "../utils/Tabs1Config";
import Accordian from "../components/Accordian/Accordian";
import { AccordianConfig } from "../utils/Accordian1Config";
import Select from "../components/Select/Select";
import { SelectOptions } from "../utils/SelectOptions";
import { Switch } from "../components/Switch";
import { useState } from "react";



const Starter = () => {
  
  const {dialogRef, toggle, isOpenInternal, isClosable} = useModal({isClosable:true});
  const [isSwitchOnC, setIsSwitchedOn] = useState<boolean>(false);
  
  return (
    <div>
    {/* triggers the modal */}
    <div onClick={toggle}>
      Show me Modal
    </div>
    <Modal dialogRef={dialogRef} isOpenInternal={isOpenInternal} toggle={toggle} isClosable={isClosable}>
      <ModalContent isClosable={isClosable} toggle={toggle}/>
    </Modal>

    {/* TOOLTIP */}
    <Tooltip>
      <div>Trigger Tooltip</div>
    </Tooltip>

    {/* TABS */}
    <Tabs config={tabConfigs} />

    {/* ACCORDIAN */}
    <Accordian config={AccordianConfig} isMulti={true}/>

    {/* SELECT */}
    <Select options={SelectOptions} isMulti={true}/>

    {/* SWITCH (compound component arch) */}
    <Switch.Root isSwitchOn={isSwitchOnC} setIsSwitchOn={setIsSwitchedOn}>
      <Switch.Button>
        <Switch.Thumb/>
      </Switch.Button>
    </Switch.Root>
    </div>
  )
}

export default Starter