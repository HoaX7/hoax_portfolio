import React, { Fragment } from 'react'
import { downloadCV } from '../../api/api/profile'

export default function About({ profile }) {
    return (
        <Fragment>
            <h2 className="text-muted">
                About
            </h2>
            {profile && (
                <div className="d-flex">
                    <div>
                        <img className="card-img-top" src="/static/images/about-me.jpg" alt=""/>
                    </div>
                    <div className="mt-5">
                        {profile.about}
                        <div className="mt-3">
                            <a className="btn btn-sm upload_btn" href="/download/cv">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}
