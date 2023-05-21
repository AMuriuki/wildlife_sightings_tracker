import React from "react";

export default function Modal({ modalId, modalTitle, bodyClassName, children }) {
    return (
        <div>
            <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '500px' }}>
                    <div className="modal-content position-relative">
                        <div className="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
                            <button className="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-0">
                            <div className="rounded-top-lg py-3 ps-4 pe-6 bg-light">
                                <h4 className="mb-1" id="modalExampleDemoLabel">{modalTitle}</h4>
                            </div>
                            <div className={`p-4 pb-0 ${bodyClassName}`}>
                                {children}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}