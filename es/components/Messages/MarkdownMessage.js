import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

var MarkdownMessage = function MarkdownMessage(props) {
  return React.createElement('div', { className: 'sc-message--markdown' }, React.createElement(ReactMarkdown, { source: props.data.text }));
};

export default MarkdownMessage;