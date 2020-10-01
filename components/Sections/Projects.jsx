import React, { Fragment } from 'react'
import Cards from '../Commons/Cards/Index'

export default function Projects({ details }) {
    return (
        <Fragment>
        <h2 className="text-muted">Personal Projects</h2>
        <div className="row">
            {details && details.details.projects && details.details.projects.map((project, i) => {
                return (
                    <div key={i} className="col-12 col-md-4 p-3">
                        <Cards item={project} isPersonalProject={true} />
                    </div>
                )
            })}
            </div>
        </Fragment>
    )
}
