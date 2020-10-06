import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";

export default class Cards extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    isPersonalProject: PropTypes.bool,
    index: PropTypes.number
  };
  render() {
    const { item, isPersonalProject } = this.props;
    return (
      <Fragment>
        <div className={"card p-3 ptr shadow " + (isPersonalProject ? "p_card" : "")}>
          <div className="card-title">
            {item.title}
            <div>
              <a target="_blank" href={item.projectUrl}>
                {item.projectUrl}
              </a>
            </div>
          </div>
          {isPersonalProject && (
            <div className="truncated">{item.description}</div>
          )}
          {!isPersonalProject && <div className="card-body align-items-center d-flex justify-content-center">
            <img src={item.src} className="card-img-top" alt="" />
          </div>}
          {isPersonalProject ? null : (
            <div className="text-muted p_footer">
              {item.completed ? item.date : "In progress"}
            </div>
          )}
          {!isPersonalProject && <div className={this.props.index % 2 === 0 ? "overlay-right" : "overlay-left"}>
            <div className="overlay_content p-3">{item.description}</div>
          </div>}
        </div>
      </Fragment>
    );
  }
}
