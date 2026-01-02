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
import MenuBar from "../components/Menubar/MenuBar";
import Menu from "../components/Menubar/Menu";
import ScrollClient from "../components/InifiniteScroll/ScrollClient";
import VirtualiseHolder from "../components/Virtualisation/VirtualiseHolder";



const Starter = () => {
  
  const {dialogRef, toggle, isOpenInternal, isClosable} = useModal({isClosable:true});
  const [isSwitchOnC, setIsSwitchedOn] = useState<boolean>(false);
  const data = Array.from({length : 1000}).fill(0).map((_, index) => ({id : index}));

  return (
    <div className="flex items-start gap-5">
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

    {/* MENUBAR */}
    <MenuBar>
      <Menu>Hello</Menu>
      <Menu>Hello2</Menu>
      <Menu>Hello3</Menu>
    </MenuBar>
      </div>

      <div>
        <ScrollClient/>
      </div>
      <VirtualiseHolder data={data}/>
    </div>
  )
}

export default Starter