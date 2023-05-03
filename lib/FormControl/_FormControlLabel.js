'use strict';

var React = require('react');
var _InputLabel = require('../_InputLabel.js');
var FormControl = require('./FormControl.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlLabel = ({
  children,
  htmlFor,
  id,
  visuallyHidden,
  sx
}) => {
  const {
    disabled,
    id: formControlId,
    required
  } = React__default.default.useContext(FormControl.FormControlContext);
  return /*#__PURE__*/React__default.default.createElement(_InputLabel, {
    htmlFor: htmlFor || formControlId,
    id: id,
    visuallyHidden: visuallyHidden,
    required: required,
    disabled: disabled,
    sx: sx
  }, children);
};
FormControlLabel.displayName = "FormControlLabel";
var FormControlLabel$1 = FormControlLabel;

module.exports = FormControlLabel$1;
