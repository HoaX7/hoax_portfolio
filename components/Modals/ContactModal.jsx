import React, { Fragment } from "react";
import Modal from "../Commons/Modals/Modal";
import PropTypes from "prop-types";

export default function ContactModal({ onClose }) {
  return (
    <Modal
      isForm={true}
      title={"Contact"}
      body={
        <Fragment>
          <div className="modal_contact">
            <div className="mt-3 form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="mt-3 form-group">
              <label htmlFor="email">Email address</label>
              <input type="text" name="email" className="form-control" />
            </div>
            <div className="mt-3 form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" className="form-control" />
            </div>
            <div className="mt-3 form-group">
              <label htmlFor="comment">
                Comments <span className="text-muted">(optional)</span>
              </label>
              <textarea type="text" name="comment" className="form-control" />
            </div>
          </div>
        </Fragment>
      }
      buttons={
        <div className="d-flex">
          <button className="btn btn-sm btn-danger mr-2" onClick={() => onClose()}>
            Close
          </button>
              <button className="btn btn-sm upload_btn">
                Submit
              </button>
        </div>
      }
      closeModal={onClose}
    />
  );
}
ContactModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
