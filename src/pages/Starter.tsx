import Modal from "../components/Modal/Modal";
import { useModal } from "../components/Modal/useModal";
import ModalContent from "../components/Modal/ModalContent";
import Tooltip from "../components/Tooltip/Tooltip";
import Tabs from "../components/Tab/Tabs";
import { tabConfigs } from "../utils/Tabs1Config";


const Starter = () => {
  
  const {dialogRef, toggle, isOpenInternal, isClosable} = useModal({isClosable:true});

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
    </div>
  )
}

export default Starter