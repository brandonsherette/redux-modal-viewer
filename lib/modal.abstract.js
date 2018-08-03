'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Abstract class for all modals in the ModalViewer.
 * @class ModalAbstract
 */
var ModalAbstract = function (_Component) {
  _inherits(ModalAbstract, _Component);

  function ModalAbstract(props) {
    _classCallCheck(this, ModalAbstract);

    return _possibleConstructorReturn(this, (ModalAbstract.__proto__ || Object.getPrototypeOf(ModalAbstract)).call(this, props));
  }

  /**
   * @method getDefaultModalProps
   * @private
   * @return {Object} the default modal props.
   */


  _createClass(ModalAbstract, [{
    key: 'getDefaultModalProps',
    value: function getDefaultModalProps() {
      return {
        modalProps: {
          bsSize: null,
          backdrop: true
        },
        headerProps: {
          closeButton: true,
          displayHeader: true
        },
        titleProps: {
          componentClass: 'div'
        },
        bodyProps: null,
        footerProps: null
      };
    }

    /**
     * Overrides/Merges any default modal props.
     * @method getModalProps
     * @return {Object|null} the custom modal props.
     */

  }, {
    key: 'getModalProps',
    value: function getModalProps() {
      return null;
    }

    /**
     * Combines getDefaultModalProps and getModalProps together.
     * @method combineModalProps
     * @return {Object} the combined mocal props
     */

  }, {
    key: 'combineModalProps',
    value: function combineModalProps() {
      return Object.assign({}, this.getDefaultModalProps(), this.getModalProps());
    }
  }, {
    key: 'render',
    value: function render() {
      var _combineModalProps = this.combineModalProps(),
          modalProps = _combineModalProps.modalProps,
          headerProps = _combineModalProps.headerProps,
          titleProps = _combineModalProps.titleProps,
          bodyProps = _combineModalProps.bodyProps,
          footerProps = _combineModalProps.footerProps,
          displayHeader = _combineModalProps.headerProps.displayHeader;

      var _props = this.props,
          show = _props.show,
          onHide = _props.onHide;

      var footer = this.renderFooter();

      return _react2.default.createElement(
        _reactBootstrap.Modal,
        _extends({}, modalProps, { show: show, onHide: onHide }),
        displayHeader && _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          headerProps,
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            titleProps,
            this.renderTitle()
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          bodyProps,
          this.renderBody()
        ),
        footer && _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          footerProps,
          footer
        )
      );
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      return null;
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      return _react2.default.createElement(
        'div',
        null,
        'Body Content'
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      var onHide = this.props.onHide;


      return _react2.default.createElement(
        'div',
        { className: 'text-right' },
        _react2.default.createElement(
          'button',
          { className: 'btn btn-primary', onClick: onHide },
          'Close'
        )
      );
    }
  }]);

  return ModalAbstract;
}(_react.Component);

ModalAbstract.propTypes = {
  onHide: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool.isRequired
};

exports.default = ModalAbstract;