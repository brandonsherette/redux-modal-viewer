'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalViewer = function ModalViewer(_ref) {
  var openModals = _ref.openModals,
      _onHide = _ref.onHide;
  return _react2.default.createElement(
    'div',
    { className: 'modal-wrapper absolute' },
    openModals.map(function (modalConfig) {
      return _react2.default.createElement(modalConfig.modal.component, _extends({}, modalConfig.props, { key: 'modal-' + modalConfig.modal.slug, show: true, onHide: function onHide() {
          _onHide(modalConfig.modal);
        } }));
    })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    openModals: state.modalViewer.openModals
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onHide: function onHide(modal) {
      dispatch((0, _actions.closeModal)(modal));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModalViewer);