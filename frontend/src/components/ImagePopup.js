import React, { useState } from "react";
import Modal from "../components/Modal";

export default function ImagePopup({ index, imageUrl }) {

    return (
        <>
            <a
                href="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={"#modal-" + index.toString()}
            >
                View
            </a>

            <Modal
                modalId={"modal-" + index.toString()}
                modalTitle="Image sighting"
                bodyClassName="image-container"
            >
                <img src={imageUrl} alt="sighting" />
            </Modal>
        </>
    );
}
