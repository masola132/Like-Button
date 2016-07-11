import React from 'react';

export default React.createClass({
  getDefaultProps: function () {
    return {
      count: 0
    }
  },
  getInitialState: function () {
    return {
      count: this.props.count,
      s: 's'
    }
  },
  handleClick: function (e) {
    e.preventDefault();
    var s = 's';
    if (this.state.count === 0) {
      s = '';
    }
    this.setState({
      count: this.state.count + 1,
      s: s
    })
  },
  render: function () {
    return (
      <button onClick={this.handleClick} className="likebutton">{this.state.count} like{this.state.s}</button>
    )
  }
})