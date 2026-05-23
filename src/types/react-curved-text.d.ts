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
    textProps?: React.SVGProps<SVGTextElement> | null;
    tspanProps?: React.SVGProps<SVGTSpanElement> | null;
    ellipseProps?: React.SVGProps<SVGEllipseElement> | null;
    svgProps?: React.SVGProps<SVGSVGElement> | null;
  }

  const ReactCurvedText: React.FC<ReactCurvedTextProps>;
  export default ReactCurvedText;
}
