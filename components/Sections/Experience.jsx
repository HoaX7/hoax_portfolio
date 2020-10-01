import React, { Fragment } from "react";
import Cards from "../Commons/Cards/Index";

export default function Experience({ details }) {
  return (
    <Fragment>
      <h2 className="text-muted">Experience</h2>
      <div className="row">
        {details &&
          details.details.work &&
          details.details.work.map((exp, i) => {
            return (
              <div className="col-12 col-md-4 p-3" key={i}>
                <Cards item={exp} />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
}
