import React, { Fragment, useState } from "react";
import { clone } from "../../helpers/index";
import SkillCard from "../Commons/Cards/SkillCard";
import { patch } from "../../api/api/detail/index";

export default function Skills({ details }) {
  const [_details, setDetails] = useState(details);
  return (
    <Fragment>
      <h2 className="text-muted skill_title">Skills & Endorsements</h2>
      <div className="text-muted">Tools and Technologies i've worked with.</div>
      <div className="text-muted mt-2">
        Think you can vouch for my skills? Leave a reputation point!
      </div>
      <div className="row">
        {_details &&
          _details.details.skills &&
          _details.details.skills.map((skill, i) => {
            return (
              <div key={i} className="col-12 col-md-6 p-3">
                <SkillCard skill={skill} onRep={(opt) => {
                    opt.score++;
                    const index = _details.details.skills.findIndex(i => i.class.toLowerCase() === opt.class.toLowerCase())
                    if (index >= 0) {
                        const result = clone(_details);
                        result.details[index] = opt;
                        patch(result);
                        setDetails(result);
                    }
                }} />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
}
