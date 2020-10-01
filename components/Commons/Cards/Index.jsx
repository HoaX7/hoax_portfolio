import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Cards extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        isPersonalProject: PropTypes.bool
    }
  render() {
      const { item, isPersonalProject } = this.props;
    return (
      <div className="card p-3 ptr shadow">
        <div className="card-title">
          {item.title}
          <div>
            <a target="_blank" href={item.projectUrl}>
              {item.projectUrl}
            </a>
          </div>
        </div>
        {isPersonalProject && (
            <div className="truncated">
                {item.description}
            </div>
        )}
        <div className="card-body align-items-center d-flex justify-content-center">
          <img src={item.src} className="card-img-top" alt="" />
        </div>
        {isPersonalProject ? null : <div className="text-muted p_footer">
          {item.completed ? item.date : "In progress"}
        </div>}
      </div>
    );
  }
}
