import * as React from 'react';
import { Props, IdPropType } from '../index';

import { ButtonProps } from '../Buttons';
export interface DialogProps extends Props {
  id: IdPropType;
  'aria-describedby'?: IdPropType;
  'aria-labelledby'?: IdPropType;
  'aria-label'?: string;
  contentStyle?: React.CSSProperties;
  contentClassName?: string;
  contentComponent?: React.ReactType;
  contentProps?: Object;
  actions?: React.ReactElement<any> | ButtonProps | Array<React.ReactElement<any> | ButtonProps>;
  paddedContent?: boolean;
  autopadContent?: boolean;
  children?: React.ReactNode;
  initialFocus?: string;
  focusOnMount?: boolean;
  additionalFocusKeys?: Array<number>;
  containFocus?: boolean;
  fullPage?: boolean;
  title?: React.ReactNode;
}

declare const Dialog: React.ComponentClass<DialogProps>;
export default Dialog;
