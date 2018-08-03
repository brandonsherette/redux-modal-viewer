'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = require('./modal.abstract');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalConfirm = function (_ModalAbstract) {
  _inherits(ModalConfirm, _ModalAbstract);

  function ModalConfirm() {
    _classCallCheck(this, ModalConfirm);

    return _possibleConstructorReturn(this, (ModalConfirm.__proto__ || Object.getPrototypeOf(ModalConfirm)).apply(this, arguments));
  }

  _createClass(ModalConfirm, [{
    key: 'getModalProps',
    value: function getModalProps() {
      return {
        modalProps: {
          backdrop: 'static'
        },
        headerProps: {
          className: 'modal-header-warning'
        }
      };
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      return _react2.default.createElement(
        'h4',
        { className: 'font-warning' },
        _react2.default.createElement('i', { className: 'fa fa-exclamation-triangle' }),
        '\xA0',
        this.props.title
      );
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      return _react2.default.createElement(
        'div',
        { className: 'modal-confirm__body' },
        this.props.body
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      var _props = this.props,
          cancelLabel = _props.cancelLabel,
          confirmLabel = _props.confirmLabel,
          handleCancel = _props.handleCancel,
          handleConfirm = _props.handleConfirm,
          isCancelHidden = _props.isCancelHidden,
          onHide = _props.onHide;


      return _react2.default.createElement(
        'div',
        { className: 'modal-confirm__footer' },
        !isCancelHidden && _react2.default.createElement(
          'div',
          { className: 'pull-left' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-danger', onClick: function onClick() {
                handleCancel();
              } },
            _react2.default.createElement('i', { className: 'fa fa-times-circle' }),
            '\xA0',
            cancelLabel
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pull-right' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-success', onClick: function onClick() {
                handleConfirm();
              } },
            _react2.default.createElement('i', { className: 'fa fa-check-circle' }),
            '\xA0',
            confirmLabel
          )
        )
      );
    }
  }]);

  return ModalConfirm;
}(_modal2.default);

ModalConfirm.propTypes = {
  body: _propTypes2.default.element.isRequired,
  cancelLabel: _propTypes2.default.string,
  confirmLabel: _propTypes2.default.string,
  handleCancel: _propTypes2.default.func,
  handleConfirm: _propTypes2.default.func.isRequired,
  isCancelHidden: _propTypes2.default.bool,
  title: _propTypes2.default.string.isRequired
};

ModalConfirm.defaultProps = {
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
  handleCancel: function handleCancel() {},
  isCancelHidden: false
};

exports.default = ModalConfirm;