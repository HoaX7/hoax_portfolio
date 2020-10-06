import React from "react";
import GaugeChart from "../GaugeChart/Index";

export default function SkillCard({ skill, onRep }) {
    const colorMap = {
        superb: "#24d392",
        average: "#24d392",
        bad: "#ff6565",
    };
    function scoreBucket(score) {
        if (score >= 80) {
            return "superb";
        } else if (score < 80 && score >= 60) {
            return "average";
        } else if (score < 40) {
            return "bad";
        } else if (score < 60 && score >= 40) {
            return "average";
        }
    }
	const bucket = scoreBucket(skill.score);
  return (
    <div>
      {skill && (
        <div className="card p-3 shadow skill_card">
          <div className="card-title">{skill.class}</div>
          <div className=" mx-1 d-flex flex-wrap">
            {skill.tools &&
              skill.tools.map((tool, i) => {
                return (
                  <div key={i} className="m-1">
                    <div className="badge-pill badge-secondary">{tool}</div>
                  </div>
                );
              })}
          </div>
          <div className="card-body">
              <GaugeChart progress={skill.score} color={colorMap[bucket]} />
          </div>
          <div className="card-footer">
            <button className="btn btn-sm upload_btn" onClick={() => onRep(skill)}>
                + rep
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
