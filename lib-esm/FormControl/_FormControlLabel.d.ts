import React from 'react';
import { LabelProps, LegendOrSpanProps } from '../_InputLabel';
import { SxProp } from '../sx';
export type Props = {
    /**
     * Whether the label should be visually hidden
     */
    visuallyHidden?: boolean;
    id?: string;
} & SxProp;
declare const FormControlLabel: React.FC<React.PropsWithChildren<{
    htmlFor?: string;
} & (LegendOrSpanProps | LabelProps) & Props>>;
export default FormControlLabel;
