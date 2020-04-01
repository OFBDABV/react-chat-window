'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownMessage = function MarkdownMessage(props) {
  return _react2.default.createElement('div', { className: 'sc-message--markdown' }, _react2.default.createElement(_reactMarkdown2.default, { source: props.data.text, linkTarget: "_blank" }));
};

exports.default = MarkdownMessage;
module.exports = exports['default'];