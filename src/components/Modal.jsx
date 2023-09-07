import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai"

const Modal = ({ onClose, isOpen, children }) => {
    return createPortal(
        <>
            {isOpen &&
                <div  className="grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-60">
                    <div className=" relative m-auto z-50 min-h-[200px] min-w-[80%] bg-white p-4">
                        <div className="flex justify-end">
                            <AiOutlineClose onClick={onClose} className="text-2xl" />
                        </div>
                        {children}
                    </div>

                </div>}
        </>
        , document.getElementById("modal-root"))
}

export default Modal