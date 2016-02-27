import React from "react";
import { HorizontalSplit } from "./horizontal-split";

export class CustomerQuote extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    imageUrl: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="c-customer-quote">
        <div className="c-customer-quote-quote">{this.props.children}</div>
        <div className="c-customer-quote-profile">
          <img className="c-customer-quote-img img-responsive" src={this.props.imageUrl}/>
          <span className="c-customer-quote-name">{this.props.name}</span>
          <span className="c-customer-quote-title">{this.props.title ? `, ${this.props.title}` : null}</span>
        </div>
      </div>
    );
  }

}

export class CustomerQuotes extends React.Component {

  static propTypes = {
    // TODO: Enforce CustomerQuote type
    children: React.PropTypes.arrayOf(React.PropTypes.element),
  }

  render() {
    return (
      <div className="c-customer-quotes">
        <HorizontalSplit>
          {this.props.children}
        </HorizontalSplit>
      </div>
    );
  }
}

CustomerQuotes.Quote = CustomerQuote;
