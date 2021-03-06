import * as React from 'react';
import { Props } from '../index';

export interface PaperProps extends Props {
  component?: React.ReactType;
  children?: React.ReactNode;
  zDepth?: number;
  raiseOnHover?: boolean;
}

declare const Paper: React.ComponentClass<PaperProps>;
export default Paper;
