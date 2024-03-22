import React from "react";
import { CloseIcon } from "../assets/svg";

function Modal({ showModal, onClose, children }) {
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-gray-200 rounded-lg shadow">
              <button
                onClick={onClose}
                type="button"
                class="absolute top-3 end-2.5 bg-transparent hover:bg-green-500  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="popup-modal"
              >
                {CloseIcon()}
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
