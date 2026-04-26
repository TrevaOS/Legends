declare module 'react-curved-text' {
  import React from 'react';

  interface ReactCurvedTextProps {
    width: number;
    height: number;
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    startOffset: number;
    reversed: boolean;
    text: string;
    textProps?: any;
    tspanProps?: any;
    ellipseProps?: any;
    svgProps?: any;
  }

  const ReactCurvedText: React.FC<ReactCurvedTextProps>;
  export default ReactCurvedText;
}
