import React, { Fragment } from 'react'

export default function Contact() {
    return (
        <Fragment>
            <h2 className="">
                Contact
            </h2>
            <div className="contact p-3 mt-3 mb-3 shadow">
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
                    <label htmlFor="comment">Comments <span className="text-muted">(optional)</span></label>
                    <textarea type="text" name="comment" className="form-control" />
                </div>
                <div>
                    <button className="btn btn-sm upload_btn shadow btn-block">
                        Submit
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
