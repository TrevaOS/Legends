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
    textProps?: React.SVGProps<SVGTextElement>;
    tspanProps?: React.SVGProps<SVGTSpanElement>;
    ellipseProps?: React.SVGProps<SVGEllipseElement>;
    svgProps?: React.SVGProps<SVGSVGElement>;
  }

  const ReactCurvedText: React.FC<ReactCurvedTextProps>;
  export default ReactCurvedText;
}
