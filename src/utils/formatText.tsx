import React, { ReactNode } from 'react';

export function replaceText(text: string): ReactNode[] {
  let result: ReactNode[] = [];
  const paragraphs = text.split(' /paragraph/ ');

  paragraphs.forEach((paragraph, pIndex) => {
    const rows = paragraph.split(' /row/ ');
    rows.forEach((row, rIndex) => {
      const paintedText = paintText(row);
      result.push(
        <React.Fragment key={`r-${pIndex}-${rIndex}`}>
          {paintedText}
          <br />
        </React.Fragment>
      );
    });
    result.push(<br key={`p-${pIndex}`} />);
  });

  return result;
}

export function paintText(text: string): ReactNode {
  const parts = text.split('/paint/');
  const result: ReactNode[] = [];
  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      result.push(part);
    } else {
      result.push(
        <span key={index} className="text-red-500">
          {part}
        </span>
      );
    }
  });
  return result;
}

export default { replaceText, paintText };
