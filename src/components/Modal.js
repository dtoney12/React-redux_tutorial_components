import ReactDOM from "react-dom";
import {useEffect} from 'react';

function Modal({children, onClose, actionBar}) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        // overflow-hidden prevents scrolling up/down overlflowing text while modal is displayed
        return ()=> {
            document.body.classList.remove('overflow-hidden');
        }

    },[])

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose}
                 className="fixed inset-0 bg-gray-300 opacity-80">
            </div>
            {/*// 'fixed' css allows modal to display even when page*/}
            {/*// content overflows; as opposed to 'absolute'*/}
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
            document.querySelector('.modal-container')
    );
}

export default Modal;