import React from 'react';
import ScreenSaver from '../../../../components/ScreenSaver';

async function ColorScreensaver({ params }) {
  const { namedColor } = await params;
  return <ScreenSaver color={namedColor} />;
}

export default ColorScreensaver;
