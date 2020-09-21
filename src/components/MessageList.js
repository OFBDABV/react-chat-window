import React, { Component } from 'react';
import Message from './Messages';
import persona from '../styles/kaja.png';

class MessageList extends Component {

  componentDidUpdate(_prevProps, _prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
      <div className="sc-message-list-container">
        <div className="sc-message-list" ref={el => this.scrollList = el}>
          {this.props.messages.map((message, i) => {
            return <Message message={message} key={i} />;
          })}
        </div>
        <img src={persona} className="sc-persona"></img>
      </div>);
  }
}

export default MessageList;
