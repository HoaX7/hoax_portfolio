import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
let modalRoot;
if(process.browser) {
	modalRoot = document.getElementById("modal-root");
}
export default function ModalWrapper({ renderModal }) {
	return <div>{ReactDOM.createPortal(renderModal(), modalRoot)}</div>;
}
ModalWrapper.propTypes = {
	renderModal: PropTypes.func.isRequired
};
