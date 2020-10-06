import React, { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <h2 className="contact_title">Contact</h2>
      <div className="row">
        <div className="mt-5 col-5">
          Don't be shy! Need me to bring your ideas to life? You can get in
          touch with me through Email or Linkedin.
          <div className="mt-3">
            <a href="#home">
              <img
                src="/static/images/email-light.svg"
                className="mr-3 ptr"
                width="48px"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/vivek-raj-sr-3b3256185" target="_blank">
              <img
                src="/static/images/linkedin-light.svg"
                width="40px"
                className="ptr"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="contact p-3 mt-3 mb-3 ml-5 shadow col-6">
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
          <div>
            <button className="btn btn-sm upload_btn shadow btn-block">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
