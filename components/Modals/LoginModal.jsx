import React, { Fragment } from "react";
import Modal from "../Commons/Modals/Modal";
import PropTypes from "prop-types";

export default function LoginModal({ onClose }) {
  return (
    <Modal
      isForm={true}
      title={"Login"}
      body={
        <Fragment>
          <div>Looks like you've hit a secret route, Enter the route to continue.</div>
          <div className="mt-3">
              <input type="text"/>
          </div>
        </Fragment>
      }
      buttons={
        <div>
          <button className="btn btn-sm btn-danger mr-2" onClick={() => onClose()}>
            Close
          </button>
          <button disabled={true} className="btn btn-sm upload_btn">Submit</button>
        </div>
      }
      closeModal={onClose}
    />
  );
}
LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
