import ReactCurvedText from 'react-curved-text';

interface CurvedHeadingProps {
  text: string;
  width?: number;
  height?: number;
  fontSize?: number;
  color?: string;
  reversed?: boolean;
}

export const CurvedHeading = ({
  text,
  width = 300,
  height = 300,
  fontSize = 28,
  color = '#a98f63',
  reversed = false,
}: CurvedHeadingProps) => {
  return (
    <ReactCurvedText
      width={width}
      height={height}
      cx={width / 2}
      cy={height / 2}
      rx={width / 3}
      ry={height / 3}
      startOffset={50}
      reversed={reversed}
      text={text}
      textProps={{
        style: {
          fontSize,
          fontFamily: "'Bree Serif', serif",
          fill: color,
          fontWeight: '700',
          letterSpacing: '2px',
        },
      }}
      tspanProps={null}
      ellipseProps={null}
      svgProps={null}
    />
  );
};
