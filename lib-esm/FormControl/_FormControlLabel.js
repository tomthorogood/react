import React__default from 'react';
import InputLabel from '../_InputLabel.js';
import { FormControlContext } from './FormControl.js';

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
  } = React__default.useContext(FormControlContext);
  return /*#__PURE__*/React__default.createElement(InputLabel, {
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

export { FormControlLabel$1 as default };
