import React from "react";
import { WarningIcon } from "../svg";
import Modal from "../../components/Modal";

function DisableFarmerModal({ showModal, toggleModal }) {
  return (
    <Modal showModal={showModal} onClose={toggleModal}>
      <div className="p-4 md:p-5 text-center">
        {WarningIcon()}
        <h3 class="mb-5 text-lg font-poppins text-black">
          Are you sure you want to delete this farmer?
        </h3>
        <button
          dataModalHide="popup-modal"
          type="button"
          className="text-white bg-green-600 hover:bg-green-800 mr-6 font-poppins rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
        >
          Yes, I'm sure
        </button>
        <button
          dataModalHide="popup-modal"
          type="button"
          className="text-white bg-green-600 hover:bg-green-800 font-poppins rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
        >
          Yes, I'm sure
        </button>
      </div>
    </Modal>
  );
}

export default DisableFarmerModal;
