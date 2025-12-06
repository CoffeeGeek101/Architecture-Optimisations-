import Modal from "../components/Modal/Modal";
import { useModal } from "../components/Modal/useModal";
import ModalContent from "../components/Modal/ModalContent";


const Starter = () => {

  // const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const {dialogRef, toggle, isOpenInternal, isClosable} = useModal({isClosable:true})

  return (
    <div>
    {/* triggers the modal */}
    <div onClick={toggle}>
      Show me Modal
    </div>
    <Modal dialogRef={dialogRef} isOpenInternal={isOpenInternal} toggle={toggle} isClosable={isClosable}>
      <ModalContent isClosable={isClosable} toggle={toggle}/>
    </Modal>
    </div>
  )
}

export default Starter