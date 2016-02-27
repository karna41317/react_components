import React from "react";
import { HorizontalSplit } from "./horizontal-split";
import { Row, Col } from "../helpers/bootstrap";

export class TeamMember extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    imageUrl: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="card c-team-member">
        <img className="card-img-top c-team-member-img img-responsive" src={this.props.imageUrl}/>
        <div className="card-block c-team-member-profile">
          <h4 className="card-title lead c-team-member-name">
            {this.props.name}
            {this.props.title ? `, ${this.props.title}` : null}
          </h4>
          <br/>
          <div className="c-team-member-description">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export class Team extends React.Component {

  static propTypes = {
    // TODO: Enforce Member type
    children: React.PropTypes.arrayOf(React.PropTypes.element),
  }

  render() {
    return (
      <div className="card-deck-wrapper c-team">
        <Row>
          <div className="card-deck">
            {this.props.children.map((member, idx) => {
              return (
                <Col size={["xs-12", "sm-6", "lg-4"]} key={idx}>{member}</Col>
              );
            })}
          </div>
        </Row>
      </div>
    );
  }

}
