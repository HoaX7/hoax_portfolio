import React, { Fragment } from "react";
import PropTypes from "prop-types";
function Modal(props) {
	let Container = "div";
	if (props.isForm === true) {
		Container = "form";
	}
	return (
		<Fragment>
			<div className="modal fade show d-block" tabIndex="-1" role="dialog">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<Container className="modal-content" onSubmit={e => e.preventDefault()}>
						{props.title && (
							<div className="modal-header">
								<h5 className="modal-title">{props.title}</h5>
								<button type="button" className="close" aria-label="Close" onClick={props.closeModal}>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						)}
						<div className="c_modal modal-body">{props.body}</div>
						{props.buttons && <div className="modal-footer">{props.buttons}</div>}
					</Container>
				</div>
			</div>
			<div className="modal-backdrop show fade" onClick={props.closeModal}></div>
		</Fragment>
	);
}
Modal.propTypes = {
	title: PropTypes.any,
	body: PropTypes.object,
	buttons: PropTypes.object,
	closeModal: PropTypes.func.isRequired,
	isForm: PropTypes.bool
};
export default Modal;
